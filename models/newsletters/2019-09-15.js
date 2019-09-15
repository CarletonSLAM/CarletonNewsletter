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
            text: `If you are having trouble viewing this as an email, click <a href='http://staylateandmake.ca/CarletonNewsletter/output/2019-09-15.html'>here</a> to view in browser.`
        }
    ],
    articles: [
        // --- Volunteer Orientation --- //
        {
            title: `IEEE Carleton Office Volunteers`,            
            date: `Tuesday September 17, 2019`,
            time: `6:00 PM - 8:00 PM`,
            location: `ME 4359`,
            img: `orientation.png`,
            body: [
                {
                    tag: 'p',
                    text: `Come on out to IEEE Volunteer Orientation! We will be going over the volunteering opportunities IEEE has to offer this year and eating pizza in ME 4359 at 7 PM on Tuesday September 17`
                },
            ]
        },
        // --- Speaker Panel --- //
        {
            title: `IEEE WIE Carleton and CSES Speaker Panel`,
            date: `Thursday September 19, 2019`,
            time: `6:00 PM - 8:00 PM`,
            location: `Dunton Tower 2017`,
            img: `panel.png`,
            body: [
                {
                    tag: 'p',
                    text: `Speakers from Nokia, Accenture, Magnetic Forensics, and Iversoft will be coming in to share their experiences of being a woman in STEM. There will be FREE food and vegan and gluten-free options will be available.`
                },
                {
                    tag: 'p',
                    text: `Please register for the event if you are interested!`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'http://bit.ly/CSES_IEEEWIE'
                    },
                    text: `Eventbrite`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://facebook.com/events/711286809284655/?active_tab=about'
                    },
                    text: `Facebook Event`
                },
            ]
        },
        // --- GitHub Workshop --- //
        {
            title: `IEEE and SCESoc GitHub Workshop`,            
            date: `Tuesday September 24, 2019`,
            time: `6:00 PM - 8:00 PM`,
            location: `CB 5109`,
            img: `github.png`,
            body: [
                {
                    tag: 'p',
                    text: `Have you ever wanted to program on a project with a team? Have you wanted to learn how industry and open-source collaborate in coding around the globe? Come learn how to use Git with SCESoc and IEEE! This workshop comprises of both learning simple Git theory and practical application!`
                },
                {
                    tag: 'p',
                    text: `The workshop starts at 6 PM in Canal Building 5109. This lab is booked to provide a preset environment for the participants to focus on learning and using the tool.However, if you are comfortable with the command line and have GIT set up on your computer, feel free to bring it.`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://forms.gle/ohrAc55pXJMtBaZ7A'
                    },
                    text: `Signup Form`
                },
            ]
        },
        // --- 2019 Morgan Stanley WIT Round-Up --- //
        {
            title: `2019 Morgan Stanley WIT Round-Up`,            
            date: `Friday, September 27, 2019`,
            location: `Montreal`,
            img: `wit.jpg`,
            body: [
                {
                    tag: 'p',
                    text: `Morgan Stanley will be organizing a WIT Round-Up on Friday, September 27th. This is a great opportunity to learn more about technology, personal branding and career paths for students pursuing a technology degree.`
                },
                {
                    tag: 'p',
                    text: `This event would be most relevant to women in computer science, computer /software / electrical engineering and related disciplines.`
                },
                {
                    tag: 'p',
                    text: `*Travel reimbursement is available. Please email them for more information: valerie.kruk@morganstanley.com`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'mailto:wit-montreal@morganstanley.com'
                    },
                    text: `Register`
                },
            ]
        },
        // --- NASA Space Apps Hackathon --- //
        {
            title: `NASA Space Apps Hackathon`,            
            date: `October 18 - 20, 2019`,
            time: `6:00 PM - 8:00 PM`,
            location: `ME 4359`,
            body: [
                {
                    tag: 'p',
                    text: `This coming October, Space Apps Ottawa will be holding an intense 47 hour global weekend hackathon for developers, designers, engineers, entrepreneurs, astronomers, and enthusiasts. This event is being hosted at Carleton University!`
                },
                {
                    tag: 'p',
                    text: `Click on the button below for full info.`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://app.riipen.com/projects/6436/details'
                    },
                    text: `Signup / Info`
                },
            ]
        },
    ]
}
