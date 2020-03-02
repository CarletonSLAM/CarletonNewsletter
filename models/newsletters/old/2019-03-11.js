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
            text: `If you are having trouble viewing this as an email, click <a href='http://staylateandmake.ca/CarletonNewsletter/output/2019-03-11.html'>here</a> to view in browser.`
        } // !! do not forget to change above link with date of this file !!
    ],

    // body //
    articles: [
        // wie networking //
        {
            title: 'WIE Wine and Cheese Networking Workshop',
            date: 'Monday Mar. 11, 2019',
            time: '18:00 - 19:00',
            location: 'ME 4463',
            img: 'wie-cheese-networking.png',
            body: [
                {
                    tag: 'p',
                    text: `Suit up and get ready for 10th annual IEEE WIE Wine and Cheese. This year is the largest Wine and Cheese yet and there will be a ton of new professionals and companies attending.`
                },
                {
                    tag: 'p',
                    text: `However, if you're new to networking, this might be a challenge. IEEE Carleton and IEEE WIE have teamed up to teach you how to market yourself to employers the right way. 🤝✔️`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://www.facebook.com/events/492130717984146/'
                    },
                    text: 'Facebook Event'
                },
            ]
        },
        // execs //
        {
            title: 'IEEE Carleton Exec Position Info Presentation',
            date: 'Tuesday, Mar. 12, 2019',
            time: '19:00 - 20:00',
            location: 'ME 4359',
            img: 'exec-positions.png',
            body: [
                {
                    tag: 'p',
                    attr: {
                        style: {
                            fontWeight: 'bold'
                        }
                    },
                    text: `Are you interested in being part of the IEEE Carleton Exec team for 2019-2020?`
                },
                {
                    tag: 'p',
                    text: `There will be an exec position info session taking place on Tuesday March 12th from 7 pm to 8 pm in ME 4359 (Mackenzie Building: fourth floor, third block).`
                },
                {
                    tag: 'p',
                    text: `Come see how you can contribute to the team and talk to the current execs about their experiences!!`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://www.facebook.com/events/2257887754451114/'
                    },
                    text: 'Facebook Event'
                },
            ]
        },
        // linux //
        {
            title: 'Linux Workshop',
            date: 'Wednesday Mar. 13, 2019',
            time: '18:00 - 20:00',
            location: 'CB 5109',
            img: 'linux.png',
            body: [
                {
                    tag: 'p',

                    text: `Have you ever wanted to learn how professionals whiz through their tasks with nothing more than a command line and a keyboard? Want to be cool like them? 😎`
                },
                {
                    tag: 'p',
                    attr: {
                        style: {
                            fontWeight: 'bold'
                        }
                    },
                    text: `Come learn from us how to use Linux and the command line!`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://www.facebook.com/events/269251110635557/'
                    },
                    text: 'Facebook Event'
                }
            ]
        },
        // wie cheese //
        {
            title: 'IEEE WIE 10th Annual Wine and Cheese',
            date: 'Thursday Mar. 14, 2019',
            time: '17:30 - 21:30',
            location: 'Orange Art Gallery – 290 City Centre Ave.',
            img: 'wie-cheese.jpg',
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
                    tag: 'button',
                    attr: {
                        href: 'https://www.facebook.com/events/2559852937364139/'
                    },
                    text: 'Facebook Event'
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://www.celebratewie.ca/tickets/'
                    },
                    text: 'Tickets'
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
        // wie trivia //
        {
            title: 'IEEE Carleton and IEEE WIE Trivia and Board Game Night',
            date: 'Tuesday Mar. 19, 2019',
            time: '18:00 - 21:00',
            location: `Oliver's Pub`,
            img: 'wie-board-games.png',
            body: [
                {
                    tag: 'p',
                    attr: {
                        style: {
                            fontWeight: 'bold'
                        }
                    },
                    text: `Stressed about exams? Tired of midterms? Come and hangout with the IEEE team as we will be playing board games.`
                },
                {
                    tag: 'p',
                    text: `Come show how much you know about pop culture, movies, tv shows, memes and much more in our fun trivia game!`
                },
                {
                    tag: 'p',
                    text: `This is a free event and feel free to bring your own board games!!`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://www.facebook.com/events/618481891926406/'
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