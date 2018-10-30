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
            text: `If you are having trouble viewing this as an email, click <a href='http://staylateandmake.ca/CarletonNewsletter/output/2018-10-31.html'>here</a> to view in browser.`
        } // !! do not forget to change above link with date of this file !!
    ],

    articles: [
        {
            title: 'Open Source Software Workshop ',
            date: 'Tuesday Nov. 6, 2018',
            time: '18:00 - 19:00',
            location: 'AP 340',
            img: 'open-source-software.png',
            body: [
                {
                    tag: 'p',
                    attr: {
                        style: {
                            fontWeight: 'bold'
                        }
                    },
                    text: `Interested in learning more about open source? Don't know what GitHub is?`
                },
                {
                    tag: 'p',
                    text: `Ben Emdon, an open source maintainer and GitHub employee, is hosting a workshop on how — and why — to get started in open Source Software. Learn open source software the GitHub way.`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://www.facebook.com/events/2161402927435899/'
                    },
                    text: 'More Info'
                },
            ]
        },
        {
            title: 'WIE Meet & Greet Feedback + Volunteers Needed',
            img: 'wie-banner.png',
            body: [
                {
                    tag: 'p',
                    text: `🗳 Women in Engineering would like to know your opinion on future events!`
                },
                {
                    tag: 'p',
                    text: `Tell us what times work best for you, what kind of events you'd like to see, and what food you would like to have at future events!`
                },
                {
                    tag: 'p',
                    attr: {
                        style: {
                            fontWeight: 'bold'
                        }
                    },
                    text: `If you'd like to get more involved with WIE, we need volunteers for helping set up and marketing! Thanks!`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://docs.google.com/forms/d/e/1FAIpQLSeY5bS0p5dV3IzgMF0twwpZW5_0A4yJwCuP0are6E8Lmrv5mA/viewform?usp=sf_link '
                    },
                    text: 'Feedback'
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://docs.google.com/forms/d/e/1FAIpQLSdYg6MCWDTqNGtRUaqw_xaQcx4_Eo7zVTbdyOR3Cz0RJQ7aSQ/viewform?usp=sf_link'
                    },
                    text: 'Volunteer'
                },
            ]
        },
        {
            title: 'Become LEED Accredited',
            date: 'Sunday Nov. 14, 2018',
            time: '13:00 - 17:00',
            location: 'uOttawa — Colonel By — B205',
            body: [
                {
                    tag: 'p',
                    text: `Want to get involved in sustainability? Opportunities are plentiful and LEED is at the forefront!`
                },
                {
                    tag: 'p',
                    text: `LEED (Leadership in Energy and Environmental Design) is simply a sustainability scorecard for green buildings. Buildings can become LEED Certified as can people! The LEED Green Associate is the only professional designation to show employers and clients you have certified knowledge in the field.`
                },
                {
                    tag: 'p',
                    text: `To date, this course and its materials have proven to be instrumental in helping over 8000 students pass their respective exam at a 100% pass rate. This course is offered at a quarter of the price and time as the competition and is geared at allowing students to graduate with letters after their name!`
                },
                {
                    tag: 'p',
                    text: `This course meets the exam’s eligibility requirements and the USGBC charges a $100 (reduced for students) fee for the actual exam which can be taken at any time at your nearest Prometric center. Save money by reserving your spot today and make a positive difference in your career!`
                },
                {
                    tag: 'htmlString',
                    attr: {
                        style: {
                            fontWeight: 'bold'
                        }
                    },
                    text: `Please contact the instructor Lorne directly with any questions at <a href="mailto:info@leadinggreen.com">info@leadinggreen.com</a>.`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://leadinggreen.com/Ottawa'
                    },
                    text: 'Registration'
                },
            ]
        },
        {
            title: 'Neural Networks 101',
            date: 'Wednesday Nov. 14, 2018',
            time: '18:00 - 20:00',
            location: 'TBD',
            img: 'neural-networks-101.png',
            body: [
                {
                    tag: 'p',
                    attr: {
                        style: {
                            fontWeight: 'bold'
                        }
                    },
                    text: `💻📈 Learn how to classify data using a neural networks and modern machine learning techniques.`
                },
                {
                    tag: 'p',
                    text: `Come join us if you're interested in machine learning and modern pattern detection techniques, or just want to learn what all the hype is about with 'neural networks' and 'machine learning'.`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://www.facebook.com/events/2348598588721458/'
                    },
                    text: 'More Info'
                },
            ]
        },
        {
            title: 'Problem Solving for Programming Interviews',
            date: 'Wednesday Nov. 21, 2018',
            time: '18:00 - 20:00',
            location: 'TBD',
            img: 'problem-solving.png',
            body: [
                {
                    tag: 'p',
                    attr: {
                        style: {
                            fontWeight: 'bold'
                        }
                    },
                    text: `🎖📝 Come learn how to solve problems — under pressure — in your next interview.`
                },
                {
                    tag: 'p',
                    text: `Come learn how to ace the problem portion of your interviews with the expertise from upper-year students. We'll be covering covering algorithmic and logic problems.`
                },
                {
                    tag: 'p',
                    text: `This workshop works well as preparation for your co-op interviews!`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://www.facebook.com/events/194007311508361/'
                    },
                    text: 'More Info'
                },
            ]
        },
        {
            title: 'Canadian University Software Engineering Conference',
            date: 'Jan. 10 - 12, 2019',
            location: 'Montreal',
            img: 'cusec.jpg',
            body: [
                {
                    tag: 'p',
                    text: `CUSEC brings together passionate students from across Canada. Meet like-minded peers, learn from world-renowned experts and discover career opportunities with exciting companies.`
                },
                {
                    tag: 'p',
                    attr: {
                        style: {
                            fontWeight: 'bold'
                        }
                    },
                    text: `Tickets go on sale Oct. 30th at 19:00.`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://2019.cusec.net/'
                    },
                    text: 'Website'
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://www.facebook.com/groups/carletoncusec2018/'
                    },
                    text: 'More Info'
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