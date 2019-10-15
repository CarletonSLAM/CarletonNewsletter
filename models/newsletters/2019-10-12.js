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
            text: `If you are having trouble viewing this as an email, click <a href='http://staylateandmake.ca/CarletonNewsletter/output/2019-10-12.html'>here</a> to view in browser.`
        }
    ],
    articles: [
        // --- Security Workshop --- //
        {
            title: `Software Security & Penetration Testing: An Interactive Introduction`,
            date: `Tuesday October 29, 2019`,
            time: `6:00 PM - 9:00 PM`,
            location: `CB 5109`,
            img: `security.png`,
            body: [
                {
                    tag: 'p',
                    text: `SQL injections, XSS / cross-site scripting, replay attacks… There’s a lot of security considerations in the modern web and application development world. Whether you want to become an ethical “white hat” hacker or make sure your app is secure, learning about security vulnerabilities is the first step to take!`
                },
                {
                    tag: 'p',
                    text: `In this workshop, we’ll be learning about the most common security vulnerabilities: what they are, how they work, how to execute them, and how to protect against them. Then there will be an interactive segment where everyone will be able to set up a vulnerable website on their own computer and try breaking into it.`
                },
                {
                    tag: 'p',
                    text: `Participation in both segments is not required. You are free to leave right after the presentation or stay a few hours for the interactive part. If you would like to set up for the interactive segment in advance, follow the setup instructions of your choice at <a href="https://github.com/bkimminich/juice-shop#setup">https://github.com/bkimminich/juice-shop#setup</a>`
                },
                {
                    tag: 'p',
                    text: `Please sign up with the button below.`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://tinyurl.com/IEEE-Network-Security-Workshop'
                    },
                    text: `Sign Up`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://www.facebook.com/events/2204697802975129/'
                    },
                    text: `Facebook Event`
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
        },
        // --- Meeting --- //
        {
            title: `IEEE Carleton General Meeting`,
            date: `Wednesday October 30, 2019`,
            time: `6:00 PM - 7:30 PM`,
            img: `ieee-carleton.png`,
            body: [
                {
                    tag: 'p',
                    text: `Last week IEEE Carleton held its seventh bi-weekly general meeting of the year. Our next meeting is on Wednesday October 30 from 6 to 7:30 PM.`
                },
                {
                    tag: 'p',
                    text: `You can see the meeting minutes by using the button below.`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://docs.google.com/document/d/1ZFbnL--viDl6cOKN9DWfe4_oPZHOE-D1EyTqAijQuKk/'
                    },
                    text: `Meeting Minutes`
                },
            ]
        },
    ]
}
