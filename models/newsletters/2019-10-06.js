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
            text: `If you are having trouble viewing this as an email, click <a href='http://staylateandmake.ca/CarletonNewsletter/output/2019-10-06.html'>here</a> to view in browser.`
        }
    ],
    articles: [
        // --- SLAM --- //
        {
            title: `Stay Late And Make SLAM`,
            date: `Every Tuesday and Thursday`,
            time: `6:00 PM - 9:00 PM`,
            location: `ME 4463`,
            img: `slam.png`,
            body: [
                {
                    tag: 'p',
                    text: `Bring your own project or join one of our projects!  We are running 3 main projects this year!`
                },
                {
                    tag: 'p',
                    text: `🎧 Reverse-engineering an Analog Amplifier 🎸 🛩Quadcopter Project ⌘ 🤖AI Software Project 👾`
                },
                {
                    tag: 'p',
                    text: `We have many upper-year Electrical and Software Engineering students there to help!`
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
        // --- LHD --- //
        {
            title: `MLH Local Hack Day: Learn`,
            date: `Saturday October 12, 2019`,
            time: `8:30 AM - 4:00 PM`,
            location: `AT 102`,
            img: `mlh-learn.png`,
            body: [
                {
                    tag: 'p',
                    text: `Join cuHacking on Oct 12th, 2019 for MLH's Local Hack Day: Learn Day at Carleton, in Azrieli Theatre (AT), room 102.`
                },
                {
                    tag: 'p',
                    text: `Learn Day is a global conference that you can share with your community. Pick up the new skills you need by participating in workshops and talks with a community around the world. Attendees will experience a series of workshops where they'll learn skills such as publishing their first website using AWS, learning AI skills with Python, and Game Design with Unity!`
                },
                {
                    tag: 'p',
                    text: `This is an event for all skill levels, from beginners to the most veteran developers. Students MUST register to attend!`
                },
                {
                    tag: 'p',
                    attr: {
                        style: {
                            fontWeight: 'bold'
                        }
                    },
                    text: `**To attend, please register online, at: https://localhackday.mlh.io/learn/locations/1827**`
                },
                {
                    tag: 'p',
                    text: `Current schedule for the event: 8:30am to 9:00am - Sign in 9:00 to 11:00 - Full Stack AWS Workshop 11:00 to 12:30 (tentative) - Activities, Bring-your-own-lunch 12:30 to 4:00 - Python AI Workshop, and Unity + C#`
                },
                {
                    tag: 'p',
                    text: `Any questions can be asked on social media @cuhacking, or to hackerexperience@cuhacking.com`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://localhackday.mlh.io/learn/locations/1827'
                    },
                    text: `Sign Up`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://www.facebook.com/events/2337537592982661/'
                    },
                    text: `Facebook Event`
                },
            ]
        },
        // --- WISE --- //
        {
            title: `WISE National Conference 2020`,
            date: `January 25 - 26, 2020`,
            location: `Hilton Toronto`,
            img: `wise-conference.jpg`,
            body: [
                {
                    tag: 'p',
                    text: `Women in Science and Engineering is proud to present their 8th Annual National Conference!`
                },
                {
                    tag: 'p',
                    text: `The WISE National Conference serves as a catalyst to inspire and empower individuals to pursue their passions, broaden their horizons, and form meaningful connections. The conference brings together delegates from all across Canada to share ideas and become inspired over the course of a two-day event dedicated to professional and personal growth, featuring inspirational leaders from a wide range of STEM fields, as well as workshops, case competitions, and career fairs.`
                },
                {
                    tag: 'p',
                    text: `Join them in Toronto on January 25-26th to be part of a movement dedicated to diversity and inclusion in STEM and learn how to Lead Without Limits!`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://www.facebook.com/cuwise/'
                    },
                    text: `CU-WISE`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://conference.wiseuoft.org'
                    },
                    text: `Website`
                },
            ]
        },
    ]
}
