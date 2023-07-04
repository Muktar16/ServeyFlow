export const data = [
  {
    "type": "numbervalidation",
    "group": "1",
    "blocks": [
      {
        "id": "1",
        "type": "contactNo",
        "options": null,
        "question": { "slug": "ফোন নাম্বার", "alias": "contact_no" },
        "required": true,
        "validations": {
          "regex": "(^(\\+88|0088)?(01){1}[3456789]{1}(\\d){8})$",
          "prefix": "+880"
        }
      }
    ],
    "jumping_logic": [{ "id": "2", "group_no": "2", "conditions": [] }]
  },
  {
    "type": "non-referring",
    "group": "2",
    "blocks": [
      {
        "id": "2",
        "type": "numberInput",
        "question": {
          "slug": "অল্টারনেটিভ ফোন নাম্বার",
          "alias": "alternative_phn_number"
        },
        "required": false,
        "validations": {
          "regex": "(^(\\+88|0088)?(01){1}[3456789]{1}(\\d){8})$"
        }
      },
      {
        "id": "3",
        "type": "textInput",
        "options": null,
        "question": { "slug": "নাম", "alias": "name" },
        "required": true,
        "validations": { "regex": "^[a-zA-Z ]{3,}$" }
      },
      {
        "id": "4",
        "type": "multipleChoice",
        "options": [{ "value": "পুরুষ" }, { "value": "নারী" }],
        "question": { "slug": "লিঙ্গ", "alias": "gender" },
        "required": true
      },
      {
        "id": "5",
        "type": "numberInput",
        "question": { "slug": "বয়স", "alias": "age" },
        "required": true,
        "validations": { "regex": "^(1[456789]|[2-9]\\d)$" }
      },
      {
        "id": "6",
        "type": "textInput",
        "question": { "slug": "আউটলেট অ্যাড্রেস", "alias": "outlet_address" },
        "required": true
      }
    ],
    "jumping_logic": [{ "id": "99", "group_no": "4", "conditions": [] }]
  },
  {
    "type": "referring",
    "group": "4",
    "blocks": [
      {
        "id": "99",
        "skip": { "id": "-1", "group_no": "4" },
        "type": "terms",
        "options": null,
        "referTo": { "id": "7", "group_no": "4" },
        "question": { "slug": "Terms & Conditions", "alias": "signature" },
        "validations": {
          "terms": [
            "শর্তাবলী",
            "আমি নিশ্চিত করছি যে -",
            "",
            "১. আমি স্বেচ্ছায় সজ্ঞানে ও সুস্থ শরীরে অন্যের বিনা প্ররোচনায় অত্র স্বাক্ষর প্রদান করিলাম",
            "২. আমি নিশ্চিত করিতেছি যে উল্লেখিত তথ্যগুলি সঠিক ও সত্য",
            "৩. আমি বাংলাদেশের নাগরিক ",
            "৪. আমি আমার পরবর্তী তিন বছরের জন্য তথ্য সংরক্ষণ/প্রক্রিয়া/ স্থানান্তর করার জন্য অনুমোদন ও সম্মতি প্রদান করলাম",
            "৫. আমি স্ব-ইচ্ছায় তথ্যসমূহ প্রদান করলাম",
            "৬. আমি নিশ্চিত করিতেছি যে তথ্য প্রদানের ব্যাপারে আমাকে কোন ধরনের অর্থপ্রদান/অন্য কোনভাবে প্ররোচনা/প্রভাবিত করা হয়নি",
            "৭.  আমি নিশ্চিত করছি যে ভবিষ্যৎ অনুসন্ধানের জন্য আমার কথোপকথন টি রেকর্ড করা হতে পারে",
            "৮. আমি নিশ্চিত করিতেছি যে প্রদত্ত তথ্যের ব্যাপারে ভবিষ্যতে বাংলাদেশ আইন অনুযায়ী কোনো আদালত বা কর্তৃপক্ষের সামনে কোন ধরনেরআইনগত অভিযোগ মূলক কর্মকান্ড গ্রহণ করিব না",
            "",
            "উপরোক্ত শর্তাবলী মেনে আমার তথ্য প্রদান করছি",
            "I Agree to Sign Digitally"
          ]
        }
      },
      {
        "id": "7",
        "skip": { "id": "-1", "group_no": "4" },
        "type": "otp",
        "options": null,
        "referTo": { "id": "8", "group_no": "4" },
        "question": { "slug": "OTP Verification", "alias": "otp" },
        "validations": { "bypass": true, "device": true, "server": false }
      },
      {
        "id": "8",
        "skip": { "id": "-1", "group_no": "4" },
        "type": "multipleChoice",
        "options": [
          { "value": "Yes", "referTo": { "id": "9", "group_no": "4" } },
          { "value": "No", "referTo": { "id": "10", "group_no": "4" } }
        ],
        "question": {
          "slug": "আপনি কি সেন্টার ফ্রেশ বিক্রি করেন ?",
          "alias": "sell_center_fresh"
        }
      },
      {
        "id": "9",
        "skip": { "id": "-1", "group_no": "4" },
        "type": "multipleChoice",
        "options": [
          { "value": "হ্যাঁ", "referTo": { "id": "90", "group_no": "4" } },
          { "value": "না", "referTo": { "id": "84", "group_no": "4" } }
        ],
        "question": {
          "slug": "আপনার কি বয়াম যার স্টকে আছে?",
          "alias": "jar_center_fresh"
        }
      },
      {
        "id": "90",
        "skip": { "id": "-1", "group_no": "4" },
        "type": "numberInput",
        "referTo": { "id": "84", "group_no": "4" },
        "question": {
          "slug": "নাম্বার প্রবেশ করান 1",
          "alias": "jar_count_center_fresh"
        }
      },
      {
        "id": "84",
        "skip": { "id": "-1", "group_no": "4" },
        "type": "multipleChoice",
        "options": [
          { "value": "হ্যাঁ", "referTo": { "id": "91", "group_no": "4" } },
          { "value": "না", "referTo": { "id": "85", "group_no": "4" } }
        ],
        "question": {
          "slug": "আপনার কি বক্স স্টকে আছে?",
          "alias": "box_center_fresh"
        }
      },
      {
        "id": "91",
        "skip": { "id": "-1", "group_no": "4" },
        "type": "numberInput",
        "referTo": { "id": "85", "group_no": "4" },
        "question": {
          "slug": "নাম্বার প্রবেশ করান 2",
          "alias": "box_count_center_fresh"
        }
      },
      {
        "id": "85",
        "skip": { "id": "-1", "group_no": "4" },
        "type": "multipleChoice",
        "options": [
          { "value": "হ্যাঁ", "referTo": { "id": "92", "group_no": "4" } },
          { "value": "না", "referTo": { "id": "81", "group_no": "4" } }
        ],
        "question": {
          "slug": "আপনার কাছে কতগুলো কার্টুন স্টকে আছে?",
          "alias": "cartons_center_fresh"
        }
      },
      {
        "id": "92",
        "skip": { "id": "-1", "group_no": "4" },
        "type": "numberInput",
        "referTo": { "id": "81", "group_no": "4" },
        "question": {
          "slug": "নাম্বার প্রবেশ করান 3",
          "alias": "cartons_count_center_fresh"
        }
      },
      {
        "id": "10",
        "skip": { "id": "-1", "group_no": "4" },
        "type": "multipleChoice",
        "options": [
          { "value": "বেশিদাম", "referTo": { "id": "81", "group_no": "4" } },
          {
            "value": "কাস্টমারের চাহিদা নেই",
            "referTo": { "id": "81", "group_no": "4" }
          },
          {
            "value": "কোন প্রমোশনাল অফার নেই",
            "referTo": { "id": "81", "group_no": "4" }
          },
          {
            "value": "কোন গিফট্ নেই",
            "referTo": { "id": "81", "group_no": "4" }
          },
          { "value": "অন্যান্য", "referTo": { "id": "86", "group_no": "4" } }
        ],
        "question": {
          "slug": "আপনি কেন সেন্টার ফ্রেশ বিক্রি করেন না?",
          "alias": "reason_for_not_selling_center_fresh"
        }
      },
      {
        "id": "86",
        "skip": { "id": "-1" },
        "type": "textInput",
        "referTo": { "id": "81", "group_no": "4" },
        "question": {
          "slug": "আপনি কি কারণে সেন্টার ফ্রেশ বিক্রি করেন না?",
          "alias": "reason_for_others_option_center_fresh"
        }
      },
      {
        "id": "81",
        "skip": { "id": "-1", "group_no": "4" },
        "type": "multipleChoice",
        "options": [
          { "value": "Yes", "referTo": { "id": "82", "group_no": "4" } },
          { "value": "No", "referTo": { "id": "83", "group_no": "4" } }
        ],
        "question": {
          "slug": "আপনি কি সেন্টার ফ্রুট বিক্রি করেন?",
          "alias": "sell_center_fruit"
        }
      },
      {
        "id": "82",
        "skip": { "id": "-1", "group_no": "4" },
        "type": "multipleChoice",
        "options": [
          { "value": "হ্যাঁ", "referTo": { "id": "93", "group_no": "4" } },
          { "value": "না", "referTo": { "id": "87", "group_no": "4" } }
        ],
        "question": {
          "slug": "আপনার কি বয়াম যার স্টকে আছে?",
          "alias": "jar_center_fruit"
        }
      },
      {
        "id": "93",
        "skip": { "id": "-1", "group_no": "4" },
        "type": "numberInput",
        "referTo": { "id": "87", "group_no": "4" },
        "question": {
          "slug": "নাম্বার প্রবেশ করান 4",
          "alias": "jar_center_fruit"
        }
      },
      {
        "id": "87",
        "skip": { "id": "-1", "group_no": "4" },
        "type": "multipleChoice",
        "options": [
          { "value": "হ্যাঁ", "referTo": { "id": "94", "group_no": "4" } },
          { "value": "না", "referTo": { "id": "88", "group_no": "4" } }
        ],
        "question": {
          "slug": "আপনার কি বক্স স্টকে আছে?",
          "alias": "box_center_fruit"
        }
      },
      {
        "id": "94",
        "skip": { "id": "-1", "group_no": "4" },
        "type": "numberInput",
        "referTo": { "id": "88", "group_no": "4" },
        "question": {
          "slug": "নাম্বার প্রবেশ করান 5",
          "alias": "box_count_center_fruit"
        }
      },
      {
        "id": "88",
        "skip": { "id": "-1", "group_no": "4" },
        "type": "multipleChoice",
        "options": [
          { "value": "হ্যাঁ", "referTo": { "id": "95", "group_no": "4" } },
          { "value": "না", "referTo": { "id": "96", "group_no": "3" } }
        ],
        "question": {
          "slug": "আপনার কি কার্টুন স্টকে আছে?",
          "alias": "cartons_center_fruit"
        }
      },
      {
        "id": "95",
        "skip": { "id": "-1", "group_no": "4" },
        "type": "numberInput",
        "referTo": { "id": "96", "group_no": "3" },
        "question": {
          "slug": "নাম্বার প্রবেশ করান 6",
          "alias": "cartons_count_center_fruit"
        }
      },
      {
        "id": "83",
        "skip": { "id": "-1", "group_no": "4" },
        "type": "multipleChoice",
        "options": [
          { "value": "বেশিদাম", "referTo": { "id": "96", "group_no": "3" } },
          {
            "value": "কাস্টমারের চাহিদা নেই",
            "referTo": { "id": "96", "group_no": "3" }
          },
          {
            "value": "কোন প্রমোশনাল অফার নেই",
            "referTo": { "id": "96", "group_no": "3" }
          },
          {
            "value": "কোন গিফট্ নেই",
            "referTo": { "id": "96", "group_no": "3" }
          },
          { "value": "অন্যান্য", "referTo": { "id": "89", "group_no": "3" } }
        ],
        "question": {
          "slug": "আপনি কেন সেন্টার ফ্রুট বিক্রি করেন না?",
          "alias": "reason_for_not_selling_center_fruit"
        }
      },
      {
        "id": "89",
        "skip": { "id": "-1" },
        "type": "textInput",
        "referTo": { "id": "96", "group_no": "3" },
        "question": {
          "slug": "আপনি কি কারণে ফ্রুট বিক্রি করেন না?",
          "alias": "reason_for_others_center_fruit"
        }
      }
    ],
    "jumping_logic": [
      {
        "id": "56",
        "group_no": "4",
        "conditions": [
          { "id": "8", "answer": "No" },
          { "id": "81", "answer": "No" }
        ]
      },
      {
        "id": "96",
        "group_no": "3",
        "conditions": [
          { "id": "8", "answer": "Yes" },
          { "id": "81", "answer": "No" }
        ]
      },
      {
        "id": "96",
        "group_no": "3",
        "conditions": [
          { "id": "8", "answer": "No" },
          { "id": "81", "answer": "Yes" }
        ]
      },
      {
        "id": "96",
        "group_no": "3",
        "conditions": [
          { "id": "8", "answer": "Yes" },
          { "id": "81", "answer": "Yes" }
        ]
      }
    ]
  },
  {
    "type": "referring",
    "group": "3",
    "blocks": [
      {
        "id": "96",
        "skip": { "id": "-1", "group_no": "4" },
        "type": "multipleChoice",
        "options": [
          { "value": "হ্যাঁ", "referTo": { "id": "11", "group_no": "3" } },
          { "value": "না", "referTo": { "id": "submit", "group_no": "submit" } }
        ],
        "question": {
          "slug": "আপনি কি আপনার দোকানে ব্রান্ডিং করতে আগ্রহী?",
          "alias": "branding"
        }
      },
      {
        "id": "11",
        "skip": { "id": "-1", "group_no": "3" },
        "type": "multipleChoice",
        "options": [
          {
            "value": "নন-ব্র্যান্ডেড স্টল: সম্পূর্ণ স্টল",
            "referTo": { "id": "12", "group_no": "3" }
          },
          {
            "value": "নন-ব্র্যান্ডেড স্টল: অর্ধেক স্টল",
            "referTo": { "id": "31", "group_no": "3" }
          },
          {
            "value": "সেমি/ফ্রন্ট ব্র্যান্ডেড স্টল: ফুল স্টল",
            "referTo": { "id": "12", "group_no": "3" }
          },
          {
            "value": "সেমি/ফ্রন্ট ব্র্যান্ডেড স্টল: হাফ স্টল",
            "referTo": { "id": "31", "group_no": "3" }
          },
          {
            "value": "পোর্টেবল টেবিল ট্রে",
            "referTo": { "id": "41", "group_no": "3" }
          },
          {
            "value": "পোর্টেবল টেবিল ট্রে/ নন-ব্র্যান্ডেড",
            "referTo": { "id": "41", "group_no": "3" }
          },
          {
            "value": "টোব্যাকো কিয়স্ক",
            "referTo": { "id": "60", "group_no": "3" }
          },
          { "value": "টি-স্টল", "referTo": { "id": "70", "group_no": "3" } }
        ],
        "question": {
          "slug": "উপযুক্ত ক্যাবিনেটের ধরন নির্বাচন করুন",
          "alias": "cabinet_type"
        }
      },
      {
        "id": "12",
        "skip": { "id": "-1", "group_no": "3" },
        "type": "checklist",
        "options": [
          {
            "value": "টপ ড্যাশবোর্ড পরিমাপ (সামনে)",
            "referTo": { "id": "13", "group_no": "3" }
          },
          {
            "value": "টপ ড্যাশবোর্ড পরিমাপ(বামদিকের)",
            "referTo": { "id": "16", "group_no": "3" }
          },
          {
            "value": "টপ ড্যাশবোর্ড পরিমাপ(ডানদিকের)",
            "referTo": { "id": "19", "group_no": "3" }
          },
          {
            "value": "নীচের পরিমাপ (সামনের)",
            "referTo": { "id": "22", "group_no": "3" }
          },
          {
            "value": "নীচের পরিমাপ (বামদিকের)",
            "referTo": { "id": "25", "group_no": "3" }
          },
          {
            "value": "নীচের পরিমাপ (ডানদিকের)",
            "referTo": { "id": "28", "group_no": "3" }
          }
        ],
        "referTo": { "id": "77", "group_no": "3" },
        "question": { "slug": "পরিমাপ নিন", "alias": "measurements" }
      },
      {
        "id": "13",
        "skip": { "id": "-1" },
        "type": "multipleChoice",
        "options": [
          { "value": "হ্যাঁ", "referTo": { "id": "14", "group_no": "3" } },
          { "value": "না", "referTo": { "id": "checklist" } }
        ],
        "question": {
          "slug": " টপ ড্যাশবোর্ড পরিমাপ (সামনের)",
          "alias": "measurement_of_top_fascia_front"
        }
      },
      {
        "id": "14",
        "skip": { "id": "-1" },
        "type": "textInput",
        "referTo": { "id": "15", "group_no": "3" },
        "question": {
          "slug": "ইঞ্চিতে উচ্চতার পরিমাপ নিন",
          "alias": "top_fascia_front_height"
        },
        "validations": {
          "regex": "^[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?$"
        }
      },
      {
        "id": "15",
        "skip": { "id": "-1" },
        "type": "textInput",
        "referTo": { "id": "checklist" },
        "question": {
          "slug": "ইঞ্চিতে প্রস্থের পরিমাপ নিন",
          "alias": "top_fascia_front_width"
        },
        "validations": {
          "regex": "^[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?$"
        }
      },
      {
        "id": "16",
        "skip": { "id": "-1" },
        "type": "multipleChoice",
        "options": [
          { "value": "হ্যাঁ", "referTo": { "id": "17", "group_no": "3" } },
          { "value": "না", "referTo": { "id": "checklist" } }
        ],
        "question": {
          "slug": "টপ ড্যাশবোর্ড পরিমাপ(বামদিকের)",
          "alias": "measurement_of_top_fascia_left"
        }
      },
      {
        "id": "17",
        "skip": { "id": "-1" },
        "type": "textInput",
        "referTo": { "id": "18", "group_no": "3" },
        "question": {
          "slug": "ইঞ্চিতে উচ্চতার পরিমাপ নিন",
          "alias": "top_fascia_left_height"
        },
        "validations": {
          "regex": "^[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?$"
        }
      },
      {
        "id": "18",
        "skip": { "id": "-1" },
        "type": "textInput",
        "referTo": { "id": "checklist" },
        "question": {
          "slug": "ইঞ্চিতে প্রস্থের পরিমাপ নিন",
          "alias": "top_fascia_left_width"
        },
        "validations": {
          "regex": "^[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?$"
        }
      },
      {
        "id": "19",
        "skip": { "id": "-1" },
        "type": "multipleChoice",
        "options": [
          { "value": "হ্যাঁ", "referTo": { "id": "20", "group_no": "3" } },
          { "value": "না", "referTo": { "id": "checklist" } }
        ],
        "question": {
          "slug": "টপ ড্যাশবোর্ড পরিমাপ(ডানদিকের)",
          "alias": "measurement_of_top_fascia_right"
        }
      },
      {
        "id": "20",
        "skip": { "id": "-1" },
        "type": "textInput",
        "referTo": { "id": "21", "group_no": "3" },
        "question": {
          "slug": "ইঞ্চিতে উচ্চতার পরিমাপ নিন",
          "alias": "top_fascia_right_height"
        },
        "validations": {
          "regex": "^[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?$"
        }
      },
      {
        "id": "21",
        "skip": { "id": "-1" },
        "type": "textInput",
        "referTo": { "id": "checklist" },
        "question": {
          "slug": "ইঞ্চিতে প্রস্থের পরিমাপ নিন",
          "alias": "top_fascia_right_width"
        },
        "validations": {
          "regex": "^[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?$"
        }
      },
      {
        "id": "22",
        "skip": { "id": "-1" },
        "type": "multipleChoice",
        "options": [
          { "value": "হ্যাঁ", "referTo": { "id": "23", "group_no": "3" } },
          { "value": "না", "referTo": { "id": "checklist" } }
        ],
        "question": {
          "slug": "নীচের পরিমাপ (সামনের)",
          "alias": "measurement_of_bottom_front"
        }
      },
      {
        "id": "23",
        "skip": { "id": "-1" },
        "type": "textInput",
        "referTo": { "id": "24", "group_no": "3" },
        "question": {
          "slug": "ইঞ্চিতে উচ্চতার পরিমাপ নিন",
          "alias": "bottom_front_height"
        },
        "validations": {
          "regex": "^[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?$"
        }
      },
      {
        "id": "24",
        "skip": { "id": "-1" },
        "type": "textInput",
        "referTo": { "id": "checklist" },
        "question": {
          "slug": "ইঞ্চিতে প্রস্থের পরিমাপ নিন",
          "alias": "bottom_front_weidth"
        },
        "validations": {
          "regex": "^[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?$"
        }
      },
      {
        "id": "25",
        "skip": { "id": "-1" },
        "type": "multipleChoice",
        "options": [
          { "value": "হ্যাঁ", "referTo": { "id": "26", "group_no": "3" } },
          { "value": "না", "referTo": { "id": "checklist" } }
        ],
        "question": {
          "slug": "নীচের পরিমাপ (বামদিকের)",
          "alias": "measurement_of_bottom_left"
        }
      },
      {
        "id": "26",
        "skip": { "id": "-1" },
        "type": "textInput",
        "referTo": { "id": "27", "group_no": "3" },
        "question": {
          "slug": "ইঞ্চিতে উচ্চতার পরিমাপ নিন",
          "alias": "bottom_left_height"
        },
        "validations": {
          "regex": "^[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?$"
        }
      },
      {
        "id": "27",
        "skip": { "id": "-1" },
        "type": "textInput",
        "referTo": { "id": "checklist" },
        "question": {
          "slug": "ইঞ্চিতে প্রস্থের পরিমাপ নিন",
          "alias": "bottom_left_weidth"
        },
        "validations": {
          "regex": "^[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?$"
        }
      },
      {
        "id": "28",
        "skip": { "id": "-1" },
        "type": "multipleChoice",
        "options": [
          { "value": "হ্যাঁ", "referTo": { "id": "29", "group_no": "3" } },
          { "value": "না", "referTo": { "id": "checklist" } }
        ],
        "question": {
          "slug": "নীচের পরিমাপ (ডানদিকের)",
          "alias": "measurement_of_bottom_right"
        }
      },
      {
        "id": "29",
        "skip": { "id": "-1" },
        "type": "textInput",
        "referTo": { "id": "30", "group_no": "3" },
        "question": {
          "slug": "ইঞ্চিতে উচ্চতার পরিমাপ নিন",
          "alias": "bottom_right_height"
        },
        "validations": {
          "regex": "^[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?$"
        }
      },
      {
        "id": "30",
        "skip": { "id": "-1" },
        "type": "textInput",
        "referTo": { "id": "checklist" },
        "question": {
          "slug": "ইঞ্চিতে প্রস্থের পরিমাপ নিন",
          "alias": "bottom_right_weidth"
        },
        "validations": {
          "regex": "^[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?$"
        }
      },
      {
        "id": "31",
        "skip": { "id": "-1", "group_no": "3" },
        "type": "checklist",
        "options": [
          {
            "value": "নীচের পরিমাপ (সামনের)",
            "referTo": { "id": "32", "group_no": "3" }
          },
          {
            "value": "নীচের পরিমাপ (বামদিকের)",
            "referTo": { "id": "35", "group_no": "3" }
          },
          {
            "value": "নীচের পরিমাপ (ডানদিকের)",
            "referTo": { "id": "38", "group_no": "3" }
          }
        ],
        "referTo": { "id": "77", "group_no": "3" },
        "question": { "slug": "পরিমাপ নিন", "alias": "measurements" }
      },
      {
        "id": "32",
        "skip": { "id": "-1" },
        "type": "multipleChoice",
        "options": [
          { "value": "হ্যাঁ", "referTo": { "id": "33", "group_no": "3" } },
          { "value": "না", "referTo": { "id": "checklist" } }
        ],
        "question": {
          "slug": "নীচের পরিমাপ (সামনের)",
          "alias": "measurement_of_bottom_front"
        }
      },
      {
        "id": "33",
        "skip": { "id": "-1" },
        "type": "textInput",
        "referTo": { "id": "34", "group_no": "3" },
        "question": {
          "slug": "ইঞ্চিতে উচ্চতার পরিমাপ নিন",
          "alias": "bottom_front_height"
        },
        "validations": {
          "regex": "^[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?$"
        }
      },
      {
        "id": "34",
        "skip": { "id": "-1" },
        "type": "textInput",
        "referTo": { "id": "checklist" },
        "question": {
          "slug": "ইঞ্চিতে প্রস্থের পরিমাপ নিন",
          "alias": "bottom_front_width"
        },
        "validations": {
          "regex": "^[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?$"
        }
      },
      {
        "id": "35",
        "skip": { "id": "-1" },
        "type": "multipleChoice",
        "options": [
          { "value": "হ্যাঁ", "referTo": { "id": "36", "group_no": "3" } },
          { "value": "না", "referTo": { "id": "checklist" } }
        ],
        "question": {
          "slug": "নীচের পরিমাপ (বামদিকের)",
          "alias": "measurement_of_botom_left"
        }
      },
      {
        "id": "36",
        "skip": { "id": "-1" },
        "type": "textInput",
        "referTo": { "id": "37", "group_no": "3" },
        "question": {
          "slug": "ইঞ্চিতে উচ্চতার পরিমাপ নিন",
          "alias": "bottom_left_height"
        },
        "validations": {
          "regex": "^[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?$"
        }
      },
      {
        "id": "37",
        "skip": { "id": "-1" },
        "type": "textInput",
        "referTo": { "id": "checklist" },
        "question": {
          "slug": "ইঞ্চিতে প্রস্থের পরিমাপ নিন",
          "alias": "bottom_left_width"
        },
        "validations": {
          "regex": "^[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?$"
        }
      },
      {
        "id": "38",
        "skip": { "id": "-1" },
        "type": "multipleChoice",
        "options": [
          { "value": "হ্যাঁ", "referTo": { "id": "39", "group_no": "3" } },
          { "value": "না", "referTo": { "id": "checklist" } }
        ],
        "question": {
          "slug": "নীচের পরিমাপ (ডানদিকের)",
          "alias": "measurement_of_bottom_right"
        }
      },
      {
        "id": "39",
        "skip": { "id": "-1" },
        "type": "textInput",
        "referTo": { "id": "40", "group_no": "3" },
        "question": {
          "slug": "ইঞ্চিতে উচ্চতার পরিমাপ নিন",
          "alias": "bottom_right_height"
        },
        "validations": {
          "regex": "^[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?$"
        }
      },
      {
        "id": "40",
        "skip": { "id": "-1" },
        "type": "textInput",
        "referTo": { "id": "checklist" },
        "question": {
          "slug": "ইঞ্চিতে প্রস্থের পরিমাপ নিন",
          "alias": "bottom_right_width"
        },
        "validations": {
          "regex": "^[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?$"
        }
      },
      {
        "id": "41",
        "skip": { "id": "-1", "group_no": "3" },
        "type": "checklist",
        "options": [
          {
            "value": "বেস টেবিলের পরিমাপ (সামনের)",
            "referTo": { "id": "42", "group_no": "3" }
          },
          {
            "value": "বেস টেবিলের পরিমাপ (বামদিকের)",
            "referTo": { "id": "45", "group_no": "3" }
          },
          {
            "value": "বেস টেবিলের পরিমাপ (ডানদিকের)",
            "referTo": { "id": "48", "group_no": "3" }
          },
          {
            "value": "টেবিল ট্রে পরিমাপ (সামনে)",
            "referTo": { "id": "51", "group_no": "3" }
          },
          {
            "value": "টেবিল ট্রে পরিমাপ (বামদিকের)",
            "referTo": { "id": "54", "group_no": "3" }
          },
          {
            "value": "টেবিল ট্রে পরিমাপ (ডানদিকের)",
            "referTo": { "id": "57", "group_no": "3" }
          }
        ],
        "referTo": { "id": "77", "group_no": "3" },
        "question": { "slug": "পরিমাপ নিন", "alias": "measurements" }
      },
      {
        "id": "42",
        "skip": { "id": "-1" },
        "type": "multipleChoice",
        "options": [
          { "value": "হ্যাঁ", "referTo": { "id": "43", "group_no": "3" } },
          { "value": "না", "referTo": { "id": "checklist" } }
        ],
        "question": {
          "slug": "বেস টেবিলের পরিমাপ (সামনে) ",
          "alias": "measurement_of_base_table_front"
        }
      },
      {
        "id": "43",
        "skip": { "id": "-1" },
        "type": "textInput",
        "referTo": { "id": "44", "group_no": "3" },
        "question": {
          "slug": "ইঞ্চিতে উচ্চতার পরিমাপ নিন",
          "alias": "base_table_front_height"
        },
        "validations": {
          "regex": "^[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?$"
        }
      },
      {
        "id": "44",
        "skip": { "id": "-1" },
        "type": "textInput",
        "referTo": { "id": "checklist" },
        "question": {
          "slug": "ইঞ্চিতে প্রস্থের পরিমাপ নিন",
          "alias": "base_table_front_width"
        },
        "validations": {
          "regex": "^[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?$"
        }
      },
      {
        "id": "45",
        "skip": { "id": "-1" },
        "type": "multipleChoice",
        "options": [
          { "value": "হ্যাঁ", "referTo": { "id": "46", "group_no": "3" } },
          { "value": "না", "referTo": { "id": "checklist" } }
        ],
        "question": {
          "slug": "বেস টেবিলের পরিমাপ (বামদিকের)",
          "alias": "measurement_of_base_table_left"
        }
      },
      {
        "id": "46",
        "skip": { "id": "-1" },
        "type": "textInput",
        "referTo": { "id": "47", "group_no": "3" },
        "question": {
          "slug": "ইঞ্চিতে উচ্চতার পরিমাপ নিন",
          "alias": "base_table_left_height"
        },
        "validations": {
          "regex": "^[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?$"
        }
      },
      {
        "id": "47",
        "skip": { "id": "-1" },
        "type": "textInput",
        "referTo": { "id": "checklist" },
        "question": {
          "slug": "ইঞ্চিতে প্রস্থের পরিমাপ নিন",
          "alias": "base_table_left_width"
        },
        "validations": {
          "regex": "^[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?$"
        }
      },
      {
        "id": "48",
        "skip": { "id": "-1" },
        "type": "multipleChoice",
        "options": [
          { "value": "হ্যাঁ", "referTo": { "id": "49", "group_no": "3" } },
          { "value": "না", "referTo": { "id": "checklist" } }
        ],
        "question": {
          "slug": "বেস টেবিলের পরিমাপ (ডানদিকের)",
          "alias": "measurement_of_base_table_right"
        }
      },
      {
        "id": "49",
        "skip": { "id": "-1" },
        "type": "textInput",
        "referTo": { "id": "50", "group_no": "3" },
        "question": {
          "slug": "ইঞ্চিতে উচ্চতার পরিমাপ নিন",
          "alias": "base_table_right_height"
        },
        "validations": {
          "regex": "^[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?$"
        }
      },
      {
        "id": "50",
        "skip": { "id": "-1" },
        "type": "textInput",
        "referTo": { "id": "checklist" },
        "question": {
          "slug": "ইঞ্চিতে প্রস্থের পরিমাপ নিন",
          "alias": "base_table_right_width"
        },
        "validations": {
          "regex": "^[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?$"
        }
      },
      {
        "id": "51",
        "skip": { "id": "-1" },
        "type": "multipleChoice",
        "options": [
          { "value": "হ্যাঁ", "referTo": { "id": "52", "group_no": "3" } },
          { "value": "না", "referTo": { "id": "checklist" } }
        ],
        "question": {
          "slug": "টেবিল ট্রে পরিমাপ (সামনে)",
          "alias": "measurement_of_table_tray_front"
        }
      },
      {
        "id": "52",
        "skip": { "id": "-1" },
        "type": "textInput",
        "referTo": { "id": "53", "group_no": "3" },
        "question": {
          "slug": "ইঞ্চিতে উচ্চতার পরিমাপ নিন",
          "alias": "table_tray_front_height"
        },
        "validations": {
          "regex": "^[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?$"
        }
      },
      {
        "id": "53",
        "skip": { "id": "-1" },
        "type": "textInput",
        "referTo": { "id": "checklist" },
        "question": {
          "slug": "ইঞ্চিতে প্রস্থের পরিমাপ নিন",
          "alias": "table_tray_front_weidth"
        },
        "validations": {
          "regex": "^[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?$"
        }
      },
      {
        "id": "54",
        "skip": { "id": "-1" },
        "type": "multipleChoice",
        "options": [
          { "value": "হ্যাঁ", "referTo": { "id": "55", "group_no": "3" } },
          { "value": "না", "referTo": { "id": "checklist" } }
        ],
        "question": {
          "slug": "টেবিল ট্রে পরিমাপ (বামদিকের)",
          "alias": "measurement_of_table_tray_left"
        }
      },
      {
        "id": "55",
        "skip": { "id": "-1" },
        "type": "textInput",
        "referTo": { "id": "56", "group_no": "3" },
        "question": {
          "slug": "ইঞ্চিতে উচ্চতার পরিমাপ নিন",
          "alias": "table_tray_left_height"
        },
        "validations": {
          "regex": "^[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?$"
        }
      },
      {
        "id": "56",
        "skip": { "id": "-1" },
        "type": "textInput",
        "referTo": { "id": "checklist" },
        "question": {
          "slug": "ইঞ্চিতে প্রস্থের পরিমাপ নিন",
          "alias": "table_tray_left_weidth"
        },
        "validations": {
          "regex": "^[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?$"
        }
      },
      {
        "id": "57",
        "skip": { "id": "-1" },
        "type": "multipleChoice",
        "options": [
          { "value": "হ্যাঁ", "referTo": { "id": "58", "group_no": "3" } },
          { "value": "না", "referTo": { "id": "checklist" } }
        ],
        "question": {
          "slug": "টেবিল ট্রে পরিমাপ (ডানদিকের)",
          "alias": "measurement_of_table_tray_right"
        }
      },
      {
        "id": "58",
        "skip": { "id": "-1" },
        "type": "textInput",
        "referTo": { "id": "59", "group_no": "3" },
        "question": {
          "slug": "ইঞ্চিতে উচ্চতার পরিমাপ নিন",
          "alias": "table_tray_right_height"
        },
        "validations": {
          "regex": "^[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?$"
        }
      },
      {
        "id": "59",
        "skip": { "id": "-1" },
        "type": "textInput",
        "referTo": { "id": "checklist" },
        "question": {
          "slug": "ইঞ্চিতে প্রস্থের পরিমাপ নিন",
          "alias": "table_tray_right_weidth"
        },
        "validations": {
          "regex": "^[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?$"
        }
      },
      {
        "id": "60",
        "skip": { "id": "-1", "group_no": "3" },
        "type": "checklist",
        "options": [
          {
            "value": "কিয়স্কের পরিমাপ(সামনে)",
            "referTo": { "id": "61", "group_no": "3" }
          },
          {
            "value": "কিয়স্কের পরিমাপ (বামদিকের)",
            "referTo": { "id": "64", "group_no": "3" }
          },
          {
            "value": "কিয়স্কের পরিমাপ (ডানদিকের)",
            "referTo": { "id": "67", "group_no": "3" }
          }
        ],
        "referTo": { "id": "77", "group_no": "3" },
        "question": { "slug": "পরিমাপ নিন", "alias": "measurements" }
      },
      {
        "id": "61",
        "skip": { "id": "-1" },
        "type": "multipleChoice",
        "options": [
          { "value": "হ্যাঁ", "referTo": { "id": "62", "group_no": "3" } },
          { "value": "না", "referTo": { "id": "checklist" } }
        ],
        "question": {
          "slug": "কিয়স্কের পরিমাপ(সামনে)",
          "alias": "measurement_of_kiosk_front"
        }
      },
      {
        "id": "62",
        "skip": { "id": "-1" },
        "type": "textInput",
        "referTo": { "id": "63", "group_no": "3" },
        "question": {
          "slug": "ইঞ্চিতে উচ্চতার পরিমাপ নিন",
          "alias": "kiosk_front_height"
        },
        "validations": {
          "regex": "^[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?$"
        }
      },
      {
        "id": "63",
        "skip": { "id": "-1" },
        "type": "textInput",
        "referTo": { "id": "checklist" },
        "question": {
          "slug": "ইঞ্চিতে প্রস্থের পরিমাপ নিন",
          "alias": "kiosk_front_width"
        },
        "validations": {
          "regex": "^[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?$"
        }
      },
      {
        "id": "64",
        "skip": { "id": "-1" },
        "type": "multipleChoice",
        "options": [
          { "value": "হ্যাঁ", "referTo": { "id": "65", "group_no": "3" } },
          { "value": "না", "referTo": { "id": "checklist" } }
        ],
        "question": {
          "slug": "কিয়স্কের পরিমাপ (বামদিকের)",
          "alias": "measurement_of_kiosk_left"
        }
      },
      {
        "id": "65",
        "skip": { "id": "-1" },
        "type": "textInput",
        "referTo": { "id": "66", "group_no": "3" },
        "question": {
          "slug": "ইঞ্চিতে উচ্চতার পরিমাপ নিন",
          "alias": "kiosk_left_height"
        },
        "validations": {
          "regex": "^[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?$"
        }
      },
      {
        "id": "66",
        "skip": { "id": "-1" },
        "type": "textInput",
        "referTo": { "id": "checklist" },
        "question": {
          "slug": "ইঞ্চিতে প্রস্থের পরিমাপ নিন",
          "alias": "kiosk_left_width"
        },
        "validations": {
          "regex": "^[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?$"
        }
      },
      {
        "id": "67",
        "skip": { "id": "-1" },
        "type": "multipleChoice",
        "options": [
          { "value": "হ্যাঁ", "referTo": { "id": "68", "group_no": "3" } },
          { "value": "না", "referTo": { "id": "checklist" } }
        ],
        "question": {
          "slug": "কিয়স্কের পরিমাপ (ডানদিকের)",
          "alias": "measurement_of_kiosk_right"
        }
      },
      {
        "id": "68",
        "skip": { "id": "-1" },
        "type": "textInput",
        "referTo": { "id": "69", "group_no": "3" },
        "question": {
          "slug": "ইঞ্চিতে উচ্চতার পরিমাপ নিন",
          "alias": "bottom_right_height"
        },
        "validations": {
          "regex": "^[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?$"
        }
      },
      {
        "id": "69",
        "skip": { "id": "-1" },
        "type": "textInput",
        "referTo": { "id": "checklist" },
        "question": {
          "slug": "ইঞ্চিতে প্রস্থের পরিমাপ নিন",
          "alias": "bottom_right_width"
        },
        "validations": {
          "regex": "^[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?$"
        }
      },
      {
        "id": "70",
        "skip": { "id": "-1", "group_no": "3" },
        "type": "checklist",
        "options": [
          {
            "value": "নন-লিট দোকানের সাইনেজের পরিমাপ",
            "referTo": { "id": "71", "group_no": "3" }
          },
          {
            "value": "ডিসপ্লে শেল্ফের পরিমাপ",
            "referTo": { "id": "64", "group_no": "3" }
          }
        ],
        "referTo": { "id": "77", "group_no": "3" },
        "question": { "slug": "পরিমাপ নিন", "alias": "measurements" }
      },
      {
        "id": "71",
        "skip": { "id": "-1" },
        "type": "multipleChoice",
        "options": [
          { "value": "হ্যাঁ", "referTo": { "id": "72", "group_no": "3" } },
          { "value": "না", "referTo": { "id": "checklist" } }
        ],
        "question": {
          "slug": "নন-লিট দোকানের সাইনেজের পরিমাপ",
          "alias": "measurement_of_non_lit_shop_signage"
        }
      },
      {
        "id": "72",
        "skip": { "id": "-1" },
        "type": "textInput",
        "referTo": { "id": "73", "group_no": "3" },
        "question": {
          "slug": "ইঞ্চিতে উচ্চতার পরিমাপ নিন",
          "alias": "non_lit_shop_signage_height"
        },
        "validations": {
          "regex": "^[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?$"
        }
      },
      {
        "id": "73",
        "skip": { "id": "-1" },
        "type": "textInput",
        "referTo": { "id": "checklist" },
        "question": {
          "slug": "ইঞ্চিতে প্রস্থের পরিমাপ নিন",
          "alias": "non_lit_shop_signage_width"
        },
        "validations": {
          "regex": "^[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?$"
        }
      },
      {
        "id": "74",
        "skip": { "id": "-1" },
        "type": "multipleChoice",
        "options": [
          { "value": "হ্যাঁ", "referTo": { "id": "75", "group_no": "3" } },
          { "value": "না", "referTo": { "id": "checklist" } }
        ],
        "question": {
          "slug": "ডিসপ্লে শেল্ফের পরিমাপ",
          "alias": "measurement_of_display_shelf"
        }
      },
      {
        "id": "75",
        "skip": { "id": "-1" },
        "type": "textInput",
        "referTo": { "id": "76", "group_no": "3" },
        "question": {
          "slug": "ইঞ্চিতে উচ্চতার পরিমাপ নিন",
          "alias": "display_shelf_height"
        },
        "validations": {
          "regex": "^[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?$"
        }
      },
      {
        "id": "76",
        "skip": { "id": "-1" },
        "type": "textInput",
        "referTo": { "id": "checklist" },
        "question": {
          "slug": "ইঞ্চিতে প্রস্থের পরিমাপ নিন",
          "alias": "display_shelf_width"
        },
        "validations": {
          "regex": "^[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?$"
        }
      },
      {
        "id": "77",
        "skip": { "id": "-1", "group_no": "3" },
        "type": "camera",
        "options": null,
        "referTo": { "id": "78", "group_no": "3" },
        "question": {
          "slug": "ক্যাবিনেটের ছবি (সামনে)",
          "alias": "cabinet_photo_front"
        }
      },
      {
        "id": "78",
        "skip": { "id": "-1", "group_no": "3" },
        "type": "camera",
        "options": null,
        "referTo": { "id": "79", "group_no": "3" },
        "question": {
          "slug": "ক্যাবিনেটের ছবি (বামদিকের)",
          "alias": "cabinet_photo_left"
        }
      },
      {
        "id": "79",
        "skip": { "id": "-1", "group_no": "3" },
        "type": "camera",
        "options": null,
        "referTo": { "id": "98", "group_no": "3" },
        "question": {
          "slug": "ক্যাবিনেটের ছবি (ডানদিকের)",
          "alias": "cabinet_photo_right"
        }
      },
      {
        "id": "98",
        "skip": { "id": "-1", "group_no": "3" },
        "type": "camera",
        "options": null,
        "referTo": { "id": "80", "group_no": "3" },
        "question": {
          "slug": "দোকানের সাথে বিক্রেতার ছবি",
          "alias": "sellers_photo_with_shop"
        }
      },
      {
        "id": "80",
        "skip": { "id": "-1", "group_no": "3" },
        "type": "camera",
        "options": null,
        "referTo": { "id": "submit", "group_no": "submit" },
        "question": { "slug": "বিক্রেতার ছবি", "alias": "sellers_photo" }
      }
    ],
    "jumping_logic": [
      { "id": "submit", "group_no": "submit", "conditions": [],
      },
    ]
  }
]
