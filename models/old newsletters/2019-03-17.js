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
            text: `If you are having trouble viewing this as an email, click <a href='http://staylateandmake.ca/CarletonNewsletter/output/2019-03-17.html'>here</a> to view in browser.`
        } // !! do not forget to change above link with date of this file !!
    ],

    // body //
    articles: [
        // IEEE Carleton + IEEE WIE Trivia and Board Game Night //
        {
            title: 'IEEE Carleton + IEEE WIE Trivia and Board Game Night',
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
        // IEEE Carleton Presents: Aladdin! //
        {
            title: 'IEEE Carleton Presents: Aladdin!',
            date: 'Friday Mar. 22, 2019',
            time: '19:00 - 20:30',
            location: 'RB 2200',
            img: 'aladdin.png',
            body: [
                {
                    tag: 'p',
                    attr: {
                        style: {
                            fontWeight: 'bold'
                        }
                    },
                    text: `Exam cram time? 😱 Burnt out after midterms on a friday night? 😰 Have no fear as IEEE Carleton is proud to present our first movie night!`
                },
                {
                    tag: 'p',
                    text: `🍿 In commemoration of the new upcoming live-action film that will be released in May 2019, we will be watching Aladdin, 🧞 the classic animated Disney film!`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://www.facebook.com/events/296642591016171/'
                    },
                    text: 'Facebook Event'
                },
            ]
        },
        // IEEE Student Paper Competition //
        {
            title: 'IEEE Student Paper Competition',
            date: 'Thursday Mar. 28, 2019',
            time: '18:00 - 20:30',
            location: 'ME 4359',
            img: 'paper-comp.png',
            body: [
                {
                    tag: 'p',

                    text: `The local IEEE Student Paper Competition will be held on Thursday March 28th at 18:00 in ME 4359!`
                },
                {
                    tag: 'p',

                    text: `This competition is open to all undergraduate students at Carleton. This will also be a great opportunity for third and fourth year student to present their projects.`
                },
                {
                    tag: 'p',

                    text: `The winner will advance to compete in the IEEE Eastern Ontario Oral Paper Competition scheduled for April 1st 2019 at RMC in Kingston.`
                },
                {
                    tag: 'p',
                    attr: {
                        style: {
                            fontWeight: 'bold'
                        }
                    },
                    text: `Click on the link below for more details and to register your presentation!`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://goo.gl/forms/6ANzoa6im5IVxpQI3'
                    },
                    text: 'Sign Up'
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://www.facebook.com/events/2012715112160302/'
                    },
                    text: 'Facebook Event'
                }
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