/* Reject damaged backups before replacing either local researcher profile. */
function validProgress(s){
 const obj=v=>v!==null&&typeof v==='object'&&!Array.isArray(v);
 const index=(v,n)=>Number.isInteger(v)&&v>=0&&v<n;
 const list=(v,n)=>Array.isArray(v)&&v.length<=n&&v.every(x=>index(x,n))&&new Set(v).size===v.length;
 const dict=(v,check)=>obj(v)&&Object.entries(v).every(([k,x])=>/^(0|[1-9]\d?)$/.test(k)&&Number(k)<MISSIONS.length&&check(x,Number(k)));
 if(!obj(s)||s.version!==1||!['child','adult'].includes(s.profile)||!['af_heart','af_bella'].includes(s.voice)||!obj(s.profiles))return false;
 return ['child','adult'].every(key=>{
  const p=s.profiles[key];
  if(!obj(p)||!list(p.done,MISSIONS.length)||!p.done.every((x,i)=>x===i)||!list(p.built,11))return false;
  const thresholds=[2,6,8,12,24,36,48,60,72,84,96];
  if(!p.built.every(i=>p.done.length>=thresholds[i]))return false;
  if(!dict(p.notes,v=>typeof v==='string'&&v.length<=3000)||!dict(p.first,v=>typeof v==='boolean')||!dict(p.review,v=>Number.isFinite(v)&&v>=0))return false;
  return dict(p.drafts,(d,i)=>{
   const m=MISSIONS[i],seq=m.sequence||m.extraSequence||m.path||[],pairs=m.pairs||m.extraPairs||[],states=m.experiment?.states?.length||(m.kind==='model'?2:1),predictions=m.experiment?.prediction||m.prediction||[];
   if(!obj(d)||!index(d.step,3)||typeof d.opOK!=='boolean'||typeof d.qOK!=='boolean'||typeof d.ran!=='boolean')return false;
   if(!index(d.mode,states)||!(d.prediction===null||index(d.prediction,predictions.length)))return false;
   if(d.choice!==undefined&&!index(d.choice,m.options.length))return false;
   if(d.finished!==undefined&&typeof d.finished!=='boolean')return false;
   if(!list(d.pairs,pairs.length)||!list(d.path,seq.length)||!list(d.words,m.sentence.length)||!list(d.seen,m.kind==='experiment'?states:2)||!list(d.checks,3))return false;
   if(!Array.isArray(d.sort)||d.sort.length>(m.items?.length||0)||!d.sort.every(x=>x===null||index(x,m.groups?.length||0)))return false;
   if(d.step>0&&!d.opOK||d.step>1&&!d.qOK)return false;
   return true;
  });
 });
}
function reviewFinished(d,m){return !!d&&(d.finished===true||(d.finished===undefined&&d.step===2&&d.opOK&&d.qOK&&d.words.join()===m.sentence.map((_,i)=>i).join()));}
function migrateQuestionOrder(s){
 if(s.questionOrderVersion===1)return s;
 for(const p of Object.values(s.profiles))for(const [i,d] of Object.entries(p.drafts))if(d.choice!==undefined)d.choice=MISSIONS[Number(i)].choiceRemap?.[d.choice]??d.choice;
 s.questionOrderVersion=1;return s;
}
