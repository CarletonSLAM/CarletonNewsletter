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
            text: `If you are having trouble viewing this as an email, click <a href='http://staylateandmake.ca/CarletonNewsletter/output/2019-02-05.html'>here</a> to view in browser.`
        } // !! do not forget to change above link with date of this file !!
    ],

    // body //
    articles: [
        // pcb //
        {
            title: 'PCB Workshop',
            date: 'Saturday, February 9, 2019',
            time: '09:00 - 17:00',
            location: 'ME 4463',
            img: 'pcb-workshop.png',
            body: [
                {
                    tag: 'p',
                    text: `🔥🔥 Lunch will be provided!! 🔥🔥`
                },
                {
                    tag: 'p',
                    attr: {
                        style: {
                            fontWeight: 'bold'
                        }
                    },
                    text: `🔥 Come learn how to design a microcontroller PCB in IEEE Carleton's flagship workshop! 20$ for IEEE members and 25$  for volunteers! 🔥`
                },
                {
                    tag: 'htmlString',
                    text: `For more information please contact: <a href="mailto:academics@ieeecarleton.ca">academics@ieeecarleton.ca</a> 💻`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://docs.google.com/forms/d/e/1FAIpQLSfxPsIVvcNrpWWPD7V08ulZQlelpdF0D5bN-Qt5WFP8s3UFxA/viewform'
                    },
                    text: 'Sign-up Form'
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://www.facebook.com/events/2160442454266286/'
                    },
                    text: 'Facebook Event'
                },
            ]
        },
        // sweaters //
        {
            title: 'Sweater',
            date: 'Saturday, February 9, 2019',
            location: 'ME 3359',
            img: 'sweaters.png',
            body: [
                {
                    tag: 'p',
                    text: `👕 Sweater orders are finally here! [for real]`
                },
                {
                    tag: 'htmlString',
                    text: `Crew-neck Sweater: $30<br>Hoodie Sweater: $35<br>Order by: Feb. 15th<br>Pick-up from: Feb. 25th<br>`
                },
                {
                    tag: `p`,
                    attr: {
                        style: {
                            fontWeight: 'bold'
                        }
                    },
                    text: `Order at IEEE Carleton ME 3359`,
                }
            ]
        },
        // prof talk //
        {
            title: 'Professor Talk with Khaled Mnaymneh',
            date: 'Thursday Feb. 14, 2019',
            time: '18:00 - 20:00',
            location: 'TBD (Carleton)',
            img: 'photonics.png',
            body: [
                {
                    tag: 'p',

                    text: `Dr. Khaled Mnaymneh is an photonics scientist, professing ELEC 3909 this year at carleton. His research spans across multiple institutions, including the University of Michigan and the NRC.`
                },
                {
                    tag: 'p',
                    attr: {
                        style: {
                            fontWeight: 'bold'
                        }
                    },
                    text: `Pizza will be provided after the talk.`
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