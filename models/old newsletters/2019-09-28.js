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
                    text: `Join us on Tuesday Oct 1st, 6PM ME 4359. Bring some smiles and laughter! (And enough room for dessert)`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://www.facebook.com/events/2476413362593398/'
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
                    attr: {
                        style: {
                            fontWeight: 'bold'
                        }
                    },
                    text: `Bring your own project or join one of our projects!`
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
                    text: `Facebook Event`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://www.staylateandmake.ca'
                    },
                    text: `Website`
                },
            ]
        },
        // --- SLAM --- //
        {
            title: `Execs of the Month`,
            img: `execs-sep.png`,
            body: [
                {
                    tag: 'p',
                    text: `Every month we wish to appreciate and thank one of our execs that went above and beyond in their duties. They showcase the values of the IEEE Carleton Student Branch and are a shining example to their peers.`
                },
                {
                    tag: 'p',
                    text: `This month was exceptional in that we had a two-way tie between two hard working execs. Therefore we decided would be best to highlight both execs this month: Aashna Narang and Hamas Waqar.`
                },
                {
                    tag: 'p',
                    text: `Here are a few words from our Execs of the Month:`
                },
                {
                    tag: 'p',
                    attr: {
                        style: {
                            fontWeight: 'bold'
                        }
                    },
                    text: `Aashna Narang`
                },
                {
                    tag: 'p',
                    text: `Hey, everyone! I'm Aashna, the IEEE Women in Engineering Carleton Chair, and I wanted to give big thank you to the IEEE Carleton team and anyone who nominated me as Exec of the Month! This month IEEE WIE Carleton and CSES hosted a Speaker Panel featuring 4 women in STEM from Nokia, Iversoft, Kott Group, and Magnet Forensics. The event was very successful as we achieved our goal having 45 people come out! This couldn't have happened without the WIE Vice-Chair, Marie, and Cameron, the CSES Academics Director. WIE is also in the works of planning a hack with Magnet Forensics, planning a social event, collaborating with other clubs, and we have started planning for our annual Wine and Cheese!`
                },
                {
                    tag: 'p',
                    attr: {
                        style: {
                            fontWeight: 'bold'
                        }
                    },
                    text: `Hamas Waqar`
                },
                {
                    tag: 'p',
                    text: `I would like to thank you all for nominating me for this month’s execs of the month. Over the past month, I have organized a couple of workshops taking part this semester; two of which includes an introduction to Git, which was co-hosted by IEEE and SCESoc, and an Introduction to Vivado 2016.3. Without the help I received from my fellow execs, workshop instructors, volunteers, and participants, these workshops would not have reached their full potential. So, I would like to give a big shout out to you all for making these workshops enjoyable, fun, and providing an opportunity for everyone to learn. Before I conclude, I just want to say this: “Knowledge should be shared not contain” and my goal is to make this statement true by creating the environment and events for everyone to learn.`
                },
                {
                    tag: 'p',
                    attr: {
                        style: {
                            fontWeight: 'bold'
                        }
                    },
                    text: `Thank you Aashna and Hamas for your commitment and hard work! You guys are awesome!`
                },
            ]
        },
    ]
}
