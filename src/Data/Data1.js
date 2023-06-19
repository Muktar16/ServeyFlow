 export const  Data = [
    [
        {
            "type": "non-referring",
            "group": "1",
            "blocks": [
                {
                    "id": "1",
                    "type": "textInput",
                    "options": null,
                    "question": {
                        "slug": "Name",
                        "alias": "name"
                    },
                    "required": "true",
                    "validations": {
                        "regex": "^[a-zA-Z ]{3,}$"
                    }
                },
                {
                    "id": "2",
                    "type": "textInput",
                    "options": null,
                    "question": {
                        "slug": "Address",
                        "alias": "address"
                    },
                    "required": "false"
                },
                {
                    "id": "3",
                    "type": "date",
                    "options": null,
                    "question": {
                        "slug": "Date of Birth",
                        "alias": "dob"
                    },
                    "required": "true",
                    "validations": {
                        "max": 30,
                        "min": 18
                    }
                }
            ],
            "jumping_logic": [
                {
                    "id": "12",
                    "group_no": "4",
                    "conditions": []
                }
            ]
        },
        {
            "type": "referring",
            "group": "2",
            "blocks": [
                {
                    "id": "14",
                    "skip": {
                        "id": "-1",
                        "group_no": "2"
                    },
                    "type": "terms",
                    "options": null,
                    "referTo": {
                        "id": "15",
                        "group_no": "2"
                    },
                    "question": {
                        "slug": "Terms & Conditions",
                        "alias": "signature"
                    },
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
                    "id": "15",
                    "skip": {
                        "id": "-1",
                        "group_no": "2"
                    },
                    "type": "otp",
                    "options": null,
                    "referTo": {
                        "id": "30",
                        "group_no": "2"
                    },
                    "question": {
                        "slug": "OTP",
                        "alias": "otp"
                    },
                    "validations": {
                        "bypass": true,
                        "device": true,
                        "server": false
                    }
                },
                {
                    "id": "30",
                    "skip": {
                        "id": "31",
                        "group_no": "2"
                    },
                    "type": "record_video",
                    "options": null,
                    "referTo": {
                        "id": "31",
                        "group_no": "2"
                    },
                    "question": {
                        "slug": "Please record a video",
                        "alias": "record_video"
                    }
                },
                {
                    "id": "31",
                    "skip": {
                        "id": "-1",
                        "group_no": "2"
                    },
                    "type": "giveable",
                    "options": null,
                    "referTo": {
                        "id": "4",
                        "group_no": "2"
                    },
                    "question": {
                        "slug": "Please select a gift",
                        "alias": "giveable"
                    }
                },
                {
                    "id": "4",
                    "skip": {
                        "id": "-1",
                        "group_no": "2"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "Yes",
                            "referTo": {
                                "id": "5",
                                "group_no": "2"
                            }
                        },
                        {
                            "value": "No",
                            "referTo": {
                                "id": "5",
                                "group_no": "2"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Are you looking for a marketing agency ?",
                        "alias": "looking for a marketing agency"
                    }
                },
                {
                    "id": "5",
                    "skip": {
                        "id": "-1",
                        "group_no": "2"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "ATL",
                            "referTo": {
                                "id": "6",
                                "group_no": "2"
                            }
                        },
                        {
                            "value": "BTL",
                            "referTo": {
                                "id": "6",
                                "group_no": "2"
                            }
                        },
                        {
                            "value": "Digital",
                            "referTo": {
                                "id": "6",
                                "group_no": "2"
                            }
                        },
                        {
                            "value": "Integrated",
                            "referTo": {
                                "id": "6",
                                "group_no": "2"
                            }
                        }
                    ],
                    "question": {
                        "slug": "What type of agency are you looking for ?",
                        "alias": "type of agency"
                    }
                },
                {
                    "id": "6",
                    "skip": {
                        "id": "-1",
                        "group_no": "2"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "Yes",
                            "referTo": {
                                "id": "7",
                                "group_no": "2"
                            }
                        },
                        {
                            "value": "No",
                            "referTo": {
                                "id": "7",
                                "group_no": "2"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Have you heard about X- integrated marketing agency ?",
                        "alias": "heard about X"
                    }
                },
                {
                    "id": "7",
                    "skip": {
                        "id": "-1",
                        "group_no": "2"
                    },
                    "type": "image",
                    "options": [
                        {
                            "value": "Production/x/Images/Campaigns/cmp-6/1.png",
                            "referTo": {
                                "id": "8",
                                "group_no": "2"
                            }
                        },
                        {
                            "value": "Production/x/Images/Campaigns/cmp-6/2.png",
                            "referTo": {
                                "id": "8",
                                "group_no": "2"
                            }
                        },
                        {
                            "value": "Production/x/Images/Campaigns/cmp-6/3.png",
                            "referTo": {
                                "id": "8",
                                "group_no": "2"
                            }
                        },
                        {
                            "value": "Production/x/Images/Campaigns/cmp-6/4.png",
                            "referTo": {
                                "id": "8",
                                "group_no": "2"
                            }
                        },
                        {
                            "value": "Production/x/Images/Campaigns/cmp-6/5.png",
                            "referTo": {
                                "id": "8",
                                "group_no": "2"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Gallery",
                        "alias": "gallery"
                    }
                },
                {
                    "id": "8",
                    "skip": {
                        "id": "9",
                        "group_no": "2"
                    },
                    "type": "video",
                    "options": [
                        {
                            "value": "Production/x/Videos/Campaigns/cmp-6/d56f160f-841e-4299-a9fd-d03c585ce2bd.mp4",
                            "referTo": {
                                "id": "9",
                                "group_no": "2"
                            }
                        }
                    ],
                    "question": {
                        "slug": "X Promo",
                        "alias": "promo_video"
                    }
                },
                {
                    "id": "9",
                    "skip": {
                        "id": "-1",
                        "group_no": "2"
                    },
                    "type": "camera",
                    "options": null,
                    "referTo": {
                        "id": "10",
                        "group_no": "2"
                    },
                    "question": {
                        "slug": "Please take a picture of thr store.",
                        "alias": "picture_of_store"
                    }
                },
                {
                    "id": "10",
                    "skip": {
                        "id": "-1",
                        "group_no": "2"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "Gift 1",
                            "referTo": {
                                "id": "16",
                                "group_no": "2"
                            }
                        },
                        {
                            "value": "Gift 2",
                            "referTo": {
                                "id": "16",
                                "group_no": "2"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Gift Option",
                        "alias": "gift"
                    }
                },
                {
                    "id": "16",
                    "skip": {
                        "id": "-1",
                        "group_no": "2"
                    },
                    "type": "checkbox",
                    "options": [
                        {
                            "value": "Item 1",
                            "referTo": {}
                        },
                        {
                            "value": "Item 2",
                            "referTo": {}
                        },
                        {
                            "value": "Item 3",
                            "referTo": {}
                        }
                    ],
                    "referTo": {
                        "id": "17",
                        "group_no": "2"
                    },
                    "question": {
                        "slug": "Gift Option",
                        "alias": "gift"
                    }
                },
                {
                    "id": "17",
                    "skip": {
                        "id": "-1",
                        "group_no": "2"
                    },
                    "type": "dropdown",
                    "options": [
                        {
                            "value": "Item 1",
                            "referTo": {
                                "id": "11",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Item 2",
                            "referTo": {
                                "id": "18",
                                "group_no": "2"
                            }
                        },
                        {
                            "value": "Item 3",
                            "referTo": {
                                "id": "18",
                                "group_no": "2"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Gift Option",
                        "alias": "gift"
                    }
                },
                {
                    "id": "18",
                    "skip": {
                        "id": "-1",
                        "group_no": "2"
                    },
                    "type": "url",
                    "options": [
                        {
                            "value": "https://facebook.com",
                            "referTo": {
                                "id": "19",
                                "group_no": "2"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Click here",
                        "alias": "link"
                    }
                },
                {
                    "id": "19",
                    "skip": {
                        "id": "-1",
                        "group_no": "2"
                    },
                    "type": "emoji_rating",
                    "options": null,
                    "referTo": {
                        "id": "20",
                        "group_no": "2"
                    },
                    "question": {
                        "slug": "Give Some Rating",
                        "alias": "rating"
                    }
                },
                {
                    "id": "20",
                    "skip": {
                        "id": "-1",
                        "group_no": "2"
                    },
                    "type": "star_rating",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {}
                        },
                        {
                            "value": "2",
                            "referTo": {}
                        },
                        {
                            "value": "3",
                            "referTo": {}
                        },
                        {
                            "value": "4",
                            "referTo": {}
                        },
                        {
                            "value": "5",
                            "referTo": {}
                        }
                    ],
                    "referTo": {
                        "id": "21",
                        "group_no": "2"
                    },
                    "question": {
                        "slug": "Give More Rating",
                        "alias": "rating"
                    }
                },
                {
                    "id": "21",
                    "skip": {
                        "id": "-1",
                        "group_no": "2"
                    },
                    "type": "checklist",
                    "options": [
                        {
                            "value": "Signage (Light Box)",
                            "referTo": {
                                "id": "22",
                                "group_no": "2"
                            }
                        },
                        {
                            "value": "Bell Sign (Light Box)",
                            "referTo": {
                                "id": "24",
                                "group_no": "2"
                            }
                        },
                        {
                            "value": "Outside Glass Sticker",
                            "referTo": {
                                "id": "26",
                                "group_no": "2"
                            }
                        }
                    ],
                    "referTo": {
                        "id": "submit",
                        "group_no": "submit"
                    },
                    "validations": {
                        "partial": true,
                        "min": 1,
                        "max": 2
                    },
                    "question": {
                        "slug": "Tasklist",
                        "alias": "tasklist"
                    }
                },
                {
                    "id": "22",
                    "skip": {
                        "id": "-1",
                        "group_no": "2"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "Yes, Good Condition",
                            "referTo": {
                                "id": "23",
                                "group_no": "2"
                            }
                        },
                        {
                            "value": "Yes, But Needs Repair",
                            "referTo": {
                                "id": "23",
                                "group_no": "2"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Check Status: Signage (Light Box)",
                        "alias": "signage"
                    }
                },
                {
                    "id": "23",
                    "skip": {
                        "id": "checklist"
                    },
                    "type": "textInput",
                    "options": [],
                    "referTo": {
                        "id": "checklist"
                    },
                    "question": {
                        "slug": "Notes",
                        "alias": "notes"
                    }
                },
                {
                    "id": "24",
                    "skip": {
                        "id": "-1",
                        "group_no": "2"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "Yes, Good Condition",
                            "referTo": {
                                "id": "25",
                                "group_no": "2"
                            }
                        },
                        {
                            "value": "Yes, But Needs Repair",
                            "referTo": {
                                "id": "25",
                                "group_no": "2"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Check Status: Signage (Light Box)",
                        "alias": "signage"
                    }
                },
                {
                    "id": "25",
                    "skip": {
                        "id": "checklist"
                    },
                    "type": "textInput",
                    "options": [],
                    "referTo": {
                        "id": "checklist"
                    },
                    "question": {
                        "slug": "Notes",
                        "alias": "notes"
                    }
                },
                {
                    "id": "26",
                    "skip": {
                        "id": "-1",
                        "group_no": "2"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "Yes, Good Condition",
                            "referTo": {
                                "id": "27",
                                "group_no": "2"
                            }
                        },
                        {
                            "value": "Yes, But Needs Repair",
                            "referTo": {
                                "id": "27",
                                "group_no": "2"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Check Status: Signage (Light Box)",
                        "alias": "signage"
                    }
                },
                {
                    "id": "27",
                    "skip": {
                        "id": "checklist"
                    },
                    "type": "textInput",
                    "options": [],
                    "referTo": {
                        "id": "checklist"
                    },
                    "question": {
                        "slug": "Notes",
                        "alias": "notes"
                    }
                }
            ],
            "jumping_logic": [
                {
                    "id": "submit",
                    "group_no": "submit",
                    "conditions": []
                },
                {
                    "id": "11",
                    "group_no": "3",
                    "conditions": [
                        {
                            "id": "17",
                            "answer": "Item 3"
                        },
                        {
                            "id": "16",
                            "answer": "Item 2,Item 3"
                        },
                        {
                            "id": "6",
                            "answer": "Yes"
                        }
                    ]
                }
            ]
        },
        {
            "type": "referring",
            "group": "3",
            "blocks": [
                {
                    "id": "11",
                    "skip": {
                        "id": "-1",
                        "group_no": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "A",
                            "referTo": {
                                "id": "submit",
                                "group_no": "submit"
                            }
                        },
                        {
                            "value": "B",
                            "referTo": {
                                "id": "submit",
                                "group_no": "submit"
                            }
                        }
                    ],
                    "question": {
                        "slug": "This is a test question",
                        "alias": "test"
                    }
                }
            ],
            "jumping_logic": []
        },
        {
            "type": "numbervalidation",
            "group": "4",
            "blocks": [
                {
                    "id": "12",
                    "type": "contactNo",
                    "options": null,
                    "question": {
                        "slug": "Contact Number",
                        "alias": "contact_no"
                    },
                    "required": "true",
                    "validations": {
                        "regex": "(^(\\+88|0088)?(01){1}[3456789]{1}(\\d){8})$",
                        "prefix": "+880"
                    }
                },
                {
                    "id": "29",
                    "type": "product",
                    "options": [
                        {
                            "slug": "Product 1",
                            "alias": "13",
                            "value": "Development/a4a/Images/Products/7f176cd2-a06e-4f30-9f7d-20466f1ed51c.jpg"
                        },
                        {
                            "slug": "Product 2",
                            "alias": "14",
                            "value": "Development/a4a/Images/Products/50108900-3bba-4698-8a74-655d998871cd.jpg"
                        }
                    ],
                    "question": {
                        "slug": "Product",
                        "alias": "product"
                    },
                    "required": "true"
                }
            ],
            "jumping_logic": [
                {
                    "id": "14",
                    "group_no": "2",
                    "conditions": []
                }
            ]
        }
    ]
]