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
            text: `If you are having trouble viewing this as an email, click <a href='http://staylateandmake.ca/CarletonNewsletter/output/2019-01-14.html'>here</a> to view in browser.`
        } // !! do not forget to change above link with date of this file !!
    ],

    // body //
    articles: [
        // spac //
        {
            title: 'IEEE SPAC 2019',
            date: 'Thursday Jan. 24, 2019',
            time: '17:30 - 19:30',
            location: 'Sala San Marco - 215 Preston St, Ottawa',
            img: 'spac.jpg',
            body: [
                {
                    tag: 'p',
                    attr: {
                        style: {
                            fontWeight: 'bold'
                        }
                    },
                    text: `👩🏻‍💼👨🏽‍💼 Are you co-op student looking for your first job in the tech industry? Are you a recent graduate looking for a permanent position in a company? If you're an engineering or tech student looking for employment, IEEE SPAC is the networking event for you!`
                },
                {
                    tag: 'p',
                    text: `The IEEE Student Professional Awareness Conference (SPAC) is a formal dinner (buffet) event that aims to bridge the gap between students and their career goals. Some of the professionals that will be at SPAC 2019 include BlackBerry/QNX, Qlik, MindBridge AI, Deloitte, Communications Security Establishment (CSE), and many more to come. 🙌🏼`
                },
                {
                    tag: 'p',
                    text: `Tickets are $30 for students and only $25 for IEEE members, but for a limited time only. Get them at the IEEE McNaughton Office in Room ME 3359 (Mackenzie 3rd Block), or at ieeespac.ca, see you there!`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'ieeespac.ca'
                    },
                    text: 'Tickets'
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://www.facebook.com/events/934620343401473/'
                    },
                    text: 'Facebook Event'
                },
            ]
        },
        // volunteer orientation //
        {
            title: 'Volunteer Orientation',
            date: 'Tuesday Jan. 15, 2019',
            time: '18:00 - 19:30',
            location: 'ME 4359',
            img: 'volunteer.png',
            body: [
                {
                    tag: 'p',
                    attr: {
                        style: {
                            fontWeight: 'bold'
                        }
                    },
                    text: `Interested in volunteering for IEEE Carleton? 🙋🏼‍♀️🙋🏽‍♂️`
                },
                {
                    tag: 'p',
                    text: `Come to the orientation and learn more about who we are, what we do, and how you can help us around the office and with events.`
                },
                {
                    tag: 'p',
                    text: `If you haven't signed-up already, you can do so at the link below.`
                },
                {
                    tag: 'p',
                    attr: {
                        style: {
                            fontWeight: 'bold'
                        }
                    },
                    text: `Hope to see you all there!`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://ieeecarleton.ca/volunteer.php'
                    },
                    text: 'Sign-up'
                },
            ]
        },
        // cuhacking //
        {
            title: 'cuHacking 2019',
            date: 'Feb. 16/17, 2019',
            time: '17:30 - 19:00',
            location: 'River Building',
            img: 'cuhacking.png',
            body: [
                {
                    tag: 'p',
                    attr: {
                        style: {
                            fontWeight: 'bold'
                        }
                    },
                    text: `🔥😎 The second round of cuHacking 2019 applications are now open!`
                },
                {
                    tag: 'p',
                    text: `Want to be apart of something life changing? Want an opportunity to expand your network and portfolio, but still have fun!? Don't miss your chance to be a part of cuHacking 2019. 👀👩‍💻.`
                },
                {
                    tag: 'p',
                    text: `Companies will be there to help you and potentially seeking new hires, so don't miss out on the opportunity to stand out.`
                },
                {
                    tag: 'p',
                    text: `Any post-secondary student is welcome, no matter the skill-level, free of charge. You'll be surrounded by high-motivated, skilled, and like-minded students working the whole weekend to turn a project from an idea to product you can demo.`
                },
                {
                    tag: 'p',
                    attr: {
                        style: {
                            fontWeight: 'bold'
                        }
                    },
                    text: `Applications close Jan. 28 at midnight.`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://cuhacking-apply.typeform.com/to/JWKRUZ'
                    },
                    text: 'Apply Here'
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://cuhacking.com'
                    },
                    text: 'Website'
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
                    text: `🔥💻 SLAM is a weekly club where students get together to work on their own or group project.`
                },
                {
                    tag: 'p',
                    text: `Bring your project to life! Get help from upper year students and network. Hardware and software hacks and so much more.`
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