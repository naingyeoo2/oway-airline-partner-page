export const airlines = [
  {
    international: {
      id: "1",
      title: "International",
      airline_partner: [
        {
          id: "1",
          image_url: "air-asia.jpeg",
          name: "Air Asia",
          link: "air-asia",
        },
        {
          id: "2",
          image_url: "emirates.jpeg",
          name: "Singapore Airlines",
          link: "singapore-airlines",
        },
        {
          id: "3",
          image_url: "jetstar-airways.jpeg",
          name: "Dragon Air",
          link: "dragon-air",
        },
        {
          id: "4",
          image_url: "malaysia-airlines.jpeg",
          name: "Vietnam Airline",
          link: "vietnam-airline",
        },
        {
          id: "5",
          image_url: "nok-air.jpeg",
          name: "Malaysia Airline",
          link: "malaysia-airline",
        },
        {
          id: "6",
          image_url: "qatar-airways.jpeg",
          name: "Thai Airasia",
          link: "thai-airasia",
        },
      ],
    },
    domestic: {
      id: "2",
      title: "Domestic",
      airline_partner: [
        {
          id: "1",
          image_url: "air-kbz.jpeg",
          name: "Air KBZ",
          link: "air-asia",
        },
        {
          id: "2",
          image_url: "golden-myanmar-airlines.jpeg",
          name: "Golden Myanmar Airines",
          link: "singapore-airlines",
        },
        {
          id: "3",
          image_url: "mann-yadanarpon-airlines.jpeg",
          name: "Mann Yadanarpon Airline",
          link: "dragon-air",
        },
        {
          id: "4",
          image_url: "myanmar-national-airlines.jpeg",
          name: "Myanmar National Airlines",
          link: "vietnam-airline",
        },
        {
          id: "5",
          image_url: "yangon-airways.jpeg",
          name: "Yangon Airways",
          link: "malaysia-airline",
        },
      ],
    },
  },
];

export const partners = [
  {
    id: "1",
    keyword: "air-asia",
    img_url: "air-asia.svg",
    name: "Air Asia Flight",
    promotion: {
      title: "Promotions",
      one_way: {
        title: "One Way",
        route: [
          {
            title: "30% OFF",
            from: "Yangon",
            to: "Mandalay",
            date_from: "3 Aug",
            date_to: "10 Aug 2020",
          },
          {
            title: "30% OFF",
            from: "Mandalay",
            to: "Yangon",
            date_from: "3 Aug",
            date_to: "10 Aug 2020",
          },
          {
            title: "20% OFF",
            from: "Naypyitaw",
            to: "Yangon",
            date_from: "3 Aug",
            date_to: "10 Aug 2020",
          },
          {
            title: "10% OFF",
            from: "Yangon",
            to: "Taunggyi",
            date_from: "3 Aug",
            date_to: "10 Aug 2020",
          },
        ],
      },
      round_trip: {
        title: "Round Trip",
        route: [
          {
            title: "20% OFF",
            from: "Mandalay",
            to: "Yangon",
            date_from: "3 Aug",
            date_to: "10 Aug 2020",
          },
          {
            title: "10% OFF",
            from: "Yangon",
            to: "Mandalay",
            date_from: "3 Aug",
            date_to: "10 Aug 2020",
          },
          {
            title: "30% OFF",
            from: "Yangon",
            to: "Taunggyi",
            date_from: "3 Aug",
            date_to: "10 Aug 2020",
          },
          {
            title: "30% OFF",
            from: "Naypyitaw",
            to: "Yangon",
            date_from: "3 Aug",
            date_to: "10 Aug 2020",
          },
        ],
      },
    },
    overview: {
      title: "Company Overview",
      description:
        "Myanmar, also known as the Republic of the Union of Myanmar or Burma, is currently ranked as the 26th most populated country in the world with more than 54 million people residing in the country. With a land area of 653,508-kilometre square, Myanmar is also considered the biggest of the Mainland Southeast Asian states in terms of area. Out of the total population, around 89 percent of them are Buddhists. The capital city of Myanmar is Nay Pyi Taw while the largest city in the country is Yangon.<br> In terms of the best time to travel, the month between November and February is the recommended period as rainfall during these months are minimal and temperatures are cooler. The monsoon seasons which falls between mid-May and October should be avoided as rain is frequent during this time and can be inconvenient for travellers. November to February is another period that is fine for travelling, but visitors should note that the temperature during this time is hot and can go as high up as 40° C.",
    },
    popular_route: {
      title: "Popular Route",
      route: [
        {
          from: "Yangon",
          to: "Mandalay",
        },
        {
          from: "Yangon",
          to: "Heho",
        },
        {
          from: "Yangon",
          to: "Nyaung U",
        },
        {
          from: "Yangon",
          to: "Thandwe",
        },
        {
          from: "Yangon",
          to: "Myeik",
        },
        {
          from: "Yangon",
          to: "Nay Pyi Taw",
        },
        {
          from: "Yangon",
          to: "Dawei",
        },
        {
          from: "Yangon",
          to: "Kawthaung",
        },
        {
          from: "Yangon",
          to: "Ho Chi Minh",
        },
        {
          from: "Yangon",
          to: "Japan",
        },
        {
          from: "Yangon",
          to: "Laos",
        },
        {
          from: "Yangon",
          to: "Singapore",
        },
        {
          from: "Yangon",
          to: "Korea",
        },
        {
          from: "Yangon",
          to: "Bangkok",
        },
      ],
    },
    popular_cities: {
      title: "Pupular Cities",
      international: {
        title: "International",
        cities: [
          {
            img_url: "int-bangkok.jpg",
            name: "Bangkok",
          },
          {
            img_url: "int-cambodia.jpg",
            name: "Cambodia",
          },
          {
            img_url: "int-hochiminh.jpg",
            name: "Hochiminh",
          },
          {
            img_url: "int-indonesia.jpg",
            name: "Indonesia",
          },
          {
            img_url: "int-malaysia.jpg",
            name: "Malaysia",
          },
          {
            img_url: "int-singapore.jpg",
            name: "Singapore",
          },
        ],
      },
      domestic: {
        title: "Domestic",
        cities: [
          {
            img_url: "des-bagan.jpg",
            name: "Bagan",
          },
          {
            img_url: "des-heho.jpg",
            name: "Heho",
          },
          {
            img_url: "des-kawthaung.jpg",
            name: "Kawthaung",
          },
          {
            img_url: "des-mandalay.jpg",
            name: "Manadalay",
          },
          {
            img_url: "des-naypyitaw.jpg",
            name: "Nay Pyi Taw",
          },
          {
            img_url: "des-ngapali.jpg",
            name: "Ngapali",
          },
        ],
      },
    },
    faq: {
      title: "Frequently Asked Questions",
      questions: [
        {
          question:
            "How do I know if my personal information is safe in my account?",
          answer:
            "The safety of your personal information and financial information is our highest priority. We use the utmost care and security with any information in your account and we will not use this information in ways to which you have not consented. We also never take credit card information over the phone, via e-mail or through any other direct form of contact. Additionally, our operational process is VeriSign certified – which is a known authority in setting security standards in the industry.",
        },
        {
          question: "How does Oway protect information about its Customers?",
          answer:
            "Industry-standard SSL (Secure Sockets Layer) encryption is always used to protect your purchase information while in transit. Stored credit card information is always encrypted and maintained in an environment that has been certified as PCI DSS compliant by a qualified security assessor. oway.com.mm is constantly scanned and validated to verify application and network security. All internal security standards, policies and practices are frequently reviewed and improved based on the current industry security practices.",
        },
        {
          question: "How frequent does American Airlines fly its top route?",
          answer:
            "The top route for American Airlines has a total of 19 flights per day. Travel from Charlotte to New York with American Airlines!",
        },
      ],
    },
    term_and_condition: {
      title: "Term and Conditions",
      description:[
        {
          id: "1",
          description: "In order to provide you with the best experience when using our system, we may collect, use, disclose, process and protect your personal identifiable information or personal data."
        },
        {
          id: "2",
          description: "This privacy policy describes the types of personal information we collect, how we use the information, with whom we share it, and the choices you can make about our collection, use and disclosure of the information."
        },
        {
          id: "3",
          description: "We also describe the measures we take to protect the security of the information and how you can contact us about our privacy practices."
        }
      ]
    },
    privacy_and_policy: {
      title: "Privacy and Policy",
      description: [
        {
          id: "1",
          description: "From time to time, Oway Travel may revise this Privacy Policy to reflect changes in the laws and regulations, our use practices, the features of our Site and/or advances in technology."
        },
        {
          id: "2",
          description: "If we make revisions that change the way we collector use your Personal Data, those changes will be posted in this Privacy Policy and the effective date will be noted at the beginning of this Privacy Policy."
        },
        {
          id: "3",
          description: "Therefore, you should review this Privacy Policy periodically so that you are up to date on our most current policies and practices."
        },
        {
          id: "4",
          description: "If you do not agree with any changes or modifications to the Privacy Policy, please do not continue using the Site."
        },
        {
          id: "5",
          description: "You will be deemed to have consented to any modification of the Privacy Policy when you use the Site after the effective date of the modification."
        }
      ]
    },
    baggage_and_fees: {
      title: "Baggage and Fees",
      description: [
        {
          id: "1",
          description: "We believe you should be informed about what kind of personal data we collect and how we use it in our system, both through our website and/or app (the 'Site' )."
        },
        {
          id: "2",
          description: "By reading this Privacy Policy, you can always make the best decision about the personal data that you share with us."
        },
        {
          id: "3",
          description: "Personal data here refers to any information which are related to an identified or identifiable natural person ('Personal Data')."
        },
        {
          id: "4",
          description: "By registering to and/ or using the Site, you acknowledge that you have read this Privacy Policy and the Oway Travel Terms of Use and understand their content and consequences, and you agree and give consent to Us for the collection, use, disclosure and processing of your Personal Details accordance with this Privacy Policy and/or the Terms of Use."
        },
        {
          id: "5",
          description: "Further, you acknowledge that every Personal Data that you have provided or will provide is yours to share and is true and accurate."
        }
      ]
    },
  },
  {
    id: "2",
    keyword: "singapore-airlines",
    img_url: "air-asia.svg",
    name: "Singapore Airlines",
    promotion: {
      title: "Promotions",
      one_way: {
        title: "One Way",
        route: [
          {
            title: "30% OFF",
            from: "Yangon",
            to: "Mandalay",
            date_from: "3 Aug",
            date_to: "10 Aug 2020",
          },
          {
            title: "30% OFF",
            from: "Mandalay",
            to: "Yangon",
            date_from: "3 Aug",
            date_to: "10 Aug 2020",
          },
          {
            title: "20% OFF",
            from: "Naypyitaw",
            to: "Yangon",
            date_from: "3 Aug",
            date_to: "10 Aug 2020",
          },
          {
            title: "10% OFF",
            from: "Yangon",
            to: "Taunggyi",
            date_from: "3 Aug",
            date_to: "10 Aug 2020",
          },
        ],
      },
      round_trip: {
        title: "Round Trip",
        route: [
          {
            title: "20% OFF",
            from: "Mandalay",
            to: "Yangon",
            date_from: "3 Aug",
            date_to: "10 Aug 2020",
          },
          {
            title: "10% OFF",
            from: "Yangon",
            to: "Mandalay",
            date_from: "3 Aug",
            date_to: "10 Aug 2020",
          },
          {
            title: "30% OFF",
            from: "Yangon",
            to: "Taunggyi",
            date_from: "3 Aug",
            date_to: "10 Aug 2020",
          },
          {
            title: "30% OFF",
            from: "Naypyitaw",
            to: "Yangon",
            date_from: "3 Aug",
            date_to: "10 Aug 2020",
          },
        ],
      },
    },
    overview: {
      title: "Company Overview",
      description:
        "Myanmar, also known as the Republic of the Union of Myanmar or Burma, is currently ranked as the 26th most populated country in the world with more than 54 million people residing in the country. With a land area of 653,508-kilometre square, Myanmar is also considered the biggest of the Mainland Southeast Asian states in terms of area. Out of the total population, around 89 percent of them are Buddhists. The capital city of Myanmar is Nay Pyi Taw while the largest city in the country is Yangon.<br> In terms of the best time to travel, the month between November and February is the recommended period as rainfall during these months are minimal and temperatures are cooler. The monsoon seasons which falls between mid-May and October should be avoided as rain is frequent during this time and can be inconvenient for travellers. November to February is another period that is fine for travelling, but visitors should note that the temperature during this time is hot and can go as high up as 40° C.",
    },
    popular_route: {
      title: "Popular Route",
      route: [
        {
          from: "Yangon",
          to: "Mandalay",
        },
        {
          from: "Yangon",
          to: "Heho",
        },
        {
          from: "Yangon",
          to: "Nyaung U",
        },
        {
          from: "Yangon",
          to: "Thandwe",
        },
        {
          from: "Yangon",
          to: "Myeik",
        },
        {
          from: "Yangon",
          to: "Nay Pyi Taw",
        },
        {
          from: "Yangon",
          to: "Dawei",
        },
        {
          from: "Yangon",
          to: "Kawthaung",
        },
        {
          from: "Yangon",
          to: "Ho Chi Minh",
        },
        {
          from: "Yangon",
          to: "Japan",
        },
        {
          from: "Yangon",
          to: "Laos",
        },
        {
          from: "Yangon",
          to: "Singapore",
        },
        {
          from: "Yangon",
          to: "Korea",
        },
        {
          from: "Yangon",
          to: "Bangkok",
        },
      ],
    },
    popular_cities: {
      title: "Pupular Cities",
      international: {
        title: "International",
        cities: [
          {
            img_url: "int-bangkok.jpg",
            name: "Bangkok",
          },
          {
            img_url: "int-cambodia.jpg",
            name: "Cambodia",
          },
          {
            img_url: "int-hochiminh.jpg",
            name: "Hochiminh",
          },
          {
            img_url: "int-indonesia.jpg",
            name: "Indonesia",
          },
          {
            img_url: "int-malaysia.jpg",
            name: "Malaysia",
          },
          {
            img_url: "int-singapore.jpg",
            name: "Singapore",
          },
        ],
      },
      domestic: {
        title: "Domestic",
        cities: [
          {
            img_url: "des-bagan.jpg",
            name: "Bagan",
          },
          {
            img_url: "des-heho.jpg",
            name: "Heho",
          },
          {
            img_url: "des-kawthaung.jpg",
            name: "Kawthaung",
          },
          {
            img_url: "des-mandalay.jpg",
            name: "Manadalay",
          },
          {
            img_url: "des-naypyitaw.jpg",
            name: "Nay Pyi Taw",
          },
          {
            img_url: "des-ngapali.jpg",
            name: "Ngapali",
          },
        ],
      },
    },
    faq: {
      title: "Frequently Asked Questions",
      questions: [
        {
          question:
            "How do I know if my personal information is safe in my account?",
          answer:
            "The safety of your personal information and financial information is our highest priority. We use the utmost care and security with any information in your account and we will not use this information in ways to which you have not consented. We also never take credit card information over the phone, via e-mail or through any other direct form of contact. Additionally, our operational process is VeriSign certified – which is a known authority in setting security standards in the industry.",
        },
        {
          question: "How does Oway protect information about its Customers?",
          answer:
            "Industry-standard SSL (Secure Sockets Layer) encryption is always used to protect your purchase information while in transit. Stored credit card information is always encrypted and maintained in an environment that has been certified as PCI DSS compliant by a qualified security assessor. oway.com.mm is constantly scanned and validated to verify application and network security. All internal security standards, policies and practices are frequently reviewed and improved based on the current industry security practices.",
        },
        {
          question: "How frequent does American Airlines fly its top route?",
          answer:
            "The top route for American Airlines has a total of 19 flights per day. Travel from Charlotte to New York with American Airlines!",
        },
      ],
    },
    term_and_condition: {
      title: "Term and Conditions",
      description:[
        {
          id: "1",
          description: "In order to provide you with the best experience when using our system, we may collect, use, disclose, process and protect your personal identifiable information or personal data."
        },
        {
          id: "2",
          description: "This privacy policy describes the types of personal information we collect, how we use the information, with whom we share it, and the choices you can make about our collection, use and disclosure of the information."
        },
        {
          id: "3",
          description: "We also describe the measures we take to protect the security of the information and how you can contact us about our privacy practices."
        }
      ]
    },
    privacy_and_policy: {
      title: "Privacy and Policy",
      description: [
        {
          id: "1",
          description: "From time to time, Oway Travel may revise this Privacy Policy to reflect changes in the laws and regulations, our use practices, the features of our Site and/or advances in technology."
        },
        {
          id: "2",
          description: "If we make revisions that change the way we collector use your Personal Data, those changes will be posted in this Privacy Policy and the effective date will be noted at the beginning of this Privacy Policy."
        },
        {
          id: "3",
          description: "Therefore, you should review this Privacy Policy periodically so that you are up to date on our most current policies and practices."
        },
        {
          id: "4",
          description: "If you do not agree with any changes or modifications to the Privacy Policy, please do not continue using the Site."
        },
        {
          id: "5",
          description: "You will be deemed to have consented to any modification of the Privacy Policy when you use the Site after the effective date of the modification."
        }
      ]
    },
    baggage_and_fees: {
      title: "Baggage and Fees",
      description: [
        {
          id: "1",
          description: "We believe you should be informed about what kind of personal data we collect and how we use it in our system, both through our website and/or app (the 'Site' )."
        },
        {
          id: "2",
          description: "By reading this Privacy Policy, you can always make the best decision about the personal data that you share with us."
        },
        {
          id: "3",
          description: "Personal data here refers to any information which are related to an identified or identifiable natural person ('Personal Data')."
        },
        {
          id: "4",
          description: "By registering to and/ or using the Site, you acknowledge that you have read this Privacy Policy and the Oway Travel Terms of Use and understand their content and consequences, and you agree and give consent to Us for the collection, use, disclosure and processing of your Personal Details accordance with this Privacy Policy and/or the Terms of Use."
        },
        {
          id: "5",
          description: "Further, you acknowledge that every Personal Data that you have provided or will provide is yours to share and is true and accurate."
        }
      ]
    },
  },
  {
    id: "3",
    keyword: "dragon-air",
    img_url: "air-asia.svg",
    name: "Dragon Air",
    promotion: {
      title: "Promotions",
      one_way: {
        title: "One Way",
        route: [
          {
            title: "30% OFF",
            from: "Yangon",
            to: "Mandalay",
            date_from: "3 Aug",
            date_to: "10 Aug 2020",
          },
          {
            title: "30% OFF",
            from: "Mandalay",
            to: "Yangon",
            date_from: "3 Aug",
            date_to: "10 Aug 2020",
          },
          {
            title: "20% OFF",
            from: "Naypyitaw",
            to: "Yangon",
            date_from: "3 Aug",
            date_to: "10 Aug 2020",
          },
          {
            title: "10% OFF",
            from: "Yangon",
            to: "Taunggyi",
            date_from: "3 Aug",
            date_to: "10 Aug 2020",
          },
        ],
      },
      round_trip: {
        title: "Round Trip",
        route: [
          {
            title: "20% OFF",
            from: "Mandalay",
            to: "Yangon",
            date_from: "3 Aug",
            date_to: "10 Aug 2020",
          },
          {
            title: "10% OFF",
            from: "Yangon",
            to: "Mandalay",
            date_from: "3 Aug",
            date_to: "10 Aug 2020",
          },
          {
            title: "30% OFF",
            from: "Yangon",
            to: "Taunggyi",
            date_from: "3 Aug",
            date_to: "10 Aug 2020",
          },
          {
            title: "30% OFF",
            from: "Naypyitaw",
            to: "Yangon",
            date_from: "3 Aug",
            date_to: "10 Aug 2020",
          },
        ],
      },
    },
    overview: {
      title: "Company Overview",
      description:
        "Myanmar, also known as the Republic of the Union of Myanmar or Burma, is currently ranked as the 26th most populated country in the world with more than 54 million people residing in the country. With a land area of 653,508-kilometre square, Myanmar is also considered the biggest of the Mainland Southeast Asian states in terms of area. Out of the total population, around 89 percent of them are Buddhists. The capital city of Myanmar is Nay Pyi Taw while the largest city in the country is Yangon.<br> In terms of the best time to travel, the month between November and February is the recommended period as rainfall during these months are minimal and temperatures are cooler. The monsoon seasons which falls between mid-May and October should be avoided as rain is frequent during this time and can be inconvenient for travellers. November to February is another period that is fine for travelling, but visitors should note that the temperature during this time is hot and can go as high up as 40° C.",
    },
    popular_route: {
      title: "Popular Route",
      route: [
        {
          from: "Yangon",
          to: "Mandalay",
        },
        {
          from: "Yangon",
          to: "Heho",
        },
        {
          from: "Yangon",
          to: "Nyaung U",
        },
        {
          from: "Yangon",
          to: "Thandwe",
        },
        {
          from: "Yangon",
          to: "Myeik",
        },
        {
          from: "Yangon",
          to: "Nay Pyi Taw",
        },
        {
          from: "Yangon",
          to: "Dawei",
        },
        {
          from: "Yangon",
          to: "Kawthaung",
        },
        {
          from: "Yangon",
          to: "Ho Chi Minh",
        },
        {
          from: "Yangon",
          to: "Japan",
        },
        {
          from: "Yangon",
          to: "Laos",
        },
        {
          from: "Yangon",
          to: "Singapore",
        },
        {
          from: "Yangon",
          to: "Korea",
        },
        {
          from: "Yangon",
          to: "Bangkok",
        },
      ],
    },
    popular_cities: {
      title: "Pupular Cities",
      international: {
        title: "International",
        cities: [
          {
            img_url: "int-bangkok.jpg",
            name: "Bangkok",
          },
          {
            img_url: "int-cambodia.jpg",
            name: "Cambodia",
          },
          {
            img_url: "int-hochiminh.jpg",
            name: "Hochiminh",
          },
          {
            img_url: "int-indonesia.jpg",
            name: "Indonesia",
          },
          {
            img_url: "int-malaysia.jpg",
            name: "Malaysia",
          },
          {
            img_url: "int-singapore.jpg",
            name: "Singapore",
          },
        ],
      },
      domestic: {
        title: "Domestic",
        cities: [
          {
            img_url: "des-bagan.jpg",
            name: "Bagan",
          },
          {
            img_url: "des-heho.jpg",
            name: "Heho",
          },
          {
            img_url: "des-kawthaung.jpg",
            name: "Kawthaung",
          },
          {
            img_url: "des-mandalay.jpg",
            name: "Manadalay",
          },
          {
            img_url: "des-naypyitaw.jpg",
            name: "Nay Pyi Taw",
          },
          {
            img_url: "des-ngapali.jpg",
            name: "Ngapali",
          },
        ],
      },
    },
    faq: {
      title: "Frequently Asked Questions",
      questions: [
        {
          question:
            "How do I know if my personal information is safe in my account?",
          answer:
            "The safety of your personal information and financial information is our highest priority. We use the utmost care and security with any information in your account and we will not use this information in ways to which you have not consented. We also never take credit card information over the phone, via e-mail or through any other direct form of contact. Additionally, our operational process is VeriSign certified – which is a known authority in setting security standards in the industry.",
        },
        {
          question: "How does Oway protect information about its Customers?",
          answer:
            "Industry-standard SSL (Secure Sockets Layer) encryption is always used to protect your purchase information while in transit. Stored credit card information is always encrypted and maintained in an environment that has been certified as PCI DSS compliant by a qualified security assessor. oway.com.mm is constantly scanned and validated to verify application and network security. All internal security standards, policies and practices are frequently reviewed and improved based on the current industry security practices.",
        },
        {
          question: "How frequent does American Airlines fly its top route?",
          answer:
            "The top route for American Airlines has a total of 19 flights per day. Travel from Charlotte to New York with American Airlines!",
        },
      ],
    },
    term_and_condition: {
      title: "Term and Conditions",
      description:[
        {
          id: "1",
          description: "In order to provide you with the best experience when using our system, we may collect, use, disclose, process and protect your personal identifiable information or personal data."
        },
        {
          id: "2",
          description: "This privacy policy describes the types of personal information we collect, how we use the information, with whom we share it, and the choices you can make about our collection, use and disclosure of the information."
        },
        {
          id: "3",
          description: "We also describe the measures we take to protect the security of the information and how you can contact us about our privacy practices."
        }
      ]
    },
    privacy_and_policy: {
      title: "Privacy and Policy",
      description: [
        {
          id: "1",
          description: "From time to time, Oway Travel may revise this Privacy Policy to reflect changes in the laws and regulations, our use practices, the features of our Site and/or advances in technology."
        },
        {
          id: "2",
          description: "If we make revisions that change the way we collector use your Personal Data, those changes will be posted in this Privacy Policy and the effective date will be noted at the beginning of this Privacy Policy."
        },
        {
          id: "3",
          description: "Therefore, you should review this Privacy Policy periodically so that you are up to date on our most current policies and practices."
        },
        {
          id: "4",
          description: "If you do not agree with any changes or modifications to the Privacy Policy, please do not continue using the Site."
        },
        {
          id: "5",
          description: "You will be deemed to have consented to any modification of the Privacy Policy when you use the Site after the effective date of the modification."
        }
      ]
    },
    baggage_and_fees: {
      title: "Baggage and Fees",
      description: [
        {
          id: "1",
          description: "We believe you should be informed about what kind of personal data we collect and how we use it in our system, both through our website and/or app (the 'Site' )."
        },
        {
          id: "2",
          description: "By reading this Privacy Policy, you can always make the best decision about the personal data that you share with us."
        },
        {
          id: "3",
          description: "Personal data here refers to any information which are related to an identified or identifiable natural person ('Personal Data')."
        },
        {
          id: "4",
          description: "By registering to and/ or using the Site, you acknowledge that you have read this Privacy Policy and the Oway Travel Terms of Use and understand their content and consequences, and you agree and give consent to Us for the collection, use, disclosure and processing of your Personal Details accordance with this Privacy Policy and/or the Terms of Use."
        },
        {
          id: "5",
          description: "Further, you acknowledge that every Personal Data that you have provided or will provide is yours to share and is true and accurate."
        }
      ]
    },
  },
  {
    id: "4",
    keyword: "vietnam-airline",
    img_url: "air-asia.svg",
    name: "Vietnam Airline",
    promotion: {
      title: "Promotions",
      one_way: {
        title: "One Way",
        route: [
          {
            title: "30% OFF",
            from: "Yangon",
            to: "Mandalay",
            date_from: "3 Aug",
            date_to: "10 Aug 2020",
          },
          {
            title: "30% OFF",
            from: "Mandalay",
            to: "Yangon",
            date_from: "3 Aug",
            date_to: "10 Aug 2020",
          },
          {
            title: "20% OFF",
            from: "Naypyitaw",
            to: "Yangon",
            date_from: "3 Aug",
            date_to: "10 Aug 2020",
          },
          {
            title: "10% OFF",
            from: "Yangon",
            to: "Taunggyi",
            date_from: "3 Aug",
            date_to: "10 Aug 2020",
          },
        ],
      },
      round_trip: {
        title: "Round Trip",
        route: [
          {
            title: "20% OFF",
            from: "Mandalay",
            to: "Yangon",
            date_from: "3 Aug",
            date_to: "10 Aug 2020",
          },
          {
            title: "10% OFF",
            from: "Yangon",
            to: "Mandalay",
            date_from: "3 Aug",
            date_to: "10 Aug 2020",
          },
          {
            title: "30% OFF",
            from: "Yangon",
            to: "Taunggyi",
            date_from: "3 Aug",
            date_to: "10 Aug 2020",
          },
          {
            title: "30% OFF",
            from: "Naypyitaw",
            to: "Yangon",
            date_from: "3 Aug",
            date_to: "10 Aug 2020",
          },
        ],
      },
    },
    overview: {
      title: "Company Overview",
      description:
        "Myanmar, also known as the Republic of the Union of Myanmar or Burma, is currently ranked as the 26th most populated country in the world with more than 54 million people residing in the country. With a land area of 653,508-kilometre square, Myanmar is also considered the biggest of the Mainland Southeast Asian states in terms of area. Out of the total population, around 89 percent of them are Buddhists. The capital city of Myanmar is Nay Pyi Taw while the largest city in the country is Yangon.<br> In terms of the best time to travel, the month between November and February is the recommended period as rainfall during these months are minimal and temperatures are cooler. The monsoon seasons which falls between mid-May and October should be avoided as rain is frequent during this time and can be inconvenient for travellers. November to February is another period that is fine for travelling, but visitors should note that the temperature during this time is hot and can go as high up as 40° C.",
    },
    popular_route: {
      title: "Popular Route",
      route: [
        {
          from: "Yangon",
          to: "Mandalay",
        },
        {
          from: "Yangon",
          to: "Heho",
        },
        {
          from: "Yangon",
          to: "Nyaung U",
        },
        {
          from: "Yangon",
          to: "Thandwe",
        },
        {
          from: "Yangon",
          to: "Myeik",
        },
        {
          from: "Yangon",
          to: "Nay Pyi Taw",
        },
        {
          from: "Yangon",
          to: "Dawei",
        },
        {
          from: "Yangon",
          to: "Kawthaung",
        },
        {
          from: "Yangon",
          to: "Ho Chi Minh",
        },
        {
          from: "Yangon",
          to: "Japan",
        },
        {
          from: "Yangon",
          to: "Laos",
        },
        {
          from: "Yangon",
          to: "Singapore",
        },
        {
          from: "Yangon",
          to: "Korea",
        },
        {
          from: "Yangon",
          to: "Bangkok",
        },
      ],
    },
    popular_cities: {
      title: "Pupular Cities",
      international: {
        title: "International",
        cities: [
          {
            img_url: "int-bangkok.jpg",
            name: "Bangkok",
          },
          {
            img_url: "int-cambodia.jpg",
            name: "Cambodia",
          },
          {
            img_url: "int-hochiminh.jpg",
            name: "Hochiminh",
          },
          {
            img_url: "int-indonesia.jpg",
            name: "Indonesia",
          },
          {
            img_url: "int-malaysia.jpg",
            name: "Malaysia",
          },
          {
            img_url: "int-singapore.jpg",
            name: "Singapore",
          },
        ],
      },
      domestic: {
        title: "Domestic",
        cities: [
          {
            img_url: "des-bagan.jpg",
            name: "Bagan",
          },
          {
            img_url: "des-heho.jpg",
            name: "Heho",
          },
          {
            img_url: "des-kawthaung.jpg",
            name: "Kawthaung",
          },
          {
            img_url: "des-mandalay.jpg",
            name: "Manadalay",
          },
          {
            img_url: "des-naypyitaw.jpg",
            name: "Nay Pyi Taw",
          },
          {
            img_url: "des-ngapali.jpg",
            name: "Ngapali",
          },
        ],
      },
    },
    faq: {
      title: "Frequently Asked Questions",
      questions: [
        {
          question:
            "How do I know if my personal information is safe in my account?",
          answer:
            "The safety of your personal information and financial information is our highest priority. We use the utmost care and security with any information in your account and we will not use this information in ways to which you have not consented. We also never take credit card information over the phone, via e-mail or through any other direct form of contact. Additionally, our operational process is VeriSign certified – which is a known authority in setting security standards in the industry.",
        },
        {
          question: "How does Oway protect information about its Customers?",
          answer:
            "Industry-standard SSL (Secure Sockets Layer) encryption is always used to protect your purchase information while in transit. Stored credit card information is always encrypted and maintained in an environment that has been certified as PCI DSS compliant by a qualified security assessor. oway.com.mm is constantly scanned and validated to verify application and network security. All internal security standards, policies and practices are frequently reviewed and improved based on the current industry security practices.",
        },
        {
          question: "How frequent does American Airlines fly its top route?",
          answer:
            "The top route for American Airlines has a total of 19 flights per day. Travel from Charlotte to New York with American Airlines!",
        },
      ],
    },
    term_and_condition: {
      title: "Term and Conditions",
      description:[
        {
          id: "1",
          description: "In order to provide you with the best experience when using our system, we may collect, use, disclose, process and protect your personal identifiable information or personal data."
        },
        {
          id: "2",
          description: "This privacy policy describes the types of personal information we collect, how we use the information, with whom we share it, and the choices you can make about our collection, use and disclosure of the information."
        },
        {
          id: "3",
          description: "We also describe the measures we take to protect the security of the information and how you can contact us about our privacy practices."
        }
      ]
    },
    privacy_and_policy: {
      title: "Privacy and Policy",
      description: [
        {
          id: "1",
          description: "From time to time, Oway Travel may revise this Privacy Policy to reflect changes in the laws and regulations, our use practices, the features of our Site and/or advances in technology."
        },
        {
          id: "2",
          description: "If we make revisions that change the way we collector use your Personal Data, those changes will be posted in this Privacy Policy and the effective date will be noted at the beginning of this Privacy Policy."
        },
        {
          id: "3",
          description: "Therefore, you should review this Privacy Policy periodically so that you are up to date on our most current policies and practices."
        },
        {
          id: "4",
          description: "If you do not agree with any changes or modifications to the Privacy Policy, please do not continue using the Site."
        },
        {
          id: "5",
          description: "You will be deemed to have consented to any modification of the Privacy Policy when you use the Site after the effective date of the modification."
        }
      ]
    },
    baggage_and_fees: {
      title: "Baggage and Fees",
      description: [
        {
          id: "1",
          description: "We believe you should be informed about what kind of personal data we collect and how we use it in our system, both through our website and/or app (the 'Site' )."
        },
        {
          id: "2",
          description: "By reading this Privacy Policy, you can always make the best decision about the personal data that you share with us."
        },
        {
          id: "3",
          description: "Personal data here refers to any information which are related to an identified or identifiable natural person ('Personal Data')."
        },
        {
          id: "4",
          description: "By registering to and/ or using the Site, you acknowledge that you have read this Privacy Policy and the Oway Travel Terms of Use and understand their content and consequences, and you agree and give consent to Us for the collection, use, disclosure and processing of your Personal Details accordance with this Privacy Policy and/or the Terms of Use."
        },
        {
          id: "5",
          description: "Further, you acknowledge that every Personal Data that you have provided or will provide is yours to share and is true and accurate."
        }
      ]
    },
  },
  {
    id: "5",
    keyword: "malaysia-airline",
    img_url: "air-asia.svg",
    name: "Malaysia Airline",
    promotion: {
      title: "Promotions",
      one_way: {
        title: "One Way",
        route: [
          {
            title: "30% OFF",
            from: "Yangon",
            to: "Mandalay",
            date_from: "3 Aug",
            date_to: "10 Aug 2020",
          },
          {
            title: "30% OFF",
            from: "Mandalay",
            to: "Yangon",
            date_from: "3 Aug",
            date_to: "10 Aug 2020",
          },
          {
            title: "20% OFF",
            from: "Naypyitaw",
            to: "Yangon",
            date_from: "3 Aug",
            date_to: "10 Aug 2020",
          },
          {
            title: "10% OFF",
            from: "Yangon",
            to: "Taunggyi",
            date_from: "3 Aug",
            date_to: "10 Aug 2020",
          },
        ],
      },
      round_trip: {
        title: "Round Trip",
        route: [
          {
            title: "20% OFF",
            from: "Mandalay",
            to: "Yangon",
            date_from: "3 Aug",
            date_to: "10 Aug 2020",
          },
          {
            title: "10% OFF",
            from: "Yangon",
            to: "Mandalay",
            date_from: "3 Aug",
            date_to: "10 Aug 2020",
          },
          {
            title: "30% OFF",
            from: "Yangon",
            to: "Taunggyi",
            date_from: "3 Aug",
            date_to: "10 Aug 2020",
          },
          {
            title: "30% OFF",
            from: "Naypyitaw",
            to: "Yangon",
            date_from: "3 Aug",
            date_to: "10 Aug 2020",
          },
        ],
      },
    },
    overview: {
      title: "Company Overview",
      description:
        "Myanmar, also known as the Republic of the Union of Myanmar or Burma, is currently ranked as the 26th most populated country in the world with more than 54 million people residing in the country. With a land area of 653,508-kilometre square, Myanmar is also considered the biggest of the Mainland Southeast Asian states in terms of area. Out of the total population, around 89 percent of them are Buddhists. The capital city of Myanmar is Nay Pyi Taw while the largest city in the country is Yangon.<br> In terms of the best time to travel, the month between November and February is the recommended period as rainfall during these months are minimal and temperatures are cooler. The monsoon seasons which falls between mid-May and October should be avoided as rain is frequent during this time and can be inconvenient for travellers. November to February is another period that is fine for travelling, but visitors should note that the temperature during this time is hot and can go as high up as 40° C.",
    },
    popular_route: {
      title: "Popular Route",
      route: [
        {
          from: "Yangon",
          to: "Mandalay",
        },
        {
          from: "Yangon",
          to: "Heho",
        },
        {
          from: "Yangon",
          to: "Nyaung U",
        },
        {
          from: "Yangon",
          to: "Thandwe",
        },
        {
          from: "Yangon",
          to: "Myeik",
        },
        {
          from: "Yangon",
          to: "Nay Pyi Taw",
        },
        {
          from: "Yangon",
          to: "Dawei",
        },
        {
          from: "Yangon",
          to: "Kawthaung",
        },
        {
          from: "Yangon",
          to: "Ho Chi Minh",
        },
        {
          from: "Yangon",
          to: "Japan",
        },
        {
          from: "Yangon",
          to: "Laos",
        },
        {
          from: "Yangon",
          to: "Singapore",
        },
        {
          from: "Yangon",
          to: "Korea",
        },
        {
          from: "Yangon",
          to: "Bangkok",
        },
      ],
    },
    popular_cities: {
      title: "Pupular Cities",
      international: {
        title: "International",
        cities: [
          {
            img_url: "int-bangkok.jpg",
            name: "Bangkok",
          },
          {
            img_url: "int-cambodia.jpg",
            name: "Cambodia",
          },
          {
            img_url: "int-hochiminh.jpg",
            name: "Hochiminh",
          },
          {
            img_url: "int-indonesia.jpg",
            name: "Indonesia",
          },
          {
            img_url: "int-malaysia.jpg",
            name: "Malaysia",
          },
          {
            img_url: "int-singapore.jpg",
            name: "Singapore",
          },
        ],
      },
      domestic: {
        title: "Domestic",
        cities: [
          {
            img_url: "des-bagan.jpg",
            name: "Bagan",
          },
          {
            img_url: "des-heho.jpg",
            name: "Heho",
          },
          {
            img_url: "des-kawthaung.jpg",
            name: "Kawthaung",
          },
          {
            img_url: "des-mandalay.jpg",
            name: "Manadalay",
          },
          {
            img_url: "des-naypyitaw.jpg",
            name: "Nay Pyi Taw",
          },
          {
            img_url: "des-ngapali.jpg",
            name: "Ngapali",
          },
        ],
      },
    },
    faq: {
      title: "Frequently Asked Questions",
      questions: [
        {
          question:
            "How do I know if my personal information is safe in my account?",
          answer:
            "The safety of your personal information and financial information is our highest priority. We use the utmost care and security with any information in your account and we will not use this information in ways to which you have not consented. We also never take credit card information over the phone, via e-mail or through any other direct form of contact. Additionally, our operational process is VeriSign certified – which is a known authority in setting security standards in the industry.",
        },
        {
          question: "How does Oway protect information about its Customers?",
          answer:
            "Industry-standard SSL (Secure Sockets Layer) encryption is always used to protect your purchase information while in transit. Stored credit card information is always encrypted and maintained in an environment that has been certified as PCI DSS compliant by a qualified security assessor. oway.com.mm is constantly scanned and validated to verify application and network security. All internal security standards, policies and practices are frequently reviewed and improved based on the current industry security practices.",
        },
        {
          question: "How frequent does American Airlines fly its top route?",
          answer:
            "The top route for American Airlines has a total of 19 flights per day. Travel from Charlotte to New York with American Airlines!",
        },
      ],
    },
    term_and_condition: {
      title: "Term and Conditions",
      description:[
        {
          id: "1",
          description: "In order to provide you with the best experience when using our system, we may collect, use, disclose, process and protect your personal identifiable information or personal data."
        },
        {
          id: "2",
          description: "This privacy policy describes the types of personal information we collect, how we use the information, with whom we share it, and the choices you can make about our collection, use and disclosure of the information."
        },
        {
          id: "3",
          description: "We also describe the measures we take to protect the security of the information and how you can contact us about our privacy practices."
        }
      ]
    },
    privacy_and_policy: {
      title: "Privacy and Policy",
      description: [
        {
          id: "1",
          description: "From time to time, Oway Travel may revise this Privacy Policy to reflect changes in the laws and regulations, our use practices, the features of our Site and/or advances in technology."
        },
        {
          id: "2",
          description: "If we make revisions that change the way we collector use your Personal Data, those changes will be posted in this Privacy Policy and the effective date will be noted at the beginning of this Privacy Policy."
        },
        {
          id: "3",
          description: "Therefore, you should review this Privacy Policy periodically so that you are up to date on our most current policies and practices."
        },
        {
          id: "4",
          description: "If you do not agree with any changes or modifications to the Privacy Policy, please do not continue using the Site."
        },
        {
          id: "5",
          description: "You will be deemed to have consented to any modification of the Privacy Policy when you use the Site after the effective date of the modification."
        }
      ]
    },
    baggage_and_fees: {
      title: "Baggage and Fees",
      description: [
        {
          id: "1",
          description: "We believe you should be informed about what kind of personal data we collect and how we use it in our system, both through our website and/or app (the 'Site' )."
        },
        {
          id: "2",
          description: "By reading this Privacy Policy, you can always make the best decision about the personal data that you share with us."
        },
        {
          id: "3",
          description: "Personal data here refers to any information which are related to an identified or identifiable natural person ('Personal Data')."
        },
        {
          id: "4",
          description: "By registering to and/ or using the Site, you acknowledge that you have read this Privacy Policy and the Oway Travel Terms of Use and understand their content and consequences, and you agree and give consent to Us for the collection, use, disclosure and processing of your Personal Details accordance with this Privacy Policy and/or the Terms of Use."
        },
        {
          id: "5",
          description: "Further, you acknowledge that every Personal Data that you have provided or will provide is yours to share and is true and accurate."
        }
      ]
    },
  },
  {
    id: "6",
    keyword: "thai-airasia",
    img_url: "air-asia.svg",
    name: "Thai Airasia",
    promotion: {
      title: "Promotions",
      one_way: {
        title: "One Way",
        route: [
          {
            title: "30% OFF",
            from: "Yangon",
            to: "Mandalay",
            date_from: "3 Aug",
            date_to: "10 Aug 2020",
          },
          {
            title: "30% OFF",
            from: "Mandalay",
            to: "Yangon",
            date_from: "3 Aug",
            date_to: "10 Aug 2020",
          },
          {
            title: "20% OFF",
            from: "Naypyitaw",
            to: "Yangon",
            date_from: "3 Aug",
            date_to: "10 Aug 2020",
          },
          {
            title: "10% OFF",
            from: "Yangon",
            to: "Taunggyi",
            date_from: "3 Aug",
            date_to: "10 Aug 2020",
          },
        ],
      },
      round_trip: {
        title: "Round Trip",
        route: [
          {
            title: "20% OFF",
            from: "Mandalay",
            to: "Yangon",
            date_from: "3 Aug",
            date_to: "10 Aug 2020",
          },
          {
            title: "10% OFF",
            from: "Yangon",
            to: "Mandalay",
            date_from: "3 Aug",
            date_to: "10 Aug 2020",
          },
          {
            title: "30% OFF",
            from: "Yangon",
            to: "Taunggyi",
            date_from: "3 Aug",
            date_to: "10 Aug 2020",
          },
          {
            title: "30% OFF",
            from: "Naypyitaw",
            to: "Yangon",
            date_from: "3 Aug",
            date_to: "10 Aug 2020",
          },
        ],
      },
    },
    overview: {
      title: "Company Overview",
      description:
        "Myanmar, also known as the Republic of the Union of Myanmar or Burma, is currently ranked as the 26th most populated country in the world with more than 54 million people residing in the country. With a land area of 653,508-kilometre square, Myanmar is also considered the biggest of the Mainland Southeast Asian states in terms of area. Out of the total population, around 89 percent of them are Buddhists. The capital city of Myanmar is Nay Pyi Taw while the largest city in the country is Yangon.<br> In terms of the best time to travel, the month between November and February is the recommended period as rainfall during these months are minimal and temperatures are cooler. The monsoon seasons which falls between mid-May and October should be avoided as rain is frequent during this time and can be inconvenient for travellers. November to February is another period that is fine for travelling, but visitors should note that the temperature during this time is hot and can go as high up as 40° C.",
    },
    popular_route: {
      title: "Popular Route",
      route: [
        {
          from: "Yangon",
          to: "Mandalay",
        },
        {
          from: "Yangon",
          to: "Heho",
        },
        {
          from: "Yangon",
          to: "Nyaung U",
        },
        {
          from: "Yangon",
          to: "Thandwe",
        },
        {
          from: "Yangon",
          to: "Myeik",
        },
        {
          from: "Yangon",
          to: "Nay Pyi Taw",
        },
        {
          from: "Yangon",
          to: "Dawei",
        },
        {
          from: "Yangon",
          to: "Kawthaung",
        },
        {
          from: "Yangon",
          to: "Ho Chi Minh",
        },
        {
          from: "Yangon",
          to: "Japan",
        },
        {
          from: "Yangon",
          to: "Laos",
        },
        {
          from: "Yangon",
          to: "Singapore",
        },
        {
          from: "Yangon",
          to: "Korea",
        },
        {
          from: "Yangon",
          to: "Bangkok",
        },
      ],
    },
    popular_cities: {
      title: "Pupular Cities",
      international: {
        title: "International",
        cities: [
          {
            img_url: "int-bangkok.jpg",
            name: "Bangkok",
          },
          {
            img_url: "int-cambodia.jpg",
            name: "Cambodia",
          },
          {
            img_url: "int-hochiminh.jpg",
            name: "Hochiminh",
          },
          {
            img_url: "int-indonesia.jpg",
            name: "Indonesia",
          },
          {
            img_url: "int-malaysia.jpg",
            name: "Malaysia",
          },
          {
            img_url: "int-singapore.jpg",
            name: "Singapore",
          },
        ],
      },
      domestic: {
        title: "Domestic",
        cities: [
          {
            img_url: "des-bagan.jpg",
            name: "Bagan",
          },
          {
            img_url: "des-heho.jpg",
            name: "Heho",
          },
          {
            img_url: "des-kawthaung.jpg",
            name: "Kawthaung",
          },
          {
            img_url: "des-mandalay.jpg",
            name: "Manadalay",
          },
          {
            img_url: "des-naypyitaw.jpg",
            name: "Nay Pyi Taw",
          },
          {
            img_url: "des-ngapali.jpg",
            name: "Ngapali",
          },
        ],
      },
    },
    faq: {
      title: "Frequently Asked Questions",
      questions: [
        {
          question:
            "How do I know if my personal information is safe in my account?",
          answer:
            "The safety of your personal information and financial information is our highest priority. We use the utmost care and security with any information in your account and we will not use this information in ways to which you have not consented. We also never take credit card information over the phone, via e-mail or through any other direct form of contact. Additionally, our operational process is VeriSign certified – which is a known authority in setting security standards in the industry.",
        },
        {
          question: "How does Oway protect information about its Customers?",
          answer:
            "Industry-standard SSL (Secure Sockets Layer) encryption is always used to protect your purchase information while in transit. Stored credit card information is always encrypted and maintained in an environment that has been certified as PCI DSS compliant by a qualified security assessor. oway.com.mm is constantly scanned and validated to verify application and network security. All internal security standards, policies and practices are frequently reviewed and improved based on the current industry security practices.",
        },
        {
          question: "How frequent does American Airlines fly its top route?",
          answer:
            "The top route for American Airlines has a total of 19 flights per day. Travel from Charlotte to New York with American Airlines!",
        },
      ],
    },
    term_and_condition: {
      title: "Term and Conditions",
      description:[
        {
          id: "1",
          description: "In order to provide you with the best experience when using our system, we may collect, use, disclose, process and protect your personal identifiable information or personal data."
        },
        {
          id: "2",
          description: "This privacy policy describes the types of personal information we collect, how we use the information, with whom we share it, and the choices you can make about our collection, use and disclosure of the information."
        },
        {
          id: "3",
          description: "We also describe the measures we take to protect the security of the information and how you can contact us about our privacy practices."
        }
      ]
    },
    privacy_and_policy: {
      title: "Privacy and Policy",
      description: [
        {
          id: "1",
          description: "From time to time, Oway Travel may revise this Privacy Policy to reflect changes in the laws and regulations, our use practices, the features of our Site and/or advances in technology."
        },
        {
          id: "2",
          description: "If we make revisions that change the way we collector use your Personal Data, those changes will be posted in this Privacy Policy and the effective date will be noted at the beginning of this Privacy Policy."
        },
        {
          id: "3",
          description: "Therefore, you should review this Privacy Policy periodically so that you are up to date on our most current policies and practices."
        },
        {
          id: "4",
          description: "If you do not agree with any changes or modifications to the Privacy Policy, please do not continue using the Site."
        },
        {
          id: "5",
          description: "You will be deemed to have consented to any modification of the Privacy Policy when you use the Site after the effective date of the modification."
        }
      ]
    },
    baggage_and_fees: {
      title: "Baggage and Fees",
      description: [
        {
          id: "1",
          description: "We believe you should be informed about what kind of personal data we collect and how we use it in our system, both through our website and/or app (the 'Site' )."
        },
        {
          id: "2",
          description: "By reading this Privacy Policy, you can always make the best decision about the personal data that you share with us."
        },
        {
          id: "3",
          description: "Personal data here refers to any information which are related to an identified or identifiable natural person ('Personal Data')."
        },
        {
          id: "4",
          description: "By registering to and/ or using the Site, you acknowledge that you have read this Privacy Policy and the Oway Travel Terms of Use and understand their content and consequences, and you agree and give consent to Us for the collection, use, disclosure and processing of your Personal Details accordance with this Privacy Policy and/or the Terms of Use."
        },
        {
          id: "5",
          description: "Further, you acknowledge that every Personal Data that you have provided or will provide is yours to share and is true and accurate."
        }
      ]
    },
  },
];
