export const data = [

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
                    "required": true,
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
                        "slug": "Name",
                        "alias": "name"
                    },
                    "required": true,
                    "validations": {
                        "regex": "^[a-zA-Z ]{3,}$"
                    }
                },
                {
                    "id": "3",
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "Male"
                        },
                        {
                            "value": "Female"
                        }
                    ],
                    "question": {
                        "slug": "Gender",
                        "alias": "gender"
                    },
                    "required": true
                }
            ],
            "jumping_logic": [
                {
                    "id": "4",
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
                    "id": "4",
                    "skip": {
                        "id": "-1",
                        "group_no": "3"
                    },
                    "type": "checklist",
                    "options": [
                        {
                            "value": "TV",
                            "referTo": {
                                "id": "5",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "AC",
                            "referTo": {
                                "id": "6",
                                "group_no": "3"
                            }
                        }
                    ],
                    "referTo": {
                        "id": "submit",
                        "group_no": "submit"
                    },
                    "question": {
                        "slug": "Choose your Weapon",
                        "alias": "weapon"
                    },
                    "validations": {
                        "min": 1,
                        "partial": false
                    }
                },
                {
                    "id": "5",
                    "skip": {
                        "id": "-1"
                    },
                    "type": "sub-checklist",
                    "options": [
                        {
                            "value": "Bangla Serial",
                            "referTo": {
                                "id": "7",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Didi no 1",
                            "referTo": {
                                "id": "8",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "MTV",
                            "referTo": {
                                "id": "11",
                                "group_no": "3"
                            }
                        }
                    ],
                    "referTo": {
                        "id": "checklist",
                        "group_no": "3"
                    },
                    "question": {
                        "slug": "Tv te ki dekhen",
                        "alias": "tv_shows"
                    },
                    "sub-question": "Rate this options", 
                    "validations": {
                        "min": 1,
                        "partial": true
                    }
                },
                {
                    "id": "6",
                    "skip": {
                        "id": "-1"
                    },
                    "type": "sub-checklist",
                    "options": [
                        {
                            "value": "Fruits",
                            "referTo": {
                                "id": "9",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "Meat",
                            "referTo": {
                                "id": "10",
                                "group_no": "3"
                            }
                        }
                    ],
                    "referTo": {
                        "id": "checklist",
                        "group_no": "3"
                    },
                    "question": {
                        "slug": "Fridge a ki rakhen",
                        "alias": "fridge_foods"
                    },
                    "sub-question": "Rate this options", 
                    "validations": {
                        "min": 1,
                        "partial": true
                    }
                },
                {
                    "id": "7",
                    "skip": {
                        "id": "-1",
                        "group": "3"
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
                        "id": "checklist",
                        "group_no": "3"
                    },
                    "question": {
                        "slug": "Kemon lage bruh ?",
                        "alias": "bangla_serial_feels"
                    }
                },
                {
                    "id": "8",
                    "skip": {
                        "id": "-1",
                        "group": "3"
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
                        "id": "checklist",
                        "group_no": "3"
                    },
                    "question": {
                        "slug": "Kemon lage bruh ?",
                        "alias": "didi_no_one_feels"
                    }
                },
                {
                    "id": "9",
                    "skip": {
                        "id": "-1",
                        "group_no": "2"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "Yes, Good Condition",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "No, rot in hell",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Fruits ki fridge a valo thake ?",
                        "alias": "fruits_condition"
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
                            "value": "Yes, Good Condition",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "No, rot in hell",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "question": {
                        "slug": "Meat ki fridge a valo thake ?",
                        "alias": "meat_condition"
                    }
                },
                {
                    "id": "11",
                    "skip": {
                        "id": "-1",
                        "group": "3"
                    },
                    "type": "multipleChoice",
                    "options": [
                        {
                            "value": "Yes",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        },
                        {
                            "value": "No",
                            "referTo": {
                                "id": "checklist",
                                "group_no": "3"
                            }
                        }
                    ],
                    "referTo": {
                        "id": "checklist",
                        "group_no": "3"
                    },
                    "question": {
                        "slug": "Fashion show dekhen ?",
                        "alias": "watch_fashion_show"
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