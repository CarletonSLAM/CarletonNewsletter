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
            text: `If you are having trouble viewing this as an email, click <a href='http://staylateandmake.ca/CarletonNewsletter/output/2018-##-##.html'>here</a> to view in browser.`
        } // !! do not forget to change above link with date of this file !!
    ],

    articles: [
        {
            title: 'title',
            date: 'weekday month day, year',
            time: 'start_time — end_time',
            location: 'location',
            img: 'image_name',
            body: [
                {
                    tag: 'p',
                    text: `regular_text`
                },
                {
                    tag: 'p',
                    text: `regular_text`
                },
                {
                    tag: 'p',
                    attr: {
                        style: {
                            fontWeight: 'bold'
                        }
                    },
                    text: `bold_text`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'button_link'
                    },
                    text: 'button_text'
                },
            ]
        },
        {
            title: 'title',
            date: 'weekday month day, year',
            time: 'start_time — end_time',
            location: 'location',
            img: 'image_name',
            body: [
                {
                    tag: 'p',
                    text: `regular_text`
                },
                {
                    tag: 'p',
                    text: `regular_text`
                },
                {
                    tag: 'p',
                    attr: {
                        style: {
                            fontWeight: 'bold'
                        }
                    },
                    text: `bold_text`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'button_link'
                    },
                    text: 'button_text'
                },
            ]
        },
        {
            title: 'title',
            date: 'weekday month day, year',
            time: 'start_time — end_time',
            location: 'location',
            img: 'image_name',
            body: [
                {
                    tag: 'p',
                    text: `regular_text`
                },
                {
                    tag: 'p',
                    text: `regular_text`
                },
                {
                    tag: 'p',
                    attr: {
                        style: {
                            fontWeight: 'bold'
                        }
                    },
                    text: `bold_text`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'button_link'
                    },
                    text: 'button_text'
                },
            ]
        },
        {
            title: 'Stay Late And Make (SLAM)',
            date: 'Every Thursday',
            time: '17:30 — 20:30',
            location: 'ME 4463 (Makerspace)',
            img: 'slam-2018.png',
            body: [
                {
                    tag: 'p',
                    text: `SLAM, a weekly club where students get together to work on their own or in a group project.`
                },
                {
                    tag: 'p',
                    text: `Bring your project to life! Get help from upper year students and network. Hardware and software hacks and much more.`
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
                    text: `Interested in being part of the team?`
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
                    text: `Follow us on <a href='http://facebook.com/ieeecarleton/'>facebook</a> and <a href='https://www.instagram.com/ieeecarleton/'>instagram</a> 🙏🏼`
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