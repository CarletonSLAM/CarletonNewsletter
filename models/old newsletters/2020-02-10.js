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
            text: `If you are having trouble viewing this as an email, click <a href='http://staylateandmake.ca/CarletonNewsletter/output/2020-02-10.html'>here</a> to view in browser.`
        }
    ],
    articles: [
        // --- SLAM --- //
        {
            title: `Stay Late And Make SLAM`,
            date: `Every Thursday`,
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
                    text: `**SLAM sessions are happening twice a week now: Tuesdays and Thursdays, from 6 PM to 9 PM.**`
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
        },
        // --- PEng --- //
        {
            title: `Seminar: Clarifying the Path to Becoming a Professional Engineer`,
            date: `Thursday February 27, 2020`,
            time: `6:00 PM - 7:30 PM`,
            location: `MC 5050`,
            img: `peng.png`,
            body: [
                {
                    tag: 'htmlString',
                    text: `If you are an engineering undergraduate or post-graduate student, or a recent graduate starting out your engineering career, then this seminar might be for you. In it you will learn:<ul><li>What is PEO?</li><li>What engineering experience is PEO looking for once I graduate?</li><li>I have international engineering education and experience; how is that evaluated by PEO?</li><li>How is my engineering experience evaluated by PEO?</li><li>How do I prepare my Experience Record?</li><li>What is the PPE?</li><li>What is the EIT Program and the Student Membership Program?</li></ul>`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://forms.gle/ymzcQyp24vNJhx8K8'
                    },
                    text: `Sign-Up Form`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://www.facebook.com/events/189129325784517/'
                    },
                    text: `Facebook Event`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://www.peo.on.ca/'
                    },
                    text: `PEO Website`
                },
            ]
        },
    ]
}
