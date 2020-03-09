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
            text: `If you are having trouble viewing this as an email, click <a href='http://staylateandmake.ca/CarletonNewsletter/output/2020-03-09.html'>here</a> to view in browser.`
        }
    ],
    articles: [
        // --- New Event --- //
        {
            title: `Humanitarian Technology Seminar`,
            date: `Thursday March 19, 2020`,
            time: `6:00 PM - 7:30 PM`,
            location: `ME 4463`,
            img: `humanitarian.png`,
            body: [
                {
                    tag: 'p',
                    text: `Humanitarian Activities has been a mission of the IEEE, advancing technology for humanity. As engineers used their skills for the greater good, IEEE SIGHT volunteers work all over the world on different humanitarian projects. Particularly In Canada, students and young professionals have demonstrated commitment to solving problems in their communities.`
                },
                {
                    tag: 'p',
                    text: `Anis Ben Arfi, currently leading IEEE Canada Humanitarian Initiatives Committee, will be presenting exemplary IEEE SIGHT projects and events, aiming to inspire you to join the IEEE humanitarian efforts!`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://tinyurl.com/Humanitariantechnologyseminar'
                    },
                    text: `Registration`
                }
            ]
        },
        // --- New Event --- //
        {
            title: `IEEE Battle Royale XIII`,
            img: `b-r.png`,
            body: [
                {
                    tag: 'p',
                    text: `🎮 Attention all gamers: IEEE Battle Royale XIII needs your help! We're currently looking for planning team members to help get IEEE's annual 24-hour LAN party off the ground!`
                },
                {
                    tag: 'p',
                    text: `If you're interested in leading teams in patronage, web design, volunteer coordination, and other fields, check out the Google form below! 👽`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://forms.gle/pAS64TSW1RnMHP4VA'
                    },
                    text: `Join Now!`
                },
            ]
        },
        // --- New Event --- //
        {
            title: `Stay Late And Make SLAM`,
            date: `Every Thursday!`,
            time: `6:00 PM - 9:00 PM`,
            location: `ME 4463`,
            img: `slam.png`,
            body: [
                {
                    tag: 'p',
                    text: `Bring your own project or join one of our projects! We are running 3 main projects this year!`
                },
                {
                    tag: 'p',
                    text: `🎧 Reverse-engineering an Analog Amplifier 🎸`
                },
                {
                    tag: 'p',
                    text: `🛩 Quadcopter Project ⌘`
                },
                {
                    tag: 'p',
                    text: `🤖 AI Software Project 👾`
                },
                {
                    tag: 'p',
                    text: `We have many upper-year Electrical and Software Engineering students there to help!`
                },
                {
                    tag: 'p',
                    attr: {
                        style: {
                            fontWeight: 'bold'
                        }
                    },
                    text: `SLAM sessions are happening twice a week now: Tuesdays and Thursdays, from 6 PM to 9 PM.`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://www.staylateandmake.ca'
                    },
                    text: `Website`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://www.facebook.com/events/442167939743249/'
                    },
                    text: `Facebook Event`
                },
            ]
        }
    ]
}
