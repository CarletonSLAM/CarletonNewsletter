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
            text: `If you are having trouble viewing this as an email, click <a href='http://staylateandmake.ca/CarletonNewsletter/output/2020-01-07.html'>here</a> to view in browser.`
        }
    ],
    articles: [
        // --- Tech --- //
        {
            title: `Getting a Tech Internship in the States`,
            date: `Thursday January 9, 2020`,
            time: `5:30 PM - 6:15 PM`,
            location: `HP 5345`,
            img: `tech.png`,
            body: [
                {
                    tag: 'p',
                    text: `Have you ever considered interning in America? With all the competition, it may seem like a difficult thing to do. Many top companies are headquartered in cities like San Francisco, New York, and Seattle.`
                },
                {
                    tag: 'p',
                    text: `With competitive wages and people applying from all around the world, getting one of these internships might feel unattainable. This workshop will hopefully show you it's more attainable than you think. 🤔`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://www.facebook.com/events/974242659599752/?active_tab=about'
                    },
                    text: `Facebook Event`
                },
            ]
        },
        // --- cuHacking --- //
        {
            title: `cuHacking 2020`,
            date: `January 11 + 12, 2020`,
            time: `8:30 AM - 4:00 PM`,
            location: `River Building`,
            img: `cuHacking-2020.png`,
            body: [
                {
                    tag: 'p',
                    text: `Have you ever wanted to design a new program with friends? Want to learn something new? Want to network with like minded people? cuHacking 2020 is the perfect place for all of your needs. Great activities and surprises await you ⚔️.`
                },
                {
                    tag: 'p',
                    text: `cuHacking is back for the 4th year, once again in River Building (aka Richcraft Hall). Join over 500 students and over 20 companies to build something in under 24 hours and then show it off to your friends and potential employers.`
                },
                {
                    tag: 'p',
                    text: `This is a great opportunity for you to add a new project to your resume and network with industry leaders, don't miss out!`
                },
                {
                    tag: 'p',
                    attr: {
                        style: {
                            fontWeight: 'bold'
                        }
                    },
                    text: `cuHacking 2020 will be accepting walk-ins on Sat. January 11 between 10 and 11:30 AM, as space as allows.`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://www.facebook.com/events/552661382220983/'
                    },
                    text: `Facebook Event`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://cuhacking.com/'
                    },
                    text: `Apply now`
                },
            ]
        },
        
        // --- New Event --- //
        {
            title: `Frost Week Conference`,
            date: `Wednesday January 15, 2020`,
            time: `6:00 PM - 9:00 PM`,
            location: `ME 3380`,
            img: `tech.png`,
            body: [
                {
                    tag: 'p',
                    text: `Curious about what a club or society is all about? Come out to the Frost Week Conference to hear presentations from a variety of C-Eng groups!`
                },
                {
                    tag: 'p',
                    attr: {
                        style: {
                            fontWeight: 'bold'
                        }
                    },
                    text: `Learn more at the event page, via the button below.`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://www.facebook.com/events/574293060071371/'
                    },
                    text: `Facebook Event`
                },
            ]
        },
        // --- SPAC --- //
        {
            title: `IEEE SPAC 2020`,
            date: `Thursday January 23, 2020`,
            time: `5:30 PM - 10:30 PM`,
            location: `Sala San Marco Conference & Events Centre`,
            img: `spac.jpg`,
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
