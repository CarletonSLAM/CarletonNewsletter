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
            text: `If you are having trouble viewing this as an email, click <a href='http://staylateandmake.ca/CarletonNewsletter/output/2019-09-28.html'>here</a> to view in browser.`
        }
    ],
    articles: [
        // --- IEEE Day --- //
        {
            title: `IEEE Day Celebration`,
            date: `Tuesday October 1, 2019`,
            time: `6:00 PM - 8:00 PM`,
            location: `ME 4359`,
            img: `ieee-day.png`,
            body: [
                {
                    tag: 'p',
                    text: `On October 1st 2019, we are celebrating IEEE Day!`
                },
                {
                    tag: 'p',
                    text: `So what is IEEE Day? It's a worldwide event, celebrating the first time in history when engineers worldwide and IEEE members gathered to share their technical ideas in 1884.`
                },
                {
                    tag: 'p',
                    text: `How are we celebrating at CU? FOOD MUSIC GAMES. Get to know execs, learn about IEEE, come socialize and have a good time!`
                },
                {
                    tag: 'p',
                    attr: {
                        style: {
                            fontWeight: 'bold'
                        }
                    },
                    text: `**Join us on Tuesday Oct 1st, 6PM ME 4359. Bring some smiles and laughter! (And enough room for dessert)**`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://www.facebook.com/events/2476413362593398/'
                    },
                    text: `ADD BUTTON TEXT`
                },
            ]
        },
        // --- SLAM --- //
        {
            title: `Stay Late And Make (SLAM)`,
            date: `Every Tuesday + Thursday`,
            time: `6:00 PM - 9:00 PM`,
            location: `ME 4463`,
            img: `slam.png`,
            body: [
                {
                    tag: 'p',
                    attr: {
                        style: {
                            fontWeight: 'bold'
                        }
                    },
                    text: `**Bring your own project or join one of our projects!**`
                },
                {
                    tag: 'p',
                    text: `We are running 3 main projects this year! 🎧 Reverse-engineering an Analog Amplifier 🎸 🛩 Quadcopter Project ⌘ 🤖 AI Software Project 👾`
                },
                {
                    tag: 'p',
                    text: `We have many upper-year Electrical and Software Engineering students there to help!`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://www.facebook.com/events/442167939743249/'
                    },
                    text: `ADD BUTTON TEXT`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://www.staylateandmake.ca'
                    },
                    text: `ADD BUTTON TEXT`
                },
            ]
        },
    ]
}
