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
            text: `If you are having trouble viewing this as an email, click <a href='http://staylateandmake.ca/CarletonNewsletter/output/2020-01-20.html'>here</a> to view in browser.`
        }
    ],
    articles: [
        // --- SPAC --- //
        {
            title: `IEEE SPAC 2020`,
            date: `Thursday January 23, 2020`,
            time: `5:30 PM - 10:30 PM`,
            location: `Sala San Marco Conference & Events Centre`,
            img: `spac2020.png`,
            body: [
                {
                    tag: 'p',
                    text: `IEEE SPAC 2020 is back! We are currently selling tickets today! Want to know more or buy your tickets today?`
                },
                {
                    tag: 'p',
                    text: `Follow us on our website and make sure you put yourself as “interested” on our Facebook event to stay up to date! We also have Instagram now, so we will be posting a lot of awesome content!`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://ieeespac.ca/'
                    },
                    text: `Website (Tickets)`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://www.facebook.com/events/706341783179994/'
                    },
                    text: `Facebook Event`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://www.instagram.com/ieeespac/'
                    },
                    text: `Instagram`
                },
            ]
        },
        // --- Volunteering Opportunities --- //
        {
            title: `Volunteering Opportunities`,
            body: [
                {
                    tag: 'p',
                    text: `There are tons of opportunities at IEEE Carleton to volunteer this semester!`
                },
                {
                    tag: 'p',
                    text: `Get involved in the community to make new friends, make an impact, learn new skills, and to improve your resume.`
                },
                {
                    tag: 'htmlString',
                    text: `You can help out in the <a href="http://ieeecarleton.ca/volunteer.php">office</a>, you can help organize events such as <a href="http://www.battleroyale.ca/br11/">Battle Royale</a>, or you can help out as a volunteer at <a href="https://www.celebratewie.ca/">WIE Wine and Cheese</a>.`
                },
                {
                    tag: 'htmlString',
                    text: `If you want to help out with company tours or you have workshop ideas, send an email to our Volunteer Director, Alex Dubie at <a href="mailto:volunteerdirector@ieeecarleton.ca">volunteerdirector@ieeecarleton.ca</a>.`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'http://ieeecarleton.ca/volunteer.php'
                    },
                    text: `Office Volunteer Signup`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'http://www.battleroyale.ca/br11/'
                    },
                    text: `Battle Royale`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://www.celebratewie.ca/'
                    },
                    text: 'WIE Wine and Cheese'
                },
            ]
        },
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
                    text: `SLAM sessions are happening once a week now: Thursdays, from 6 PM to 9 PM.`
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
        // --- WISE Conference --- //
        {
            title: `WISE National Conference 2020`,
            date: `January 25 + 26, 2020`,
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
                    text: `More Info`
                },
            ]
        },
    ]
}
