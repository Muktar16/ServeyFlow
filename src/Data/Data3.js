export const data =[
    [
        {
            "type": "numbervalidation",
            "group": "1",
            "blocks": [
                {
                    "id": "1",
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
                }
            ],
            "jumping_logic": [
                {
                    "id": "2",
                    "group_no": "2",
                    "conditions": []
                }
            ]
        },
        {
            "type": "non-referring",
            "group": "2",
            "blocks": [
                {
                    "id": "2",
                    "type": "textInput",
                    "options": null,
                    "question": {
                        "slug": "Full Name",
                        "alias": "name"
                    },
                    "required": "true",
                    "validations": {
                        "regex": "^[a-zA-Z ]{3,}$"
                    }
                },
                {
                    "id": "3",
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "25-29",
                            "referTo": {}
                        },
                        {
                            "value": "30-34",
                            "referTo": {}
                        },
                        {
                            "value": "35-39",
                            "referTo": {}
                        },
                        {
                            "value": "40-44",
                            "referTo": {}
                        },
                        {
                            "value": "45-50",
                            "referTo": {}
                        },
                        {
                            "value": "50+",
                            "referTo": {}
                        }
                    ],
                    "question": {
                        "slug": "Age",
                        "alias": "age"
                    },
                    "required": "true"
                },
                {
                    "id": "4",
                    "type": "dropdown",
                    "options": [
                        {
                            "value": "Male",
                            "referTo": {}
                        },
                        {
                            "value": "Female",
                            "referTo": {}
                        },
                        {
                            "value": "Other",
                            "referTo": {}
                        }
                    ],
                    "question": {
                        "slug": "Gender",
                        "alias": "gender"
                    },
                    "required": "true"
                },
                {
                    "id": "6",
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "Married",
                            "referTo": {}
                        },
                        {
                            "value": "Unmarried",
                            "referTo": {}
                        },
                        {
                            "value": "Others",
                            "referTo": {}
                        }
                    ],
                    "question": {
                        "slug": "Marital Status",
                        "alias": "marital"
                    },
                    "required": "true"
                },
                {
                    "id": "7",
                    "type": "numberInput",
                    "options": null,
                    "question": {
                        "slug": "Family Members",
                        "alias": "f_members"
                    },
                    "required": "true"
                },
                {
                    "id": "8",
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "Service (Private/Govt.)",
                            "referTo": {}
                        },
                        {
                            "value": "Business owner",
                            "referTo": {}
                        },
                        {
                            "value": "Self-employed",
                            "referTo": {}
                        },
                        {
                            "value": "Home maker/House wife",
                            "referTo": {}
                        },
                        {
                            "value": "Others",
                            "referTo": {}
                        }
                    ],
                    "question": {
                        "slug": "Profession of the Consumer",
                        "alias": "profession"
                    },
                    "required": "true"
                },
                {
                    "id": "9",
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "20,000-50,000",
                            "referTo": {}
                        },
                        {
                            "value": "50,000-100,000",
                            "referTo": {}
                        },
                        {
                            "value": "100,000-250,000",
                            "referTo": {}
                        },
                        {
                            "value": "250,000+",
                            "referTo": {}
                        }
                    ],
                    "question": {
                        "slug": "Monthly Income of the Consumer",
                        "alias": "Income"
                    },
                    "required": "true"
                }
            ],
            "jumping_logic": [
                {
                    "id": "185",
                    "group_no": "4",
                    "conditions": []
                }
            ]
        },
        {
            "type": "referring",
            "group": "4",
            "blocks": [
                {
                    "id": "185",
                    "skip": {
                        "id": "-1",
                        "group_no": "4"
                    },
                    "type": "otp",
                    "options": null,
                    "referTo": {
                        "id": "183",
                        "group_no": "4"
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
                    "id": "183",
                    "skip": {
                        "id": "-1",
                        "group_no": "4"
                    },
                    "type": "address",
                    "options": null,
                    "referTo": {
                        "id": "184",
                        "group_no": "4"
                    },
                    "question": {
                        "slug": "Consumer Address",
                        "alias": "c_address"
                    }
                },
                {
                    "id": "184",
                    "skip": {
                        "id": "10",
                        "group_no": "3"
                    },
                    "type": "textInput",
                    "options": null,
                    "referTo": {
                        "id": "10",
                        "group_no": "3"
                    },
                    "question": {
                        "slug": "Consumer Area",
                        "alias": "c_area"
                    }
                }
            ],
            "jumping_logic": [
                {
                    "id": "10",
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
                    "id": "10",
                    "skip": {
                        "id": "-1",
                        "group_no": "3"
                    },
                    "type": "sub-checklist",
                    "options": [
                        {
                            "value": "TV",
                            "referTo": {
                                "id": "11",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Refrigerator",
                            "referTo": {
                                "id": "48",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "AC",
                            "referTo": {
                                "id": "83",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Washing Machine",
                            "referTo": {
                                "id": "117",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Microwave Oven",
                            "referTo": {
                                "id": "148",
                                "group_no": "3"
                            }
                        }
                    ],
                    "referTo": {
                        "id": "178",
                        "group_no": "3"
                    },
                    "question": {
                        "slug": "আপনার বাসায় বর্তমানে কি কি হোম অ্যাপ্লায়েন্স আছে ?",
                        "alias": "interested_topic"
                    },
                    "validations": {
                        "max": 3,
                        "min": 1,
                        "partial": true,
                        "editable": false
                    },
                    "sub-question": "Selected Products",
                    "sub-validations": {
                        "min": 1,
                        "partial": true
                    }
                },
                {
                    "id": "11",
                    "skip": {
                        "id": "-1",
                        "group_no": "3"
                    },
                    "type": "sub-checklist",
                    "options": [
                        {
                            "value": "After sales Service",
                            "referTo": {
                                "id": "12",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Brand value",
                            "referTo": {
                                "id": "13",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Design",
                            "referTo": {
                                "id": "14",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Features",
                            "referTo": {
                                "id": "15",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Influencer",
                            "referTo": {
                                "id": "16",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "In-store experience",
                            "referTo": {
                                "id": "17",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Payment modality",
                            "referTo": {
                                "id": "18",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Picture Quality",
                            "referTo": {
                                "id": "19",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Price",
                            "referTo": {
                                "id": "20",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Showroom location/Area",
                            "referTo": {
                                "id": "21",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Sound Quality",
                            "referTo": {
                                "id": "22",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Size",
                            "referTo": {
                                "id": "23",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Type",
                            "referTo": {
                                "id": "24",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "User Friendly",
                            "referTo": {
                                "id": "25",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Warranty",
                            "referTo": {
                                "id": "26",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Word of Mouth",
                            "referTo": {
                                "id": "27",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Others",
                            "referTo": {
                                "id": "28",
                                "group_no": "3"
                            }
                        }
                    ],
                    "referTo": {
                        "id": "30",
                        "group_no": "3"
                    },
                    "question": {
                        "slug": "বর্তমান টিভি কেনার সময় আপনি কি কি বিষয় বিবেচনা করেছিলেন ?",
                        "alias": "consumer_preference_tv"
                    },
                    "validations": {
                        "min": 1,
                        "partial": true
                    },
                    "sub-question": "Rate your selections"
                },
                {
                    "id": "12",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate After Sales Service",
                        "alias": "rate_after_sales_tv"
                    }
                },
                {
                    "id": "13",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Brand Value",
                        "alias": "rate_brand_value_tv"
                    }
                },
                {
                    "id": "14",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Design",
                        "alias": "rate_design_tv"
                    }
                },
                {
                    "id": "15",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Features",
                        "alias": "rate_features_tv"
                    }
                },
                {
                    "id": "16",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Influencer",
                        "alias": "rate_influencer_tv"
                    }
                },
                {
                    "id": "17",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate In-Store experience",
                        "alias": "rate_store_experience_tv"
                    }
                },
                {
                    "id": "18",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Payment Modality",
                        "alias": "rate_payment_modality_tv"
                    }
                },
                {
                    "id": "19",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Picture Quality",
                        "alias": "rate_picture_quality_tv"
                    }
                },
                {
                    "id": "20",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Price",
                        "alias": "rate_price_tv"
                    }
                },
                {
                    "id": "21",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Showroom Location",
                        "alias": "rate_showroom_location_tv"
                    }
                },
                {
                    "id": "22",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Sound Quality",
                        "alias": "rate_sound_quality_tv"
                    }
                },
                {
                    "id": "23",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Size",
                        "alias": "rate_size_tv"
                    }
                },
                {
                    "id": "24",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Type",
                        "alias": "rate_type_tv"
                    }
                },
                {
                    "id": "25",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate User Friendly",
                        "alias": "rate_user_friendly_tv"
                    }
                },
                {
                    "id": "26",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Warranty",
                        "alias": "rate_warranty_tv"
                    }
                },
                {
                    "id": "27",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Word of Mouth",
                        "alias": "rate_word_of_mouth_tv"
                    }
                },
                {
                    "id": "28",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "textInput",
                    "referTo": {
                        "id": "29",
                        "group_no": "3"
                    },
                    "question": {
                        "slug": "Input Other Option",
                        "alias": "input_other_option"
                    }
                },
                {
                    "id": "29",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Others",
                        "alias": "rate_other_tv"
                    }
                },
                {
                    "id": "30",
                    "skip": {
                        "id": "-1",
                        "group_no": "3"
                    },
                    "type": "sub-checklist",
                    "options": [
                        {
                            "value": "স্যামসাং",
                            "referTo": {
                                "id": "31",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "এলজি",
                            "referTo": {
                                "id": "32",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "তোশিবা",
                            "referTo": {
                                "id": "33",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "ইকো প্লাস",
                            "referTo": {
                                "id": "180",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "হায়ার",
                            "referTo": {
                                "id": "34",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "হাইসেন্স",
                            "referTo": {
                                "id": "35",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "সনি",
                            "referTo": {
                                "id": "36",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "কনকা",
                            "referTo": {
                                "id": "37",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "ওয়ালটন",
                            "referTo": {
                                "id": "38",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "সিংগার",
                            "referTo": {
                                "id": "39",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "র‍্যাংগস",
                            "referTo": {
                                "id": "40",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "ভিশন",
                            "referTo": {
                                "id": "41",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "প্যানাসনিক",
                            "referTo": {
                                "id": "42",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "অন্যান্য",
                            "referTo": {
                                "id": "43",
                                "group_no": "3"
                            }
                        }
                    ],
                    "referTo": {
                        "id": "46",
                        "group_no": "3"
                    },
                    "question": {
                        "slug": "আপনার বাসায় বর্তমানে কোন ব্র্যান্ডের টিভি রয়েছে?",
                        "alias": "future_preference_tv"
                    },
                    "validations": {
                        "min": 1,
                        "partial": true
                    },
                    "sub-question": "Rate your selections"
                },
                {
                    "id": "31",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate স্যামসাং",
                        "alias": "rate_samsung_tv"
                    }
                },
                {
                    "id": "32",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate এলজি",
                        "alias": "rate_lg_tv"
                    }
                },
                {
                    "id": "33",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate তোশিবা",
                        "alias": "rate_toshiba_tv"
                    }
                },
                {
                    "id": "180",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate ইকো প্লাস",
                        "alias": "rate_eco_plus_tv"
                    }
                },
                {
                    "id": "34",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate হায়ার",
                        "alias": "rate_haier_tv"
                    }
                },
                {
                    "id": "35",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate হাইসেন্স",
                        "alias": "rate_hisense_tv"
                    }
                },
                {
                    "id": "36",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate সনি",
                        "alias": "rate_sony_tv"
                    }
                },
                {
                    "id": "37",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate কনকা",
                        "alias": "rate_konka_tv"
                    }
                },
                {
                    "id": "38",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate ওয়ালটন",
                        "alias": "rate_walton_tv"
                    }
                },
                {
                    "id": "39",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate সিংগার",
                        "alias": "rate_singer_tv"
                    }
                },
                {
                    "id": "40",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate র‌্যাংগস",
                        "alias": "rate_rangs_tv"
                    }
                },
                {
                    "id": "41",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate ভিশন",
                        "alias": "rate_vision_tv"
                    }
                },
                {
                    "id": "42",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate প্যানাসনিক",
                        "alias": "rate_panasonic_tv"
                    }
                },
                {
                    "id": "43",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "textInput",
                    "referTo": {
                        "id": "44",
                        "group_no": "3"
                    },
                    "question": {
                        "slug": "Input Tv Brand",
                        "alias": "input_tv_brand"
                    }
                },
                {
                    "id": "44",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate অন্যান্য",
                        "alias": "rate_other_brand_tv"
                    }
                },
                {
                    "id": "46",
                    "skip": {
                        "id": "-1",
                        "group_no": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "হ্যা",
                            "referTo": {
                                "id": "47",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "না",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "এখনো কিছু ভাবি নি",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "ভবিষ্যতে কি নতুন টিভি কেনার পরিকল্পনা আছে ?",
                        "alias": "buy_future_tv"
                    }
                },
                {
                    "id": "47",
                    "skip": {
                        "id": "-1",
                        "group_no": "3"
                    },
                    "type": "checkbox",
                    "options": [
                        {
                            "value": "স্যামসাং",
                            "referTo": {}
                        },
                        {
                            "value": "এলজি",
                            "referTo": {}
                        },
                        {
                            "value": "তোশিবা",
                            "referTo": {}
                        },
                        {
                            "value": "ইকো প্লাস",
                            "referTo": {}
                        },
                        {
                            "value": "হায়ার",
                            "referTo": {}
                        },
                        {
                            "value": "হাইসেন্স",
                            "referTo": {}
                        },
                        {
                            "value": "সনি",
                            "referTo": {}
                        },
                        {
                            "value": "ওয়ালটন",
                            "referTo": {}
                        },
                        {
                            "value": "সিংগার",
                            "referTo": {}
                        },
                        {
                            "value": "র‍্যাংগস",
                            "referTo": {}
                        },
                        {
                            "value": "অন্যান্য",
                            "referTo": {}
                        }
                    ],
                    "referTo": {
                        "id": "checklist",
                        "group_no": "3"
                    },
                    "question": {
                        "slug": "কোন ব্র্যান্ডের টিভি আপনার ভবিষ্যৎ বিবেচনায় রাখার কথা ভাবছেন ?",
                        "alias": "buy_brand_tv"
                    }
                },
                {
                    "id": "48",
                    "skip": {
                        "id": "-1",
                        "group_no": "3"
                    },
                    "type": "sub-checklist",
                    "options": [
                        {
                            "value": "After sales Service",
                            "referTo": {
                                "id": "49",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Brand value",
                            "referTo": {
                                "id": "50",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Capacity",
                            "referTo": {
                                "id": "51",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Design",
                            "referTo": {
                                "id": "52",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Durability",
                            "referTo": {
                                "id": "53",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Features",
                            "referTo": {
                                "id": "54",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Influencer",
                            "referTo": {
                                "id": "55",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "In-store experience",
                            "referTo": {
                                "id": "56",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Operating cost",
                            "referTo": {
                                "id": "57",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Payment modality",
                            "referTo": {
                                "id": "58",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Price",
                            "referTo": {
                                "id": "59",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Showroom location/Area",
                            "referTo": {
                                "id": "60",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Type",
                            "referTo": {
                                "id": "61",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Warranty",
                            "referTo": {
                                "id": "62",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Word of Mouth",
                            "referTo": {
                                "id": "63",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Others",
                            "referTo": {
                                "id": "64",
                                "group_no": "3"
                            }
                        }
                    ],
                    "referTo": {
                        "id": "66",
                        "group_no": "3"
                    },
                    "question": {
                        "slug": "বর্তমান ফ্রিজ কেনার সময় আপনি কি কি বিষয় বিবেচনা করেছিলেন?",
                        "alias": "consumer_preference_fridge"
                    },
                    "validations": {
                        "min": 1,
                        "partial": true
                    },
                    "sub-question": "Rate your selections"
                },
                {
                    "id": "49",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate After Sales Service",
                        "alias": "rate_after_sales_fridge"
                    }
                },
                {
                    "id": "50",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Brand Value",
                        "alias": "rate_brand_value_fridge"
                    }
                },
                {
                    "id": "51",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Capacity",
                        "alias": "rate_capacity_fridge"
                    }
                },
                {
                    "id": "52",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Design",
                        "alias": "rate_design_fridge"
                    }
                },
                {
                    "id": "53",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Durability",
                        "alias": "rate_durability_fridge"
                    }
                },
                {
                    "id": "54",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate feature",
                        "alias": "rate_feature_fridge"
                    }
                },
                {
                    "id": "55",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Influencer",
                        "alias": "rate_influence_fridge"
                    }
                },
                {
                    "id": "56",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate In-Store experience",
                        "alias": "rate_in_store_experience_fridge"
                    }
                },
                {
                    "id": "57",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Operation Cost",
                        "alias": "rate_operation_cost_fridge"
                    }
                },
                {
                    "id": "58",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Payment Modality",
                        "alias": "rate_payment_modality_fridge"
                    }
                },
                {
                    "id": "59",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Price",
                        "alias": "rate_price_fridge"
                    }
                },
                {
                    "id": "60",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Showroom location",
                        "alias": "rate_location_fridge"
                    }
                },
                {
                    "id": "61",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Type",
                        "alias": "rate_type_fridge"
                    }
                },
                {
                    "id": "62",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Warranty",
                        "alias": "rate_warranty_fridge"
                    }
                },
                {
                    "id": "63",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Word of Mouth",
                        "alias": "rate_word_of_mouth_fridge"
                    }
                },
                {
                    "id": "64",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "textInput",
                    "referTo": {
                        "id": "65",
                        "group_no": "3"
                    },
                    "question": {
                        "slug": "Input Other Fridge Option",
                        "alias": "input_other_fridge_option"
                    }
                },
                {
                    "id": "65",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Others",
                        "alias": "rate_other_fridge"
                    }
                },
                {
                    "id": "66",
                    "skip": {
                        "id": "-1",
                        "group_no": "3"
                    },
                    "type": "sub-checklist",
                    "options": [
                        {
                            "value": "স্যামসাং",
                            "referTo": {
                                "id": "67",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "এলজি",
                            "referTo": {
                                "id": "68",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "ইকো প্লাস",
                            "referTo": {
                                "id": "69",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "হায়ার",
                            "referTo": {
                                "id": "70",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "হিটাচি",
                            "referTo": {
                                "id": "71",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "সিংগার",
                            "referTo": {
                                "id": "72",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "শার্প",
                            "referTo": {
                                "id": "73",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "কনকা",
                            "referTo": {
                                "id": "74",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "ট্রান্সকম",
                            "referTo": {
                                "id": "75",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "ভিশন",
                            "referTo": {
                                "id": "76",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "র‌্যাংগস",
                            "referTo": {
                                "id": "77",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "ওয়ালটন",
                            "referTo": {
                                "id": "78",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "অন্যান্য",
                            "referTo": {
                                "id": "79",
                                "group_no": "3"
                            }
                        }
                    ],
                    "referTo": {
                        "id": "81",
                        "group_no": "3"
                    },
                    "question": {
                        "slug": "আপনার বাসায় বর্তমানে কোন ব্র্যান্ডের ফ্রিজ রয়েছে?",
                        "alias": "owned_fridge"
                    },
                    "validations": {
                        "min": 1,
                        "partial": true
                    },
                    "sub-question": "Rate your selections"
                },
                {
                    "id": "67",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate স্যামসাং",
                        "alias": "rate_samsung_fridge"
                    }
                },
                {
                    "id": "68",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate এলজি",
                        "alias": "rate_lg_fridge"
                    }
                },
                {
                    "id": "69",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate ইকো প্লাস",
                        "alias": "rate_eco_plus_fridge"
                    }
                },
                {
                    "id": "70",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate হায়ার",
                        "alias": "rate_haier_fridge"
                    }
                },
                {
                    "id": "71",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate হিটাচি",
                        "alias": "rate_hitachi_fridge"
                    }
                },
                {
                    "id": "72",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate সিংগার",
                        "alias": "rate_singer_fridge"
                    }
                },
                {
                    "id": "73",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate শার্প",
                        "alias": "rate_sharp_fridge"
                    }
                },
                {
                    "id": "74",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate কনকা",
                        "alias": "rate_konka_fridge"
                    }
                },
                {
                    "id": "75",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate ট্রান্সকম",
                        "alias": "rate_transcom_fridge"
                    }
                },
                {
                    "id": "76",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate ভিশন",
                        "alias": "rate_vision_fridge"
                    }
                },
                {
                    "id": "77",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate র‌্যাংগস",
                        "alias": "rate_rangs_fridge"
                    }
                },
                {
                    "id": "78",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate ওয়ালটন",
                        "alias": "rate_walton_fridge"
                    }
                },
                {
                    "id": "79",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "textInput",
                    "referTo": {
                        "id": "80",
                        "group_no": "3"
                    },
                    "question": {
                        "slug": "Input Fridge Brand",
                        "alias": "input_fridge_brand"
                    }
                },
                {
                    "id": "80",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate অন্যান্য",
                        "alias": "rate_other_brand_fridge"
                    }
                },
                {
                    "id": "81",
                    "skip": {
                        "id": "-1",
                        "group_no": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "হ্যা",
                            "referTo": {
                                "id": "82",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "না",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "এখনো কিছু ভাবি নি",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "ভবিষ্যতে কি নতুন ফ্রিজ কেনার পরিকল্পনা আছে?",
                        "alias": "buy_future_tv"
                    }
                },
                {
                    "id": "82",
                    "skip": {
                        "id": "-1",
                        "group_no": "3"
                    },
                    "type": "checkbox",
                    "options": [
                        {
                            "value": "স্যামসাং",
                            "referTo": {}
                        },
                        {
                            "value": "এলজি",
                            "referTo": {}
                        },
                        {
                            "value": "ইকো প্লাস",
                            "referTo": {}
                        },
                        {
                            "value": "হায়ার",
                            "referTo": {}
                        },
                        {
                            "value": "হিটাচি",
                            "referTo": {}
                        },
                        {
                            "value": "সিংগার",
                            "referTo": {}
                        },
                        {
                            "value": "শার্প",
                            "referTo": {}
                        },
                        {
                            "value": "কনকা",
                            "referTo": {}
                        },
                        {
                            "value": "ট্রান্সকম",
                            "referTo": {}
                        },
                        {
                            "value": "ভিশন",
                            "referTo": {}
                        },
                        {
                            "value": "র‍্যাংগস",
                            "referTo": {}
                        },
                        {
                            "value": "ওয়ালটন",
                            "referTo": {}
                        },
                        {
                            "value": "অন্যান্য",
                            "referTo": {}
                        }
                    ],
                    "referTo": {
                        "id": "checklist",
                        "group_no": "3"
                    },
                    "question": {
                        "slug": "কোন ব্র্যান্ডের ফ্রিজ আপনার ভবিষ্যৎ বিবেচনায় রাখার কথা ভাবছেন?",
                        "alias": "buy_brand_fridge"
                    }
                },
                {
                    "id": "83",
                    "skip": {
                        "id": "-1",
                        "group_no": "3"
                    },
                    "type": "sub-checklist",
                    "options": [
                        {
                            "value": "After sales Service",
                            "referTo": {
                                "id": "84",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Brand value",
                            "referTo": {
                                "id": "85",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Capacity",
                            "referTo": {
                                "id": "86",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Design",
                            "referTo": {
                                "id": "87",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Durability",
                            "referTo": {
                                "id": "88",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Influencer",
                            "referTo": {
                                "id": "89",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "In-store experience",
                            "referTo": {
                                "id": "90",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Operating cost",
                            "referTo": {
                                "id": "91",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Word of Mouth",
                            "referTo": {
                                "id": "92",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Payment modality",
                            "referTo": {
                                "id": "93",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Price",
                            "referTo": {
                                "id": "94",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Showroom location/Area",
                            "referTo": {
                                "id": "95",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Type",
                            "referTo": {
                                "id": "96",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Warranty",
                            "referTo": {
                                "id": "97",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Others",
                            "referTo": {
                                "id": "98",
                                "group_no": "3"
                            }
                        }
                    ],
                    "referTo": {
                        "id": "100",
                        "group_no": "3"
                    },
                    "question": {
                        "slug": "বর্তমান এসি কেনার সময় আপনি কি কি বিষয় বিবেচনা করেছিলেন?",
                        "alias": "consumer_preference_ac"
                    },
                    "validations": {
                        "min": 1,
                        "partial": true
                    },
                    "sub-question": "Rate your selections"
                },
                {
                    "id": "84",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate After Sales Service",
                        "alias": "rate_after_sales_ac"
                    }
                },
                {
                    "id": "85",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Brand Value",
                        "alias": "rate_brand_value_ac"
                    }
                },
                {
                    "id": "86",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Capacity",
                        "alias": "rate_capacity_ac"
                    }
                },
                {
                    "id": "87",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Design",
                        "alias": "rate_design_ac"
                    }
                },
                {
                    "id": "88",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Durability",
                        "alias": "rate_durability_ac"
                    }
                },
                {
                    "id": "89",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Influencer",
                        "alias": "rate_influencer_ac"
                    }
                },
                {
                    "id": "90",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate In-Store experience",
                        "alias": "rate_store_experience_ac"
                    }
                },
                {
                    "id": "91",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Operating cost",
                        "alias": "rate_operation_cost_ac"
                    }
                },
                {
                    "id": "92",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Word of Mouth",
                        "alias": "rate_word_of_mouth_ac"
                    }
                },
                {
                    "id": "93",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Payment Modality",
                        "alias": "rate_payment_modality_ac"
                    }
                },
                {
                    "id": "94",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Price",
                        "alias": "rate_price_ac"
                    }
                },
                {
                    "id": "95",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Showroom Location",
                        "alias": "rate_showroom_location_ac"
                    }
                },
                {
                    "id": "96",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Type",
                        "alias": "rate_type_ac"
                    }
                },
                {
                    "id": "97",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Warranty",
                        "alias": "rate_warranty_ac"
                    }
                },
                {
                    "id": "98",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "textInput",
                    "referTo": {
                        "id": "99",
                        "group_no": "3"
                    },
                    "question": {
                        "slug": "Input Other Option",
                        "alias": "input_other_option"
                    }
                },
                {
                    "id": "99",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Others",
                        "alias": "rate_other_ac"
                    }
                },
                {
                    "id": "100",
                    "skip": {
                        "id": "-1",
                        "group_no": "3"
                    },
                    "type": "sub-checklist",
                    "options": [
                        {
                            "value": "এলজি",
                            "referTo": {
                                "id": "101",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "স্যামসাং",
                            "referTo": {
                                "id": "102",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "হায়ার",
                            "referTo": {
                                "id": "103",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "ইকো প্লাস",
                            "referTo": {
                                "id": "104",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "ওয়ার্লপুল",
                            "referTo": {
                                "id": "105",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "ভিশন",
                            "referTo": {
                                "id": "106",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "সিংগার",
                            "referTo": {
                                "id": "107",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "র‌্যাংগস",
                            "referTo": {
                                "id": "108",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "ট্রান্সকম",
                            "referTo": {
                                "id": "109",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "গ্রী",
                            "referTo": {
                                "id": "110",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "মিডিয়া",
                            "referTo": {
                                "id": "111",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "ওয়ালটন",
                            "referTo": {
                                "id": "112",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "অন্যান্য",
                            "referTo": {
                                "id": "113",
                                "group_no": "3"
                            }
                        }
                    ],
                    "referTo": {
                        "id": "115",
                        "group_no": "3"
                    },
                    "question": {
                        "slug": "আপনার বাসায় বর্তমানে কোন ব্র্যান্ডের এসি রয়েছে?",
                        "alias": "owned_ac"
                    },
                    "validations": {
                        "min": 1,
                        "partial": true
                    },
                    "sub-question": "Rate your selections"
                },
                {
                    "id": "101",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate এলজি",
                        "alias": "rate_lg_ac"
                    }
                },
                {
                    "id": "102",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate স্যামসাং",
                        "alias": "rate_samsung_ac"
                    }
                },
                {
                    "id": "103",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate হায়ার",
                        "alias": "rate_haier_ac"
                    }
                },
                {
                    "id": "104",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate ইকো প্লাস",
                        "alias": "rate_eco_plus_ac"
                    }
                },
                {
                    "id": "105",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate ওয়ার্লপুল",
                        "alias": "rate_whirlpool_ac"
                    }
                },
                {
                    "id": "106",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate ভিশন",
                        "alias": "rate_vision_ac"
                    }
                },
                {
                    "id": "107",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate সিংগার",
                        "alias": "rate_singer_ac"
                    }
                },
                {
                    "id": "108",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate র‌্যাংগস",
                        "alias": "rate_rangs_ac"
                    }
                },
                {
                    "id": "109",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate ট্রান্সকম",
                        "alias": "rate_transcom_ac"
                    }
                },
                {
                    "id": "110",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate গ্রী",
                        "alias": "rate_gree_ac"
                    }
                },
                {
                    "id": "111",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate মিডিয়া",
                        "alias": "rate_media_ac"
                    }
                },
                {
                    "id": "112",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate ওয়ালটন",
                        "alias": "rate_walton_ac"
                    }
                },
                {
                    "id": "113",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "textInput",
                    "referTo": {
                        "id": "114",
                        "group_no": "3"
                    },
                    "question": {
                        "slug": "Input AC Brand",
                        "alias": "input_ac_brand"
                    }
                },
                {
                    "id": "114",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate অন্যান্য",
                        "alias": "rate_other_brand_ac"
                    }
                },
                {
                    "id": "115",
                    "skip": {
                        "id": "-1",
                        "group_no": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "হ্যা",
                            "referTo": {
                                "id": "116",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "না",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "এখনো কিছু ভাবি নি",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "ভবিষ্যতে কি নতুন এসি কেনার পরিকল্পনা আছে?",
                        "alias": "buy_future_ac"
                    }
                },
                {
                    "id": "116",
                    "skip": {
                        "id": "-1",
                        "group_no": "3"
                    },
                    "type": "checkbox",
                    "options": [
                        {
                            "value": "এলজি",
                            "referTo": {}
                        },
                        {
                            "value": "স্যামসাং",
                            "referTo": {}
                        },
                        {
                            "value": "হায়ার",
                            "referTo": {}
                        },
                        {
                            "value": "ইকো প্লাস",
                            "referTo": {}
                        },
                        {
                            "value": "ওয়ার্লপুল",
                            "referTo": {}
                        },
                        {
                            "value": "ভিশন",
                            "referTo": {}
                        },
                        {
                            "value": "সিংগার",
                            "referTo": {}
                        },
                        {
                            "value": "র‌্যাংগস",
                            "referTo": {}
                        },
                        {
                            "value": "ট্রান্সকম",
                            "referTo": {}
                        },
                        {
                            "value": "গ্রী",
                            "referTo": {}
                        },
                        {
                            "value": "মিডিয়া",
                            "referTo": {}
                        },
                        {
                            "value": "ওয়ালটন",
                            "referTo": {}
                        },
                        {
                            "value": "অন্যান্য",
                            "referTo": {}
                        }
                    ],
                    "referTo": {
                        "id": "checklist",
                        "group_no": "3"
                    },
                    "question": {
                        "slug": "কোন ব্র্যান্ডের এসি আপনার ভবিষ্যৎ বিবেচনায় রাখার কথা ভাবছেন?",
                        "alias": "buy_brand_ac"
                    }
                },
                {
                    "id": "117",
                    "skip": {
                        "id": "-1",
                        "group_no": "3"
                    },
                    "type": "sub-checklist",
                    "options": [
                        {
                            "value": "After sales Service",
                            "referTo": {
                                "id": "118",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Brand value",
                            "referTo": {
                                "id": "119",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Capacity",
                            "referTo": {
                                "id": "120",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Design",
                            "referTo": {
                                "id": "121",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Durability",
                            "referTo": {
                                "id": "122",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Feature/Function",
                            "referTo": {
                                "id": "123",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Influencer",
                            "referTo": {
                                "id": "124",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "In-store experience",
                            "referTo": {
                                "id": "125",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Operating cost",
                            "referTo": {
                                "id": "126",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Word of Mouth",
                            "referTo": {
                                "id": "127",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Payment modality",
                            "referTo": {
                                "id": "128",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Price",
                            "referTo": {
                                "id": "129",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Showroom location/Area",
                            "referTo": {
                                "id": "130",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Type",
                            "referTo": {
                                "id": "131",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Warranty",
                            "referTo": {
                                "id": "132",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Others",
                            "referTo": {
                                "id": "133",
                                "group_no": "3"
                            }
                        }
                    ],
                    "referTo": {
                        "id": "135",
                        "group_no": "3"
                    },
                    "question": {
                        "slug": "বর্তমান ওয়াশিং মেশিন কেনার সময় আপনি কি কি বিষয় বিবেচনা করেছিলেন?",
                        "alias": "consumer_preference_washing_machine"
                    },
                    "validations": {
                        "min": 1,
                        "partial": true
                    },
                    "sub-question": "Rate your selections"
                },
                {
                    "id": "118",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate After Sales Service",
                        "alias": "rate_after_sales_wm"
                    }
                },
                {
                    "id": "119",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Brand Value",
                        "alias": "rate_brand_value_wm"
                    }
                },
                {
                    "id": "120",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Capacity",
                        "alias": "rate_capacity_wm"
                    }
                },
                {
                    "id": "121",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Design",
                        "alias": "rate_design_wm"
                    }
                },
                {
                    "id": "122",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Durability",
                        "alias": "rate_durability_wm"
                    }
                },
                {
                    "id": "123",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Feature",
                        "alias": "rate_feature_wm"
                    }
                },
                {
                    "id": "124",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Influencer",
                        "alias": "rate_influencer_wm"
                    }
                },
                {
                    "id": "125",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate In-Store experience",
                        "alias": "rate_store_experience_wm"
                    }
                },
                {
                    "id": "126",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Operating cost",
                        "alias": "rate_operation_cost_wm"
                    }
                },
                {
                    "id": "127",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Word of Mouth",
                        "alias": "rate_word_of_mouth_wm"
                    }
                },
                {
                    "id": "128",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Payment Modality",
                        "alias": "rate_payment_modality_wm"
                    }
                },
                {
                    "id": "129",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Price",
                        "alias": "rate_price_wm"
                    }
                },
                {
                    "id": "130",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Showroom Location",
                        "alias": "rate_showroom_location_wm"
                    }
                },
                {
                    "id": "131",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Type",
                        "alias": "rate_type_wm"
                    }
                },
                {
                    "id": "132",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Warranty",
                        "alias": "rate_warranty_wm"
                    }
                },
                {
                    "id": "133",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "textInput",
                    "referTo": {
                        "id": "134",
                        "group_no": "3"
                    },
                    "question": {
                        "slug": "Input Other Washing Machine Option",
                        "alias": "input_other_wm_option"
                    }
                },
                {
                    "id": "134",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Others",
                        "alias": "rate_other_wm"
                    }
                },
                {
                    "id": "135",
                    "skip": {
                        "id": "-1",
                        "group_no": "3"
                    },
                    "type": "sub-checklist",
                    "options": [
                        {
                            "value": "এলজি",
                            "referTo": {
                                "id": "136",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "স্যামসাং",
                            "referTo": {
                                "id": "137",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "হায়ার",
                            "referTo": {
                                "id": "138",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "ইকো প্লাস",
                            "referTo": {
                                "id": "139",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "ওয়ার্লপুল",
                            "referTo": {
                                "id": "140",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "ভিশন",
                            "referTo": {
                                "id": "141",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "বিকো",
                            "referTo": {
                                "id": "142",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "ওয়ালটন",
                            "referTo": {
                                "id": "143",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "অন্যান্য",
                            "referTo": {
                                "id": "144",
                                "group_no": "3"
                            }
                        }
                    ],
                    "referTo": {
                        "id": "146",
                        "group_no": "3"
                    },
                    "question": {
                        "slug": "আপনার বাসায় বর্তমানে কোন ব্র্যান্ডের ওয়াশিং মেশিন রয়েছে?",
                        "alias": "owned_wm"
                    },
                    "validations": {
                        "min": 1,
                        "partial": true
                    },
                    "sub-question": "Rate your selections"
                },
                {
                    "id": "136",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate এলজি",
                        "alias": "rate_lg_wm"
                    }
                },
                {
                    "id": "137",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate স্যামসাং",
                        "alias": "rate_samsung_wm"
                    }
                },
                {
                    "id": "138",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate হায়ার",
                        "alias": "rate_haier_wm"
                    }
                },
                {
                    "id": "139",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate ইকো প্লাস",
                        "alias": "rate_eco_plus_wm"
                    }
                },
                {
                    "id": "140",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate ওয়ার্লপুল",
                        "alias": "rate_whirlpool_wm"
                    }
                },
                {
                    "id": "141",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate ভিশন",
                        "alias": "rate_vision_wm"
                    }
                },
                {
                    "id": "142",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate বিকো",
                        "alias": "rate_biko_wm"
                    }
                },
                {
                    "id": "143",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate ওয়ালটন",
                        "alias": "rate_walton_wm"
                    }
                },
                {
                    "id": "144",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "textInput",
                    "referTo": {
                        "id": "145",
                        "group_no": "3"
                    },
                    "question": {
                        "slug": "Input Washing Machine Brand",
                        "alias": "input_wm_brand"
                    }
                },
                {
                    "id": "145",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate অন্যান্য",
                        "alias": "rate_other_brand_wm"
                    }
                },
                {
                    "id": "146",
                    "skip": {
                        "id": "-1",
                        "group_no": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "হ্যা",
                            "referTo": {
                                "id": "147",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "না",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "এখনো কিছু ভাবি নি",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "ভবিষ্যতে কি নতুন ওয়াশিং মেশিন কেনার পরিকল্পনা আছে?",
                        "alias": "buy_future_wasing_machine"
                    }
                },
                {
                    "id": "147",
                    "skip": {
                        "id": "-1",
                        "group_no": "3"
                    },
                    "type": "checkbox",
                    "options": [
                        {
                            "value": "এলজি",
                            "referTo": {}
                        },
                        {
                            "value": "স্যামসাং",
                            "referTo": {}
                        },
                        {
                            "value": "হায়ার",
                            "referTo": {}
                        },
                        {
                            "value": "ইকো প্লাস",
                            "referTo": {}
                        },
                        {
                            "value": "ওয়ার্লপুল",
                            "referTo": {}
                        },
                        {
                            "value": "ভিশন",
                            "referTo": {}
                        },
                        {
                            "value": "বিকো",
                            "referTo": {}
                        },
                        {
                            "value": "ওয়ালটন",
                            "referTo": {}
                        },
                        {
                            "value": "অন্যান্য",
                            "referTo": {}
                        }
                    ],
                    "referTo": {
                        "id": "checklist",
                        "group_no": "3"
                    },
                    "question": {
                        "slug": "কোন ব্র্যান্ডের ওয়াশিং মেশিন আপনার ভবিষ্যৎ বিবেচনায় রাখার কথা ভাবছেন?",
                        "alias": "buy_brand_wm"
                    }
                },
                {
                    "id": "148",
                    "skip": {
                        "id": "-1",
                        "group_no": "3"
                    },
                    "type": "sub-checklist",
                    "options": [
                        {
                            "value": "After sales Service",
                            "referTo": {
                                "id": "149",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Brand value",
                            "referTo": {
                                "id": "150",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Capacity",
                            "referTo": {
                                "id": "151",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Design",
                            "referTo": {
                                "id": "152",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Durability",
                            "referTo": {
                                "id": "153",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Feature",
                            "referTo": {
                                "id": "154",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Influencer",
                            "referTo": {
                                "id": "155",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "In-store experience",
                            "referTo": {
                                "id": "156",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Operating cost",
                            "referTo": {
                                "id": "157",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Word of Mouth",
                            "referTo": {
                                "id": "158",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Payment modality",
                            "referTo": {
                                "id": "159",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Price",
                            "referTo": {
                                "id": "160",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Showroom location/Area",
                            "referTo": {
                                "id": "161",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Type",
                            "referTo": {
                                "id": "162",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Warranty",
                            "referTo": {
                                "id": "163",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Others",
                            "referTo": {
                                "id": "164",
                                "group_no": "3"
                            }
                        }
                    ],
                    "referTo": {
                        "id": "166",
                        "group_no": "3"
                    },
                    "question": {
                        "slug": "বর্তমান মাইক্রোওয়েভ ওভেন কেনার সময় আপনি কি কি বিষয় বিবেচনা করেছিলেন?",
                        "alias": "consumer_preference_microwave_oven"
                    },
                    "validations": {
                        "min": 1,
                        "partial": true
                    },
                    "sub-question": "Rate your selections"
                },
                {
                    "id": "149",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate After Sales Service",
                        "alias": "rate_after_sales_mc_oven"
                    }
                },
                {
                    "id": "150",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Brand Value",
                        "alias": "rate_brand_value_mc_oven"
                    }
                },
                {
                    "id": "151",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Capacity",
                        "alias": "rate_capacity_mc_oven"
                    }
                },
                {
                    "id": "152",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Design",
                        "alias": "rate_design_mc_oven"
                    }
                },
                {
                    "id": "153",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Durability",
                        "alias": "rate_durability_mc_oven"
                    }
                },
                {
                    "id": "154",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Feature",
                        "alias": "rate_feature_mc_oven"
                    }
                },
                {
                    "id": "155",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Influencer",
                        "alias": "rate_influencer_mc_oven"
                    }
                },
                {
                    "id": "156",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate In-Store experience",
                        "alias": "rate_store_experience_mc_oven"
                    }
                },
                {
                    "id": "157",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Operating cost",
                        "alias": "rate_operation_cost_mc_oven"
                    }
                },
                {
                    "id": "158",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Word of Mouth",
                        "alias": "rate_word_of_mouth_mc_oven"
                    }
                },
                {
                    "id": "159",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Payment Modality",
                        "alias": "rate_payment_modality_mc_oven"
                    }
                },
                {
                    "id": "160",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Price",
                        "alias": "rate_price_mc_oven"
                    }
                },
                {
                    "id": "161",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Showroom Location",
                        "alias": "rate_showroom_location_mc_oven"
                    }
                },
                {
                    "id": "162",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Type",
                        "alias": "rate_type_mc_oven"
                    }
                },
                {
                    "id": "163",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Warranty",
                        "alias": "rate_warranty_mc_oven"
                    }
                },
                {
                    "id": "164",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "textInput",
                    "referTo": {
                        "id": "165",
                        "group_no": "3"
                    },
                    "question": {
                        "slug": "Input Other Microwave Oven Option",
                        "alias": "input_other_option"
                    }
                },
                {
                    "id": "165",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate Others",
                        "alias": "rate_other_mc_oven"
                    }
                },
                {
                    "id": "166",
                    "skip": {
                        "id": "-1",
                        "group_no": "3"
                    },
                    "type": "sub-checklist",
                    "options": [
                        {
                            "value": "এলজি",
                            "referTo": {
                                "id": "167",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "স্যামসাং",
                            "referTo": {
                                "id": "168",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "ইকো প্লাস",
                            "referTo": {
                                "id": "169",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "সিংগার",
                            "referTo": {
                                "id": "170",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "ভিশন",
                            "referTo": {
                                "id": "171",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "মিয়াকো",
                            "referTo": {
                                "id": "172",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "ওয়ালটন",
                            "referTo": {
                                "id": "173",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "অন্যান্য",
                            "referTo": {
                                "id": "174",
                                "group_no": "3"
                            }
                        }
                    ],
                    "referTo": {
                        "id": "176",
                        "group_no": "3"
                    },
                    "question": {
                        "slug": "আপনার বাসায় বর্তমানে কোন ব্র্যান্ডের মাইক্রোওয়েভ ওভেন রয়েছে?",
                        "alias": "owned_mc"
                    },
                    "validations": {
                        "min": 1,
                        "partial": true
                    },
                    "sub-question": "Rate your selections"
                },
                {
                    "id": "167",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate এলজি",
                        "alias": "rate_lg_mc"
                    }
                },
                {
                    "id": "168",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate স্যামসাং",
                        "alias": "rate_samsung_mc"
                    }
                },
                {
                    "id": "169",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate ইকো প্লাস",
                        "alias": "rate_eco_plus_mc"
                    }
                },
                {
                    "id": "170",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate সিংগার",
                        "alias": "rate_singer_mc"
                    }
                },
                {
                    "id": "171",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate ভিশন",
                        "alias": "rate_vision_mc"
                    }
                },
                {
                    "id": "172",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate মিয়াকো",
                        "alias": "rate_miyako_mc"
                    }
                },
                {
                    "id": "173",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate ওয়ালটন",
                        "alias": "rate_walton_mc"
                    }
                },
                {
                    "id": "174",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "textInput",
                    "referTo": {
                        "id": "175",
                        "group_no": "3"
                    },
                    "question": {
                        "slug": "Input Microwave Oven Brand",
                        "alias": "input_mc_brand"
                    }
                },
                {
                    "id": "175",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "1",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "2",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "3",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "4",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "5",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "6",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "7",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "8",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "9",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "10",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Rate অন্যান্য",
                        "alias": "rate_other_brand_mc"
                    }
                },
                {
                    "id": "176",
                    "skip": {
                        "id": "-1",
                        "group_no": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "হ্যা",
                            "referTo": {
                                "id": "177",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "না",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "এখনো কিছু ভাবি নি",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "ভবিষ্যতে কি নতুন মাইক্রোওয়েভ ওভেন কেনার পরিকল্পনা আছে?",
                        "alias": "buy_future_wasing_machine"
                    }
                },
                {
                    "id": "177",
                    "skip": {
                        "id": "-1",
                        "group_no": "3"
                    },
                    "type": "checkbox",
                    "options": [
                        {
                            "value": "এলজি",
                            "referTo": {}
                        },
                        {
                            "value": "স্যামসাং",
                            "referTo": {}
                        },
                        {
                            "value": "ইকো প্লাস",
                            "referTo": {}
                        },
                        {
                            "value": "সিংগার",
                            "referTo": {}
                        },
                        {
                            "value": "ভিশন",
                            "referTo": {}
                        },
                        {
                            "value": "মিয়াকো",
                            "referTo": {}
                        },
                        {
                            "value": "ওয়ালটন",
                            "referTo": {}
                        },
                        {
                            "value": "অন্যান্য",
                            "referTo": {}
                        }
                    ],
                    "referTo": {
                        "id": "checklist",
                        "group_no": "3"
                    },
                    "question": {
                        "slug": "কোন ব্র্যান্ডের মাইক্রোওয়েভ ওভেন আপনার ভবিষ্যৎ বিবেচনায় রাখার কথা ভাবছেন?",
                        "alias": "buy_brand_wm"
                    }
                },
                {
                    "id": "178",
                    "skip": {
                        "id": "-1",
                        "group_no": "3"
                    },
                    "type": "checkbox",
                    "options": [
                        {
                            "value": "Newspaper Ad",
                            "referTo": {}
                        },
                        {
                            "value": "Leaflet",
                            "referTo": {}
                        },
                        {
                            "value": "TV ad",
                            "referTo": {}
                        },
                        {
                            "value": "Facebook",
                            "referTo": {}
                        },
                        {
                            "value": "Google",
                            "referTo": {}
                        },
                        {
                            "value": "Youtube",
                            "referTo": {}
                        },
                        {
                            "value": "Linkedin",
                            "referTo": {}
                        },
                        {
                            "value": "WOM",
                            "referTo": {}
                        },
                        {
                            "value": "POS",
                            "referTo": {}
                        }
                    ],
                    "referTo": {
                        "id": "179",
                        "group_no": "3"
                    },
                    "question": {
                        "slug": " কোন ইলেক্ট্রনিক্স পণ্য ক্রয়ের ক্ষেত্রে কোন কোন মাধ্যম থেকে আপনি তথ্য সংগ্রহ করে থাকেন ?",
                        "alias": "information_sources"
                    }
                },
                {
                    "id": "179",
                    "skip": {
                        "id": "-1",
                        "group_no": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "হ্যা",
                            "referTo": {
                                "id": "181",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "না",
                            "referTo": {
                                "id": "182",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "আপনার জন্য একটি গিফট আছে, আপনি কি গিফটটা নিতে আগ্রহী?",
                        "alias": "gift"
                    }
                },
                {
                    "id": "181",
                    "skip": {
                        "id": "-1",
                        "group_no": "3"
                    },
                    "type": "giveable",
                    "options": null,
                    "referTo": {
                        "id": "182",
                        "group_no": "3"
                    },
                    "question": {
                        "slug": "Please select a gift",
                        "alias": "giveable"
                    }
                },
                {
                    "id": "182",
                    "skip": {
                        "id": "submit",
                        "group_no": "submit"
                    },
                    "type": "camera",
                    "options": null,
                    "referTo": {
                        "id": "submit",
                        "group_no": "submit"
                    },
                    "question": {
                        "slug": "Please take a picture of the consumer",
                        "alias": "picture_of_consumer"
                    }
                }
            ],
            "jumping_logic": [
                {
                    "id": "submit",
                    "group_no": "submit",
                    "conditions": []
                }
            ]
        }
    ]
]