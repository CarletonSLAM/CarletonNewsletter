module.exports = {
    toast: [
        {
            tag: 'h2',
            text: 'Keeping up with IEEE Carleton.'
        },
        {
            tag: 'p',
            text: 'Feel free to forward this newsletter to anyone you think might be interested.'
        },
        {
            tag: 'htmlString',
            text: `If you are having trouble viewing this as an email, click <a href='http://staylateandmake.ca/CarletonNewsletter/output/2019-02-24.html'>here</a> to view in browser.`
        } // !! do not forget to change above link with date of this file !!
    ],

    // body //
    articles: [
        // nemko //
        {
            title: 'IEEE Carleton Nemko Industry Tour',
            date: 'Monday, Mar. 4, 2019',
            time: '12:30 - 15:00',
            location: '303 River Rd, Ottawa, ON K1V 1H2',
            img: 'nemko.png',
            body: [
                {
                    tag: 'p',
                    text: `IEEE Carleton is pleased to give you the opportunity to have an industry tour at a highly trusted and respected verification test facility, Nemko Ottawa.`
                },
                {
                    tag: 'p',
                    text: `The tour will take place at 12:30 AM on Monday March 4th. The tour will feature a pizza lunch with a presentation about the company, a walk through of the facility and multiple demo's of certification testing such as EMC testing, sound testing, ESD testing and more!`
                },
                {
                    tag: 'p',
                    text: `Register for the tour on the forum online or in the IEEE Carleton office, ME 3359. There is no payment required for this tour, it is free. There are 10 spots available.`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://docs.google.com/forms/d/17pcHKO2R4Y7C6BZXr3DkbI76Hmb5e2CuMuMHoYb1VEI'
                    },
                    text: ''
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://www.facebook.com/events/1065840563600321/'
                    },
                    text: 'Facebook Event'
                },
            ]
        },
        // ai meetup //
        {
            title: 'CU AI Meetup Inauguration',
            date: 'Wednesday Mar. 6, 2019',
            time: '17:30 - 20:00',
            location: 'TB 238',
            img: 'ai-meetup.png',
            body: [
                {
                    tag: 'p',

                    text: `Come join us at our club's inauguration and learn more about the exciting field of Artificial Intelligence!`
                },
                {
                    tag: 'p',
                    text: `Since this is our first meeting, we would love to receive feedback on what they would like to see most out of this club.`
                },
                {
                    tag: 'p',
                    attr: {
                        style: {
                            fontWeight: 'bold'
                        }
                    },
                    text: `The agenda for the event is:`
                },
                {
                    tag: 'htmlString',

                    text: `1) Introduction to AI and the Club<br>
                    2) Survey of what direction we should take the Club<br>
                    3) A short demo on how to write a quick Python script that will get you dabbling quickly in Artificial Intelligence.<br>`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://www.facebook.com/events/2467575753317227/'
                    },
                    text: 'Facebook Event'
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://www.facebook.com/cu.aimeetup'
                    },
                    text: 'Facebook Page'
                },
            ]
        },
        // wie speakers //
        {
            title: 'IEEE Women in Engineering Speaker Series',
            date: 'Thursday Feb. 14, 2019',
            time: '18:00 - 20:00',
            location: 'ME 4124',
            img: 'wie-speakers.png',
            body: [
                {
                    tag: 'p',
                    text: `IEEE WIE presents it's Speaker Series, an event where you get to hear from the women in the industry; their experience, their career paths, their goals, and their challenges faced.`
                },
                {
                    tag: 'p',
                    text: `To celebrate International Women's Day at Carleton University, IEEE WIE is hosting a Speaker Series featuring women panelists in the Engineering and Science industry!`
                },
                {
                    tag: 'p',
                    text: `Join us in this celebration to promote women in STEM!`,
                    attr: {
                        style: {
                            fontWeight: 'bold'
                        }
                    },
                },
                {
                    tag: 'p',
                    text: `Stay tuned as we announce our panelists!`
                },
                {
                    tag: 'p',
                    text: `*snacks will be provided.`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://www.facebook.com/events/2305162553141637/'
                    },
                    text: 'Facebook Event'
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://www.facebook.com/CUIEEEWIE/'
                    },
                    text: 'Facebook Page'
                },
            ]
        },
        // smash //
        {
            title: 'IEEE Smash Ultimate Tourney',
            date: 'Friday Mar. 8, 2019',
            time: '18:00 - 21:00',
            location: 'TBD',
            img: 'smash.png',
            body: [
                {
                    tag: 'p',
                    text: `We know that the IEEE Carleton culture is all about Smash Ultimate. 🎮 On March 8th, show off your best skills and combos in an intense but friendly tournament!`
                },
                {
                    tag: 'p',
                    text: `⚔️  Drinks and snacks are provided. 🍕 Also, be sure to register with the button down below to secure your place on the bracket!`
                },
                {
                    tag: 'p',
                    attr: {
                        style: {
                            fontWeight: 'bold'
                        }
                    },
                    text: `Winner gets an IEEE PCB design ruler 🔥📏🔥`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://goo.gl/forms/RuidwJ8oAUcdUmWO2'
                    },
                    text: 'Facebook Event'
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://www.facebook.com/events/762882124090412/'
                    },
                    text: 'Facebook Event'
                },
            ]
        },
        // wie cheese //
        {
            title: 'IEEE WIE 10th Annual Wine and Cheese',
            date: 'Thursday Mar. 14, 2019',
            time: '17:30 - 21:30',
            location: 'Orange Art Gallery, 290 City Centre Ave Ottawa, Ontario K1Y 2W5',
            img: 'wie-cheese.jpeg',
            body: [
                {
                    tag: 'p',
                    attr: {
                        style: {
                            fontWeight: 'bold'
                        }
                    },
                    text: `Hey engineers! Are you looking to improve your networking skills and/or build your global network with industry professionals and professors? Well here's your chance!`
                },
                {
                    tag: 'p',
                    text: `The 10th Annual IEEE Women in Engineering Wine and Cheese provides students an opportunity to build meaningful connections with professors and industry professionals from all across Ottawa. With an evening filled of interesting speakers, ice-breakers, and of course wine and cheese (and other foods!), there's no better time and place to start networking! 🍷🧀`
                },
                {
                    tag: 'htmlString',
                    text: `At Carleton, there are about 15 🌟free🌟 tickets left through the Faculty of Engineering (for eng. students only). Send an email to <a href="mailto:engineering.events@carleton.ca">engineering.events@carleton.ca</a> with your full name, student number, and program to be eligible for one of our free tickets.`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://www.facebook.com/events/2559852937364139/'
                    },
                    text: 'Facebook Event'
                },
            ]
        },
        // workshop newsletter //
        {
            title: 'Workshop Newsletter Sign-up',
            img: 'newsletters.png',
            body: [
                {
                    tag: 'p',
                    text: `Want to improve your resume? Looking for new skills you can add to it?`
                },
                {
                    tag: 'p',
                    text: `IEEE Carleton runs various workshops every semester to teach students important skills such as Git, machine learning, how to use oscilloscopes, as well as many others!`
                },
                {
                    tag: 'p',
                    attr: {
                        style: {
                            fontWeight: 'bold'
                        }
                    },
                    text: `Sign-up below to our workshop newsletter if you want to receive regular emails with upcoming workshops.`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://goo.gl/forms/xgM82qHVacNJ9WKH3'
                    },
                    text: 'Sign-up Here'
                },
            ]
        },
        // slam //
        {
            title: 'Stay Late And Make (SLAM)',
            date: 'Every Thursday',
            time: '17:30 — 20:30',
            location: 'ME 4463 (Makerspace)',
            img: 'slam-2018.png',
            body: [
                {
                    tag: 'p',
                    text: `🔥💻 SLAM is a weekly club where students get together to work on their own or on group projects.`
                },
                {
                    tag: 'p',
                    text: `Bring your project to life! Get help from upper year students. We have mentors, development boards, and so much more!`
                },
                {
                    tag: 'p',
                    attr: {
                        style: {
                            fontWeight: 'bold'
                        }
                    },
                    text: `Join us this Thursday in Mackenzie 4463.`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'http://staylateandmake.ca'
                    },
                    text: 'Website'
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://www.facebook.com/ieeestaylateandmake/'
                    },
                    text: 'Facebook Page'
                },
            ]
        },
        // ieee carleton //
        {
            title: 'IEEE Carleton',
            location: 'ME 3359',
            img: 'ieee-carleton.png',
            body: [
                {
                    tag: 'p',
                    text: `We all volunteer our time and efforts to provide students and professionals multiple avenues to expose and drive innovation in the technical world.`
                },
                {
                    tag: 'p',
                    attr: {
                        style: {
                            fontWeight: 'bold'
                        }
                    },
                    text: `Interested in being part of the team? 🙋🏼‍♀️🙋🏽‍♂️`
                },
                {
                    tag: 'p',
                    text: `This opportunity allows you to experiment and improve your technical, communication, management, and leadership skills, receive credits in Carleton's Co-Curricular Record (CCR), and enhance your resume when the accomplishments you make at IEEE, all the while making new friends!`
                },
                {
                    tag: 'p',
                    attr: {
                        style: {
                            fontWeight: 'bold'
                        }
                    },
                    text: `Our office is in Mackenzie 3359, and our email us at info@ieeecarleton.ca.`
                },
                {
                    tag: 'p',
                    text: `Our executive meetings are held every other Monday in Mackenzie 4359 from 6 PM to 7:30 PM; stop by the office for more information.`
                },
                {
                    tag: 'htmlString',
                    text: `Follow us on <a href='http://facebook.com/ieeecarleton/'>facebook</a> and <a href='https://www.instagram.com/ieeecarleton/'>instagram</a>. 🙏🏼`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://goo.gl/forms/LSmMK3SFyyLh04XJ2'
                    },
                    text: 'Mailing List Sign-up'
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://goo.gl/forms/xgM82qHVacNJ9WKH3'
                    },
                    text: 'Workshop Mailing List Sign-up'
                },
            ]
        }
    ]
}