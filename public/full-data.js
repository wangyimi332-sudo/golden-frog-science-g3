/* Original G3 companion activities, chapters 2–8. */
MISSIONS.forEach((m,i)=>{m.chapter=1;m.local=i+1;});
MISSIONS.push(...[
  {
    "id": "g3-c02-m01",
    "chapter": 2,
    "local": 1,
    "title": "Water Worlds",
    "zh": "不同的水域",
    "lesson": "L1 The Water Planet",
    "pages": "88–91",
    "intro": "Sort the water samples using their labels.",
    "introZh": "根据标签给水样分类。",
    "instruction": "Sort the water samples using their labels.",
    "instructionZh": "根据标签给水样分类。",
    "kind": "sort",
    "question": "Which sample is brackish?",
    "qZh": "哪个是半咸水？A 河口混合样本；B 低盐河水样本。",
    "options": [
      "The mixed river-mouth sample.",
      "The low-salt river sample."
    ],
    "answer": 0,
    "feedback": "Brackish water has more salt than fresh water but less than seawater.",
    "feedbackZh": "半咸水盐度介于淡水和海水之间。",
    "sentence": [
      "Water environments",
      "can have",
      "different amounts of salt."
    ],
    "sentenceZh": "不同水域的含盐量可以不同。",
    "word": [
      "Water Worlds",
      "不同的水域"
    ],
    "parent": "Read the salt labels. / 看含盐量标签。",
    "transfer": "变式换湖泊、海湾卡；淡水并非完全没有盐，不用颜色直接代表盐度。",
    "evidenceEn": "Read salt labels, not water color.",
    "evidenceZh": "看含盐量标签，不能按颜色判断。",
    "groups": [
      "Fresh water 淡水",
      "Salt water 海水",
      "Brackish water 半咸水"
    ],
    "items": [
      [
        "River: low salt 河水低盐",
        0
      ],
      [
        "Ocean: high salt 海水高盐",
        1
      ],
      [
        "River mouth: middle salt 河口混合中盐",
        2
      ]
    ]
  },
  {
    "id": "g3-c02-m02",
    "chapter": 2,
    "local": 2,
    "title": "Follow the Light",
    "zh": "追寻水中的光",
    "lesson": "L1 The Water Planet",
    "pages": "92–95",
    "intro": "Move the sensor down and compare the light readings.",
    "introZh": "下移传感器并比较光线读数。",
    "instruction": "Move the sensor down and compare the light readings.",
    "instructionZh": "下移传感器并比较光线读数。",
    "kind": "experiment",
    "question": "Where does this model show the most light?",
    "qZh": "模型中哪里光最多？A 靠近表面；B 最深处。",
    "options": [
      "Near the surface.",
      "At the deepest point."
    ],
    "answer": 0,
    "feedback": "More light reaches the surface layer in this model.",
    "feedbackZh": "模型表层获得较多光，读数不是实际海洋测量。",
    "sentence": [
      "In this model,",
      "less light reaches",
      "deeper water."
    ],
    "sentenceZh": "模型中，较深水域得到较少光。",
    "word": [
      "Follow the Light",
      "追寻水中的光"
    ],
    "parent": "Compare 90, 35, and 2. / 比较三个读数。",
    "transfer": "同时提供温度观察卡，但题目只改变深度，不断言所有水域温度随深度同样变化。",
    "evidenceEn": "Light decreases from 90 to 35 to 2 in this example.",
    "evidenceZh": "示例模型光值90、35、2逐渐下降，不是海洋实测。",
    "experiment": {
      "variable": "Sensor depth 传感器深度",
      "controls": "Same water and light source 相同水体与光源",
      "states": [
        {
          "label": "Surface 表层",
          "reading": "90 relative light units 相对光单位",
          "value": 90
        },
        {
          "label": "Middle 中层",
          "reading": "35 relative light units 相对光单位",
          "value": 35
        },
        {
          "label": "Deep 深层",
          "reading": "2 relative light units 相对光单位",
          "value": 2
        }
      ],
      "prediction": [
        "Deeper water may receive less light.",
        "Deeper water may receive more light."
      ],
      "model": "depth",
      "unit": "relative light units",
      "diagram": "water"
    }
  },
  {
    "id": "g3-c02-m03",
    "chapter": 2,
    "local": 3,
    "title": "Match the Habitat",
    "zh": "匹配水域条件",
    "lesson": "L1 The Water Planet",
    "pages": "94–97",
    "intro": "Read each animal's needs before choosing a habitat.",
    "introZh": "先读动物的需求，再选择环境。",
    "instruction": "Read each animal's needs before choosing a habitat.",
    "instructionZh": "先读动物的需求，再选择环境。",
    "kind": "match",
    "question": "Is matching the temperature alone enough?",
    "qZh": "只匹配温度够吗？A 够；B 不够，还要检查盐度。",
    "options": [
      "Yes.",
      "No, check the salt level too."
    ],
    "answer": 1,
    "feedback": "Both conditions must fit the needs on the card.",
    "feedbackZh": "两个条件都要符合需求卡。",
    "sentence": [
      "This habitat fits",
      "because its water conditions",
      "match the animal's needs."
    ],
    "sentenceZh": "这处环境合适，因为水体条件符合动物需求。",
    "word": [
      "Match the Habitat",
      "匹配水域条件"
    ],
    "parent": "Check two labels, not one. / 检查两项标签。",
    "transfer": "只做模型，不让儿童把真实鱼移入盐水/淡水；加入盐水淡水冻结记录作为可选预测卡。",
    "evidenceEn": "Both salt and temperature must fit.",
    "evidenceZh": "盐度与温度均须符合需求。",
    "pairs": [
      {
        "left": "Fish A: fresh water, 18–22°C 鱼A需求",
        "right": "Low salt, 20°C 低盐20度"
      },
      {
        "left": "Fish B: seawater, 24–28°C 鱼B需求",
        "right": "High salt, 26°C 高盐26度"
      },
      {
        "left": "Reject for Fish A 鱼A应拒绝",
        "right": "Low salt, 30°C: too warm 低盐30度过热"
      }
    ]
  },
  {
    "id": "g3-c02-m04",
    "chapter": 2,
    "local": 4,
    "title": "Stay in the Sunlit Zone",
    "zh": "留在有光的水层",
    "lesson": "L2 Life in an Ocean",
    "pages": "98–103",
    "intro": "Place the kelp where it can get light and stay attached.",
    "introZh": "将海带放在有光且能附着的位置。",
    "instruction": "Place the kelp where it can get light and stay attached.",
    "instructionZh": "将海带放在有光且能附着的位置。",
    "kind": "match",
    "question": "Why does this kelp need a sunlit place?",
    "qZh": "海带为什么需要有光的位置？A 利用光制造食物；B 躲开所有水。",
    "options": [
      "To make food using light.",
      "To hide from all water."
    ],
    "answer": 0,
    "feedback": "Kelp uses light to make food.",
    "feedbackZh": "海带是大型藻类，不把固着器当成吸收根。",
    "sentence": [
      "Kelp needs light",
      "to make",
      "its own food."
    ],
    "sentenceZh": "海带需要光来制造食物。",
    "word": [
      "Stay in the Sunlit Zone",
      "留在有光的水层"
    ],
    "parent": "Follow the light icon. / 追踪光线图标。",
    "transfer": "对比海草是真正开花植物、海带是藻类；不把所有海洋藻类叫植物。",
    "evidenceEn": "Kelp needs light and attachment. Holdfasts anchor kelp.",
    "evidenceZh": "海带需要光与附着点，固着器不是吸收根。",
    "pairs": [
      {
        "left": "Holdfast 固着器",
        "right": "Anchors to rock 附着岩石"
      },
      {
        "left": "Air bladder 气囊",
        "right": "Holds blades toward light 托起叶状体靠近光"
      },
      {
        "left": "Kelp site 海带位置",
        "right": "Sunlit shallow water with rock 有岩石的透光浅水"
      }
    ]
  },
  {
    "id": "g3-c02-m05",
    "chapter": 2,
    "local": 5,
    "title": "Breathing Below the Surface",
    "zh": "水下呼吸",
    "lesson": "L2 Life in an Ocean",
    "pages": "104–105",
    "intro": "Follow the water past the fish's gills.",
    "introZh": "观察水流经过鱼鳃。",
    "instruction": "Follow the water past the fish's gills.",
    "instructionZh": "观察水流经过鱼鳃。",
    "kind": "sequence",
    "question": "Which statement fits the fish?",
    "qZh": "哪句符合鱼？A 鳃从水中获取氧气；B 鳃制造新的氧气。",
    "options": [
      "Its gills take oxygen from water.",
      "Its gills make new oxygen."
    ],
    "answer": 0,
    "feedback": "Gills take dissolved oxygen from water.",
    "feedbackZh": "鳃从水中获取溶解氧，并非把水分子拆开。",
    "sentence": [
      "Fish use gills",
      "to get oxygen",
      "from water."
    ],
    "sentenceZh": "鱼用鳃从水中获取氧气。",
    "word": [
      "Breathing Below the Surface",
      "水下呼吸"
    ],
    "parent": "Water flows past the gills. / 水流经过鳃。",
    "transfer": "复习 Ch1 身体结构功能；海豚不是鱼，不用“所有海洋动物都有鳃”。",
    "evidenceEn": "Gills take dissolved oxygen from water. Dolphins breathe air.",
    "evidenceZh": "鳃获取水中溶解氧，海豚用肺呼吸空气。",
    "sequence": [
      "Water with dissolved oxygen 含溶解氧的水",
      "Water passes the gills 水流过鳃",
      "Oxygen enters the fish 氧进入鱼体"
    ],
    "extraPairs": [
      {
        "left": "Fish 鱼",
        "right": "Gills take oxygen from water 鳃从水中获取氧"
      },
      {
        "left": "Dolphin 海豚",
        "right": "Surfaces to breathe air with lungs 浮上海面用肺呼吸"
      }
    ]
  },
  {
    "id": "g3-c02-m06",
    "chapter": 2,
    "local": 6,
    "title": "Move and Stay Safe",
    "zh": "运动与保护",
    "lesson": "L2 Life in an Ocean",
    "pages": "99、104–107",
    "intro": "Match each feature to the evidence of how it works.",
    "introZh": "根据作用证据匹配动物特征。",
    "instruction": "Match each feature to the evidence of how it works.",
    "instructionZh": "根据作用证据匹配动物特征。",
    "kind": "experiment",
    "question": "Which action helps this jellyfish move?",
    "qZh": "哪个动作帮助这只水母运动？A 向外排水；B 向沙里长根。",
    "options": [
      "Pushing water out.",
      "Growing roots into sand."
    ],
    "answer": 0,
    "feedback": "Pushing water out helps move the jellyfish.",
    "feedbackZh": "排水推进是其运动方式之一。",
    "sentence": [
      "Different body parts",
      "help ocean animals",
      "move or stay safe."
    ],
    "sentenceZh": "不同身体部位帮助海洋动物移动或保护自己。",
    "word": [
      "Move and Stay Safe",
      "运动与保护"
    ],
    "parent": "Watch the direction of the water. / 看水流方向。",
    "transfer": "补充深海生物特征发现卡；深海并非没有生命，不推断所有深海生物都发光。",
    "evidenceEn": "Different parts support movement or protection.",
    "evidenceZh": "不同结构帮助运动或保护身体。",
    "experiment": {
      "variable": "Animal action 动物动作",
      "controls": "Separate examples, not a speed comparison 分别观察，不比较速度",
      "states": [
        {
          "label": "Fish fins 鱼鳍",
          "reading": "The fish turns as fins steer 鱼鳍调整，鱼转向"
        },
        {
          "label": "Jellyfish 水母",
          "reading": "Water moves backward; body moves forward 水向后排，身体前移"
        },
        {
          "label": "Shell 贝壳",
          "reading": "A hard shell covers soft tissues 坚硬外壳覆盖柔软组织"
        }
      ],
      "prediction": [
        "Different parts may have different jobs.",
        "All these parts must have the same job."
      ],
      "model": "animal_actions",
      "unit": "",
      "diagram": "water"
    }
  },
  {
    "id": "g3-c02-m07",
    "chapter": 2,
    "local": 7,
    "title": "Floating Fairly",
    "zh": "公平比较浮沉",
    "lesson": "L2 Inquiry",
    "pages": "108–109",
    "intro": "Test the same model object in two water samples.",
    "introZh": "将同一个模型物体放入两种水样比较。",
    "instruction": "Test the same model object in two water samples.",
    "instructionZh": "将同一个模型物体放入两种水样比较。",
    "kind": "experiment",
    "question": "What did we change?",
    "qZh": "我们改变了什么？A 水的盐度；B 物体大小和盐度一起改变。",
    "options": [
      "The salt in the water.",
      "The object's size and salt together."
    ],
    "answer": 0,
    "feedback": "Only salt level changed in this comparison.",
    "feedbackZh": "本次比较只改变盐度。",
    "sentence": [
      "In this test,",
      "the same object floats higher",
      "in saltier water."
    ],
    "sentenceZh": "本次测试中，同一物体在较咸的水里浮得更高。",
    "word": [
      "Floating Fairly",
      "公平比较浮沉"
    ],
    "parent": "Keep the object the same. / 保持物体不变。",
    "transfer": "扩展更重物体可两杯都沉；不能教成“任何物体在盐水中都浮”。",
    "evidenceEn": "This object sinks in fresh water but floats in sufficiently salty water.",
    "evidenceZh": "此示例物体淡水中沉、浓盐水中浮；并非任何物体在盐水中都浮。",
    "experiment": {
      "variable": "Salt level 盐度",
      "controls": "Same object mass and volume, same temperature 相同物体质量体积与水温",
      "states": [
        {
          "label": "Fresh water 淡水",
          "reading": "Example object sinks 示例物体下沉"
        },
        {
          "label": "Saltier water 较浓盐水",
          "reading": "Same object floats higher 同一物体浮得较高"
        }
      ],
      "prediction": [
        "It may float higher in saltier water.",
        "Salt cannot affect its floating."
      ],
      "model": "float",
      "unit": "",
      "diagram": "water"
    }
  },
  {
    "id": "g3-c02-m08",
    "chapter": 2,
    "local": 8,
    "title": "Wetland Neighbors",
    "zh": "湿地邻居",
    "lesson": "L3 Life in the Wetlands",
    "pages": "110–115",
    "intro": "Compare the plants and water in two wetlands.",
    "introZh": "比较两处湿地的植物和水。",
    "instruction": "Compare the plants and water in two wetlands.",
    "instructionZh": "比较两处湿地的植物和水。",
    "kind": "experiment",
    "question": "Which clue best identifies the marsh in these pictures?",
    "qZh": "哪条线索指向图中沼泽草地？A 草本植物占主；B 大树占主。",
    "options": [
      "Mostly grasses and other soft-stemmed plants.",
      "Mostly large trees."
    ],
    "answer": 0,
    "feedback": "The marsh shown is dominated by soft-stemmed plants.",
    "feedbackZh": "此处 marsh 以草本为主。",
    "sentence": [
      "Both places are wetlands,",
      "but their main plants",
      "are different."
    ],
    "sentenceZh": "两处都是湿地，但主要植物不同。",
    "word": [
      "Wetland Neighbors",
      "湿地邻居"
    ],
    "parent": "Compare the stems. / 比较茎干。",
    "transfer": "保留 marsh/swamp 英文，中文辅助解释；湿地可能季节性积水。",
    "evidenceEn": "Both are wetlands; their dominant plants differ.",
    "evidenceZh": "两处均为湿地，但优势植物不同。",
    "experiment": {
      "variable": "Wetland scene 湿地场景",
      "controls": "Compare vegetation, not water color 比较植被而非水色",
      "states": [
        {
          "label": "Marsh 草本湿地",
          "reading": "Mostly grasses and soft stems 主要草本"
        },
        {
          "label": "Swamp 木本湿地",
          "reading": "Mostly trees 主要树木"
        }
      ],
      "prediction": [
        "Wetlands may have different dominant plants.",
        "All wetlands have identical plants."
      ],
      "model": "wetland",
      "unit": "",
      "diagram": "water"
    },
    "extraPairs": [
      {
        "left": "Marsh in this example 示例marsh",
        "right": "Soft-stemmed plants dominate 草本占主"
      },
      {
        "left": "Swamp in this example 示例swamp",
        "right": "Trees dominate 树木占主"
      }
    ]
  },
  {
    "id": "g3-c02-m09",
    "chapter": 2,
    "local": 9,
    "title": "Slow the Flow",
    "zh": "让水慢下来",
    "lesson": "L3 Inquiry",
    "pages": "111–113",
    "intro": "Compare water moving through bare ground and a wetland model.",
    "introZh": "比较水经过裸地和湿地模型的情况。",
    "instruction": "Compare water moving through bare ground and a wetland model.",
    "instructionZh": "比较水经过裸地和湿地模型的情况。",
    "kind": "experiment",
    "question": "Which model slows the flow in this trial?",
    "qZh": "本次哪个模型减缓水流？A 有植被湿地模型；B 两者一定相同。",
    "options": [
      "The planted wetland model.",
      "Both models must be identical."
    ],
    "answer": 0,
    "feedback": "The wetland model holds back some water and slows its flow.",
    "feedbackZh": "湿地模型滞留部分水并减缓流动。",
    "sentence": [
      "Wetlands can",
      "hold water",
      "and slow its flow."
    ],
    "sentenceZh": "湿地能够滞留水并减缓水流。",
    "word": [
      "Slow the Flow",
      "让水慢下来"
    ],
    "parent": "Compare at the same time. / 在同一时刻比较。",
    "transfer": "不将“减缓”说成“阻止所有洪水”；后续 Ch3 讨论变化影响。",
    "evidenceEn": "At the same time, more water remains in the wetland model.",
    "evidenceZh": "同一观察时刻湿地模型保留较多水，不代表阻止所有洪水。",
    "experiment": {
      "variable": "Water-retaining habitat 有无滞留环境",
      "controls": "100 input units, same time 输入100水滴单位、相同观察时长",
      "states": [
        {
          "label": "Open channel 畅通水槽",
          "reading": "Example: 80 out, 20 retained 示例流出80、保留20",
          "value": 80
        },
        {
          "label": "Wetland model 湿地模型",
          "reading": "Example: 40 out, 60 retained 示例流出40、保留60",
          "value": 40
        }
      ],
      "prediction": [
        "The wetland model may slow outflow.",
        "The wetland model stops all water."
      ],
      "model": "flow",
      "unit": "outflow units",
      "diagram": "water"
    }
  },
  {
    "id": "g3-c02-m10",
    "chapter": 2,
    "local": 10,
    "title": "Clearer Is Not Always Safe",
    "zh": "清澈不等于安全",
    "lesson": "L3 Inquiry",
    "pages": "111–113",
    "intro": "Observe what the model filter removes and what may remain.",
    "introZh": "观察模型过滤器截留了什么，哪些东西可能仍留下。",
    "instruction": "Observe what the model filter removes and what may remain.",
    "instructionZh": "观察模型过滤器截留了什么，哪些东西可能仍留下。",
    "kind": "experiment",
    "question": "Can we drink the model's clearer water without checking it?",
    "qZh": "变清的水可以不经检查直接喝吗？A 可以，清澈就安全；B 不可以。",
    "options": [
      "Yes, clear means safe.",
      "No."
    ],
    "answer": 1,
    "feedback": "Clear water can still contain harmful substances or microbes.",
    "feedbackZh": "清澈水仍可能含有害物质或微生物。",
    "sentence": [
      "A filter can remove",
      "some particles,",
      "but clear water is not always safe."
    ],
    "sentenceZh": "过滤可去掉部分颗粒，但清澈的水不一定安全。",
    "word": [
      "Clearer Is Not Always Safe",
      "清澈不等于安全"
    ],
    "parent": "Look for what you cannot see easily. / 想想不容易看见的东西。",
    "transfer": "过滤不是消毒；不设品尝活动，不把污水变清动画当作饮用水处理。",
    "evidenceEn": "Some large particles are trapped, but tiny pollutants can pass.",
    "evidenceZh": "部分大颗粒被截留，微小污染物可能通过；清澈不等于可饮用。",
    "experiment": {
      "variable": "Particle type 颗粒类型",
      "controls": "Same root-and-substrate filter 相同根系基质过滤层",
      "states": [
        {
          "label": "Large sediment 大泥沙颗粒",
          "reading": "Some large particles are trapped 部分大颗粒被截留"
        },
        {
          "label": "Tiny pollutants 微小污染物",
          "reading": "Tiny pollutant markers still pass 微小污染物标记仍通过"
        }
      ],
      "prediction": [
        "A filter may remove only some pollutants.",
        "Clear filtered water is always safe to drink."
      ],
      "model": "filter",
      "unit": "",
      "diagram": "water"
    }
  },
  {
    "id": "g3-c02-m11",
    "chapter": 2,
    "local": 11,
    "title": "A Feeding Stop",
    "zh": "迁徙途中补给站",
    "lesson": "L3 Life in the Wetlands",
    "pages": "114–121",
    "intro": "Find a place where the bird can reach food and rest.",
    "introZh": "找到鸟能够获取食物并休息的地方。",
    "instruction": "Find a place where the bird can reach food and rest.",
    "instructionZh": "找到鸟能够获取食物并休息的地方。",
    "kind": "match",
    "question": "Why can this wetland help the bird?",
    "qZh": "湿地为什么有帮助？A 提供食物和休息地点；B 所有湿地都没有捕食者。",
    "options": [
      "It offers food and resting places.",
      "Every wetland has no predators."
    ],
    "answer": 0,
    "feedback": "Food and resting places can support migrating birds.",
    "feedbackZh": "食物和休息地点能帮助迁徙鸟类。",
    "sentence": [
      "This wetland provides",
      "food and a place to rest",
      "during migration."
    ],
    "sentenceZh": "这片湿地为迁徙提供食物和休息处。",
    "word": [
      "A Feeding Stop",
      "迁徙途中补给站"
    ],
    "parent": "Check food and shelter together. / 同时检查食物与栖息条件。",
    "transfer": "不让每种鸟都拥有相同喙形或取食方式；亲子可观察附近水鸟，不投喂。",
    "evidenceEn": "The bird needs accessible food and a resting place.",
    "evidenceZh": "题中涉禽需要浅水食物与休息处。",
    "pairs": [
      {
        "left": "Long-legged wader 长腿涉禽",
        "right": "Shallow feeding water 浅水觅食区"
      },
      {
        "left": "Migration fuel 迁徙能量补给",
        "right": "Available food 有食物"
      },
      {
        "left": "Rest between flights 飞行间休息",
        "right": "Safe resting site 安全栖息地"
      }
    ]
  },
  {
    "id": "g3-c02-m12",
    "chapter": 2,
    "local": 12,
    "title": "Design a Water Reserve",
    "zh": "设计水域保护站",
    "lesson": "Chapter review",
    "pages": "122–125",
    "intro": "Build a reserve using the needs and evidence cards.",
    "introZh": "根据生存需求和证据卡建设保护站。",
    "instruction": "Build a reserve using the needs and evidence cards.",
    "instructionZh": "根据生存需求和证据卡建设保护站。",
    "kind": "match",
    "question": "Is one water habitat suitable for every water animal?",
    "qZh": "一种水域适合所有水生动物吗？A 是；B 否，需求不同。",
    "options": [
      "Yes.",
      "No, their needs differ."
    ],
    "answer": 1,
    "feedback": "Match each organism to its own needs and the available evidence.",
    "feedbackZh": "依据每种生物的需求和证据匹配。",
    "sentence": [
      "This habitat works",
      "because it meets",
      "these needs."
    ],
    "sentenceZh": "这处生境适合，因为它满足这些需求。",
    "word": [
      "Design a Water Reserve",
      "设计水域保护站"
    ],
    "parent": "Return to the needs cards. / 回看生存需求卡。",
    "transfer": "解锁 Wetland Model Bench；回访 Ch1 的环境—结构关系；输出一条尚未知的问题。",
    "evidenceEn": "Different organisms need different combinations of conditions.",
    "evidenceZh": "不同生物需要不同条件组合，缺少关键条件会受影响。",
    "pairs": [
      {
        "left": "Shallow marine algae 浅海藻类",
        "right": "Salty water and light 盐水与光"
      },
      {
        "left": "Freshwater fish 淡水鱼",
        "right": "Low salt and suitable temperature 低盐与适温"
      },
      {
        "left": "Wetland bird 湿地鸟",
        "right": "Shallow food and resting place 浅水食物与休息处"
      },
      {
        "left": "Remove light from algae station 移除藻类站光照",
        "right": "Less light for making food 制造食物可用光减少"
      }
    ]
  },
  {
    "id": "g3-c03-m01",
    "chapter": 3,
    "local": 1,
    "title": "Tiny Soil Engineers",
    "zh": "小小土壤工程师",
    "lesson": "L1 Living Things Change Their Environment",
    "pages": "130–133",
    "intro": "Compare the soil before and after the worms move.",
    "introZh": "比较蚯蚓活动前后的土壤。",
    "instruction": "Compare the soil before and after the worms move.",
    "instructionZh": "比较蚯蚓活动前后的土壤。",
    "kind": "experiment",
    "question": "Which statement is an observation?",
    "qZh": "哪句是观察？A 后图出现隧道；B 蚯蚓想建城市。",
    "options": [
      "There are tunnels in the later picture.",
      "The worms want to build a city."
    ],
    "answer": 0,
    "feedback": "We can see the tunnels; we cannot observe the worms' wishes.",
    "feedbackZh": "隧道可见，愿望不是观察证据。",
    "sentence": [
      "Worms can change",
      "the soil",
      "as they move through it."
    ],
    "sentenceZh": "蚯蚓穿行时能改变土壤。",
    "word": [
      "Tiny Soil Engineers",
      "小小土壤工程师"
    ],
    "parent": "Say what the pictures show. / 描述图中可见内容。",
    "transfer": "复习 G2 土壤；实际生态作用因物种与环境而异，不鼓励向野外投放蚯蚓。",
    "evidenceEn": "The later model shows tunnels and leaf fragments below the surface. Worm effects vary with species and habitat.",
    "evidenceZh": "后期模型可见隧道与地下落叶碎片；作用因物种与环境而异。",
    "experiment": {
      "variable": "Observation time 观察时间",
      "controls": "Same model soil container 同一模型土壤容器",
      "states": [
        {
          "label": "Start 开始",
          "reading": "Layers are distinct; leaf fragments are at the top 土层分明，落叶碎片在表面"
        },
        {
          "label": "Later 后来",
          "reading": "Tunnels cross layers; some leaf fragments are lower 隧道穿过土层，部分落叶碎片下移"
        }
      ],
      "prediction": [
        "Worm movement may change soil structure.",
        "The soil must stay exactly unchanged."
      ],
      "model": "soil_timeline",
      "unit": "",
      "diagram": "habitat"
    },
    "extraPairs": [
      {
        "left": "New passage through soil 土中的新通道",
        "right": "Tunnel evidence 隧道证据"
      },
      {
        "left": "Leaf fragment below its first position 落叶碎片位置降低",
        "right": "Movement or mixing evidence 移动或混合证据"
      }
    ]
  },
  {
    "id": "g3-c03-m02",
    "chapter": 3,
    "local": 2,
    "title": "The Beaver's Dam",
    "zh": "海狸的坝",
    "lesson": "L1 Living Things Change Their Environment",
    "pages": "134–135",
    "intro": "Follow the stream before and after the dam is built.",
    "introZh": "追踪筑坝前后的溪流水流。",
    "instruction": "Follow the stream before and after the dam is built.",
    "instructionZh": "追踪筑坝前后的溪流水流。",
    "kind": "experiment",
    "question": "What is one change shown upstream?",
    "qZh": "上游发生哪种变化？A 积水增加；B 水全部消失。",
    "options": [
      "More water collects.",
      "All water disappears."
    ],
    "answer": 0,
    "feedback": "The dam slows the stream and water collects upstream.",
    "feedbackZh": "坝减缓水流，上游积水增加。",
    "sentence": [
      "A beaver dam",
      "can change",
      "the water habitat."
    ],
    "sentenceZh": "海狸坝能改变水域生境。",
    "word": [
      "The Beaver's Dam",
      "海狸的坝"
    ],
    "parent": "Look upstream of the dam. / 看坝的上游。",
    "transfer": "不把坝对所有生物都说成有益，后续比较受益和受影响生物。",
    "evidenceEn": "The dam model stores water upstream and spreads the water surface. It can benefit some organisms and affect others.",
    "evidenceZh": "坝上游蓄水、水面扩大；对不同生物影响不一定相同。",
    "experiment": {
      "variable": "Dam present or absent 有坝或无坝",
      "controls": "Same river valley and incoming flow 相同河谷与来水",
      "states": [
        {
          "label": "No dam 无坝",
          "reading": "Water follows a narrower channel 水流沿较窄河道通过"
        },
        {
          "label": "Dam present 有坝",
          "reading": "Water accumulates upstream and spreads sideways 上游蓄水并横向扩展"
        }
      ],
      "prediction": [
        "A dam may change the upstream habitat.",
        "A dam cannot affect the water habitat."
      ],
      "model": "beaver_dam",
      "unit": "",
      "diagram": "habitat"
    },
    "extraPairs": [
      {
        "left": "Strong front teeth 强壮门齿",
        "right": "Cut branches 切断树枝"
      },
      {
        "left": "Broad flat tail 宽扁尾",
        "right": "Helps with swimming and balance 帮助游泳与平衡"
      }
    ]
  },
  {
    "id": "g3-c03-m03",
    "chapter": 3,
    "local": 3,
    "title": "Less Waste, Better Evidence",
    "zh": "用记录减少废弃物",
    "lesson": "L1 Living Things Change Their Environment",
    "pages": "136–139",
    "intro": "Compare two lunches that provide the same amount of food.",
    "introZh": "比较食物量相同的两份午餐。",
    "instruction": "Compare two lunches that provide the same amount of food.",
    "instructionZh": "比较食物量相同的两份午餐。",
    "kind": "sort",
    "question": "Which change reduces single-use packaging in this example?",
    "qZh": "哪个改变减少示例中的一次性包装？A 重复使用饭盒；B 更大一次性袋。",
    "options": [
      "A reusable lunch box.",
      "A larger disposable bag."
    ],
    "answer": 0,
    "feedback": "Reusing the box reduces the single-use packages counted here.",
    "feedbackZh": "重复用饭盒减少这里统计的包装。",
    "sentence": [
      "We can reduce waste",
      "by using",
      "a lunch box again."
    ],
    "sentenceZh": "重复使用饭盒可以减少废弃物。",
    "word": [
      "Less Waste, Better Evidence",
      "用记录减少废弃物"
    ],
    "parent": "Compare the counted items. / 比较记录的件数。",
    "transfer": "承接 G2 Earth Resources；不能从包装件数单独推断完整环境足迹；回收规则按当地情况说明。",
    "evidenceEn": "The lunch record shows 6 disposable items versus 2 with reusable containers. Counts alone do not measure the whole environmental footprint.",
    "evidenceZh": "午餐示例一次性包装6件，重复容器方案2件；数量不能代表完整环境足迹。",
    "groups": [
      "Reduce 减少",
      "Reuse 重复使用",
      "Recycle 回收"
    ],
    "items": [
      [
        "Choose less packaging 选择更少包装",
        0
      ],
      [
        "Use the lunch box again 再次使用饭盒",
        1
      ],
      [
        "Sort accepted cans for local collection 按当地规则分类可回收罐",
        2
      ]
    ],
    "extraPairs": [
      {
        "left": "Disposable lunch record 一次性方案记录",
        "right": "6 packaging items 待丢包装6件"
      },
      {
        "left": "Reusable lunch record 重复容器方案记录",
        "right": "2 packaging items 待丢包装2件"
      }
    ]
  },
  {
    "id": "g3-c03-m04",
    "chapter": 3,
    "local": 4,
    "title": "Fast and Slow Changes",
    "zh": "快变化与慢变化",
    "lesson": "L2 Changes Affect Living Things",
    "pages": "140–143",
    "intro": "Put the before-and-after cards on a time line.",
    "introZh": "将前后变化卡放到时间线上。",
    "instruction": "Put the before-and-after cards on a time line.",
    "instructionZh": "将前后变化卡放到时间线上。",
    "kind": "sequence",
    "question": "Which record shows a sudden change?",
    "qZh": "哪项是突然变化？A 一小时内水位上涨；B 十年间树长大。",
    "options": [
      "Water rose within one hour.",
      "A tree grew over ten years."
    ],
    "answer": 0,
    "feedback": "The time labels show a rapid rise in water.",
    "feedbackZh": "时间标记表明水位迅速上涨。",
    "sentence": [
      "Some changes happen quickly,",
      "while others",
      "take a long time."
    ],
    "sentenceZh": "有些变化很快，有些需要很长时间。",
    "word": [
      "Fast and Slow Changes",
      "快变化与慢变化"
    ],
    "parent": "Read the time labels first. / 先读时间。",
    "transfer": "一次事件速度不等于影响持续时间；发现卡补充风暴、火灾、地震和火山。",
    "evidenceEn": "The timestamps describe hours, weeks, and years. Speed of change is different from how long its effects last.",
    "evidenceZh": "时间戳分别为小时、周、年；变化速度与影响持续时间不同。",
    "sequence": [
      "Flood rises in 2 hours 洪水2小时上涨",
      "Drought develops over 8 weeks 干旱8周发展",
      "Young tree grows over 5 years 幼树5年长大"
    ],
    "extraPairs": [
      {
        "left": "Heavy rain 暴雨",
        "right": "A possible cause of fast flooding 快速洪水的可能原因"
      },
      {
        "left": "Water spreads over land 水漫过陆地",
        "right": "An observed result of flooding 洪水的观察结果"
      }
    ]
  },
  {
    "id": "g3-c03-m05",
    "chapter": 3,
    "local": 5,
    "title": "Too Much or Too Little",
    "zh": "太多或太少",
    "lesson": "L2 Inquiry",
    "pages": "140–151",
    "intro": "Compare equal plants with different amounts of water.",
    "introZh": "比较其他条件相同、浇水量不同的植物。",
    "instruction": "Compare equal plants with different amounts of water.",
    "instructionZh": "比较其他条件相同、浇水量不同的植物。",
    "kind": "experiment",
    "question": "What supports the claim that the middle amount worked best here?",
    "qZh": "什么支持中等水量更合适？A 健康叶最多；B 花盆颜色最喜欢。",
    "options": [
      "It had the most healthy leaves.",
      "Its pot was our favorite color."
    ],
    "answer": 0,
    "feedback": "Use the leaf records, not pot color, as evidence.",
    "feedbackZh": "用叶片记录作证据。",
    "sentence": [
      "In this test,",
      "too much and too little water",
      "both harmed the seedlings."
    ],
    "sentenceZh": "本测试中，过多和过少的水都损害幼苗。",
    "word": [
      "Too Much or Too Little",
      "太多或太少"
    ],
    "parent": "Compare the same kind of plant. / 比较同种植物。",
    "transfer": "只针对给定物种与条件；真实亲子不要求故意淹死植物。",
    "evidenceEn": "After three example weeks, the normal-water group has 8 healthy leaves, low water 3, and waterlogged soil 2.",
    "evidenceZh": "三周示例正常水量8片健康叶、过少3片、积水2片，仅限给定物种条件。",
    "experiment": {
      "variable": "Water amount 水量",
      "controls": "Same species and age; same light, temperature, soil, and three-week period 同种同龄、同光温土与三周时长",
      "states": [
        {
          "label": "Normal water 正常水量",
          "reading": "8 healthy leaves 健康叶8片",
          "value": 8
        },
        {
          "label": "Too little water 水过少",
          "reading": "3 healthy leaves 健康叶3片",
          "value": 3
        },
        {
          "label": "Waterlogged 积水",
          "reading": "2 healthy leaves 健康叶2片",
          "value": 2
        }
      ],
      "prediction": [
        "Both too little and too much water may harm these seedlings.",
        "More water always gives healthier seedlings."
      ],
      "model": "seedlings",
      "unit": "healthy leaves",
      "diagram": "habitat"
    }
  },
  {
    "id": "g3-c03-m06",
    "chapter": 3,
    "local": 6,
    "title": "A Web of Needs",
    "zh": "相互依赖",
    "lesson": "L2 Changes Affect Living Things",
    "pages": "144–147",
    "intro": "Connect each living thing to what it needs.",
    "introZh": "将每种生物连到它依赖的资源。",
    "instruction": "Connect each living thing to what it needs.",
    "instructionZh": "将每种生物连到它依赖的资源。",
    "kind": "sequence",
    "question": "If insects become scarce, what may happen to these insect-eating frogs?",
    "qZh": "昆虫减少时这些蛙可能怎样？A 更难找食物；B 永远不用吃东西。",
    "options": [
      "Finding food may become harder.",
      "They will never need food again."
    ],
    "answer": 0,
    "feedback": "Less available prey may make feeding harder.",
    "feedbackZh": "可用猎物减少可能增加取食困难。",
    "sentence": [
      "Changes to one population",
      "can affect",
      "other living things."
    ],
    "sentenceZh": "一个种群的变化可能影响其他生物。",
    "word": [
      "A Web of Needs",
      "相互依赖"
    ],
    "parent": "Follow the food links. / 沿食物连线查看。",
    "transfer": "不把简化单链当完整食物网，保留 may；相互作用含非生物条件。",
    "evidenceEn": "Arrows run from food to eater, showing energy transfer. This chain is only a small part of a food web.",
    "evidenceZh": "箭头从食物指向取食者表示能量传递；单链只是食物网的一部分。",
    "sequence": [
      "Grass 草",
      "Grasshopper 蝗虫",
      "Frog 青蛙",
      "Bird 鸟"
    ],
    "extraPairs": [
      {
        "left": "Water 水",
        "right": "Nonliving need 非生物需求"
      },
      {
        "left": "Suitable shelter 适宜庇护处",
        "right": "Habitat need 栖息环境需求"
      }
    ]
  },
  {
    "id": "g3-c03-m07",
    "chapter": 3,
    "local": 7,
    "title": "A New Neighbor",
    "zh": "新来的邻居",
    "lesson": "L2 Changes Affect Living Things",
    "pages": "148–149",
    "intro": "Read the records before deciding what changed.",
    "introZh": "先读记录，再判断发生了什么变化。",
    "instruction": "Read the records before deciding what changed.",
    "instructionZh": "先读记录，再判断发生了什么变化。",
    "kind": "experiment",
    "question": "Does every newly arrived species cause harm?",
    "qZh": "所有新来物种都有害吗？A 是；B 否，需要影响证据。",
    "options": [
      "Yes.",
      "No, we need evidence of its effects."
    ],
    "answer": 1,
    "feedback": "A new arrival is not automatically harmful.",
    "feedbackZh": "新来不自动等于有害。",
    "sentence": [
      "We need evidence",
      "to explain how",
      "a new species affects a habitat."
    ],
    "sentenceZh": "需要证据解释新物种如何影响生境。",
    "word": [
      "A New Neighbor",
      "新来的邻居"
    ],
    "parent": "Compare before and after. / 比较前后记录。",
    "transfer": "“入侵”作为扩展词，不鼓励释放宠物或植物；不由一次相关性证明唯一原因。",
    "evidenceEn": "Higher coverage occurs with lower underwater light in the record. This supports a question about effects, not proof of a single cause.",
    "evidenceZh": "记录中覆盖增加伴随水下光减少，提示影响但不证明唯一原因。",
    "experiment": {
      "variable": "Observation before and after plant expansion 植物扩张前后记录",
      "controls": "Same pond observation sites; other causes still need checking 同一池塘观测点，仍须排查其他因素",
      "states": [
        {
          "label": "Before expansion 扩张前",
          "reading": "Low surface coverage; more underwater light 水面覆盖低，水下光较多"
        },
        {
          "label": "After expansion 扩张后",
          "reading": "High surface coverage; less underwater light 水面覆盖高，水下光较少"
        }
      ],
      "prediction": [
        "Native underwater plants may receive less light after expansion.",
        "Greater surface coverage must give native plants more light."
      ],
      "model": "pond_coverage",
      "unit": "",
      "diagram": "habitat"
    },
    "extraPairs": [
      {
        "left": "New arrival 新来物种",
        "right": "Not enough information to prove harm 仅新来不足以证明危害"
      },
      {
        "left": "Documented spread and serious harm 已记录扩张与明显危害",
        "right": "Evidence relevant to an invasive-species assessment 与入侵评估相关的证据"
      }
    ]
  },
  {
    "id": "g3-c03-m08",
    "chapter": 3,
    "local": 8,
    "title": "Stay, Move, or Disappear?",
    "zh": "留下、迁移或消失",
    "lesson": "L2→L3 transition",
    "pages": "144–155",
    "intro": "Use the habitat cards to compare possible outcomes.",
    "introZh": "根据生境卡比较可能的结果。",
    "instruction": "Use the habitat cards to compare possible outcomes.",
    "instructionZh": "根据生境卡比较可能的结果。",
    "kind": "match",
    "question": "Does seeing no birds in one pond prove the species is extinct?",
    "qZh": "一处池塘没看到鸟能证明灭绝吗？A 能；B 不能。",
    "options": [
      "Yes.",
      "No."
    ],
    "answer": 1,
    "feedback": "Extinction means no living members of the species remain anywhere.",
    "feedbackZh": "灭绝指这个物种在任何地方都没有存活个体。",
    "sentence": [
      "An animal may leave one place",
      "without its species",
      "becoming extinct."
    ],
    "sentenceZh": "动物离开一处地方，不等于其物种灭绝。",
    "word": [
      "Stay, Move, or Disappear?",
      "留下、迁移或消失"
    ],
    "parent": "Think beyond one location. / 不只看一个地点。",
    "transfer": "不教“个体想适应就立即长出新结构”；引入多地、多次观察需求。",
    "evidenceEn": "Leaving one area is not the same as species extinction. More locations and repeated observations help test the claim.",
    "evidenceZh": "离开一地不等于整个物种灭绝，需要多地、多次观察。",
    "pairs": [
      {
        "left": "Bird with food available along a migration route 有食物迁徙路线的鸟",
        "right": "May move to another area 可能迁往别处"
      },
      {
        "left": "Rooted plant when winter conditions change 冬季条件变化时的扎根植物",
        "right": "Cannot quickly relocate like a bird 不能像鸟快速迁移"
      },
      {
        "left": "Not seen in one local survey 一次当地未见",
        "right": "Insufficient evidence of extinction 不足以证明灭绝"
      },
      {
        "left": "No members of a species remain anywhere 全世界该物种无成员存活",
        "right": "Species extinction 物种灭绝"
      }
    ]
  },
  {
    "id": "g3-c03-m09",
    "chapter": 3,
    "local": 9,
    "title": "A Trace from the Past",
    "zh": "过去的痕迹",
    "lesson": "L3 Living Things of the Past",
    "pages": "152–157",
    "intro": "Sort remains and traces that can become fossil evidence.",
    "introZh": "区分可成为化石证据的遗体与活动痕迹。",
    "instruction": "Sort remains and traces that can become fossil evidence.",
    "instructionZh": "区分可成为化石证据的遗体与活动痕迹。",
    "kind": "sequence",
    "question": "Can a preserved footprint be a fossil?",
    "qZh": "保存下来的足迹能是化石吗？A 能；B 只有完整动物才行。",
    "options": [
      "Yes.",
      "Only a whole animal can be a fossil."
    ],
    "answer": 0,
    "feedback": "Fossils can include preserved remains or traces of past life.",
    "feedbackZh": "化石可包括古代生物保存的遗体或痕迹。",
    "sentence": [
      "A fossil can preserve",
      "a body part",
      "or a trace of activity."
    ],
    "sentenceZh": "化石可保存身体部位或活动痕迹。",
    "word": [
      "A Trace from the Past",
      "过去的痕迹"
    ],
    "parent": "Look for evidence, not only bones. / 不只找骨头。",
    "transfer": "衔接 G2 化石；不是所有遗体都会形成化石，不用短动画暗示几分钟形成。",
    "evidenceEn": "A trace can be covered and preserved over a long time. Most remains and traces do not become fossils.",
    "evidenceZh": "遗迹可能被覆盖并长期保存；多数遗体和痕迹不会形成化石。",
    "sequence": [
      "An animal leaves a footprint 动物留下足迹",
      "Sediment covers the trace 沉积物覆盖痕迹",
      "The trace is preserved over a long time 痕迹长期保存"
    ],
    "extraPairs": [
      {
        "left": "Fossil bone 骨骼化石",
        "right": "Body remain 遗体"
      },
      {
        "left": "Fossil footprint 足迹化石",
        "right": "Activity trace 活动遗迹"
      }
    ]
  },
  {
    "id": "g3-c03-m10",
    "chapter": 3,
    "local": 10,
    "title": "Teeth Tell Part of a Story",
    "zh": "牙齿提供部分线索",
    "lesson": "L3 Living Things of the Past",
    "pages": "156–159",
    "intro": "Compare the teeth and choose a supported idea.",
    "introZh": "比较牙齿，选择有依据的推断。",
    "instruction": "Compare the teeth and choose a supported idea.",
    "instructionZh": "比较牙齿，选择有依据的推断。",
    "kind": "match",
    "question": "What can a broad grinding surface suggest?",
    "qZh": "宽阔磨面提示什么？A 可能适合磨碎食物；B 精确皮肤颜色。",
    "options": [
      "It may help grind food.",
      "The animal's exact skin color."
    ],
    "answer": 0,
    "feedback": "Tooth shape supports a limited idea about feeding, not skin color.",
    "feedbackZh": "牙形支持有限的取食推断，不显示皮肤颜色。",
    "sentence": [
      "This tooth is evidence",
      "about how the animal",
      "may have processed food."
    ],
    "sentenceZh": "牙齿可提供动物可能如何处理食物的证据。",
    "word": [
      "Teeth Tell Part of a Story",
      "牙齿提供部分线索"
    ],
    "parent": "Match the surface to its job. / 将表面形状与功能联系。",
    "transfer": "避免一颗尖牙就断定纯肉食，骨翼也不自动证明会飞。",
    "evidenceEn": "A broad grinding surface and a sharp cutting edge suggest different food-processing jobs. A single tooth does not identify a complete diet.",
    "evidenceZh": "宽磨面和尖切缘提示不同加工方式，单颗牙齿不能确定完整食性。",
    "pairs": [
      {
        "left": "Broad flat tooth surface 宽而平的牙面",
        "right": "Grinding tough material 磨碎坚韧材料"
      },
      {
        "left": "Sharp cutting edge 尖锐切缘",
        "right": "Cutting or tearing material 切开或撕裂材料"
      },
      {
        "left": "One tooth without other evidence 只有一颗牙",
        "right": "Keep the full diet uncertain 不能确定完整食谱"
      }
    ]
  },
  {
    "id": "g3-c03-m11",
    "chapter": 3,
    "local": 11,
    "title": "Similar Is Not Identical",
    "zh": "相似不等于相同",
    "lesson": "L3 Living Things of the Past",
    "pages": "158–163",
    "intro": "Compare the mammoth and elephant evidence cards.",
    "introZh": "比较猛犸象与象的证据卡。",
    "instruction": "Compare the mammoth and elephant evidence cards.",
    "instructionZh": "比较猛犸象与象的证据卡。",
    "kind": "sort",
    "question": "Do similar fossils prove that no change occurred over time?",
    "qZh": "化石外形相似能证明从未变化吗？A 能；B 不能。",
    "options": [
      "Yes.",
      "No."
    ],
    "answer": 1,
    "feedback": "Some features can be similar while other features change.",
    "feedbackZh": "某些特征可相似，另一些仍可改变。",
    "sentence": [
      "These animals share some features,",
      "but they are not",
      "exactly the same."
    ],
    "sentenceZh": "这些动物有共同特征，但并不完全一样。",
    "word": [
      "Similar Is Not Identical",
      "相似不等于相同"
    ],
    "parent": "Find one similarity and one difference. / 各找一个相同与不同。",
    "transfer": "不把“活化石”解释为停止演化；历史科学观点卡属于发现手册。",
    "evidenceEn": "Mammoths and living elephants share structures but also differ. New fossil evidence can revise an explanation.",
    "evidenceZh": "猛犸象与现代象有共同结构也有差异；新化石证据可以修正解释。",
    "groups": [
      "Shared feature 共同特征",
      "Difference in these examples 本例差异",
      "New evidence 新证据"
    ],
    "items": [
      [
        "Long trunk in both 两者都有长鼻",
        0
      ],
      [
        "Tusks in both example specimens 两例标本都有象牙",
        0
      ],
      [
        "Dense hair on this mammoth 此猛犸象有浓密毛被",
        1
      ],
      [
        "A newly found fossil adds a missing feature 新化石补充缺失特征",
        2
      ]
    ],
    "extraPairs": [
      {
        "left": "Earlier explanation 早期解释",
        "right": "Based on the earlier evidence 依据当时证据"
      },
      {
        "left": "Revised explanation 修正解释",
        "right": "Includes the new fossil observation 纳入新化石观察"
      }
    ]
  },
  {
    "id": "g3-c03-m12",
    "chapter": 3,
    "local": 12,
    "title": "Restore with Evidence",
    "zh": "用证据设计修复",
    "lesson": "Chapter review",
    "pages": "164–169",
    "intro": "Choose a plan and explain which evidence supports it.",
    "introZh": "选择修复方案并说明支持证据。",
    "instruction": "Choose a plan and explain which evidence supports it.",
    "instructionZh": "选择修复方案并说明支持证据。",
    "kind": "sort",
    "question": "What should we do after trying a plan?",
    "qZh": "实施方案后该做什么？A 测量变化；B 假定永远有效。",
    "options": [
      "Measure the changes.",
      "Assume it always works."
    ],
    "answer": 0,
    "feedback": "Check the results and revise the plan if needed.",
    "feedbackZh": "检查结果，必要时修改计划。",
    "sentence": [
      "Our plan may help,",
      "and we will collect data",
      "to check the results."
    ],
    "sentenceZh": "方案可能有帮助，我们会收集数据检查结果。",
    "word": [
      "Restore with Evidence",
      "用证据设计修复"
    ],
    "parent": "Choose an outcome you can observe. / 选择可观察的结果。",
    "transfer": "解锁 Change Observatory；联系 Ch1–2 需求、G2资源与化石；不把放生当修复捷径。",
    "evidenceEn": "The two-action plan removes litter and restores suitable bank plants. Monitor litter counts and plant survival to check results.",
    "evidenceZh": "两项预算用于清垃圾与恢复适宜岸边植物；用垃圾数量和植物存活检验效果。",
    "groups": [
      "Choose: budget of two 选择：预算两项",
      "Do not choose 不选"
    ],
    "items": [
      [
        "Remove litter 清理垃圾",
        0
      ],
      [
        "Restore suitable bank plants 恢复适宜岸边植物",
        0
      ],
      [
        "Release pets into the wetland 向湿地放生宠物",
        1
      ],
      [
        "Add more plastic decorations 添加塑料装饰",
        1
      ]
    ],
    "extraPairs": [
      {
        "left": "Litter cleanup goal 清垃圾目标",
        "right": "Count litter before and after 比较前后垃圾数量"
      },
      {
        "left": "Plant restoration goal 植被恢复目标",
        "right": "Monitor plant survival and cover 监测存活与覆盖"
      }
    ]
  },
  {
    "id": "g3-c04-m01",
    "chapter": 4,
    "local": 1,
    "title": "A Moving Shadow",
    "zh": "移动的影子",
    "lesson": "L1 Day and Night",
    "pages": "178–181",
    "intro": "Move the model lamp and mark the shadow.",
    "introZh": "移动模型灯并标记影子。",
    "instruction": "Move the model lamp and mark the shadow.",
    "instructionZh": "移动模型灯并标记影子。",
    "kind": "experiment",
    "question": "Where is the shadow compared with the lamp?",
    "qZh": "影子相对灯在哪里？A 物体另一侧；B 总朝向灯。",
    "options": [
      "On the opposite side of the object.",
      "Always toward the lamp."
    ],
    "answer": 0,
    "feedback": "The object blocks light, leaving a shadow on the other side.",
    "feedbackZh": "物体遮光，在另一侧形成影子。",
    "sentence": [
      "The shadow changes",
      "when the light's position",
      "changes."
    ],
    "sentenceZh": "光源位置改变，影子会变化。",
    "word": [
      "A Moving Shadow",
      "移动的影子"
    ],
    "parent": "Trace the straight light path. / 沿直线追踪光路。",
    "transfer": "不在地面模型中暗示太阳绕地球公转；实际观测不直视太阳。",
    "evidenceEn": "Changing the lamp changes shadow direction and length. This is a lamp model, not the Sun orbiting Earth.",
    "evidenceZh": "灯的位置改变，影子的方向与长短也改变。这是灯光模型，并不表示太阳绕地球公转。",
    "experiment": {
      "model": "shadow_lamp",
      "diagram": "space",
      "variable": "Lamp position 灯的位置",
      "controls": "Same upright stick and ground 相同竖杆与地面",
      "states": [
        {
          "label": "Low left 左侧低位",
          "reading": "The long shadow points right. 长影子朝右。",
          "lampX": 80,
          "lampY": 55,
          "shadowEndX": 460,
          "shadowLength": "long"
        },
        {
          "label": "High above 正上方高位",
          "reading": "The shadow is shortest under the stick. 影子在杆下最短。",
          "lampX": 260,
          "lampY": 5,
          "shadowEndX": 260,
          "shadowLength": "short"
        },
        {
          "label": "Low right 右侧低位",
          "reading": "The long shadow points left. 长影子朝左。",
          "lampX": 440,
          "lampY": 55,
          "shadowEndX": 60,
          "shadowLength": "long"
        }
      ],
      "prediction": [
        "The shadow will change with the lamp position.",
        "The shadow will stay the same."
      ],
      "unit": ""
    }
  },
  {
    "id": "g3-c04-m02",
    "chapter": 4,
    "local": 2,
    "title": "Turn Earth",
    "zh": "转动地球",
    "lesson": "L1 Day and Night",
    "pages": "182–183",
    "intro": "Keep the lamp still and turn the globe.",
    "introZh": "保持灯不动，转动地球仪。",
    "instruction": "Keep the lamp still and turn the globe.",
    "instructionZh": "保持灯不动，转动地球仪。",
    "kind": "experiment",
    "question": "What causes day and night in this model?",
    "qZh": "模型中什么导致昼夜？A 地球自转；B 太阳关闭。",
    "options": [
      "Earth's rotation.",
      "The Sun turning off."
    ],
    "answer": 0,
    "feedback": "Earth turns, so a place moves into and out of sunlight.",
    "feedbackZh": "地球转动，一处地方进入或离开阳光照射区。",
    "sentence": [
      "Earth rotates,",
      "causing",
      "day and night."
    ],
    "sentenceZh": "地球自转造成昼夜。",
    "word": [
      "Turn Earth",
      "转动地球"
    ],
    "parent": "Watch the marked place, not the whole globe. / 盯住标记地点。",
    "transfer": "从北极上方看逆时针；模型尺寸距离不按比例。",
    "evidenceEn": "Earth rotates while the sunlight direction stays fixed in this model.",
    "evidenceZh": "模型中阳光方向不变，地球自转使同一地点经历昼夜。",
    "experiment": {
      "model": "earth_rotation",
      "diagram": "space",
      "variable": "Earth rotation 地球自转",
      "controls": "Fixed sunlight from the left; same observer 左侧固定阳光、同一观察点",
      "states": [
        {
          "label": "Face the light 面向光",
          "reading": "The observer is in daylight. 观察点处于白昼。",
          "observerAngleDeg": 180,
          "day": true
        },
        {
          "label": "Face away 背向光",
          "reading": "The observer is in darkness: night. 观察点处于夜晚。",
          "observerAngleDeg": 0,
          "day": false
        }
      ],
      "prediction": [
        "Turning Earth will move the observer between day and night.",
        "The observer will remain in daylight."
      ],
      "unit": ""
    }
  },
  {
    "id": "g3-c04-m03",
    "chapter": 4,
    "local": 3,
    "title": "One Turn, One Day",
    "zh": "一圈与一天",
    "lesson": "L1 Day and Night",
    "pages": "184–185",
    "intro": "Follow the marker through one full turn.",
    "introZh": "跟随标记完成一次自转。",
    "instruction": "Follow the marker through one full turn.",
    "instructionZh": "跟随标记完成一次自转。",
    "kind": "experiment",
    "question": "About how long is a day?",
    "qZh": "一天约多长？A 24 小时；B 24 个月。",
    "options": [
      "24 hours.",
      "24 months."
    ],
    "answer": 0,
    "feedback": "A day is about 24 hours.",
    "feedbackZh": "一天约为 24 小时；本级不考恒星日差异。",
    "sentence": [
      "One daily cycle",
      "takes about",
      "twenty-four hours."
    ],
    "sentenceZh": "一个昼夜周期约二十四小时。",
    "word": [
      "One Turn, One Day",
      "一圈与一天"
    ],
    "parent": "Return to the starting position. / 回到起始位置。",
    "transfer": "地轴是假想线，不画成地球真的穿着杆；时间缩放明显标注。",
    "evidenceEn": "One daily cycle is about 24 hours. The equal daylight blocks are a simplified example, not every place and season.",
    "evidenceZh": "一次昼夜循环约24小时；等分昼夜是简化示例，不代表所有地区和季节。",
    "experiment": {
      "model": "earth_day_cycle",
      "diagram": "space",
      "variable": "Rotation progress 自转进度",
      "controls": "Same marked point; time is compressed 同一标记点；时间已压缩",
      "states": [
        {
          "label": "0 h · Sunrise 日出附近",
          "reading": "The observer starts near the day-night boundary. 从昼夜边界附近开始。",
          "observerAngleDeg": 90,
          "hours": 0
        },
        {
          "label": "6 h · Day 白昼",
          "reading": "The observer faces the light. 观察点面向光。",
          "observerAngleDeg": 180,
          "hours": 6
        },
        {
          "label": "12 h · Sunset 日落附近",
          "reading": "The observer reaches the other boundary. 到达另一侧昼夜边界。",
          "observerAngleDeg": 270,
          "hours": 12
        },
        {
          "label": "18 h · Night 夜晚",
          "reading": "The observer faces away from the light. 观察点背向光。",
          "observerAngleDeg": 0,
          "hours": 18
        },
        {
          "label": "24 h · Return 回到起点",
          "reading": "One complete daily cycle returns to the starting direction. 一次完整昼夜循环回到初始朝向。",
          "observerAngleDeg": 90,
          "hours": 24
        }
      ],
      "prediction": [
        "A complete turn returns the observer to the starting direction.",
        "Half a turn returns the observer to the starting direction."
      ],
      "unit": ""
    }
  },
  {
    "id": "g3-c04-m04",
    "chapter": 4,
    "local": 4,
    "title": "Read the Day's Record",
    "zh": "读一天的记录",
    "lesson": "L1 Inquiry Skill",
    "pages": "186–187",
    "intro": "Compare the times, temperatures, and shadows in the table.",
    "introZh": "比较表中的时间、温度和影长。",
    "instruction": "Compare the times, temperatures, and shadows in the table.",
    "instructionZh": "比较表中的时间、温度和影长。",
    "kind": "experiment",
    "question": "Does the shortest shadow occur at the highest temperature in this record?",
    "qZh": "本记录中影子最短与气温最高同时发生吗？A 是；B 否。",
    "options": [
      "Yes.",
      "No."
    ],
    "answer": 1,
    "feedback": "The shortest shadow is at 12:00; the highest temperature is at 15:00.",
    "feedbackZh": "两种记录的极值不同时。",
    "sentence": [
      "The table shows",
      "different patterns",
      "for shadow length and temperature."
    ],
    "sentenceZh": "表格显示影长和温度的规律不同。",
    "word": [
      "Read the Day's Record",
      "读一天的记录"
    ],
    "parent": "Read one column at a time. / 一次读一列。",
    "transfer": "这些是示例地点当天的数据，不把正午等同于每天最热。",
    "evidenceEn": "The shortest shadow is at 12:00, but the highest temperature in this record is at 15:00.",
    "evidenceZh": "这份记录中12点影子最短，15点气温最高。",
    "experiment": {
      "model": "day_record",
      "diagram": "space",
      "variable": "Time of observation 观察时刻",
      "controls": "Same example location and day 同一示例地点、同一天",
      "states": [
        {
          "label": "09:00",
          "reading": "Shadow 60 cm; air 18°C. 影长60厘米；气温18度。",
          "shadowCm": 60,
          "tempC": 18
        },
        {
          "label": "12:00",
          "reading": "Shadow 25 cm; air 23°C. 影长25厘米；气温23度。",
          "shadowCm": 25,
          "tempC": 23
        },
        {
          "label": "15:00",
          "reading": "Shadow 45 cm; air 25°C. 影长45厘米；气温25度。",
          "shadowCm": 45,
          "tempC": 25
        }
      ],
      "prediction": [
        "The shortest shadow and highest temperature may occur at different times.",
        "The shortest shadow must always mean the highest temperature."
      ],
      "unit": ""
    },
    "extraPairs": [
      {
        "left": "Shortest shadow 最短影子",
        "right": "12:00 · 25 cm"
      },
      {
        "left": "Highest temperature 最高气温",
        "right": "15:00 · 25°C"
      }
    ]
  },
  {
    "id": "g3-c04-m05",
    "chapter": 4,
    "local": 5,
    "title": "Tilt, Do Not Chase",
    "zh": "倾斜与公转",
    "lesson": "L2 The Seasons",
    "pages": "188–191",
    "intro": "Move Earth around the Sun while keeping its axis pointed the same way.",
    "introZh": "让地球绕太阳运动，同时保持地轴方向。",
    "instruction": "Move Earth around the Sun while keeping its axis pointed the same way.",
    "instructionZh": "让地球绕太阳运动，同时保持地轴方向。",
    "kind": "experiment",
    "question": "What is the main cause of Earth's seasons?",
    "qZh": "季节的主要成因？A 倾斜地轴与公转；B 太阳每冬变冷。",
    "options": [
      "Its tilted axis as it orbits the Sun.",
      "The Sun turning cold every winter."
    ],
    "answer": 0,
    "feedback": "The tilt changes sunlight angle and daylight through the year.",
    "feedbackZh": "倾斜使全年光照角度和日长变化。",
    "sentence": [
      "Earth's tilt",
      "changes how sunlight reaches",
      "each hemisphere."
    ],
    "sentenceZh": "地轴倾斜改变阳光照射各半球的方式。",
    "word": [
      "Tilt, Do Not Chase",
      "倾斜与公转"
    ],
    "parent": "Keep the axis parallel in every position. / 各位置地轴保持平行。",
    "transfer": "不以离太阳远近解释四季；轨道与轴关系需专门测试。",
    "evidenceEn": "Earth’s axial tilt changes sunlight angle and daylight through the orbit; the axis remains parallel in the model.",
    "evidenceZh": "地轴倾斜使公转过程中太阳照射角度和日长改变；模型地轴方向保持平行。",
    "experiment": {
      "model": "seasons_tilt",
      "diagram": "space",
      "variable": "Earth position in orbit 地球公转位置",
      "controls": "Axis stays parallel; equal model Sun distance 地轴方向保持平行；模型日地距离相同",
      "states": [
        {
          "label": "North tilted toward Sun 北半球朝向太阳",
          "reading": "Northern summer: more direct sunlight and longer days. 北半球夏季，阳光较直射、白昼较长。",
          "earthX": 120,
          "axisTiltDeg": 23.5,
          "northSeason": "summer"
        },
        {
          "label": "North tilted away 北半球背向太阳",
          "reading": "Northern winter: less direct sunlight and shorter days. 北半球冬季，阳光较斜射、白昼较短。",
          "earthX": 400,
          "axisTiltDeg": 23.5,
          "northSeason": "winter"
        }
      ],
      "prediction": [
        "Keeping the tilt while moving Earth will change sunlight on each hemisphere.",
        "Seasons only depend on moving closer to the Sun."
      ],
      "unit": ""
    }
  },
  {
    "id": "g3-c04-m06",
    "chapter": 4,
    "local": 6,
    "title": "A Longer Day",
    "zh": "更长的白昼",
    "lesson": "L2 The Seasons",
    "pages": "192–193",
    "intro": "Compare daylight records from the same town.",
    "introZh": "比较同一城镇的日长记录。",
    "instruction": "Compare daylight records from the same town.",
    "instructionZh": "比较同一城镇的日长记录。",
    "kind": "experiment",
    "question": "Which example has more daylight?",
    "qZh": "哪个示例白昼更长？A 夏日；B 冬日。",
    "options": [
      "The summer day.",
      "The winter day."
    ],
    "answer": 0,
    "feedback": "Fourteen hours is longer than eight hours.",
    "feedbackZh": "十四小时长于八小时。",
    "sentence": [
      "This town has",
      "more daylight in summer",
      "than in winter."
    ],
    "sentenceZh": "这座城镇夏季白昼比冬季长。",
    "word": [
      "A Longer Day",
      "更长的白昼"
    ],
    "parent": "Count the blocks between sunrise and sunset. / 数日出日落之间的格。",
    "transfer": "可选换南半球对应月份，强调月份与季节因半球而异。",
    "evidenceEn": "Subtract sunrise from sunset: 16 − 8 = 8 hours; 20 − 6 = 14 hours.",
    "evidenceZh": "日落时刻减去日出时刻：16−8=8小时；20−6=14小时。",
    "experiment": {
      "model": "daylight_hours",
      "diagram": "space",
      "variable": "Season in one northern town 北半球某地的季节",
      "controls": "Same nonpolar town; example sunrise/sunset 非极区同一城镇；示例日出日落",
      "states": [
        {
          "label": "Winter 冬日",
          "reading": "08:00 to 16:00 = 8 daylight hours. 8点至16点，白昼8小时。",
          "value": 8,
          "sunrise": 8,
          "sunset": 16
        },
        {
          "label": "Summer 夏日",
          "reading": "06:00 to 20:00 = 14 daylight hours. 6点至20点，白昼14小时。",
          "value": 14,
          "sunrise": 6,
          "sunset": 20
        }
      ],
      "prediction": [
        "The summer example will have more daylight.",
        "The winter example will have more daylight."
      ],
      "unit": "hours"
    }
  },
  {
    "id": "g3-c04-m07",
    "chapter": 4,
    "local": 7,
    "title": "Two Hemispheres",
    "zh": "两个半球",
    "lesson": "L2 The Seasons",
    "pages": "194–197",
    "intro": "Compare north and south at the same moment.",
    "introZh": "比较同一时刻的南北半球。",
    "instruction": "Compare north and south at the same moment.",
    "instructionZh": "比较同一时刻的南北半球。",
    "kind": "match",
    "question": "If it is summer in the Northern Hemisphere, what season is it in the Southern Hemisphere?",
    "qZh": "北半球夏季时南半球是什么季节？A 冬季；B 也总是夏季。",
    "options": [
      "Winter.",
      "Always summer too."
    ],
    "answer": 0,
    "feedback": "The hemispheres have opposite seasons.",
    "feedbackZh": "南北半球季节相反。",
    "sentence": [
      "The two hemispheres",
      "have opposite seasons",
      "at the same time."
    ],
    "sentenceZh": "同一时刻两个半球季节相反。",
    "word": [
      "Two Hemispheres",
      "两个半球"
    ],
    "parent": "Look at which pole tilts toward the Sun. / 看哪端倾向太阳。",
    "transfer": "温带四季描述不等于各地都会下雪或同样气温。",
    "evidenceEn": "When the northern hemisphere tilts toward the Sun, northern summer and southern winter occur together.",
    "evidenceZh": "北半球朝向太阳时，北半球夏季与南半球冬季同时发生。",
    "pairs": [
      {
        "left": "North tilted toward Sun 北半球朝向太阳",
        "right": "Northern summer 北半球夏季"
      },
      {
        "left": "South tilted away 南半球背向太阳",
        "right": "Southern winter 南半球冬季"
      },
      {
        "left": "Near the equator 赤道附近",
        "right": "Smaller seasonal daylight changes 季节日长变化较小"
      }
    ]
  },
  {
    "id": "g3-c04-m08",
    "chapter": 4,
    "local": 8,
    "title": "A Moon Journal",
    "zh": "月相观察册",
    "lesson": "L3 The Moon",
    "pages": "198–201",
    "intro": "Put the observation cards in order.",
    "introZh": "将月相观察卡按顺序排列。",
    "instruction": "Put the observation cards in order.",
    "instructionZh": "将月相观察卡按顺序排列。",
    "kind": "sequence",
    "question": "What changes in these observations?",
    "qZh": "观察中什么变化？A 看到受光面的多少；B 月球实体形状变了。",
    "options": [
      "How much of the lit side we see.",
      "The Moon becomes a different-shaped rock."
    ],
    "answer": 0,
    "feedback": "The Moon stays roughly round while its appearance changes.",
    "feedbackZh": "月球仍大致球形，外观发生变化。",
    "sentence": [
      "The Moon looks different",
      "because we see",
      "different parts of its lit half."
    ],
    "sentenceZh": "月相不同，是因为看到受光半球的部分不同。",
    "word": [
      "A Moon Journal",
      "月相观察册"
    ],
    "parent": "Compare the bright area. / 比较亮面。",
    "transfer": "左右亮面依观察方向而异；不把左亮/右亮做无条件全球判断。",
    "evidenceEn": "The dated cards show a cycle, ending with another new Moon. Phase appearances depend on the observer’s view.",
    "evidenceZh": "带日期编号的卡展示一个月相循环，最终回到新月。亮面外观与观察方向有关。",
    "sequence": [
      "Day 1 · New Moon 新月",
      "Day 8 · First quarter 上弦",
      "Day 15 · Full Moon 满月",
      "Day 22 · Last quarter 下弦",
      "Day 30 · Next new Moon 下一次新月"
    ]
  },
  {
    "id": "g3-c04-m09",
    "chapter": 4,
    "local": 9,
    "title": "Light One Half",
    "zh": "一半被照亮",
    "lesson": "L3 The Moon",
    "pages": "202–203、206–207",
    "intro": "Move the Moon around Earth and compare two views.",
    "introZh": "移动月球，比较太空视角和地球视角。",
    "instruction": "Move the Moon around Earth and compare two views.",
    "instructionZh": "移动月球，比较太空视角和地球视角。",
    "kind": "experiment",
    "question": "During ordinary phases, how much of the Moon is lit by the Sun?",
    "qZh": "普通月相期间太阳照亮月球多少？A 约一半；B 月球实体从无长到完整。",
    "options": [
      "About half.",
      "It grows from no rock to a whole rock."
    ],
    "answer": 0,
    "feedback": "Usually half is sunlit; our view of that half changes.",
    "feedbackZh": "通常一半受光，我们看到的比例变化。",
    "sentence": [
      "Sunlight lights half the Moon,",
      "while our view",
      "changes."
    ],
    "sentenceZh": "阳光照亮月球一半，而我们的视角变化。",
    "word": [
      "Light One Half",
      "一半被照亮"
    ],
    "parent": "Compare space view and Earth view. / 对照两个视角。",
    "transfer": "普通月相不是地球影子造成；远近尺寸未按比例。",
    "evidenceEn": "Half the Moon is sunlit. Ordinary phases come from our changing view of that lit half, not Earth’s shadow.",
    "evidenceZh": "太阳照亮月球的一半。普通月相来自我们看见受光半球的角度改变，不是地球阴影造成。",
    "experiment": {
      "model": "moon_views",
      "diagram": "space",
      "variable": "Moon position around Earth 月球绕地位置",
      "controls": "Sunlight from the left; half the Moon is lit 左侧固定阳光，月球始终一半受光",
      "states": [
        {
          "label": "New Moon position 新月位置",
          "reading": "The lit half faces mostly away from Earth. 受光半球主要背向地球。",
          "orbitAngleDeg": 180,
          "litFraction": 0,
          "phaseName": "new"
        },
        {
          "label": "First quarter 上弦位置",
          "reading": "We see half of the Moon’s visible disk lit. 看到的月面圆盘一半明亮。",
          "orbitAngleDeg": 270,
          "litFraction": 0.5,
          "phaseName": "first-quarter"
        },
        {
          "label": "Full Moon position 满月位置",
          "reading": "The lit half faces Earth. 受光半球面向地球。",
          "orbitAngleDeg": 0,
          "litFraction": 1,
          "phaseName": "full"
        },
        {
          "label": "Last quarter 下弦位置",
          "reading": "We see the other half of the visible disk lit. 看到另一侧半圆明亮。",
          "orbitAngleDeg": 90,
          "litFraction": 0.5,
          "phaseName": "last-quarter"
        }
      ],
      "prediction": [
        "Our view of the lit half will change as the Moon moves.",
        "The Sun will stop lighting half the Moon."
      ],
      "unit": ""
    }
  },
  {
    "id": "g3-c04-m10",
    "chapter": 4,
    "local": 10,
    "title": "Eclipse or Phase?",
    "zh": "月食还是月相",
    "lesson": "L3 The Moon",
    "pages": "204–205",
    "intro": "Compare an ordinary phase with a lunar eclipse.",
    "introZh": "比较普通月相与月食。",
    "instruction": "Compare an ordinary phase with a lunar eclipse.",
    "instructionZh": "比较普通月相与月食。",
    "kind": "experiment",
    "question": "What happens in a lunar eclipse?",
    "qZh": "月食时发生什么？A 月球进入地影；B 每次弯月都由地影造成。",
    "options": [
      "The Moon enters Earth's shadow.",
      "Earth's shadow causes every crescent Moon."
    ],
    "answer": 0,
    "feedback": "A lunar eclipse happens when the Moon passes through Earth's shadow.",
    "feedbackZh": "月食发生于月球经过地球影子。",
    "sentence": [
      "A lunar eclipse",
      "is different from",
      "an ordinary Moon phase."
    ],
    "sentenceZh": "月食不同于普通月相。",
    "word": [
      "Eclipse or Phase?",
      "月食还是月相"
    ],
    "parent": "Find Earth's shadow. / 找地影。",
    "transfer": "满月并非每月都有月食；太阳观测只在模拟中，不安排直视太阳。",
    "evidenceEn": "A lunar eclipse requires alignment through Earth’s shadow; a full Moon alone is not enough.",
    "evidenceZh": "月食需要月球进入地球阴影，仅处于满月阶段还不够。",
    "experiment": {
      "model": "eclipse",
      "diagram": "space",
      "variable": "Moon alignment and orbital tilt 月球排列与轨道倾斜",
      "controls": "Same Sun, Earth and Moon; schematic distances 相同天体，距离为示意",
      "states": [
        {
          "label": "Usual full Moon 通常满月",
          "reading": "The Moon misses Earth’s shadow because its orbit is tilted. 月球轨道略倾斜，通常避开地球阴影。",
          "moonY": 55,
          "eclipsed": false
        },
        {
          "label": "Lunar eclipse 月食",
          "reading": "The Moon passes through Earth’s shadow. 月球进入地球阴影。",
          "moonY": 130,
          "eclipsed": true
        }
      ],
      "prediction": [
        "A full Moon can pass above or below Earth’s shadow.",
        "Every full Moon must enter Earth’s shadow."
      ],
      "unit": ""
    },
    "extraSequence": [
      "Sun 太阳",
      "Earth 地球",
      "Moon in Earth’s shadow 地影中的月球"
    ]
  },
  {
    "id": "g3-c04-m11",
    "chapter": 4,
    "local": 11,
    "title": "Predict, Then Check",
    "zh": "预测后再核对",
    "lesson": "L3 Inquiry",
    "pages": "199、206–209",
    "intro": "Use the pattern to predict the next observation.",
    "introZh": "根据规律预测下一次观察。",
    "instruction": "Use the pattern to predict the next observation.",
    "instructionZh": "根据规律预测下一次观察。",
    "kind": "experiment",
    "question": "If the visible bright part has been growing, which is a reasonable next step?",
    "qZh": "亮面逐渐增大时合理预测？A 亮面继续增大；B 随意形状。",
    "options": [
      "A larger bright part.",
      "A random unrelated shape."
    ],
    "answer": 0,
    "feedback": "A pattern supports a prediction, which observations can check.",
    "feedbackZh": "规律支持预测，观察用于检验。",
    "sentence": [
      "I predict",
      "a larger bright part",
      "from this pattern."
    ],
    "sentenceZh": "根据此规律，我预测亮面会更大。",
    "word": [
      "Predict, Then Check",
      "预测后再核对"
    ],
    "parent": "Use the order, not a single picture. / 看序列而非单张。",
    "transfer": "天气遮挡不等于月球消失；亲子记录可记“云遮挡，未观察到”。",
    "evidenceEn": "This supplied sequence is waxing toward first quarter. Clouds can block observations without changing the Moon’s phase.",
    "evidenceZh": "给定序列中亮面增大、趋向上弦。云遮挡影响观测，但不改变月相。",
    "experiment": {
      "model": "moon_prediction",
      "diagram": "space",
      "variable": "Later dates in a teaching sequence 教学序列中的日期",
      "controls": "Same viewing convention; example sequence 同一观察朝向；不是实时月相",
      "states": [
        {
          "label": "Early waxing 较早的渐盈月",
          "reading": "A small bright portion is visible. 可见亮面较少。",
          "litFraction": 0.15,
          "phaseName": "waxing-crescent"
        },
        {
          "label": "Later waxing 较晚的渐盈月",
          "reading": "A larger bright portion is visible. 可见亮面增加。",
          "litFraction": 0.3,
          "phaseName": "waxing-crescent"
        },
        {
          "label": "Check next card 核对下一张",
          "reading": "The teaching sequence approaches first quarter. 教学序列接近上弦。",
          "litFraction": 0.5,
          "phaseName": "first-quarter"
        }
      ],
      "prediction": [
        "The next card will have a larger bright portion.",
        "The next card will have a smaller bright portion."
      ],
      "unit": ""
    }
  },
  {
    "id": "g3-c04-m12",
    "chapter": 4,
    "local": 12,
    "title": "Explain the Sky",
    "zh": "解释天空中的规律",
    "lesson": "Chapter review",
    "pages": "210–213",
    "intro": "Choose a model and evidence for each sky pattern.",
    "introZh": "为每种天象选择模型与证据。",
    "instruction": "Choose a model and evidence for each sky pattern.",
    "instructionZh": "为每种天象选择模型与证据。",
    "kind": "match",
    "question": "Which match is correct?",
    "qZh": "哪组匹配正确？A 昼夜—地球自转；B 季节—月球变形。",
    "options": [
      "Day and night—Earth's rotation.",
      "Seasons—the Moon changing shape."
    ],
    "answer": 0,
    "feedback": "Different sky patterns have different causes.",
    "feedbackZh": "不同天象规律有不同原因。",
    "sentence": [
      "My model explains",
      "this pattern,",
      "and the records support it."
    ],
    "sentenceZh": "模型解释该规律，记录为它提供支持。",
    "word": [
      "Explain the Sky",
      "解释天空中的规律"
    ],
    "parent": "Match one cause to one pattern first. / 先匹配一个原因和现象。",
    "transfer": "解锁 Sky Model Bench；接续 Ch5 观测工具，Ch8 再解释光与影。",
    "evidenceEn": "Different sky patterns need different models and records. Rotation explains day and night; tilt with orbit explains seasonal sunlight.",
    "evidenceZh": "不同天空现象需要不同模型与记录。自转解释昼夜，倾斜结合公转解释季节日照变化。",
    "pairs": [
      {
        "left": "Day and night 昼夜",
        "right": "Rotation + one-point daily record 自转与同地点昼夜记录"
      },
      {
        "left": "Seasonal sunlight 季节日照",
        "right": "Tilt and orbit + daylight records 倾斜公转与日长记录"
      },
      {
        "left": "Moon phases 月相",
        "right": "View of the lit half + Moon journal 受光面视角与月相日记"
      }
    ]
  },
  {
    "id": "g3-c05-m01",
    "chapter": 5,
    "local": 1,
    "title": "Our Star and Its Neighbors",
    "zh": "太阳与邻居",
    "lesson": "L1 The Sun and Its Planets",
    "pages": "218–221",
    "intro": "Sort the Sun, Earth, and Moon by their roles.",
    "introZh": "按角色区分太阳、地球和月球。",
    "instruction": "Sort the Sun, Earth, and Moon by their roles.",
    "instructionZh": "按角色区分太阳、地球和月球。",
    "kind": "sort",
    "question": "Which object makes its own light like other stars?",
    "qZh": "哪个像其他恒星一样自身发光？A 太阳；B 月球。",
    "options": [
      "The Sun.",
      "The Moon."
    ],
    "answer": 0,
    "feedback": "The Sun is a star; the Moon reflects sunlight.",
    "feedbackZh": "太阳是恒星，月球反射阳光。",
    "sentence": [
      "The Sun is a star,",
      "and Earth is a planet",
      "that orbits it."
    ],
    "sentenceZh": "太阳是恒星，地球是绕它运行的行星。",
    "word": [
      "Our Star and Its Neighbors",
      "太阳与邻居"
    ],
    "parent": "Separate giving off light from reflecting it. / 区分发光与反光。",
    "transfer": "不以五角星外形代表科学恒星形状；不把太阳称为宇宙中心。",
    "evidenceEn": "The Sun is a star; Earth is a planet; the Moon is Earth’s natural satellite.",
    "evidenceZh": "太阳是恒星，地球是行星，月球是地球的天然卫星。",
    "groups": [
      "Star 恒星",
      "Planet 行星",
      "Natural satellite 天然卫星"
    ],
    "items": [
      [
        "Sun 太阳",
        0
      ],
      [
        "Earth 地球",
        1
      ],
      [
        "Moon 月球",
        2
      ]
    ],
    "extraPairs": [
      {
        "left": "Earth’s orbit 地球轨道",
        "right": "Around the Sun 绕太阳"
      },
      {
        "left": "Moon’s orbit 月球轨道",
        "right": "Around Earth 绕地球"
      }
    ]
  },
  {
    "id": "g3-c05-m02",
    "chapter": 5,
    "local": 2,
    "title": "Eight Planet Stops",
    "zh": "八个行星站",
    "lesson": "L1 The Sun and Its Planets",
    "pages": "220–223",
    "intro": "Put the eight planets in order from the Sun.",
    "introZh": "从太阳向外排列八颗行星。",
    "instruction": "Put the eight planets in order from the Sun.",
    "instructionZh": "从太阳向外排列八颗行星。",
    "kind": "sequence",
    "question": "Which planet comes after Earth and before Jupiter?",
    "qZh": "哪颗在地球之后、木星之前？A 火星；B 海王星。",
    "options": [
      "Mars.",
      "Neptune."
    ],
    "answer": 0,
    "feedback": "Mars is the fourth planet from the Sun.",
    "feedbackZh": "火星是距太阳由近到远的第四颗行星。",
    "sentence": [
      "Earth is the third planet",
      "from the Sun,",
      "followed by Mars."
    ],
    "sentenceZh": "地球是从太阳数第三颗，接着是火星。",
    "word": [
      "Eight Planet Stops",
      "八个行星站"
    ],
    "parent": "Count outward from the Sun. / 从太阳向外数。",
    "transfer": "冥王星为矮行星拓展卡，不能绘成第九大行星；颜色不是唯一判题依据。",
    "evidenceEn": "The eight planets are ordered by their orbits from the Sun. Distances and sizes are not to scale.",
    "evidenceZh": "八颗行星按轨道离太阳由近到远排列。图示距离与大小不按比例。",
    "sequence": [
      "Mercury 水星",
      "Venus 金星",
      "Earth 地球",
      "Mars 火星",
      "Jupiter 木星",
      "Saturn 土星",
      "Uranus 天王星",
      "Neptune 海王星"
    ]
  },
  {
    "id": "g3-c05-m03",
    "chapter": 5,
    "local": 3,
    "title": "Read a Planet Card",
    "zh": "读取行星证据",
    "lesson": "L1 The Sun and Its Planets",
    "pages": "222–223",
    "intro": "Use the fact cards, not just the pictures, to group planets.",
    "introZh": "用资料卡而非仅凭图片给行星分组。",
    "instruction": "Use the fact cards, not just the pictures, to group planets.",
    "instructionZh": "用资料卡而非仅凭图片给行星分组。",
    "kind": "sort",
    "question": "Which evidence supports Earth's group?",
    "qZh": "哪条支持地球的分组？A 岩石表面；B 蓝色装饰边框。",
    "options": [
      "It has a rocky surface.",
      "It has a decorative blue border."
    ],
    "answer": 0,
    "feedback": "Use the stated physical properties.",
    "feedbackZh": "根据明确物理性质分类。",
    "sentence": [
      "The inner planets",
      "have rocky surfaces",
      "we can compare."
    ],
    "sentenceZh": "内侧行星有可比较的岩石表面。",
    "word": [
      "Read a Planet Card",
      "读取行星证据"
    ],
    "parent": "Read the property label. / 阅读性质标签。",
    "transfer": "金星最热不是水星；不把距离单独当作温度的唯一原因。",
    "evidenceEn": "The four inner planets are rocky. Jupiter and Saturn are gas giants; Uranus and Neptune are ice giants.",
    "evidenceZh": "内侧四颗行星是岩质行星；木星、土星是气态巨行星，天王星、海王星是冰巨星。",
    "groups": [
      "Inner rocky planets 内侧岩质行星",
      "Outer giant planets 外侧巨行星"
    ],
    "items": [
      [
        "Mercury 水星 · rocky 岩质",
        0
      ],
      [
        "Venus 金星 · rocky 岩质",
        0
      ],
      [
        "Earth 地球 · rocky 岩质",
        0
      ],
      [
        "Mars 火星 · rocky 岩质",
        0
      ],
      [
        "Jupiter 木星 · gas giant 气态巨行星",
        1
      ],
      [
        "Saturn 土星 · gas giant 气态巨行星",
        1
      ],
      [
        "Uranus 天王星 · ice giant 冰巨星",
        1
      ],
      [
        "Neptune 海王星 · ice giant 冰巨星",
        1
      ]
    ]
  },
  {
    "id": "g3-c05-m04",
    "chapter": 5,
    "local": 4,
    "title": "Paths Around the Sun",
    "zh": "绕太阳的路径",
    "lesson": "L1 Inquiry",
    "pages": "219、224–227",
    "intro": "Compare the orbit records for two planets.",
    "introZh": "比较两颗行星的公转记录。",
    "instruction": "Compare the orbit records for two planets.",
    "instructionZh": "比较两颗行星的公转记录。",
    "kind": "experiment",
    "question": "What does an orbit describe?",
    "qZh": "轨道描述什么？A 绕另一个天体的路径；B 颜色。",
    "options": [
      "A path around another object.",
      "A planet's color."
    ],
    "answer": 0,
    "feedback": "An orbit is the path an object follows around another.",
    "feedbackZh": "轨道是天体绕另一天体运行的路径。",
    "sentence": [
      "A planet rotates",
      "while it also",
      "orbits the Sun."
    ],
    "sentenceZh": "行星在自转时也绕太阳公转。",
    "word": [
      "Paths Around the Sun",
      "绕太阳的路径"
    ],
    "parent": "Follow the path, not the spinning marker. / 看轨迹而非自转标记。",
    "transfer": "火星约两年是近似，不做精确天数考试；不把走更长路等同于全部周期原因。",
    "evidenceEn": "A planet spins on its axis and also orbits the Sun. Mars’s period is approximately two Earth years in this simplified model.",
    "evidenceZh": "行星既自转也绕太阳公转。此简化模型采用火星公转周期约两地球年。",
    "experiment": {
      "model": "planet_motion",
      "diagram": "space",
      "variable": "Planet and elapsed model time 行星与模型经过时间",
      "controls": "Same Sun; Earth 1 year, Mars about 2 years 同一太阳；地球一年，火星约两年",
      "states": [
        {
          "label": "Start 起点",
          "reading": "Both marked planets start at their reference points. 两颗标记行星从参考点开始。",
          "earthAngleDeg": 0,
          "marsAngleDeg": 0,
          "elapsedYears": 0
        },
        {
          "label": "After 1 Earth year 一地球年后",
          "reading": "Earth completes one orbit; Mars is roughly halfway. 地球公转一圈，火星约半圈。",
          "earthAngleDeg": 360,
          "marsAngleDeg": 180,
          "elapsedYears": 1
        },
        {
          "label": "After 2 Earth years 两地球年后",
          "reading": "Earth completes two orbits; Mars about one. 地球约两圈，火星约一圈。",
          "earthAngleDeg": 720,
          "marsAngleDeg": 360,
          "elapsedYears": 2
        }
      ],
      "prediction": [
        "Earth and Mars will complete different numbers of orbits in the same time.",
        "Earth and Mars will complete equal numbers of orbits."
      ],
      "unit": ""
    },
    "extraPairs": [
      {
        "left": "Rotation 自转",
        "right": "Turns around its own axis 绕自身轴转动"
      },
      {
        "left": "Orbit 公转",
        "right": "Travels around the Sun 绕太阳运动"
      }
    ]
  },
  {
    "id": "g3-c05-m05",
    "chapter": 5,
    "local": 5,
    "title": "Small Objects, Clear Names",
    "zh": "小天体与清楚的名称",
    "lesson": "L1 The Sun and Its Planets",
    "pages": "224–225",
    "intro": "Match each description to the correct space object or event.",
    "introZh": "将描述与相应天体或现象匹配。",
    "instruction": "Match each description to the correct space object or event.",
    "instructionZh": "将描述与相应天体或现象匹配。",
    "kind": "experiment",
    "question": "What is a meteor?",
    "qZh": "流星是什么？A 物质进入大气时出现的发光现象；B 地上所有石头。",
    "options": [
      "The streak of light made as material enters the atmosphere.",
      "Every rock on the ground."
    ],
    "answer": 0,
    "feedback": "A meteor is the light phenomenon; a surviving piece on the ground is a meteorite.",
    "feedbackZh": "流星是发光现象，落地残块是陨石。",
    "sentence": [
      "A small space rock",
      "can produce a meteor",
      "when it enters the atmosphere."
    ],
    "sentenceZh": "小型太空岩块进入大气时可产生流星现象。",
    "word": [
      "Small Objects, Clear Names",
      "小天体与清楚的名称"
    ],
    "parent": "Separate the object from the event. / 区分物体和现象。",
    "transfer": "修正旧版名词混用；不教“小行星都是破碎行星”。",
    "evidenceEn": "A meteoroid can cause a meteor; a surviving piece on the ground is a meteorite. Asteroids and comets are other small Solar System objects.",
    "evidenceZh": "流星体可产生流星现象，落地残块称陨石。小行星与彗星是另外的太阳系小天体。",
    "experiment": {
      "model": "space_rock",
      "diagram": "space",
      "variable": "Stage of a small rock’s journey 小块岩石所处阶段",
      "controls": "One example object; not all objects reach the ground 同一示例物体；并非都能到达地面",
      "states": [
        {
          "label": "In space 在太空",
          "reading": "Meteoroid: a small rocky object in space. 流星体：太空中的小块岩石。",
          "stage": "space"
        },
        {
          "label": "Glowing in air 进入大气发光",
          "reading": "Meteor: the light phenomenon in the atmosphere. 流星：大气中的发光现象。",
          "stage": "atmosphere"
        },
        {
          "label": "A surviving piece lands 残块落地",
          "reading": "Meteorite: a piece that reaches the ground. 陨石：到达地面的残块。",
          "stage": "ground"
        }
      ],
      "prediction": [
        "The name will depend on the stage or phenomenon.",
        "The same name must describe every stage."
      ],
      "unit": ""
    },
    "extraPairs": [
      {
        "left": "Asteroid 小行星",
        "right": "Mostly rock or metal 岩石或金属为主"
      },
      {
        "left": "Comet 彗星",
        "right": "Icy body; may form a tail near the Sun 含冰天体，近太阳时可形成尾巴"
      }
    ]
  },
  {
    "id": "g3-c05-m06",
    "chapter": 5,
    "local": 6,
    "title": "More Detail",
    "zh": "更多细节",
    "lesson": "L2 Telescopes",
    "pages": "228–231",
    "intro": "Compare a distant target with and without a telescope model.",
    "introZh": "比较望远镜模型使用前后的远处目标。",
    "instruction": "Compare a distant target with and without a telescope model.",
    "instructionZh": "比较望远镜模型使用前后的远处目标。",
    "kind": "experiment",
    "question": "What changed?",
    "qZh": "什么变了？A 可观察细节；B 月球移到地球旁。",
    "options": [
      "The detail we can observe.",
      "The Moon moved next to Earth."
    ],
    "answer": 0,
    "feedback": "A telescope improves what we can observe; it does not move the object closer.",
    "feedbackZh": "望远镜改善观察，不搬动天体。",
    "sentence": [
      "A telescope helps us",
      "see more detail",
      "in distant objects."
    ],
    "sentenceZh": "望远镜帮助我们看到远处物体更多细节。",
    "word": [
      "More Detail",
      "更多细节"
    ],
    "parent": "Compare the same target. / 对比同一目标。",
    "transfer": "说明收集光的作用，不将无限放大等同于无限细节；禁止用望远镜看太阳。",
    "evidenceEn": "A telescope gathers light and helps resolve details. Magnification alone cannot reveal unlimited detail.",
    "evidenceZh": "望远镜收集光并帮助分辨细节。单纯放大不能产生无限细节。",
    "experiment": {
      "model": "telescope_detail",
      "diagram": "space",
      "variable": "View through an observing tool 观测工具下的视图",
      "controls": "Same original Moon target 同一原创月面目标",
      "states": [
        {
          "label": "Unaided view 未借助望远镜",
          "reading": "Only larger features can be separated clearly. 只能清楚分辨较大的特征。",
          "detailLevel": 1,
          "visibleCraters": 2
        },
        {
          "label": "Telescope view 望远镜视图",
          "reading": "More crater details can be separated in this model. 模型中可以分辨更多坑的细节。",
          "detailLevel": 2,
          "visibleCraters": 6
        }
      ],
      "prediction": [
        "The telescope view will reveal more distinguishable details.",
        "Unlimited magnification always creates unlimited detail."
      ],
      "unit": ""
    }
  },
  {
    "id": "g3-c05-m07",
    "chapter": 5,
    "local": 7,
    "title": "Guide the Light",
    "zh": "引导光线",
    "lesson": "L2 Telescopes",
    "pages": "230–235",
    "intro": "Follow light through a simple telescope model.",
    "introZh": "追踪简易望远镜模型中的光线。",
    "instruction": "Follow light through a simple telescope model.",
    "instructionZh": "追踪简易望远镜模型中的光线。",
    "kind": "sequence",
    "question": "Which part helps gather and focus light in this model?",
    "qZh": "模型哪个部件帮助聚光与成像？A 透镜；B 装饰带。",
    "options": [
      "The lens.",
      "The decorative strap."
    ],
    "answer": 0,
    "feedback": "This telescope uses a lens; other telescopes can use mirrors.",
    "feedbackZh": "此望远镜使用透镜，其他望远镜也可用反射镜。",
    "sentence": [
      "This lens changes",
      "the path of light",
      "in the telescope."
    ],
    "sentenceZh": "此透镜改变望远镜中光的路径。",
    "word": [
      "Guide the Light",
      "引导光线"
    ],
    "parent": "Follow the arrows from the target. / 从目标追踪箭头。",
    "transfer": "复习工具作用；为 Ch8 折射/反射拓展留桥梁，不考透镜公式。",
    "evidenceEn": "In this refracting-telescope example, light from a distant target passes through lenses and reaches the eye.",
    "evidenceZh": "在折射望远镜示例中，远方目标来的光经过透镜到达眼睛。",
    "sequence": [
      "Distant target 远方目标",
      "Objective lens 物镜",
      "Eyepiece 目镜",
      "Eye 眼睛"
    ]
  },
  {
    "id": "g3-c05-m08",
    "chapter": 5,
    "local": 8,
    "title": "Evidence Can Change Ideas",
    "zh": "证据能改变解释",
    "lesson": "L2 Telescopes",
    "pages": "232–235",
    "intro": "Compare two observation records before choosing a claim.",
    "introZh": "比较两份观察记录再选择解释。",
    "instruction": "Compare two observation records before choosing a claim.",
    "instructionZh": "比较两份观察记录再选择解释。",
    "kind": "experiment",
    "question": "What can the repeated observations support?",
    "qZh": "多次观察支持什么？A 一些卫星绕木星；B 所有天体都绕地球。",
    "options": [
      "Some moons orbit Jupiter.",
      "Every object in space orbits Earth."
    ],
    "answer": 0,
    "feedback": "Repeated positions support the idea of moons orbiting Jupiter.",
    "feedbackZh": "多次位置记录支持卫星绕木星的解释。",
    "sentence": [
      "New observations",
      "can help us",
      "improve an explanation."
    ],
    "sentenceZh": "新观察帮助我们改进解释。",
    "word": [
      "Evidence Can Change Ideas",
      "证据能改变解释"
    ],
    "parent": "Compare several dates. / 比较多个日期。",
    "transfer": "不声称单个发现独自证明完整日心体系；历史年份作为拓展不考背诵。",
    "evidenceEn": "Multiple nights of relative positions support the idea that some objects orbit Jupiter. This is a simplified historical-observation model.",
    "evidenceZh": "多晚相对位置记录支持有天体绕木星运动。这是历史观测思想的简化模型。",
    "experiment": {
      "model": "jupiter_moons",
      "diagram": "space",
      "variable": "Observation night 观测夜晚",
      "controls": "Jupiter and the same four tracked dots 木星与同样四个被追踪亮点",
      "states": [
        {
          "label": "Night 1 第一晚",
          "reading": "Four dots lie at these positions around Jupiter. 记录四个点相对木星的位置。",
          "moonOffsets": [
            -100,
            -40,
            50,
            115
          ]
        },
        {
          "label": "Night 2 第二晚",
          "reading": "The dots have changed positions relative to Jupiter. 点相对木星的位置改变。",
          "moonOffsets": [
            -65,
            20,
            85,
            130
          ]
        },
        {
          "label": "Night 3 第三晚",
          "reading": "Repeated observations support motion around Jupiter. 多晚记录支持有天体绕木星运动。",
          "moonOffsets": [
            -125,
            -80,
            -10,
            70
          ]
        }
      ],
      "prediction": [
        "Repeated positions may reveal a pattern of motion.",
        "One dot on one night proves every orbit in the Solar System."
      ],
      "unit": ""
    }
  },
  {
    "id": "g3-c05-m09",
    "chapter": 5,
    "local": 9,
    "title": "Stars in the Daytime",
    "zh": "白天的星星",
    "lesson": "L3 The Stars",
    "pages": "236–239",
    "intro": "Compare the same star field against dark and bright skies.",
    "introZh": "比较同一星空在暗与亮背景下的可见性。",
    "instruction": "Compare the same star field against dark and bright skies.",
    "instructionZh": "比较同一星空在暗与亮背景下的可见性。",
    "kind": "experiment",
    "question": "Why are most other stars hard to see by day?",
    "qZh": "白天其他恒星通常难见为何？A 明亮天空掩盖微弱星光；B 它们不存在了。",
    "options": [
      "The bright sky hides their faint light.",
      "They stop existing."
    ],
    "answer": 0,
    "feedback": "The stars remain, but the bright daytime sky makes them hard to see.",
    "feedbackZh": "恒星仍在，亮天空让它们难以看见。",
    "sentence": [
      "Most other stars",
      "are hard to see",
      "in the bright daytime sky."
    ],
    "sentenceZh": "明亮白昼天空中通常难见其他恒星。",
    "word": [
      "Stars in the Daytime",
      "白天的星星"
    ],
    "parent": "Watch whether the dots disappear or become hard to see. / 区分消失与难见。",
    "transfer": "太阳也是恒星；不说白天只能看到一种光，也不要求真实直视太阳。",
    "evidenceEn": "The star points remain in the model. A bright sky reduces their contrast; the Sun is itself a star.",
    "evidenceZh": "星点在模型中始终存在；明亮天空降低其对比度，太阳本身也是恒星。",
    "experiment": {
      "model": "sky_brightness",
      "diagram": "space",
      "variable": "Sky background brightness 天空背景亮度",
      "controls": "Same star positions and star brightness 相同星点位置与星点亮度",
      "states": [
        {
          "label": "Dark sky 暗天空",
          "reading": "The fixed star points are easy to see. 固定星点较容易看见。",
          "backgroundBrightness": 0.05
        },
        {
          "label": "Brighter sky 较亮天空",
          "reading": "The same stars become harder to distinguish. 同样星点较难分辨。",
          "backgroundBrightness": 0.55
        },
        {
          "label": "Bright daytime sky 明亮白天天空",
          "reading": "Most other stars are difficult to see against the bright sky. 多数其他恒星难以从亮天空中分辨。",
          "backgroundBrightness": 0.95
        }
      ],
      "prediction": [
        "The stars will become harder to see, although they remain there.",
        "The stars must disappear when the background is bright."
      ],
      "unit": ""
    }
  },
  {
    "id": "g3-c05-m10",
    "chapter": 5,
    "local": 10,
    "title": "Patterns, Not Strings",
    "zh": "星群图案并非连线",
    "lesson": "L3 The Stars",
    "pages": "238–241",
    "intro": "Connect a given star pattern, then remove the guide lines.",
    "introZh": "连接给定星群图案，再隐藏辅助线。",
    "instruction": "Connect a given star pattern, then remove the guide lines.",
    "instructionZh": "连接给定星群图案，再隐藏辅助线。",
    "kind": "experiment",
    "question": "Are the connecting lines real objects in space?",
    "qZh": "连线是太空实物吗？A 是；B 否，帮助识别图案。",
    "options": [
      "Yes.",
      "No, they help us recognize a pattern."
    ],
    "answer": 1,
    "feedback": "The lines are guides drawn by people.",
    "feedbackZh": "连线是人画的识别辅助。",
    "sentence": [
      "We use patterns",
      "to help identify",
      "parts of the night sky."
    ],
    "sentenceZh": "我们用图案识别夜空中的部分区域。",
    "word": [
      "Patterns, Not Strings",
      "星群图案并非连线"
    ],
    "parent": "Turn the guide lines off. / 关闭辅助线。",
    "transfer": "相邻视方向恒星距离未必近；不同文化图案可不同，现代星座还有天空区域含义。",
    "evidenceEn": "The Big Dipper is an asterism within Ursa Major. Apparent neighboring stars need not be close in space.",
    "evidenceZh": "北斗是大熊座中的一个星群图案；视方向相邻的恒星在空间中不一定靠近。",
    "experiment": {
      "model": "big_dipper",
      "diagram": "space",
      "variable": "Guide lines on or off 连线提示开关",
      "controls": "Same seven schematic stars 相同七颗示意星点",
      "states": [
        {
          "label": "Show pattern 显示图案",
          "reading": "Guide lines help identify the Big Dipper shape. 提示连线帮助辨认北斗图案。",
          "showLines": true
        },
        {
          "label": "Hide lines 隐藏连线",
          "reading": "The stars remain; the connecting lines are only guides. 恒星仍在，连线只是识别辅助。",
          "showLines": false
        }
      ],
      "prediction": [
        "The stars will remain when guide lines are hidden.",
        "The stars exist only when connected by lines."
      ],
      "unit": ""
    },
    "extraSequence": [
      "Bowl corner 1 斗口角1",
      "Bowl corner 2 斗口角2",
      "Bowl corner 3 斗底角3",
      "Bowl corner 4 斗底角4",
      "Handle star 1 柄星1",
      "Handle star 2 柄星2",
      "Handle star 3 柄星3"
    ]
  },
  {
    "id": "g3-c05-m11",
    "chapter": 5,
    "local": 11,
    "title": "A Different Night View",
    "zh": "不同季节的夜空",
    "lesson": "L3 The Stars",
    "pages": "242–247",
    "intro": "Move Earth and compare which direction its night side faces.",
    "introZh": "移动地球，比较夜间一侧朝向。",
    "instruction": "Move Earth and compare which direction its night side faces.",
    "instructionZh": "移动地球，比较夜间一侧朝向。",
    "kind": "experiment",
    "question": "Why can some night-sky patterns change with the season?",
    "qZh": "季节间部分夜空图案为何不同？A 公转使夜间方向不同；B 全部恒星每年绕地球。",
    "options": [
      "Earth's night side faces different directions during its orbit.",
      "All stars go around Earth each year."
    ],
    "answer": 0,
    "feedback": "Earth's changing position changes our nighttime view.",
    "feedbackZh": "地球位置改变使夜间视野改变。",
    "sentence": [
      "As Earth orbits the Sun,",
      "our nighttime view",
      "changes."
    ],
    "sentenceZh": "地球绕太阳公转时，夜间视野改变。",
    "word": [
      "A Different Night View",
      "不同季节的夜空"
    ],
    "parent": "Look away from the Sun from each position. / 从各位置朝背向太阳方向看。",
    "transfer": "不说所有星座每季都消失；可见性还取决于纬度与观测时刻。",
    "evidenceEn": "As Earth orbits, its nighttime view changes. Actual visible stars also depend on latitude and time of night.",
    "evidenceZh": "地球公转使夜间朝向的远方天空改变，实际可见恒星也受纬度与夜间时刻影响。",
    "experiment": {
      "model": "night_view",
      "diagram": "space",
      "variable": "Earth position in orbit 地球公转位置",
      "controls": "Fixed Sun and distant-star directions 固定太阳与远方星群方向",
      "states": [
        {
          "label": "One side of orbit 轨道一侧",
          "reading": "The nighttime direction points away from the Sun toward star group A. 夜间背向太阳，看向星群A方向。",
          "earthX": 120,
          "nightDirection": "left",
          "starGroup": "A"
        },
        {
          "label": "Opposite side 轨道另一侧",
          "reading": "The nighttime direction now points toward star group B. 夜间背向太阳，现在看向星群B方向。",
          "earthX": 400,
          "nightDirection": "right",
          "starGroup": "B"
        }
      ],
      "prediction": [
        "The nighttime view direction will change across the orbit.",
        "The nighttime view must point to the same distant direction all year."
      ],
      "unit": ""
    }
  },
  {
    "id": "g3-c05-m12",
    "chapter": 5,
    "local": 12,
    "title": "An Observatory Report",
    "zh": "观测台报告",
    "lesson": "Chapter review",
    "pages": "248–251",
    "intro": "Build a report using a tool, a record, and a supported claim.",
    "introZh": "用工具、记录和有依据的解释组成报告。",
    "instruction": "Build a report using a tool, a record, and a supported claim.",
    "instructionZh": "用工具、记录和有依据的解释组成报告。",
    "kind": "match",
    "question": "Can apparent brightness alone tell us a star's distance?",
    "qZh": "只凭看起来亮能确定恒星距离吗？A 能；B 不能，需要更多信息。",
    "options": [
      "Yes.",
      "No, more information is needed."
    ],
    "answer": 1,
    "feedback": "Brightness also depends on the star itself, not only distance.",
    "feedbackZh": "亮度还与恒星自身有关。",
    "sentence": [
      "Our observations support this idea,",
      "but we need more data",
      "for that question."
    ],
    "sentenceZh": "观察支持这个解释，但那个问题还需要更多数据。",
    "word": [
      "An Observatory Report",
      "观测台报告"
    ],
    "parent": "Ask what each record can actually show. / 问记录实际能说明什么。",
    "transfer": "解锁 Observatory Desk；太阳系、银河系嵌套卡作为收尾拓展；不考恒星大小年龄排名。",
    "evidenceEn": "An observatory report links each claim to a suitable record. Apparent brightness alone cannot establish distance.",
    "evidenceZh": "观测报告把每个说法与合适记录相连。仅凭看起来的亮度不能确定距离。",
    "pairs": [
      {
        "left": "Planet order 行星顺序",
        "right": "Labeled orbital map 带名称的轨道地图"
      },
      {
        "left": "Objects orbit Jupiter 天体绕木星运动",
        "right": "Telescope positions over several nights 多晚望远镜位置记录"
      },
      {
        "left": "Seasonal night view 季节夜空方向",
        "right": "Orbit model and seasonal sky records 公转模型与季节观测记录"
      }
    ]
  },
  {
    "id": "g3-c06-m01",
    "chapter": 6,
    "local": 1,
    "title": "Describe Before You Guess",
    "zh": "先描述再猜测",
    "lesson": "L1 Solids, Liquids, and Gases",
    "pages": "260–263",
    "intro": "Measure the objects and record their properties.",
    "introZh": "测量物体并记录性质。",
    "instruction": "Measure the objects and record their properties.",
    "instructionZh": "测量物体并记录性质。",
    "kind": "match",
    "question": "Which is a measurement?",
    "qZh": "哪项是测量？A 长方块长6厘米；B 方块很可爱。",
    "options": [
      "The block is 6 cm long.",
      "The block looks lovely."
    ],
    "answer": 0,
    "feedback": "A measurement gives a quantity and a unit.",
    "feedbackZh": "测量给出数量和单位。",
    "sentence": [
      "We can describe matter",
      "using properties",
      "we observe or measure."
    ],
    "sentenceZh": "可用观察或测量到的性质描述物质。",
    "word": [
      "Describe Before You Guess",
      "先描述再猜测"
    ],
    "parent": "Find the number and unit. / 找数字和单位。",
    "transfer": "区分质量与重量，G3用g表示质量；不能用体积大就断定质量大。",
    "evidenceEn": "Length and mass measurements include a number and a unit. Color and texture are observations.",
    "evidenceZh": "长度和质量包含数量与单位，颜色和质地属于观察描述。",
    "pairs": [
      {
        "left": "Pencil: ruler reads 12 cm 铅笔尺读12厘米",
        "right": "Length: 12 cm 长度12厘米"
      },
      {
        "left": "Block: balance reads 40 g 方块天平40克",
        "right": "Mass: 40 g 质量40克"
      },
      {
        "left": "Paper strip: ruler reads 8 cm 纸条尺读8厘米",
        "right": "Length: 8 cm 长度8厘米"
      },
      {
        "left": "Block: brown and rough 方块棕色粗糙",
        "right": "Color and texture 颜色与质地"
      }
    ]
  },
  {
    "id": "g3-c06-m02",
    "chapter": 6,
    "local": 2,
    "title": "Three States",
    "zh": "三种状态",
    "lesson": "L1 Solids, Liquids, and Gases",
    "pages": "264–265",
    "intro": "Move the solid, liquid, and gas into new containers.",
    "introZh": "将固体、液体和气体放进新容器。",
    "instruction": "Move the solid, liquid, and gas into new containers.",
    "instructionZh": "将固体、液体和气体放进新容器。",
    "kind": "experiment",
    "question": "Which sample spreads to fill its closed container?",
    "qZh": "哪种样本扩散充满密闭容器？A 气体；B 固体块。",
    "options": [
      "The gas.",
      "The solid block."
    ],
    "answer": 0,
    "feedback": "A gas spreads through the space available to it.",
    "feedbackZh": "气体扩散占据可用空间。",
    "sentence": [
      "Solids, liquids, and gases",
      "behave differently",
      "in containers."
    ],
    "sentenceZh": "固体、液体、气体在容器中表现不同。",
    "word": [
      "Three States",
      "三种状态"
    ],
    "parent": "Compare shape and occupied space. / 比较形状和占据空间。",
    "transfer": "讲常见状态，不说宇宙只有三种状态；水蒸气看不见，白雾是小液滴。",
    "evidenceEn": "Particles shown are models, not enlarged photographs.",
    "evidenceZh": "微粒图仅为模型，并非放大照片。",
    "experiment": {
      "variable": "Container shape and material state 容器形状与物态",
      "controls": "Compare the same amount of each material before and after transfer. 每种材料转移前后量相同。",
      "states": [
        {
          "label": "Solid block 固体块",
          "reading": "The block keeps its own shape. 固体块保持形状。",
          "state": "solid"
        },
        {
          "label": "Liquid water 液态水",
          "reading": "The same amount takes the new container shape. 同量水随容器改形。",
          "state": "liquid"
        },
        {
          "label": "Sealed gas 密闭气体",
          "reading": "Gas spreads through the available space. 气体充满可用空间。",
          "state": "gas"
        }
      ],
      "prediction": [
        "The three states will behave differently.",
        "All three states will keep the same shape."
      ],
      "diagram": "matter",
      "model": "states",
      "unit": "",
      "example": true
    }
  },
  {
    "id": "g3-c06-m03",
    "chapter": 6,
    "local": 3,
    "title": "Heat and Cool",
    "zh": "加热与冷却",
    "lesson": "L1 Solids, Liquids, and Gases",
    "pages": "266–269",
    "intro": "Change the temperature and follow water's state.",
    "introZh": "改变温度并观察水的状态。",
    "instruction": "Change the temperature and follow water's state.",
    "instructionZh": "改变温度并观察水的状态。",
    "kind": "match",
    "question": "What is condensation?",
    "qZh": "什么是凝结？A 水蒸气变液水；B 冰变液水。",
    "options": [
      "Water vapor becomes liquid water.",
      "Ice becomes liquid water."
    ],
    "answer": 0,
    "feedback": "Condensation changes gas to liquid.",
    "feedbackZh": "凝结是气态变液态。",
    "sentence": [
      "Cooling water vapor",
      "can make it",
      "condense into liquid water."
    ],
    "sentenceZh": "冷却水蒸气可使其凝结为液水。",
    "word": [
      "Heat and Cool",
      "加热与冷却"
    ],
    "parent": "Follow gas back to liquid. / 从气态追踪回液态。",
    "transfer": "熔化与溶解区分；蒸发可在未沸腾时发生；不要求孩子使用热源。",
    "evidenceEn": "Melting and evaporation move toward liquid and gas; freezing and condensation reverse those changes.",
    "evidenceZh": "融化和蒸发分别变成液体和气体，凝固和凝结反向变化。",
    "pairs": [
      {
        "left": "Ice → liquid water 冰到液水",
        "right": "Melting 融化"
      },
      {
        "left": "Liquid → ice 液水到冰",
        "right": "Freezing 凝固"
      },
      {
        "left": "Liquid → water vapor 液水到水蒸气",
        "right": "Evaporation 蒸发"
      },
      {
        "left": "Water vapor → liquid 水蒸气到液水",
        "right": "Condensation 凝结"
      }
    ],
    "extraSequence": [
      "Ice 冰",
      "Liquid water 液水",
      "Water vapor 水蒸气"
    ]
  },
  {
    "id": "g3-c06-m04",
    "chapter": 6,
    "local": 4,
    "title": "Where Did the Mass Go?",
    "zh": "质量去哪了",
    "lesson": "L1 Inquiry Skill Measure",
    "pages": "270–271",
    "intro": "Weigh the closed container before and after the ice melts.",
    "introZh": "称量密闭容器中冰融化前后的质量。",
    "instruction": "Weigh the closed container before and after the ice melts.",
    "instructionZh": "称量密闭容器中冰融化前后的质量。",
    "kind": "experiment",
    "question": "What happens to the total mass in this closed model?",
    "qZh": "密闭模型总质量如何？A 不变；B 变零。",
    "options": [
      "It stays the same.",
      "It becomes zero."
    ],
    "answer": 0,
    "feedback": "No material leaves or enters, so the total mass stays the same.",
    "feedbackZh": "无物质进出，总质量保持。",
    "sentence": [
      "The state changes,",
      "but the total mass",
      "stays the same in this closed system."
    ],
    "sentenceZh": "状态改变，但此密闭系统总质量不变。",
    "word": [
      "Where Did the Mass Go?",
      "质量去哪了"
    ],
    "parent": "Include the container both times. / 两次都包含容器。",
    "transfer": "不把质量守恒错误扩展成每个开放杯子称重都不变；体积可以改变。",
    "evidenceEn": "The phase changed, but the closed system still has 120 grams. An open leaking container is a different system.",
    "evidenceZh": "状态改变但密闭系统仍是120克；开放漏水容器是另一种系统。",
    "experiment": {
      "variable": "Ice melts inside a closed container 密闭容器内融冰",
      "controls": "Same sealed container; nothing enters or leaves. 同一密闭容器，无物质进出。",
      "states": [
        {
          "label": "Before melting 融化前",
          "reading": "Total mass: 120 g. 总质量120克。",
          "value": 120,
          "phase": "ice"
        },
        {
          "label": "After melting 融化后",
          "reading": "Total mass: 120 g. 总质量120克。",
          "value": 120,
          "phase": "water"
        }
      ],
      "prediction": [
        "Total mass will stay the same.",
        "Total mass will disappear as ice melts."
      ],
      "diagram": "matter",
      "model": "closed_mass",
      "unit": "",
      "example": true
    }
  },
  {
    "id": "g3-c06-m05",
    "chapter": 6,
    "local": 5,
    "title": "Sort by Evidence",
    "zh": "按性质分类",
    "lesson": "L2 Building Blocks of Matter",
    "pages": "272–275",
    "intro": "Choose a rule and use it for every sample.",
    "introZh": "选择一条规则，并用于所有样本。",
    "instruction": "Choose a rule and use it for every sample.",
    "instructionZh": "选择一条规则，并用于所有样本。",
    "kind": "sort",
    "question": "Does every metal in these records stick to the magnet?",
    "qZh": "记录中所有金属都被吸引吗？A 是；B 否，本测试铝没有。",
    "options": [
      "Yes.",
      "No, aluminum does not in this test."
    ],
    "answer": 1,
    "feedback": "Different classification rules give different groups.",
    "feedbackZh": "不同分类规则产生不同分组。",
    "sentence": [
      "I grouped the samples",
      "by the property",
      "shown in the records."
    ],
    "sentenceZh": "我按记录中的性质给样本分组。",
    "word": [
      "Sort by Evidence",
      "按性质分类"
    ],
    "parent": "Apply the same rule to every card. / 对每张卡用同一规则。",
    "transfer": "金属导电不是儿童自行接市电实验；此处均为给定记录。",
    "evidenceEn": "Iron and aluminum are metals, but only the iron sample was attracted in this test.",
    "evidenceZh": "铁和铝均属金属，本次只有铁样本被吸引。",
    "groups": [
      "Attracted by this magnet 本实验被吸引",
      "Not attracted 本实验未被吸引"
    ],
    "items": [
      [
        "Iron: metal; attracted 铁：金属、被吸引",
        0
      ],
      [
        "Aluminum: metal; not attracted 铝：金属、未被吸引",
        1
      ],
      [
        "Wood: nonmetal; not attracted 木：非金属、未被吸引",
        1
      ],
      [
        "Plastic: nonmetal; not attracted 塑料：非金属、未被吸引",
        1
      ]
    ],
    "extraPairs": [
      {
        "left": "Iron and aluminum 铁与铝",
        "right": "Metals 金属"
      },
      {
        "left": "Wood and plastic 木与塑料",
        "right": "Nonmetals 非金属"
      }
    ]
  },
  {
    "id": "g3-c06-m06",
    "chapter": 6,
    "local": 6,
    "title": "Tiny Building Blocks",
    "zh": "微小构成单位",
    "lesson": "L2 Building Blocks of Matter",
    "pages": "274–277",
    "intro": "Use the model pieces to represent atoms of two elements.",
    "introZh": "用模型块表示两种元素的原子。",
    "instruction": "Use the model pieces to represent atoms of two elements.",
    "instructionZh": "用模型块表示两种元素的原子。",
    "kind": "sort",
    "question": "What does one labeled circle represent here?",
    "qZh": "一个带标签圆表示什么？A 原子模型；B 这个尺寸的真实原子照片。",
    "options": [
      "An atom model.",
      "A real atom photographed at this size."
    ],
    "answer": 0,
    "feedback": "The circles are models for particles too small to see unaided.",
    "feedbackZh": "圆是肉眼无法直接看到的微粒模型。",
    "sentence": [
      "Matter is made of",
      "tiny particles",
      "we can represent with models."
    ],
    "sentenceZh": "物质由微小粒子构成，可用模型表示。",
    "word": [
      "Tiny Building Blocks",
      "微小构成单位"
    ],
    "parent": "Read the model key. / 读图例。",
    "transfer": "不教同元素每个原子所有性质完全相同；水也不是“水元素”。",
    "evidenceEn": "The element label identifies the model particle; color is only a drawing convention.",
    "evidenceZh": "元素标签识别模型微粒，颜色只是绘图约定。",
    "groups": [
      "Oxygen models 氧模型",
      "Hydrogen models 氢模型"
    ],
    "items": [
      [
        "Red circle labeled O 红圆标O",
        0
      ],
      [
        "White circle labeled H 白圆标H",
        1
      ],
      [
        "Another O circle 另一个O圆",
        0
      ],
      [
        "Another H circle 另一个H圆",
        1
      ]
    ],
    "extraPairs": [
      {
        "left": "Two H models and one O model 两H一O",
        "right": "A water molecule model 水分子模型"
      },
      {
        "left": "O label O标签",
        "right": "Oxygen element 氧元素"
      }
    ]
  },
  {
    "id": "g3-c06-m07",
    "chapter": 6,
    "local": 7,
    "title": "A Useful Element Map",
    "zh": "元素地图",
    "lesson": "L2 Building Blocks of Matter",
    "pages": "276–279",
    "intro": "Find an element using its name and symbol.",
    "introZh": "用名称与符号寻找元素。",
    "instruction": "Find an element using its name and symbol.",
    "instructionZh": "用名称与符号寻找元素。",
    "kind": "match",
    "question": "Which symbol matches oxygen?",
    "qZh": "哪个符号代表氧？A O；B Fe。",
    "options": [
      "O.",
      "Fe."
    ],
    "answer": 0,
    "feedback": "O is the symbol for oxygen; Fe represents iron. O",
    "feedbackZh": "表示氧，Fe表示铁。",
    "sentence": [
      "The periodic table",
      "organizes elements",
      "and their symbols."
    ],
    "sentenceZh": "元素周期表组织元素及其符号。",
    "word": [
      "A Useful Element Map",
      "元素地图"
    ],
    "parent": "Match the name to its box. / 将名称匹配到方格。",
    "transfer": "分类概念优先，不要求背原子序数；若完整表展示需使用已核验的现代数据。",
    "evidenceEn": "Element names and symbols are different ways to identify the same element.",
    "evidenceZh": "元素名称与符号可用于识别同一种元素。",
    "pairs": [
      {
        "left": "Hydrogen 氢",
        "right": "H · period 1, group 1 第1周期1族"
      },
      {
        "left": "Carbon 碳",
        "right": "C · period 2, group 14 第2周期14族"
      },
      {
        "left": "Oxygen 氧",
        "right": "O · period 2, group 16 第2周期16族"
      },
      {
        "left": "Iron 铁",
        "right": "Fe · period 4, group 8 第4周期8族"
      },
      {
        "left": "Aluminum 铝",
        "right": "Al · period 3, group 13 第3周期13族"
      }
    ]
  },
  {
    "id": "g3-c06-m08",
    "chapter": 6,
    "local": 8,
    "title": "Mix or Join?",
    "zh": "混合还是组合",
    "lesson": "L2→L3 bridge",
    "pages": "275–279、286–287",
    "intro": "Compare model mixtures with a model of water.",
    "introZh": "比较混合物模型和水的模型。",
    "instruction": "Compare model mixtures with a model of water.",
    "instructionZh": "比较混合物模型和水的模型。",
    "kind": "sort",
    "question": "Is a mixture of beans a new kind of bean?",
    "qZh": "两种豆混合变成新豆种了吗？A 是；B 否，仍是两种。",
    "options": [
      "Yes.",
      "No, both kinds remain."
    ],
    "answer": 1,
    "feedback": "The parts of this mixture remain identifiable.",
    "feedbackZh": "这种混合物的组成仍可辨认。",
    "sentence": [
      "In this mixture,",
      "the different materials",
      "remain present."
    ],
    "sentenceZh": "此混合物中，不同材料仍存在。",
    "word": [
      "Mix or Join?",
      "混合还是组合"
    ],
    "parent": "Look for each original material. / 找原来的各材料。",
    "transfer": "物质、元素、原子和分子不是同义词；扩展标明不超纲计分。",
    "evidenceEn": "Red and white beans remain identifiable after mixing; H2O is a different, particle-level model.",
    "evidenceZh": "红白豆混合后仍能辨认；H2O是不同的微粒层次模型。",
    "groups": [
      "Red beans 红豆",
      "White beans 白豆"
    ],
    "items": [
      [
        "Red bean A 红豆A",
        0
      ],
      [
        "White bean B 白豆B",
        1
      ],
      [
        "Red bean C 红豆C",
        0
      ],
      [
        "White bean D 白豆D",
        1
      ]
    ],
    "extraPairs": [
      {
        "left": "Bean mixture 豆类混合物",
        "right": "Separate by sorting 可以分类分离"
      },
      {
        "left": "H2O model H2O模型",
        "right": "Two H and one O are joined 表示两H与一O组合"
      }
    ]
  },
  {
    "id": "g3-c06-m09",
    "chapter": 6,
    "local": 9,
    "title": "Change the Shape",
    "zh": "改变形状",
    "lesson": "L3 Changing Matter",
    "pages": "284–287",
    "intro": "Fold, cut, or melt the model material and compare what remains.",
    "introZh": "折叠、切割或熔化模型材料，比较剩下什么。",
    "instruction": "Fold, cut, or melt the model material and compare what remains.",
    "instructionZh": "折叠、切割或熔化模型材料，比较剩下什么。",
    "kind": "match",
    "question": "Which is a physical change here?",
    "qZh": "哪个是此处的物理变化？A 剪纸；B 铁变锈。",
    "options": [
      "Cutting paper.",
      "Iron becoming rust."
    ],
    "answer": 0,
    "feedback": "Cut paper is still paper; cutting changes its shape and size.",
    "feedbackZh": "剪后仍是纸，只改变形状大小。",
    "sentence": [
      "A physical change",
      "does not by itself",
      "make a new substance."
    ],
    "sentenceZh": "物理变化本身不产生新物质。",
    "word": [
      "Change the Shape",
      "改变形状"
    ],
    "parent": "Ask what the material is after the change. / 看变化后材料是什么。",
    "transfer": "可逆不是物理变化唯一判据；剪纸难复原仍是物理变化。",
    "evidenceEn": "Shape or state can change while the substance remains the same.",
    "evidenceZh": "形状或物态可改变，物质身份仍相同。",
    "pairs": [
      {
        "left": "Flat paper → folded paper 平纸折叠",
        "right": "Shape changes; still paper 改形仍是纸"
      },
      {
        "left": "Whole sheet → pieces 纸剪碎",
        "right": "Size changes; still paper 尺寸改变仍是纸"
      },
      {
        "left": "Ice → liquid water 冰融化",
        "right": "State changes; still water 物态改变仍是水"
      }
    ]
  },
  {
    "id": "g3-c06-m10",
    "chapter": 6,
    "local": 10,
    "title": "Evidence of Something New",
    "zh": "新物质的证据",
    "lesson": "L3 Changing Matter",
    "pages": "288–290",
    "intro": "Compare the material before and after the recorded change.",
    "introZh": "比较记录中变化前后的物质。",
    "instruction": "Compare the material before and after the recorded change.",
    "instructionZh": "比较记录中变化前后的物质。",
    "kind": "experiment",
    "question": "Does seeing bubbles always prove a chemical change?",
    "qZh": "冒泡总能证明化学变化吗？A 能；B 不能，水沸腾也冒泡。",
    "options": [
      "Yes.",
      "No, boiling water also has bubbles."
    ],
    "answer": 1,
    "feedback": "Bubbles are a clue; identify what substances are present.",
    "feedbackZh": "气泡是线索，还需识别物质。",
    "sentence": [
      "A chemical change",
      "produces",
      "new substances."
    ],
    "sentenceZh": "化学变化产生新物质。",
    "word": [
      "Evidence of Something New",
      "新物质的证据"
    ],
    "parent": "Compare with boiling water. / 和水沸腾比较。",
    "transfer": "蜡熔化与燃烧可并存；颜色/温度变化单独也不充分。",
    "evidenceEn": "New-substance evidence matters. Bubbles can also arise from a physical state change.",
    "evidenceZh": "关键是新物质证据；物态变化也可能产生气泡。",
    "experiment": {
      "variable": "Observe different change records 观察不同变化记录",
      "controls": "Use information about the substances, not bubbles alone. 结合物质信息，不只看气泡。",
      "states": [
        {
          "label": "Iron rusts 铁生锈",
          "reading": "A new iron-containing rust material forms over time. 随时间生成含铁的新锈物质。",
          "process": "rust"
        },
        {
          "label": "Baking soda + vinegar 小苏打加醋",
          "reading": "A reaction produces carbon dioxide gas and other products. 反应生成二氧化碳等产物。",
          "process": "reaction"
        },
        {
          "label": "Boiling water 沸水",
          "reading": "Bubbles contain water vapor; no new substance is required. 气泡为水蒸气，不必生成新物质。",
          "process": "boiling"
        }
      ],
      "prediction": [
        "Bubbles alone may not identify a chemical change.",
        "Every bubble proves a new substance formed."
      ],
      "diagram": "matter",
      "model": "changes",
      "unit": "",
      "example": true
    }
  },
  {
    "id": "g3-c06-m11",
    "chapter": 6,
    "local": 11,
    "title": "The Chalk Case",
    "zh": "粉笔变化调查",
    "lesson": "L3 Inquiry",
    "pages": "292–293",
    "intro": "Compare the chalk in water with the chalk in vinegar.",
    "introZh": "比较粉笔在水和醋中的记录。",
    "instruction": "Compare the chalk in water with the chalk in vinegar.",
    "instructionZh": "比较粉笔在水和醋中的记录。",
    "kind": "experiment",
    "question": "Which comparison helps separate crushing from reacting?",
    "qZh": "什么有助区分粉碎和反应？A 比较原物质与产物；B 只看杯子好看。",
    "options": [
      "Compare the original material and products.",
      "Compare only which cup is prettier."
    ],
    "answer": 0,
    "feedback": "Crushing changes size; reacting can form new substances.",
    "feedbackZh": "粉碎改变大小，反应可生成新物质。",
    "sentence": [
      "We compare the evidence",
      "before deciding",
      "what kind of change occurred."
    ],
    "sentenceZh": "判断变化类型前先比较证据。",
    "word": [
      "The Chalk Case",
      "粉笔变化调查"
    ],
    "parent": "Check both size and substance. / 同时看大小和物质。",
    "transfer": "属简化演示，不让孩子品尝液体；更复杂化学机制不强制。",
    "evidenceEn": "The defined material is calcium carbonate chalk. Crushing changes size; the acid reaction can form new substances.",
    "evidenceZh": "题中明确为碳酸钙粉笔。磨碎改大小，酸反应可生成新物质。",
    "experiment": {
      "variable": "Treatment of calcium carbonate chalk 碳酸钙粉笔的处理",
      "controls": "Equal chalk mass and equal observation time. 粉笔质量与观察时间相同。",
      "states": [
        {
          "label": "Water 水组",
          "reading": "No acid reaction is observed in this model. 模型中未见酸反应。",
          "treatment": "water"
        },
        {
          "label": "Vinegar 醋组",
          "reading": "Reaction produces gas; chalk is chemically changed. 反应产气，发生化学变化。",
          "treatment": "vinegar"
        },
        {
          "label": "Crush only 仅磨碎",
          "reading": "Pieces become smaller; chalk remains chalk. 颗粒变小，仍为粉笔。",
          "treatment": "crush"
        }
      ],
      "prediction": [
        "Vinegar and crushing will give different evidence.",
        "Crushing always makes the same products as acid."
      ],
      "diagram": "matter",
      "model": "chalk",
      "unit": "",
      "example": true
    }
  },
  {
    "id": "g3-c06-m12",
    "chapter": 6,
    "local": 12,
    "title": "A Material's Story",
    "zh": "一件材料的故事",
    "lesson": "Chapter review",
    "pages": "294–297",
    "intro": "Build a report from measurements, particle models, and change records.",
    "introZh": "用测量、粒子模型与变化记录组成报告。",
    "instruction": "Build a report from measurements, particle models, and change records.",
    "instructionZh": "用测量、粒子模型与变化记录组成报告。",
    "kind": "match",
    "question": "Is one color change enough to identify every chemical reaction?",
    "qZh": "仅凭变色能判定所有化学反应吗？A 能；B 不能。",
    "options": [
      "Yes.",
      "No."
    ],
    "answer": 1,
    "feedback": "Use several observations and information about the substances.",
    "feedbackZh": "结合多项观察与物质信息。",
    "sentence": [
      "The evidence shows a change,",
      "but we need more information",
      "to explain it fully."
    ],
    "sentenceZh": "证据显示发生变化，但完整解释还需更多信息。",
    "word": [
      "A Material's Story",
      "一件材料的故事"
    ],
    "parent": "Separate observation from explanation. / 区分观察和解释。",
    "transfer": "解锁 Matter Bench；Ch7再连接能量与物质变化，科学与英语分别记录。",
    "evidenceEn": "Use measurements, symbols, and change evidence together. A color change alone may need more investigation.",
    "evidenceZh": "综合测量、符号与变化证据；单纯变色可能还需进一步研究。",
    "pairs": [
      {
        "left": "Sample label: 25 g solid 样本25克固体",
        "right": "Mass and state record 质量与状态记录"
      },
      {
        "left": "Fe symbol Fe符号",
        "right": "Iron 铁"
      },
      {
        "left": "Ice becomes water 冰变水",
        "right": "Physical state change 物态变化"
      },
      {
        "left": "Iron forms rust 铁生成锈",
        "right": "Evidence of a new substance 新物质证据"
      },
      {
        "left": "Unknown sample only changes color 未知样本仅变色",
        "right": "Need more evidence 需要更多证据"
      }
    ]
  },
  {
    "id": "g3-c07-m01",
    "chapter": 7,
    "local": 1,
    "title": "Find the Change",
    "zh": "寻找变化",
    "lesson": "L1 Energy All Around",
    "pages": "302–305",
    "intro": "Watch what changes when energy is transferred.",
    "introZh": "观察能量传递时发生的变化。",
    "instruction": "Watch what changes when energy is transferred.",
    "instructionZh": "观察能量传递时发生的变化。",
    "kind": "match",
    "question": "Which is evidence of a change?",
    "qZh": "哪项是变化证据？A 小车开始移动；B 小车表情可爱。",
    "options": [
      "The car starts moving.",
      "The car has a cheerful face."
    ],
    "answer": 0,
    "feedback": "Movement is an observable change in this example.",
    "feedbackZh": "运动是此例中可观察的变化。",
    "sentence": [
      "Energy transfers",
      "can cause",
      "changes."
    ],
    "sentenceZh": "能量传递可引起变化。",
    "word": [
      "Find the Change",
      "寻找变化"
    ],
    "parent": "Compare before and after. / 比较前后。",
    "transfer": "承接 G2 运动与 G3物质；不以角色表情表示能量强弱。",
    "evidenceEn": "Motion, melting, and illumination are observable changes involving energy transfer.",
    "evidenceZh": "运动、融化和发光是与能量传递有关的可观察变化。",
    "pairs": [
      {
        "left": "Push the cart 推小车",
        "right": "Cart begins moving 小车运动"
      },
      {
        "left": "Ice in a warmer place 冰放在暖处",
        "right": "Ice melts 冰融化"
      },
      {
        "left": "Switch on a working lamp 打开正常灯具",
        "right": "Lamp gives light 灯发光"
      }
    ]
  },
  {
    "id": "g3-c07-m02",
    "chapter": 7,
    "local": 2,
    "title": "Energy in Everyday Life",
    "zh": "日常能量",
    "lesson": "L1 Energy All Around",
    "pages": "306–307",
    "intro": "Match each example to the energy form shown.",
    "introZh": "将实例与显示的能量形式匹配。",
    "instruction": "Match each example to the energy form shown.",
    "instructionZh": "将实例与显示的能量形式匹配。",
    "kind": "match",
    "question": "Can a working lamp give off both light and heat?",
    "qZh": "灯能同时发出光并传热吗？A 能；B 不能，只能一种。",
    "options": [
      "Yes.",
      "No, only one form is allowed."
    ],
    "answer": 0,
    "feedback": "A device can transfer energy in more than one way.",
    "feedbackZh": "装置可通过不止一种方式传递能量。",
    "sentence": [
      "One device",
      "can change energy",
      "in several ways."
    ],
    "sentenceZh": "一个装置能以几种方式转化能量。",
    "word": [
      "Energy in Everyday Life",
      "日常能量"
    ],
    "parent": "Look for more than one output. / 寻找多个输出。",
    "transfer": "不将机械能仅定义为动能；本级重点运动和位置储能，详细概念卡补充。",
    "evidenceEn": "A device can transfer energy in several ways; the labels describe energy, not a material stored in a bucket.",
    "evidenceZh": "装置可通过多种方式传递能量，能量不是装在桶里的物质。",
    "pairs": [
      {
        "left": "Food and battery 食物与电池",
        "right": "Chemical energy stores 化学储能"
      },
      {
        "left": "Working electric lamp 工作电灯",
        "right": "Electrical energy → light and heat 电能到光和热"
      },
      {
        "left": "Turning windmill 转动风车",
        "right": "Energy of motion 运动能量"
      }
    ]
  },
  {
    "id": "g3-c07-m03",
    "chapter": 7,
    "local": 3,
    "title": "Follow Sunlight",
    "zh": "追踪太阳能",
    "lesson": "L1 Energy All Around",
    "pages": "308–309",
    "intro": "Connect sunlight, a plant, and a plant-eating animal.",
    "introZh": "连接阳光、植物和食草动物。",
    "instruction": "Connect sunlight, a plant, and a plant-eating animal.",
    "instructionZh": "连接阳光、植物和食草动物。",
    "kind": "sequence",
    "question": "Does the animal get food energy directly by standing in sunlight?",
    "qZh": "动物站在阳光下就直接获得食物能吗？A 是；B 否，通过进食。",
    "options": [
      "Yes.",
      "No, it gets food energy by eating."
    ],
    "answer": 1,
    "feedback": "The animal gets chemical energy from food.",
    "feedbackZh": "动物从食物获取化学能。",
    "sentence": [
      "Sunlight helps plants make food,",
      "and animals obtain energy",
      "from food."
    ],
    "sentenceZh": "阳光帮助植物制造食物，动物从食物获取能量。",
    "word": [
      "Follow Sunlight",
      "追踪太阳能"
    ],
    "parent": "Follow the food link. / 沿食物关系追踪。",
    "transfer": "太阳是地表重要能量来源，不说所有能量都来自太阳；不要求光合作用公式。",
    "evidenceEn": "Plants use sunlight to make food; animals obtain chemical energy by eating food. Solar panels provide a different route.",
    "evidenceZh": "植物利用阳光制造食物，动物从食物获取化学能；太阳能板是另一种路线。",
    "sequence": [
      "Sunlight 阳光",
      "Plants make food 植物制造食物",
      "Animal eats food 动物取食",
      "Animal uses energy 动物利用能量"
    ],
    "extraPairs": [
      {
        "left": "Solar panel 太阳能板",
        "right": "Sunlight → electrical energy 光能到电能"
      },
      {
        "left": "Plant making food 植物制造食物",
        "right": "Sunlight → chemical energy in food 光能到食物化学能"
      }
    ]
  },
  {
    "id": "g3-c07-m04",
    "chapter": 7,
    "local": 4,
    "title": "Warm Air, Moving Water",
    "zh": "空气与流水模型",
    "lesson": "L1 Inquiry",
    "pages": "303、310–313",
    "intro": "Predict a change, run the model, and compare the result.",
    "introZh": "预测变化，运行模型并核对结果。",
    "instruction": "Predict a change, run the model, and compare the result.",
    "instructionZh": "预测变化，运行模型并核对结果。",
    "kind": "experiment",
    "question": "Why does the model balloon expand when warmed?",
    "qZh": "模型气球升温为何变大？A 该条件下气体占更大空间；B 无中生有新空气。",
    "options": [
      "The gas takes more space under these conditions.",
      "New air appears from nothing."
    ],
    "answer": 0,
    "feedback": "Heating can make a flexible gas-filled container expand.",
    "feedbackZh": "加热可使柔性含气容器膨胀。",
    "sentence": [
      "Heating the air",
      "can make it expand",
      "in this flexible model."
    ],
    "sentenceZh": "加热空气可使它在此柔性模型中膨胀。",
    "word": [
      "Warm Air, Moving Water",
      "空气与流水模型"
    ],
    "parent": "Check whether any air was added. / 检查是否加了空气。",
    "transfer": "亲子不用热水或密封加热；气体不总能自由膨胀，刚性容器情形不混用。",
    "evidenceEn": "Heating the same trapped air can expand a flexible container. This is a screen model, not a hot-water activity.",
    "evidenceZh": "加热同量封闭空气可使柔性容器膨胀；仅网页模拟，不要求操作热水。",
    "experiment": {
      "variable": "Air temperature 空气温度",
      "controls": "Same bottle and amount of sealed air; flexible balloon. 同瓶、同量密闭空气、柔性气球。",
      "states": [
        {
          "label": "Cooler air 较冷空气",
          "reading": "The balloon is smaller. 气球较小。",
          "balloonRadius": 22
        },
        {
          "label": "Warmer air 较暖空气",
          "reading": "The flexible balloon expands in this model. 模型中柔性气球膨胀。",
          "balloonRadius": 40
        }
      ],
      "prediction": [
        "Warmer air may expand the flexible balloon.",
        "The balloon size can never change."
      ],
      "diagram": "energy",
      "model": "air_expansion",
      "unit": "",
      "example": true
    },
    "extraPairs": [
      {
        "left": "Flowing water 流水",
        "right": "Turns a wheel 驱动轮转"
      },
      {
        "left": "Still water 静水",
        "right": "No flow-driven turning 没有流水驱动"
      }
    ]
  },
  {
    "id": "g3-c07-m05",
    "chapter": 7,
    "local": 5,
    "title": "High and Low",
    "zh": "高处与低处",
    "lesson": "L2 Using Energy",
    "pages": "314–317",
    "intro": "Compare the same car at two starting heights.",
    "introZh": "比较同一小车的两个起始高度。",
    "instruction": "Compare the same car at two starting heights.",
    "instructionZh": "比较同一小车的两个起始高度。",
    "kind": "experiment",
    "question": "Before release, which has more gravitational potential energy relative to the same floor?",
    "qZh": "相同地面作参照，释放前哪个重力势能更多？A 高处车；B 都一定没有。",
    "options": [
      "The higher car.",
      "They must have none."
    ],
    "answer": 0,
    "feedback": "For the same car, a higher starting position means more gravitational potential energy.",
    "feedbackZh": "同车较高起点有更多重力势能。",
    "sentence": [
      "The higher car",
      "has more stored energy",
      "relative to the same floor."
    ],
    "sentenceZh": "相对同一地面，高处小车有更多储能。",
    "word": [
      "High and Low",
      "高处与低处"
    ],
    "parent": "Keep the car and reference floor the same. / 保持车和参照地面相同。",
    "transfer": "动能与位置储能分别显示，不讲静止车完全没有能量。",
    "evidenceEn": "For the same car, a higher starting point means more gravitational potential energy relative to the same floor.",
    "evidenceZh": "同车、同地面参照下，较高起点有更多重力势能。",
    "experiment": {
      "variable": "Release height 释放高度",
      "controls": "Same car and surface; compare height relative to the same floor. 同车同表面，以同一地面作参照。",
      "states": [
        {
          "label": "Low starting point 低起点",
          "reading": "Less gravitational potential energy before release. 释放前重力势能较少。",
          "height": 40
        },
        {
          "label": "High starting point 高起点",
          "reading": "More gravitational potential energy before release. 释放前重力势能较多。",
          "height": 90
        }
      ],
      "prediction": [
        "The higher starting point stores more gravitational energy.",
        "Height cannot affect stored gravitational energy."
      ],
      "diagram": "energy",
      "model": "ramp_height",
      "unit": "",
      "example": true
    }
  },
  {
    "id": "g3-c07-m06",
    "chapter": 7,
    "local": 6,
    "title": "Test the Ramp",
    "zh": "斜坡数据实验",
    "lesson": "L2 Inquiry",
    "pages": "315–317",
    "intro": "Change only the release height and repeat each trial.",
    "introZh": "只改变释放高度，并重复试验。",
    "instruction": "Change only the release height and repeat each trial.",
    "instructionZh": "只改变释放高度，并重复试验。",
    "kind": "experiment",
    "question": "What supports the conclusion for this setup?",
    "qZh": "哪条支持此装置的结论？A 高起点三次都更远；B 车颜色不同。",
    "options": [
      "All three higher-release trials went farther.",
      "One car had a different color."
    ],
    "answer": 0,
    "feedback": "Repeated trials show the same direction of change here.",
    "feedbackZh": "重复试验在此显示相同变化趋势。",
    "sentence": [
      "In this setup,",
      "a higher release point",
      "led to a longer travel distance."
    ],
    "sentenceZh": "此装置中，更高释放点带来更长滑行距离。",
    "word": [
      "Test the Ramp",
      "斜坡数据实验"
    ],
    "parent": "Compare all three trials. / 比较三次记录。",
    "transfer": "不宣布任何坡、任何表面都必然同规律；不同时改变车质量与高度。",
    "evidenceEn": "Low trials span 30–32 cm; high trials span 50–52 cm. These are example data for this setup.",
    "evidenceZh": "低位30–32厘米，高位50–52厘米，为此装置的示例数据。",
    "experiment": {
      "variable": "Release height; repeat each trial 起点高度，每组重复",
      "controls": "Same car, surface, and measurement from the ramp end. 同车同表面，从坡末端测滑行距离。",
      "states": [
        {
          "label": "Low · trial 1 低位第1次",
          "reading": "Travel after ramp: 30 cm. 坡后滑行30厘米。",
          "value": 30,
          "height": 40
        },
        {
          "label": "Low · trial 2 低位第2次",
          "reading": "Travel after ramp: 32 cm. 坡后滑行32厘米。",
          "value": 32,
          "height": 40
        },
        {
          "label": "Low · trial 3 低位第3次",
          "reading": "Travel after ramp: 31 cm. 坡后滑行31厘米。",
          "value": 31,
          "height": 40
        },
        {
          "label": "High · trial 1 高位第1次",
          "reading": "Travel after ramp: 50 cm. 坡后滑行50厘米。",
          "value": 50,
          "height": 90
        },
        {
          "label": "High · trial 2 高位第2次",
          "reading": "Travel after ramp: 52 cm. 坡后滑行52厘米。",
          "value": 52,
          "height": 90
        },
        {
          "label": "High · trial 3 高位第3次",
          "reading": "Travel after ramp: 51 cm. 坡后滑行51厘米。",
          "value": 51,
          "height": 90
        }
      ],
      "prediction": [
        "The higher start will give a longer travel distance here.",
        "Both heights must always give the same distance."
      ],
      "diagram": "energy",
      "model": "ramp_distance",
      "unit": "cm",
      "example": true
    }
  },
  {
    "id": "g3-c07-m07",
    "chapter": 7,
    "local": 7,
    "title": "A Flashlight's Energy Story",
    "zh": "手电筒的能量故事",
    "lesson": "L2 Using Energy",
    "pages": "318–319",
    "intro": "Arrange the energy changes in the flashlight.",
    "introZh": "排列手电筒中的能量变化。",
    "instruction": "Arrange the energy changes in the flashlight.",
    "instructionZh": "排列手电筒中的能量变化。",
    "kind": "experiment",
    "question": "Where was energy stored before the flashlight was switched on?",
    "qZh": "开灯前能量储存在哪里？A 电池化学物质；B 画出的箭头。",
    "options": [
      "In the battery's chemicals.",
      "In the painted arrow."
    ],
    "answer": 0,
    "feedback": "The battery stores chemical energy.",
    "feedbackZh": "电池储存化学能。",
    "sentence": [
      "The battery's chemical energy",
      "is changed into electrical energy,",
      "then light and heat."
    ],
    "sentenceZh": "电池化学能转成电能，随后转成光和热。",
    "word": [
      "A Flashlight's Energy Story",
      "手电筒的能量故事"
    ],
    "parent": "Start at the battery. / 从电池开始。",
    "transfer": "不让孩子拆电池，不说电池储存一罐电流；复杂电路留扩展。",
    "evidenceEn": "The battery stores chemical energy. A working circuit transfers energy to the lamp, producing light and heat.",
    "evidenceZh": "电池储存化学能，工作电路将能量传给灯，产生光和热。",
    "experiment": {
      "variable": "Circuit or battery condition 电路或电池条件",
      "controls": "Same flashlight components; use the selected condition. 同一手电组件，按所选条件比较。",
      "states": [
        {
          "label": "Charged battery, closed switch 有电闭合",
          "reading": "The lamp produces light and heat. 灯发光发热。",
          "closed": true,
          "charged": true
        },
        {
          "label": "Charged battery, open switch 有电断开",
          "reading": "The lamp is off because the circuit is open. 电路断开，灯不亮。",
          "closed": false,
          "charged": true
        },
        {
          "label": "Depleted battery, closed switch 耗尽闭合",
          "reading": "The battery cannot supply the needed energy. 电池不能提供所需能量。",
          "closed": true,
          "charged": false
        }
      ],
      "prediction": [
        "Both a working circuit and an energy supply matter.",
        "A closed switch alone always makes light."
      ],
      "diagram": "energy",
      "model": "flashlight",
      "unit": "",
      "example": true
    },
    "extraSequence": [
      "Battery chemical energy 电池化学能",
      "Electrical energy transfer 电能传递",
      "Light and heat 光与热"
    ]
  },
  {
    "id": "g3-c07-m08",
    "chapter": 7,
    "local": 8,
    "title": "Where Energy Goes",
    "zh": "能量去了哪里",
    "lesson": "L2 Using Energy",
    "pages": "320–325",
    "intro": "Follow the energy after the moving toy slows down.",
    "introZh": "追踪玩具减速后的能量去向。",
    "instruction": "Follow the energy after the moving toy slows down.",
    "instructionZh": "追踪玩具减速后的能量去向。",
    "kind": "experiment",
    "question": "Does all the energy simply vanish when the toy stops?",
    "qZh": "玩具停下能量全部消失吗？A 是；B 否，传给环境。",
    "options": [
      "Yes.",
      "No, energy is transferred to the surroundings."
    ],
    "answer": 1,
    "feedback": "Energy can spread to the surroundings, including as thermal energy.",
    "feedbackZh": "能量可传到环境，包括热能。",
    "sentence": [
      "Energy changes form",
      "and moves to the surroundings",
      "as the toy slows down."
    ],
    "sentenceZh": "玩具减速时能量改变形式并传到环境。",
    "word": [
      "Where Energy Goes",
      "能量去了哪里"
    ],
    "parent": "Look beyond the toy. / 不只看玩具。",
    "transfer": "节能指减少不必要的资源消耗和能量转移，不是能量凭空创造/消失。",
    "evidenceEn": "Friction transfers energy to the surroundings, including thermal energy; sound may also carry energy.",
    "evidenceZh": "摩擦将能量传入环境，包括热能，也可能有声能传递。",
    "experiment": {
      "variable": "Travel time on the same rough surface 同一粗糙面上的行进时间",
      "controls": "Same toy and initial release. 同一玩具与释放条件。",
      "states": [
        {
          "label": "Just released 刚释放",
          "reading": "The toy is moving quickly. 玩具运动较快。",
          "speed": 3
        },
        {
          "label": "Later 稍后",
          "reading": "The toy slows; energy spreads to the surroundings. 玩具减速，能量传到环境。",
          "speed": 1
        },
        {
          "label": "Stopped 停下",
          "reading": "Motion has stopped; energy has not vanished. 运动停止，能量没有消失。",
          "speed": 0
        }
      ],
      "prediction": [
        "Energy can move to the surroundings as the toy slows.",
        "All energy disappears when the toy stops."
      ],
      "diagram": "energy",
      "model": "slowing_toy",
      "unit": "",
      "example": true
    },
    "extraPairs": [
      {
        "left": "Food energy 食物能量",
        "right": "Supports movement and keeping warm 支持运动与保温"
      },
      {
        "left": "Slowing toy 减速玩具",
        "right": "Energy spreads to surroundings 能量传到环境"
      }
    ]
  },
  {
    "id": "g3-c07-m09",
    "chapter": 7,
    "local": 9,
    "title": "A Wave Passes",
    "zh": "波经过时",
    "lesson": "L3 Energy on the Move",
    "pages": "326–331",
    "intro": "Watch the floating marker while a wave travels across the model.",
    "introZh": "观察波经过模型时浮标的运动。",
    "instruction": "Watch the floating marker while a wave travels across the model.",
    "instructionZh": "观察波经过模型时浮标的运动。",
    "kind": "experiment",
    "question": "Does the marker travel all the way with the wave in this model?",
    "qZh": "此模型标记点随波一直远行吗？A 否，在原位附近运动；B 总是。",
    "options": [
      "No, it moves around its starting place.",
      "Yes, always."
    ],
    "answer": 0,
    "feedback": "The disturbance travels while the marker moves locally.",
    "feedbackZh": "扰动传播，而标记点局部运动。",
    "sentence": [
      "A wave can transfer energy",
      "without carrying each marker",
      "all the way along."
    ],
    "sentenceZh": "波能传递能量，而不把每个标记点一路带走。",
    "word": [
      "A Wave Passes",
      "波经过时"
    ],
    "parent": "Track one colored marker. / 只跟踪一个标记点。",
    "transfer": "不把真实海浪简单画成水粒子永远纯上下；区分波与水流。",
    "evidenceEn": "The disturbance moves along the rope while a marked point oscillates locally. Real water-particle paths are more complex.",
    "evidenceZh": "扰动沿绳传播，标记点局部振动；真实水粒子轨迹更复杂。",
    "experiment": {
      "variable": "Time in a transverse rope-wave model 横向绳波中的时间",
      "controls": "Track the same marked point; the wave travels to the right. 跟踪同一标记点，波向右传播。",
      "states": [
        {
          "label": "Frame 1 第1帧",
          "reading": "The marked point is on the middle line. 标记点在中线。",
          "phase": 0
        },
        {
          "label": "Frame 2 第2帧",
          "reading": "The marked point moves upward locally. 标记点局部上移。",
          "phase": 1.57079632679
        },
        {
          "label": "Frame 3 第3帧",
          "reading": "The marked point returns through the middle. 标记点回到中线。",
          "phase": 3.14159265359
        },
        {
          "label": "Frame 4 第4帧",
          "reading": "The marked point moves downward locally. 标记点局部下移。",
          "phase": 4.71238898038
        }
      ],
      "prediction": [
        "The marker can move locally while the wave travels.",
        "The marker must travel all the way to the right."
      ],
      "diagram": "energy",
      "model": "rope_wave",
      "unit": "",
      "example": true
    }
  },
  {
    "id": "g3-c07-m10",
    "chapter": 7,
    "local": 10,
    "title": "Sound Needs a Path",
    "zh": "声音需要传播路径",
    "lesson": "L3 Energy on the Move",
    "pages": "332–333、336–337",
    "intro": "Follow vibrations from the source through a material.",
    "introZh": "追踪振动从声源经过介质。",
    "instruction": "Follow vibrations from the source through a material.",
    "instructionZh": "追踪振动从声源经过介质。",
    "kind": "experiment",
    "question": "Can ordinary sound travel through empty space with no matter?",
    "qZh": "普通声音能穿过无物质的真空吗？A 不能；B 能，像光一样。",
    "options": [
      "No.",
      "Yes, just like light."
    ],
    "answer": 0,
    "feedback": "Sound needs a material medium; light can travel through a vacuum.",
    "feedbackZh": "声音需要介质，光可在真空传播。",
    "sentence": [
      "Vibrations transfer sound energy",
      "through",
      "a material."
    ],
    "sentenceZh": "振动通过介质传递声能。",
    "word": [
      "Sound Needs a Path",
      "声音需要传播路径"
    ],
    "parent": "Find the material between source and receiver. / 找声源与接收端之间的介质。",
    "transfer": "神经向大脑传信号，不说声波沿神经传播；不把画面振幅直接当真实音量测量。",
    "evidenceEn": "Sound requires a material medium. Light can travel through vacuum.",
    "evidenceZh": "声音需要物质介质，光能在真空中传播。",
    "experiment": {
      "variable": "Medium between source and receiver 声源与接收端之间的介质",
      "controls": "Same vibrating source and receiver; visual model only. 同声源与接收端，视觉模型。",
      "states": [
        {
          "label": "Air 空气",
          "reading": "Vibrations can transfer sound through air. 振动可经空气传声。",
          "medium": "air"
        },
        {
          "label": "Taut string 绷紧线",
          "reading": "Vibrations can transfer along the taut string. 振动可沿绷紧线传播。",
          "medium": "string"
        },
        {
          "label": "Vacuum 真空",
          "reading": "No material medium carries sound in this gap. 缺少物质介质，声音不能通过该间隙。",
          "medium": "vacuum"
        }
      ],
      "prediction": [
        "Sound needs a material path.",
        "Sound crosses a vacuum just like light."
      ],
      "diagram": "energy",
      "model": "sound_medium",
      "unit": "",
      "example": true
    },
    "extraSequence": [
      "Vibrating source 振动声源",
      "Material medium 物质介质",
      "Receiving end 接收端"
    ]
  },
  {
    "id": "g3-c07-m11",
    "chapter": 7,
    "local": 11,
    "title": "Energy Travels",
    "zh": "能量传递路线",
    "lesson": "L3 Energy on the Move",
    "pages": "328–329、334–335",
    "intro": "Connect a source to an output through a working path.",
    "introZh": "沿可工作的路径连接能量来源与输出。",
    "instruction": "Connect a source to an output through a working path.",
    "instructionZh": "沿可工作的路径连接能量来源与输出。",
    "kind": "sequence",
    "question": "Which path can power the model lamp?",
    "qZh": "哪条可让模型灯工作？A 发电机—连通导线—灯；B 断路也一直亮。",
    "options": [
      "Generator—connected wires—lamp.",
      "Generator—broken path—lamp always on."
    ],
    "answer": 0,
    "feedback": "A working connection is needed in this model.",
    "feedbackZh": "此模型需可工作的连接。",
    "sentence": [
      "Energy can move",
      "from one place",
      "to another."
    ],
    "sentenceZh": "能量可从一处传递到另一处。",
    "word": [
      "Energy Travels",
      "能量传递路线"
    ],
    "parent": "Check the connection. / 检查连接。",
    "transfer": "只讲简化传能系统，不声称电在导线里像水滴以动画速度流。",
    "evidenceEn": "Working connections link the moving wind turbine, generator, wires, and lamp. A collision also transfers energy.",
    "evidenceZh": "工作连接串起风轮、发电机、导线和灯；碰撞也能传递能量。",
    "sequence": [
      "Wind turns turbine 风使风轮转动",
      "Generator transfers energy 发电机传递能量",
      "Wires carry electrical transfer 导线传递电能",
      "Lamp gives light 灯发光"
    ],
    "extraPairs": [
      {
        "left": "Moving marble hits another 运动弹珠碰另一颗",
        "right": "Energy transfers in collision 碰撞传递能量"
      },
      {
        "left": "Broken wire 导线断开",
        "right": "Lamp path does not work 灯的传递路径不工作"
      }
    ]
  },
  {
    "id": "g3-c07-m12",
    "chapter": 7,
    "local": 12,
    "title": "Power the Research Station",
    "zh": "给研究站供能",
    "lesson": "Chapter review",
    "pages": "338–341",
    "intro": "Choose energy paths that meet the station's needs.",
    "introZh": "选择满足研究站需求的能量路线。",
    "instruction": "Choose energy paths that meet the station's needs.",
    "instructionZh": "选择满足研究站需求的能量路线。",
    "kind": "match",
    "question": "What is missing from a solar-only plan for a dark night?",
    "qZh": "仅靠太阳能的夜间方案缺什么？A 储能或其他能源；B 更亮的太阳画。",
    "options": [
      "Stored energy or another source.",
      "A brighter painted Sun."
    ],
    "answer": 0,
    "feedback": "The plan needs a way to supply energy when sunlight is unavailable.",
    "feedbackZh": "无阳光时需要其他供能方式。",
    "sentence": [
      "Our station needs",
      "an energy source,",
      "a transfer path, and a useful output."
    ],
    "sentenceZh": "研究站需要能源、传递路径和有用输出。",
    "word": [
      "Power the Research Station",
      "给研究站供能"
    ],
    "parent": "Check the plan at night as well as by day. / 同时检查白天与夜晚。",
    "transfer": "解锁 Energy Bench；回顾 G2资源利用，下一章深入光，不引入真实费用承诺。",
    "evidenceEn": "A research station needs sources, transfer paths, and outputs suited to each constraint.",
    "evidenceZh": "研究站要依据条件安排能源、传递路径与输出。",
    "pairs": [
      {
        "left": "Daylight lamp 白天照明",
        "right": "Solar panel → circuit → lamp 太阳能板到电路到灯"
      },
      {
        "left": "Night lamp 夜间照明",
        "right": "Previously charged storage → circuit → lamp 预充电储能到电路到灯"
      },
      {
        "left": "Motion demonstration 运动演示",
        "right": "Raised car → ramp → moving car 高处车到斜坡到运动"
      },
      {
        "left": "Sound message 声音通信",
        "right": "Vibrating source → medium → receiver 振动声源到介质到接收端"
      }
    ]
  },
  {
    "id": "g3-c08-m01",
    "chapter": 8,
    "local": 1,
    "title": "Find a Clear Path",
    "zh": "找到畅通光路",
    "lesson": "L1 How Light Moves",
    "pages": "346–351",
    "intro": "Line up the holes so light can reach the screen.",
    "introZh": "对齐小孔，让光到达屏幕。",
    "instruction": "Line up the holes so light can reach the screen.",
    "instructionZh": "对齐小孔，让光到达屏幕。",
    "kind": "experiment",
    "question": "Why does moving one card block the beam?",
    "qZh": "移动一张卡为何挡住光？A 直线路径被挡；B 灯忘记发光。",
    "options": [
      "The straight path is blocked.",
      "The lamp forgets to shine."
    ],
    "answer": 0,
    "feedback": "In this uniform-air model, light travels along a straight path.",
    "feedbackZh": "此均匀空气模型中光沿直线路径传播。",
    "sentence": [
      "The beam reaches the screen",
      "when the holes",
      "line up."
    ],
    "sentenceZh": "小孔对齐时光束到达屏幕。",
    "word": [
      "Find a Clear Path",
      "找到畅通光路"
    ],
    "parent": "Trace a line from the lamp. / 从灯画直线。",
    "transfer": "避免绝对“光在任何条件都不弯”；不让儿童使用激光。",
    "evidenceEn": "With the lamp and screen fixed, all holes must meet the straight light path in this model.",
    "evidenceZh": "灯屏固定时，本模型所有孔都要与直线光路对齐。",
    "experiment": {
      "variable": "Hole positions 孔的位置",
      "controls": "Lamp at (40,130), screen x=480; uniform air. 灯与屏固定，均匀空气。",
      "states": [
        {
          "label": "Middle hole too high 中孔偏高",
          "reading": "The middle board blocks the horizontal beam. 中间孔板挡住水平光束。",
          "holeYs": [
            130,
            90,
            130
          ]
        },
        {
          "label": "Last hole too low 末孔偏低",
          "reading": "The last board blocks the beam. 最后孔板挡光。",
          "holeYs": [
            130,
            130,
            170
          ]
        },
        {
          "label": "All holes aligned 所有孔对齐",
          "reading": "The beam passes all three holes and reaches the screen. 光束通过三孔到屏。",
          "holeYs": [
            130,
            130,
            130
          ]
        }
      ],
      "prediction": [
        "Aligned holes will allow a straight beam through.",
        "Light bends around every blocked hole."
      ],
      "diagram": "light",
      "model": "holes",
      "unit": "",
      "example": true,
      "lamp": [
        40,
        130
      ],
      "boardXs": [
        150,
        260,
        370
      ],
      "screenX": 480,
      "holeRadius": 10
    }
  },
  {
    "id": "g3-c08-m02",
    "chapter": 8,
    "local": 2,
    "title": "Bounce the Beam",
    "zh": "让光反射到目标",
    "lesson": "L1 How Light Moves",
    "pages": "350–351、354–355",
    "intro": "Turn the mirror to guide light to the target.",
    "introZh": "转动镜子，把光导向目标。",
    "instruction": "Turn the mirror to guide light to the target.",
    "instructionZh": "转动镜子，把光导向目标。",
    "kind": "experiment",
    "question": "What changed the light's direction?",
    "qZh": "什么改变了光方向？A 镜面反射；B 靶子命令。",
    "options": [
      "Reflection from the mirror.",
      "A command from the target."
    ],
    "answer": 0,
    "feedback": "Light changes direction when it reflects from the mirror.",
    "feedbackZh": "光在镜面反射后改变方向。",
    "sentence": [
      "A mirror reflects light",
      "in a direction",
      "we can predict."
    ],
    "sentenceZh": "镜子沿可预测方向反射光。",
    "word": [
      "Bounce the Beam",
      "让光反射到目标"
    ],
    "parent": "Compare the incoming and outgoing rays. / 比较入射与出射方向。",
    "transfer": "只选简易角度，不要求背三角函数；重玩换靶位。",
    "evidenceEn": "For incoming direction (1,0), the reflected direction is (cos 2θ, sin 2θ) in screen coordinates. At 45 degrees the ray hits the target.",
    "evidenceZh": "屏幕坐标中入射(1,0)，反射方向(cos2θ,sin2θ)；45度时命中靶。",
    "experiment": {
      "variable": "Mirror angle 镜面角度",
      "controls": "Horizontal incoming ray; mirror center (260,130), target (260,230). 入射方向、镜心与靶固定。",
      "states": [
        {
          "label": "Mirror 30° 镜面30度",
          "reading": "Reflected ray misses the fixed target. 反射光未命中固定靶。",
          "mirrorAngleDeg": 30,
          "hit": false
        },
        {
          "label": "Mirror 45° 镜面45度",
          "reading": "Reflected ray goes downward to the target. 反射光向下命中靶。",
          "mirrorAngleDeg": 45,
          "hit": true
        },
        {
          "label": "Mirror 60° 镜面60度",
          "reading": "Reflected ray travels down-left and misses. 反射光向左下偏离靶。",
          "mirrorAngleDeg": 60,
          "hit": false
        }
      ],
      "prediction": [
        "Changing mirror angle will change the reflected direction.",
        "Every mirror angle sends light to the same point."
      ],
      "diagram": "light",
      "model": "mirror",
      "unit": "",
      "example": true,
      "mirrorCenter": [
        260,
        130
      ],
      "target": [
        260,
        230
      ],
      "targetRadius": 14,
      "requiredTargetState": 1
    }
  },
  {
    "id": "g3-c08-m03",
    "chapter": 8,
    "local": 3,
    "title": "Clear or Scattered",
    "zh": "清晰还是散开",
    "lesson": "L1 How Light Moves",
    "pages": "352–353",
    "intro": "Compare reflections from smooth and rough surfaces.",
    "introZh": "比较光滑和粗糙表面的反射。",
    "instruction": "Compare reflections from smooth and rough surfaces.",
    "instructionZh": "比较光滑和粗糙表面的反射。",
    "kind": "experiment",
    "question": "Why is the image less clear on the rough surface?",
    "qZh": "粗糙表面图像为何不清？A 反射方向分散；B 完全不反射光。",
    "options": [
      "Reflected light goes in many directions.",
      "Rough surfaces reflect no light at all."
    ],
    "answer": 0,
    "feedback": "Rough surfaces still reflect light, but the directions vary.",
    "feedbackZh": "粗糙面仍反光，只是方向不同。",
    "sentence": [
      "A rough surface",
      "scatters reflected light",
      "in different directions."
    ],
    "sentenceZh": "粗糙表面将反射光散向不同方向。",
    "word": [
      "Clear or Scattered",
      "清晰还是散开"
    ],
    "parent": "Compare the outgoing arrows. / 比较出射箭头。",
    "transfer": "漫反射使许多物体可见；不把看不到镜像当作不反光。",
    "evidenceEn": "Rough surfaces still reflect light, but local surface directions vary.",
    "evidenceZh": "粗糙表面仍反射光，只是各处表面方向不同。",
    "experiment": {
      "variable": "Water surface smoothness 水面平整程度",
      "controls": "Same object and illumination. 同物体与照明。",
      "states": [
        {
          "label": "Still water 平静水面",
          "reading": "A smooth surface forms a clearer reflected image. 平整水面形成较清晰倒影。",
          "rough": false
        },
        {
          "label": "Rippling water 波动水面",
          "reading": "Different surface directions break up the reflected image. 表面方向不同使倒影破碎。",
          "rough": true
        }
      ],
      "prediction": [
        "A rough surface may scatter reflected light.",
        "A rough surface reflects no light at all."
      ],
      "diagram": "light",
      "model": "rough_reflection",
      "unit": "",
      "example": true
    }
  },
  {
    "id": "g3-c08-m04",
    "chapter": 8,
    "local": 4,
    "title": "Light Reaches the Eye",
    "zh": "光进入眼睛",
    "lesson": "L2 Seeing Light and Color",
    "pages": "356–359",
    "intro": "Arrange the path from the lamp to the object and then the eye.",
    "introZh": "排列灯到物体再到眼睛的光路。",
    "instruction": "Arrange the path from the lamp to the object and then the eye.",
    "instructionZh": "排列灯到物体再到眼睛的光路。",
    "kind": "experiment",
    "question": "How do we see the non-glowing toy?",
    "qZh": "如何看到不发光玩具？A 反光入眼；B 眼睛发出探照光。",
    "options": [
      "Light reflects from it into our eyes.",
      "Our eyes send out searchlight beams."
    ],
    "answer": 0,
    "feedback": "Reflected light enters the eyes and signals are sent to the brain.",
    "feedbackZh": "反射光入眼，视觉信号传到大脑。",
    "sentence": [
      "We see the toy",
      "when light from it",
      "enters our eyes."
    ],
    "sentenceZh": "玩具反射的光进入眼睛时，我们看到它。",
    "word": [
      "Light Reaches the Eye",
      "光进入眼睛"
    ],
    "parent": "Follow light toward the eye. / 沿光走向眼睛。",
    "transfer": "自发光物也可直接入眼；不将视网膜漏掉或说影像在瞳孔上形成。",
    "evidenceEn": "Reflected light enters the eye; visual signals then reach the brain.",
    "evidenceZh": "反射光进入眼睛，视觉信号随后传到大脑。",
    "experiment": {
      "variable": "Lamp or reflected-light path 灯或反射光路条件",
      "controls": "Same toy, eye, and positions. 同玩具、眼睛与位置。",
      "states": [
        {
          "label": "Lamp on; path open 灯亮光路通",
          "reading": "Light travels from lamp to toy, then to eye. 光从灯到玩具再到眼。",
          "lampOn": true,
          "blocked": false
        },
        {
          "label": "Lamp off 灯关闭",
          "reading": "No lamp light reaches the toy in this dark-room model. 暗室模型中灯光不再照到玩具。",
          "lampOn": false,
          "blocked": false
        },
        {
          "label": "Reflection path blocked 反射光路被挡",
          "reading": "The barrier prevents this reflected beam reaching the eye. 挡板阻止该反射光束入眼。",
          "lampOn": true,
          "blocked": true
        }
      ],
      "prediction": [
        "We need light from the object to reach our eyes.",
        "Eyes send out a viewing beam in darkness."
      ],
      "diagram": "light",
      "model": "eye_path",
      "unit": "",
      "example": true
    },
    "extraSequence": [
      "Lamp 灯",
      "Toy 玩具",
      "Eye 眼睛"
    ]
  },
  {
    "id": "g3-c08-m05",
    "chapter": 8,
    "local": 5,
    "title": "The Pupil Window",
    "zh": "瞳孔窗口",
    "lesson": "L2 Seeing Light and Color",
    "pages": "358–359",
    "intro": "Compare the eye model in brighter and dimmer surroundings.",
    "introZh": "比较明亮和昏暗环境中的眼模型。",
    "instruction": "Compare the eye model in brighter and dimmer surroundings.",
    "instructionZh": "比较明亮和昏暗环境中的眼模型。",
    "kind": "experiment",
    "question": "What usually happens to the pupil in brighter light?",
    "qZh": "较亮环境下瞳孔通常怎样？A 缩小；B 占满眼睛。",
    "options": [
      "It becomes smaller.",
      "It always fills the whole eye."
    ],
    "answer": 0,
    "feedback": "The iris adjusts the pupil opening to control incoming light.",
    "feedbackZh": "虹膜调节瞳孔开口控制入光量。",
    "sentence": [
      "The iris changes",
      "the size of the pupil",
      "to control incoming light."
    ],
    "sentenceZh": "虹膜改变瞳孔大小以控制入光。",
    "word": [
      "The Pupil Window",
      "瞳孔窗口"
    ],
    "parent": "Watch the opening, not the whole eye. / 看开口而非整眼。",
    "transfer": "不要求拿强光照眼或测诊断反应；无医学判断。",
    "evidenceEn": "The iris changes the pupil opening to regulate incoming light. Do not shine bright lights into eyes.",
    "evidenceZh": "虹膜调节瞳孔开口控制入光；不向眼睛照强光。",
    "experiment": {
      "variable": "Ambient brightness 环境亮度",
      "controls": "Same eye size; change only pupil opening. 眼睛大小不变，仅改变瞳孔开口。",
      "states": [
        {
          "label": "Dim surroundings 较暗环境",
          "reading": "The modeled pupil is larger. 模型瞳孔较大。",
          "pupilRadius": 28
        },
        {
          "label": "Bright surroundings 较亮环境",
          "reading": "The modeled pupil is smaller. 模型瞳孔较小。",
          "pupilRadius": 12
        }
      ],
      "prediction": [
        "The pupil opening may shrink in brighter light.",
        "The whole eye must shrink in brighter light."
      ],
      "diagram": "light",
      "model": "pupil",
      "unit": "",
      "example": true
    }
  },
  {
    "id": "g3-c08-m06",
    "chapter": 8,
    "local": 6,
    "title": "Many Colors in White Light",
    "zh": "白光中的多种颜色",
    "lesson": "L2 Seeing Light and Color",
    "pages": "360–361",
    "intro": "Send white light through the prism model and compare the output.",
    "introZh": "让白光经过棱镜模型并观察输出。",
    "instruction": "Send white light through the prism model and compare the output.",
    "instructionZh": "让白光经过棱镜模型并观察输出。",
    "kind": "experiment",
    "question": "Does a prism create all those colors from nothing?",
    "qZh": "棱镜凭空造颜色吗？A 否，分离光中的颜色；B 是，给光涂漆。",
    "options": [
      "No, it separates colors in the light.",
      "Yes, it paints the beam."
    ],
    "answer": 0,
    "feedback": "A prism separates white light into a spectrum of colors.",
    "feedbackZh": "棱镜使白光分成光谱。",
    "sentence": [
      "White light contains",
      "many colors",
      "that a prism can separate."
    ],
    "sentenceZh": "白光包含可由棱镜分开的多种颜色。",
    "word": [
      "Many Colors in White Light",
      "白光中的多种颜色"
    ],
    "parent": "Compare the incoming and outgoing light. / 比较入射和出射光。",
    "transfer": "不教白光只有七条离散颜色；棱镜不是普通聚焦透镜。",
    "evidenceEn": "White light includes many colors. Named color bands are convenient labels, not seven isolated stripes.",
    "evidenceZh": "白光包含多种颜色；颜色名称方便描述，不代表七条孤立色条。",
    "experiment": {
      "variable": "Spectrum position selected 所选光谱位置",
      "controls": "Same white light and prism; inspect a continuous spectrum. 同白光与棱镜，观察连续光谱。",
      "states": [
        {
          "label": "Red end 红端",
          "reading": "Longer-wavelength visible light appears at this end. 此端为可见光较长波长部分。",
          "spectrumPosition": 0
        },
        {
          "label": "Middle region 中间区域",
          "reading": "The spectrum changes continuously through colors. 光谱颜色连续变化。",
          "spectrumPosition": 0.5
        },
        {
          "label": "Violet end 紫端",
          "reading": "Shorter-wavelength visible light appears at this end. 此端为可见光较短波长部分。",
          "spectrumPosition": 1
        }
      ],
      "prediction": [
        "White light can separate into a continuous range of colors.",
        "The prism creates colors from nothing."
      ],
      "diagram": "light",
      "model": "prism",
      "unit": "",
      "example": true
    }
  },
  {
    "id": "g3-c08-m07",
    "chapter": 8,
    "local": 7,
    "title": "Why Red Looks Red",
    "zh": "红色为什么显红",
    "lesson": "L2 Seeing Light and Color",
    "pages": "360–363",
    "intro": "Compare the light arriving at and leaving the red model object.",
    "introZh": "比较到达红色模型物体与离开的光。",
    "instruction": "Compare the light arriving at and leaving the red model object.",
    "instructionZh": "比较到达红色模型物体与离开的光。",
    "kind": "experiment",
    "question": "In the white-light model, why does the object look red?",
    "qZh": "白光模型下为何显红？A 更多红光从它到眼；B 自己制造全部红光。",
    "options": [
      "More red light reaches the eye from it.",
      "It creates all red light itself."
    ],
    "answer": 0,
    "feedback": "The object reflects some colors more than others.",
    "feedbackZh": "物体对不同颜色的光反射比例不同。",
    "sentence": [
      "The color we see",
      "depends on the light",
      "that reaches our eyes."
    ],
    "sentenceZh": "所见颜色取决于进入眼睛的光。",
    "word": [
      "Why Red Looks Red",
      "红色为什么显红"
    ],
    "parent": "Check both the lamp and the object. / 同时检查光源和物体。",
    "transfer": "不将所有现实颜料当理想滤光器；无光不是物体颜料变成黑色。",
    "evidenceEn": "Appearance depends on the illuminating light and the wavelengths reaching the eyes. Real materials are not perfect filters.",
    "evidenceZh": "外观取决于照明与入眼光；真实材料不是完美滤光器。",
    "experiment": {
      "variable": "Illumination color 照明颜色",
      "controls": "Same idealized red object and observer. 同一理想化红色物体与观察者。",
      "states": [
        {
          "label": "White light 白光",
          "reading": "Mostly red light is reflected to the eye; the object looks red. 主要红光入眼，物体显红。",
          "illumination": "white",
          "appearance": "red"
        },
        {
          "label": "Red light 红光",
          "reading": "Red light is reflected; the object still looks red. 红光被反射，仍显红。",
          "illumination": "red",
          "appearance": "red"
        },
        {
          "label": "Blue light 蓝光",
          "reading": "Little blue light is reflected; the idealized red object looks dark. 蓝光反射很少，理想化红物体显暗。",
          "illumination": "blue",
          "appearance": "dark"
        }
      ],
      "prediction": [
        "The same object can look different under different light.",
        "An object looks identical under every light source."
      ],
      "diagram": "light",
      "model": "object_color",
      "unit": "",
      "example": true
    }
  },
  {
    "id": "g3-c08-m08",
    "chapter": 8,
    "local": 8,
    "title": "Mix Lights, Test Filters",
    "zh": "混合光与测试滤片",
    "lesson": "L2 Inquiry",
    "pages": "362–367",
    "intro": "Compare adding colored lights with passing light through a filter.",
    "introZh": "比较彩光相加和光经过滤片。",
    "instruction": "Compare adding colored lights with passing light through a filter.",
    "instructionZh": "比较彩光相加和光经过滤片。",
    "kind": "experiment",
    "question": "Does mixing red and green light work like mixing red and green paint?",
    "qZh": "红绿光相加与红绿颜料混合完全相同吗？A 不一定，是不同过程；B 永远相同。",
    "options": [
      "Not necessarily; these are different processes.",
      "Always exactly the same."
    ],
    "answer": 0,
    "feedback": "Adding light differs from mixing pigments or filtering light.",
    "feedbackZh": "光相加不同于混颜料或过滤光。",
    "sentence": [
      "Colored lights can add together,",
      "while filters remove",
      "some parts of the light."
    ],
    "sentenceZh": "彩光可相加，滤片会去掉部分光。",
    "word": [
      "Mix Lights, Test Filters",
      "混合光与测试滤片"
    ],
    "parent": "Notice whether light is added or blocked. / 看是在加光还是挡光。",
    "transfer": "平衡RGB显白是屏幕/光源模型；真实滤片不是完美单色，差异在帮助卡说明。",
    "evidenceEn": "Additive light mixing differs from removing wavelengths with a filter or mixing pigments.",
    "evidenceZh": "色光叠加不同于滤片去除部分光，也不同于混合颜料。",
    "experiment": {
      "variable": "Added light or filter mode 叠加光或滤片模式",
      "controls": "White screen; ideal balanced lights and ideal red filter. 白屏、理想平衡色光与理想红滤片。",
      "states": [
        {
          "label": "Red + green light 红光加绿光",
          "reading": "The overlapping light appears yellow. 叠加区显黄。",
          "mode": "add",
          "channels": [
            "red",
            "green"
          ],
          "result": "yellow"
        },
        {
          "label": "Red + green + blue 红绿蓝三光",
          "reading": "Balanced overlapping light appears white. 平衡叠加显白。",
          "mode": "add",
          "channels": [
            "red",
            "green",
            "blue"
          ],
          "result": "white"
        },
        {
          "label": "White light + red filter 白光经红滤片",
          "reading": "The ideal filter transmits mainly red light. 理想滤片主要透过红光。",
          "mode": "filter",
          "channels": [
            "white"
          ],
          "result": "red"
        }
      ],
      "prediction": [
        "Adding lights and filtering light may give different results.",
        "Mixing light is the same as mixing paint."
      ],
      "diagram": "light",
      "model": "color_mix",
      "unit": "",
      "example": true
    }
  },
  {
    "id": "g3-c08-m09",
    "chapter": 8,
    "local": 9,
    "title": "See Through or Not?",
    "zh": "能看清还是不能",
    "lesson": "L3 Shadows",
    "pages": "368–371、374",
    "intro": "Test three materials in front of the same patterned card.",
    "introZh": "用三种材料观察同一图案卡。",
    "instruction": "Test three materials in front of the same patterned card.",
    "instructionZh": "用三种材料观察同一图案卡。",
    "kind": "sort",
    "question": "Can clear colored glass still be transparent?",
    "qZh": "清澈彩色玻璃仍可透明吗？A 可以，若能清楚透视；B 不能，有颜色一定半透明。",
    "options": [
      "Yes, if objects can be seen clearly through it.",
      "No, color always means translucent."
    ],
    "answer": 0,
    "feedback": "Transparency depends on clear transmission, not simply the absence of color.",
    "feedbackZh": "透明性看能否清晰透视，不只看有无颜色。",
    "sentence": [
      "Some materials transmit light clearly,",
      "some scatter it,",
      "and others block it."
    ],
    "sentenceZh": "有些材料清晰透光，有些散射，有些阻挡。",
    "word": [
      "See Through or Not?",
      "能看清还是不能"
    ],
    "parent": "Compare clarity as well as brightness. / 同时比较清晰度和亮度。",
    "transfer": "修正旧版把所有有色玻璃归半透明的说法；不要只用亮暗判透明。",
    "evidenceEn": "Clear colored glass can still be transparent. Transmission clarity, not colorlessness, is the key.",
    "evidenceZh": "清澈彩色玻璃也可透明；关键是能否清晰透视，而不是无色。",
    "groups": [
      "Transparent 透明",
      "Translucent 半透明",
      "Opaque 不透明"
    ],
    "items": [
      [
        "Clear glass: image sharp 清玻璃图像清晰",
        0
      ],
      [
        "Frosted glass: light passes, image blurred 毛玻璃透光但模糊",
        1
      ],
      [
        "Cardboard: image blocked 纸板遮挡",
        2
      ],
      [
        "Clear blue glass: image sharp 清澈蓝玻璃图像清晰",
        0
      ]
    ]
  },
  {
    "id": "g3-c08-m10",
    "chapter": 8,
    "local": 10,
    "title": "Change a Shadow",
    "zh": "改变影子大小",
    "lesson": "L3 Shadows",
    "pages": "370–373",
    "intro": "Keep the lamp and screen still, then move the object.",
    "introZh": "固定灯和屏幕，只移动物体。",
    "instruction": "Keep the lamp and screen still, then move the object.",
    "instructionZh": "固定灯和屏幕，只移动物体。",
    "kind": "experiment",
    "question": "In this setup, what happens when the object moves closer to the lamp?",
    "qZh": "此装置中物体靠灯时怎样？A 屏上影子变大；B 总消失。",
    "options": [
      "Its shadow on the screen grows.",
      "It always disappears."
    ],
    "answer": 0,
    "feedback": "With the lamp and screen fixed, moving the object toward the lamp enlarges its projected shadow.",
    "feedbackZh": "灯屏固定时，物体靠灯投影变大。",
    "sentence": [
      "We changed the object's position",
      "and compared",
      "the shadow size."
    ],
    "sentenceZh": "我们改变物体位置并比较影子大小。",
    "word": [
      "Change a Shadow",
      "改变影子大小"
    ],
    "parent": "Keep the screen still. / 保持屏幕不动。",
    "transfer": "不断言影子永远比物体大或只有黑色；太阳近似平行光与近灯情境不同。",
    "evidenceEn": "Shadow height equals object height times lamp-to-screen distance divided by lamp-to-object distance in this point-source model.",
    "evidenceZh": "点光源模型中，影高=物高×灯屏距离÷灯物距离。",
    "experiment": {
      "variable": "Object distance from point light 物体到点光源距离",
      "controls": "Lamp x=40, screen x=460, object height=40; all fixed except object position. 灯屏与物高固定，只移动物体。",
      "states": [
        {
          "label": "Near lamp 靠近灯",
          "reading": "Object distance 140 units; shadow height 120 units. 物距140单位，影高120单位。",
          "objectX": 180,
          "objectHeight": 40,
          "shadowHeight": 120,
          "value": 120
        },
        {
          "label": "Near screen 靠近屏",
          "reading": "Object distance 260 units; shadow height about 64.6 units. 物距260单位，影高约64.6单位。",
          "objectX": 300,
          "objectHeight": 40,
          "shadowHeight": 64.6153846154,
          "value": 64.6153846154
        }
      ],
      "prediction": [
        "Moving the object toward the lamp enlarges its shadow here.",
        "Moving it toward the lamp always shrinks its shadow."
      ],
      "diagram": "light",
      "model": "shadow",
      "unit": "model units 模型单位",
      "example": true,
      "lampX": 40,
      "screenX": 460,
      "axisY": 130
    }
  },
  {
    "id": "g3-c08-m11",
    "chapter": 8,
    "local": 11,
    "title": "A Shadow Investigation",
    "zh": "影子调查",
    "lesson": "L3 Shadows",
    "pages": "372–377",
    "intro": "Choose one variable and make a fair comparison.",
    "introZh": "选择一个变量进行公平比较。",
    "instruction": "Choose one variable and make a fair comparison.",
    "instructionZh": "选择一个变量进行公平比较。",
    "kind": "experiment",
    "question": "Which test fairly compares object shape?",
    "qZh": "哪个公平比较形状？A 同灯同位置只换形状；B 灯屏形状一起换。",
    "options": [
      "Same light and positions, different shapes.",
      "Change the lamp, screen, and shape together."
    ],
    "answer": 0,
    "feedback": "Changing only shape makes the comparison clearer.",
    "feedbackZh": "只改形状让比较更清楚。",
    "sentence": [
      "To test one idea,",
      "I keep other conditions",
      "the same."
    ],
    "sentenceZh": "为检验一个想法，我保持其他条件相同。",
    "word": [
      "A Shadow Investigation",
      "影子调查"
    ],
    "parent": "List what changes and what stays fixed. / 列出变化与不变项。",
    "transfer": "跨回 Ch4 日影记录；一次投影不能唯一确定三维物体全部形状。",
    "evidenceEn": "Only shape changes. Changing position too would make the comparison harder to interpret.",
    "evidenceZh": "只改变形状；同时改变位置会使比较更难解释。",
    "experiment": {
      "variable": "Object shape only 仅物体形状",
      "controls": "Same position, maximum height, lamp, and screen. 位置、最大高度、灯屏相同。",
      "states": [
        {
          "label": "Square block 方块",
          "reading": "The projected outline is block-shaped. 投影轮廓呈块形。",
          "shape": "square",
          "objectX": 260,
          "objectHeight": 40
        },
        {
          "label": "Hand silhouette 手形轮廓",
          "reading": "The projected outline follows the hand shape. 投影轮廓随手形改变。",
          "shape": "hand",
          "objectX": 260,
          "objectHeight": 40
        }
      ],
      "prediction": [
        "Changing only shape lets us compare shadow outlines.",
        "We must also move the lamp to compare shapes."
      ],
      "diagram": "light",
      "model": "shadow_shape",
      "unit": "",
      "example": true,
      "lampX": 40,
      "screenX": 460,
      "axisY": 130
    }
  },
  {
    "id": "g3-c08-m12",
    "chapter": 8,
    "local": 12,
    "title": "Open the Light Museum",
    "zh": "开放光学展馆",
    "lesson": "Chapter review",
    "pages": "378–381",
    "intro": "Build an exhibit that explains a light effect with evidence.",
    "introZh": "建立用证据解释光现象的展项。",
    "instruction": "Build an exhibit that explains a light effect with evidence.",
    "instructionZh": "建立用证据解释光现象的展项。",
    "kind": "experiment",
    "question": "Which explanation uses evidence?",
    "qZh": "哪项解释有证据？A 同物体靠灯时影子增大；B 大影子都来自巨物。",
    "options": [
      "The same object made a larger shadow when moved toward the lamp.",
      "All big shadows come from giant objects."
    ],
    "answer": 0,
    "feedback": "Use the controlled comparison, not a guess about object size.",
    "feedbackZh": "用受控比较，不凭影子猜物体大小。",
    "sentence": [
      "I can explain",
      "what changed",
      "using the light-path model."
    ],
    "sentenceZh": "我能用光路模型解释发生了什么变化。",
    "word": [
      "Open the Light Museum",
      "开放光学展馆"
    ],
    "parent": "Return to your experiment records. / 回看实验记录。",
    "transfer": "解锁 Light Bench；进入综合远征和全册考核，复习声与光传播区别。",
    "evidenceEn": "Use the controlled record, not shadow size alone, to infer object size. Clear colored glass can transmit a sharp image.",
    "evidenceZh": "用受控记录解释，不能只凭影子判断物体大小；清澈彩色玻璃可清晰透视。",
    "experiment": {
      "variable": "Museum demonstration selected 所选展位",
      "controls": "Within each demonstration, keep its stated conditions fixed. 每个展位内部保持指定条件不变。",
      "states": [
        {
          "label": "Mirror exhibit 镜面展位",
          "reading": "At 45 degrees the horizontal beam reflects down to the target. 45度镜面将水平光反射向下命中靶。",
          "display": "mirror",
          "mirrorAngleDeg": 45
        },
        {
          "label": "Filter exhibit 滤片展位",
          "reading": "An ideal red filter transmits mainly red from white light. 理想红滤片主要透过白光中的红光。",
          "display": "filter",
          "result": "red"
        },
        {
          "label": "Shadow exhibit 影子展位",
          "reading": "The same object gives a larger shadow closer to the lamp. 同一物体靠灯时影子较大。",
          "display": "shadow",
          "objectX": 180,
          "objectHeight": 40,
          "shadowHeight": 120
        }
      ],
      "prediction": [
        "Different exhibits need different light-path explanations.",
        "A larger shadow alone proves a larger object."
      ],
      "diagram": "light",
      "model": "light_museum",
      "unit": "",
      "example": true
    },
    "extraPairs": [
      {
        "left": "Clear colored glass 清澈彩色玻璃",
        "right": "Transparent: image remains sharp 透明，图像仍清晰"
      },
      {
        "left": "Same object moved closer to lamp 同物体靠灯",
        "right": "Larger projected shadow 投影较大"
      }
    ]
  }
]);
MISSIONS.forEach((m,i)=>{const size=m.options.length,target=i%size,shift=(target-m.answer+size)%size,previous=[...m.options];m.choiceRemap=previous.map((_,j)=>(j+shift)%size);m.options=Array(size);previous.forEach((text,j)=>m.options[m.choiceRemap[j]]=text);m.answer=target;});
MISSIONS.forEach((m,i)=>{for(const [key,text] of Object.entries({intro:m.intro,operation:m.instruction,question:m.question+" "+m.options.map((s,j)=>String.fromCharCode(65+j)+". "+s).join(" "),feedback:m.feedback,sentence:m.sentence.join(" "),word:m.word[0]})) AUDIO_TEXT[`m${i+1}-${key}`]=text;});
