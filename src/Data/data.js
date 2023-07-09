export const data = [
  {
    "type": "non-referring",
    "group": "1",
    "blocks": [
      {
        "id": "1",
        "type": "textInput",
        "options": null,
        "question": { "slug": "পুরো নাম", "alias": "name" },
        "required": true,
        "validations": { "regex": "^[a-zA-Z ]{3,}$" }
      },
      {
        "id": "3",
        "type": "date",
        "options": null,
        "question": { "slug": "জন্ম তারিখ", "alias": "dob" },
        "required": "true",
        "validations": { "max": 30, "min": 18 }
      },
      {
        "id": "4",
        "type": "dropdown",
        "options": [
          { "value": "পুরুষ", "referTo": {} },
          { "value": "মহিলা", "referTo": {} },
          { "value": "অন্যান্য", "referTo": {} }
        ],
        "question": { "slug": "লিঙ্গ", "alias": "gender" },
        "required": "true"
      }
    ],
    "group_name": "Consumer Information",
    "jumping_logic": [{ "id": "23", "group_no": "4", "conditions": [] }]
  },
  {
    "type": "numbervalidation",
    "group": "4",
    "group_name":"Number Validation",
    "blocks": [
      {
        "id": "23",
        "type": "contactNo",
        "options": null,
        "question": { "slug": "Contact Number", "alias": "contact_no" },
        "required": "true",
        "validations": {
          "regex": "(^(\\+88|0088)?(01){1}[3456789]{1}(\\d){8})$",
          "prefix": "+880"
        }
      }
    ],
    "jumping_logic": [{ "id": "25", "group_no": "5", "conditions": [] }]
  },
  {
    "type": "referring",
    "group": "5",
    "group_name":"Terms & Conditions",
    "blocks": [
      {
        "id": "25",
        "skip": { "id": "-1", "group_no": "5" },
        "type": "terms",
        "options": null,
        "referTo": { "id": "26", "group_no": "5" },
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
        "id": "26",
        "skip": { "id": "-1", "group_no": "5" },
        "type": "otp",
        "options": null,
        "referTo": { "id": "5", "group_no": "3" },
        "question": { "slug": "OTP", "alias": "otp"},
        "validations": {
          "bypass": false,
          "device": false,
          "server": true
        }
      }
    ],
    "jumping_logic": [
      {
        "id": "5",
        "group_no": "3",
        "conditions": []
      }
    ]
  },
  {
    "type": "referring",
    "group": "3",
    "blocks": [
      {
        "id": "5",
        "skip": { "id": "-1", "group_no": "3" },
        "type": "product",
        "options": [
          {
            "slug": "B&H",
            "value": "1",
            "imgSrc": "Development/ecrm/Images/Campaigns/cmp-1/dc5775cf-64dd-4498-a30f-d0b46d0da950.png",
            "referTo": { "id": "24", "group_no": "3" }
          },
          {
            "slug": "Navy",
            "value": "1",
            "imgSrc": "Development/ecrm/Images/Campaigns/cmp-1/dc5775cf-64dd-4498-a30f-d0b46d0da950.png",
            "referTo": { "id": "24", "group_no": "3" }
          },
          {
            "slug": "Lucky Strike",
            "value": "1",
            "imgSrc": "Development/ecrm/Images/Campaigns/cmp-1/dc5775cf-64dd-4498-a30f-d0b46d0da950.png",
            "referTo": { "id": "24", "group_no": "3" }
          },
          {
            "slug": "Camel",
            "value": "1",
            "imgSrc": "Development/ecrm/Images/Campaigns/cmp-1/dc5775cf-64dd-4498-a30f-d0b46d0da950.png",
            "referTo": { "id": "24", "group_no": "3" }
          },
          {
            "slug": "Derby",
            "value": "1",
            "imgSrc": "Development/ecrm/Images/Campaigns/cmp-1/dc5775cf-64dd-4498-a30f-d0b46d0da950.png",
            "referTo": { "id": "24", "group_no": "3" }
          },
          {
            "slug": "Hollywood",
            "value": "1",
            "imgSrc": "Development/ecrm/Images/Campaigns/cmp-1/dc5775cf-64dd-4498-a30f-d0b46d0da950.png",
            "referTo": { "id": "24", "group_no": "3" }
          }
        ],
        "question": { "slug": "Primary Brand", "alias": "p_brand" }
      },
      {
        "id": "24",
        "skip": { "id": "-1", "group_no": "3" },
        "type": "product",
        "options": [
          {
            "slug": "B&H",
            "alias": "1",
            "value": "Development/ecrm/Images/Campaigns/cmp-1/dc5775cf-64dd-4498-a30f-d0b46d0da950.png",
            "referTo": { "id": "6", "group_no": "2" }
          },
          {
            "slug": "Navy",
            "alias": "1",
            "value": "Development/ecrm/Images/Campaigns/cmp-1/dc5775cf-64dd-4498-a30f-d0b46d0da950.png",
            "referTo": { "id": "6", "group_no": "2" }
          },
          {
            "slug": "Lucky Strike",
            "alias": "1",
            "value": "Development/ecrm/Images/Campaigns/cmp-1/dc5775cf-64dd-4498-a30f-d0b46d0da950.png",
            "referTo": { "id": "6", "group_no": "2" }
          },
          {
            "slug": "Camel",
            "alias": "1",
            "value": "Development/ecrm/Images/Campaigns/cmp-1/dc5775cf-64dd-4498-a30f-d0b46d0da950.png",
            "referTo": { "id": "6", "group_no": "2" }
          },
          {
            "slug": "Derby",
            "alias": "1",
            "value": "Development/ecrm/Images/Campaigns/cmp-1/dc5775cf-64dd-4498-a30f-d0b46d0da950.png",
            "referTo": { "id": "6", "group_no": "2" }
          },
          {
            "slug": "Hollywood",
            "alias": "1",
            "value": "Development/ecrm/Images/Campaigns/cmp-1/dc5775cf-64dd-4498-a30f-d0b46d0da950.png",
            "referTo": { "id": "6", "group_no": "2" }
          }
        ],
        "question": { "slug": "Secondary Brand", "alias": "s_brand" }
      }
    ],
    "group_name": "Brand",
    "jumping_logic": [{ "id": "6", "group_no": "2", "conditions": [] }]
  },
  {
    "type": "referring",
    "group": "2",
    "blocks": [
      {
        "id": "6",
        "skip": { "id": "-1", "group_no": "2" },
        "type": "multipleChoice",
        "options": [
          { "value": " > 6 মাস ", "referTo": { "id": "7", "group_no": "2" } },
          {
            "value": "6 মাস - 1 বছর",
            "referTo": { "id": "7", "group_no": "2" }
          },
          {
            "value": "1 বছর - 2 বছর",
            "referTo": { "id": "7", "group_no": "2" }
          },
          { "value": " < 2 বছর ", "referTo": { "id": "7", "group_no": "2" } }
        ],
        "question": {
          "slug": "আপনি কত বছর ধূমপান করেন?",
          "alias": "smoke_duration"
        }
      },
      {
        "id": "7",
        "skip": { "id": "-1", "group_no": "2" },
        "type": "multipleChoice",
        "options": [
          {
            "value": "এই মুহূর্তে আমি ধূমপান করছি না কিন্তু পরের সপ্তাহে করব | এই মুহূর্তে আমি ধূমপান করছি না কিন্তু পরের সপ্তাহে করব",
            "referTo": { "id": "8", "group_no": "2" }
          },
          {
            "value": "এই মুহূর্তে আমি ধূমপান করছি না কিন্তু পরের সপ্তাহে করব | এই মুহূর্তে আমি ধূমপান করছি না কিন্তু পরের সপ্তাহে করব",
            "referTo": { "id": "8", "group_no": "2" }
          },
          {
            "value": "এই মুহূর্তে আমি ধূমপান করছি না কিন্তু পরের সপ্তাহে করব | এই মুহূর্তে আমি ধূমপান করছি না কিন্তু পরের সপ্তাহে করব",
            "referTo": { "id": "8", "group_no": "2" }
          },
          {
            "value": "এই মুহূর্তে আমি ধূমপান করছি না কিন্তু পরের সপ্তাহে করব | এই মুহূর্তে আমি ধূমপান করছি না কিন্তু পরের সপ্তাহে করব",
            "referTo": { "id": "8", "group_no": "2" }
          }
        ],
        "question": {
          "slug": "আপনি কত বছর ধূমপান করেন?",
          "alias": "smoke_duration"
        }
      },
      {
        "id": "8",
        "skip": { "id": "-1", "group_no": "2" },
        "type": "checkbox",
        "options": [
          { "value": "Item 1", "referTo": {} },
          { "value": "Item 2", "referTo": {} },
          { "value": "Item 3", "referTo": {} }
        ],
        "referTo": { "id": "9", "group_no": "2" },
        "question": { "slug": "Basic Checkbox", "alias": "check_box" }
      },
      {
        "id": "9",
        "skip": { "id": "-1", "group_no": "2" },
        "type": "dropdown",
        "options": [
          { "value": "Item 1", "referTo": { "id": "10", "group_no": "2" } },
          { "value": "Item 2", "referTo": { "id": "10", "group_no": "2" } }
        ],
        "question": { "slug": "Dropdown Example", "alias": "dropdown" }
      },
      {
        "id": "10",
        "skip": { "id": "-1", "group_no": "2" },
        "type": "textInput",
        "options": [],
        "referTo": { "id": "11", "group_no": "2" },
        "question": { "slug": "Input Text Example", "alias": "input_text" }
      },
      {
        "id": "11",
        "skip": { "id": "-1", "group_no": "2" },
        "type": "url",
        "options": [
          {
            "value": "https://facebook.com",
            "referTo": { "id": "12", "group_no": "2" }
          }
        ],
        "question": { "slug": "Click here", "alias": "link" }
      },
      {
        "id": "12",
        "skip": { "id": "-1", "group_no": "2" },
        "type": "image",
        "options": [
          {
            "value": "Development/ecrm/Images/Campaigns/cmp-1/25b00033-16f4-45d1-ac2f-42e7192916df.jpeg",
            "referTo": { "id": "13", "group_no": "2" }
          }
        ],
        "question": { "slug": "Gallery", "alias": "gallery" }
      },
      {
        "id": "13",
        "skip": { "id": "-1", "group_no": "2" },
        "type": "video",
        "options": [
          {
            "value": "Development/ecrm/Videos/Campaigns/cmp-1/a1ebcecf-fccc-45e1-90fe-c2d10cbdb9d3.mp4",
            "referTo": { "id": "14", "group_no": "2" }
          }
        ],
        "question": { "slug": "Promo Video", "alias": "promo_video" }
      },
      {
        "id": "14",
        "skip": { "id": "-1", "group_no": "2" },
        "type": "emoji_rating",
        "options": null,
        "referTo": { "id": "15", "group_no": "2" },
        "question": { "slug": "Give Some Rating", "alias": "rating" }
      },
      {
        "id": "15",
        "skip": { "id": "-1", "group_no": "2" },
        "type": "star_rating",
        "options": [
          { "value": "1", "referTo": {} },
          { "value": "2", "referTo": {} },
          { "value": "3", "referTo": {} },
          { "value": "4", "referTo": {} },
          { "value": "5", "referTo": {} }
        ],
        "referTo": { "id": "16", "group_no": "2" },
        "question": { "slug": "Give More Rating", "alias": "rating" }
      },
      {
        "id": "16",
        "skip": { "id": "-1", "group_no": "2" },
        "type": "camera",
        "options": null,
        "referTo": { "id": "17", "group_no": "2" },
        "question": {
          "slug": "Please take a picture of the consumer",
          "alias": "picture_of_consumer"
        }
      },
      {
        "id": "17",
        "skip": { "id": "-1", "group_no": "2" },
        "type": "checklist",
        "options": [
          {
            "value": "Signage (Light Box)",
            "referTo": { "id": "18", "group_no": "2" }
          },
          {
            "value": "Bell Sign (Light Box)",
            "referTo": { "id": "18", "group_no": "2" }
          }
        ],
        "referTo": { "id": "submit", "group_no": "submit" },
        "question": { "slug": "Tasklist", "alias": "tasklist" }
      },
      {
        "id": "18",
        "skip": { "id": "-1", "group_no": "2" },
        "type": "sub-checklist",
        "options": [
          {
            "value": "After sales Service / বিক্রয়োত্তর সেবা",
            "referTo": { "id": "19", "group_no": "2" }
          },
          {
            "value": "Brand value",
            "referTo": { "id": "20", "group_no": "2" }
          },
          { "value": "Design", "referTo": { "id": "21", "group_no": "2" } }
        ],
        "referTo": { "id": "checklist", "group_no": "2" },
        "question": {
          "slug": "বর্তমান টিভি কেনার সময় আপনি কি কি বিষয় বিবেচনা করেছিলেন ?",
          "alias": "consumer_preference_tv"
        },
        "validations": { "min": 1, "partial": true },
        "sub-question": "Rate your selections"
      },
      {
        "id": "19",
        "skip": { "id": "-1", "group": "2" },
        "type": "multipleChoice",
        "options": [
          { "value": "1", "referTo": { "id": "checklist", "group_no": "2" } },
          { "value": "2", "referTo": { "id": "checklist", "group_no": "2" } },
          { "value": "3", "referTo": { "id": "checklist", "group_no": "2" } },
          { "value": "4", "referTo": { "id": "checklist", "group_no": "2" } },
          { "value": "5", "referTo": { "id": "checklist", "group_no": "2" } }
        ],
        "question": {
          "slug": "Rate After sales Service / বিক্রয়োত্তর সেবা",
          "alias": "rate_after_sales_tv"
        }
      },
      {
        "id": "20",
        "skip": { "id": "-1", "group": "2" },
        "type": "multipleChoice",
        "options": [
          { "value": "1", "referTo": { "id": "checklist", "group_no": "2" } },
          { "value": "2", "referTo": { "id": "checklist", "group_no": "2" } },
          { "value": "3", "referTo": { "id": "checklist", "group_no": "2" } },
          { "value": "4", "referTo": { "id": "checklist", "group_no": "2" } },
          { "value": "5", "referTo": { "id": "checklist", "group_no": "2" } }
        ],
        "question": {
          "slug": "Rate Brand Value",
          "alias": "rate_brand_value_tv"
        }
      },
      {
        "id": "21",
        "skip": { "id": "-1", "group": "2" },
        "type": "multipleChoice",
        "options": [
          { "value": "1", "referTo": { "id": "checklist", "group_no": "2" } },
          { "value": "2", "referTo": { "id": "checklist", "group_no": "2" } },
          { "value": "3", "referTo": { "id": "checklist", "group_no": "2" } },
          { "value": "4", "referTo": { "id": "checklist", "group_no": "2" } },
          { "value": "5", "referTo": { "id": "checklist", "group_no": "2" } }
        ],
        "question": { "slug": "Rate Design", "alias": "rate_design_tv" }
      }
    ],
    "group_name": "Survey",
    "jumping_logic": [
      { "id": "submit", "group_no": "submit", "conditions": [] }
    ]
  }
]