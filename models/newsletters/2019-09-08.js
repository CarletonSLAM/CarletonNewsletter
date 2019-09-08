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
            text: `If you are having trouble viewing this as an email, click <a href='http://staylateandmake.ca/CarletonNewsletter/output/2019-09-08.html'>here</a> to view in browser.`
        }
    ],
    articles: [
        // --- New Event --- //
        {
            title: `IEEE Executive Position`,
            date: `Sunday September 15, 2019`,
            time: `11:59 PM`,
            location: `ME 3359`,
            body: [
                {
                    tag: 'p',
                    text: `😮Want to be part of the exec team??!  IEEE Carleton is looking for one volunteer to fill the 💥 Secretary position.💥  🤓Candidate Requirements:  1. Be students at Carleton University 2. Be part of the General Membership 3. Have actively volunteered at the McNaughton Resource Centre or other IEEE Carleton events for at least one semester, or the current election semester 4. Complete a nomination form containing the name, membership number and signature of ten members from the General Membership. 5. Be attending instructional classes at Carleton University during the Carleton University Fall/Winter Session and not on a co-op work term.`
                },
                {
                    tag: 'p',
                    attr: {
                        style: {
                            fontWeight: `bold`
                        }
                    },
                    text: `⭐ Elections process: ⭐`
                },
                {
                    tag: 'p',
                    text: `1. Fill out the nomination form, which can be picked up in our office ME 3359`
                },
                {
                    tag: 'htmlString',
                    text: `2. Send your platform to <a href="mailto:covicechair@ieeecarleton.ca">covicechair@ieeecarleton.ca</a> by September 15th 2019 11:59pm`
                },
                {
                    tag: 'p',
                    text: `4. Present your platform at the general meeting of September 25th 2019.`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://drive.google.com/a/ieeecarleton.ca/file/d/1Lme9BOohmjJh80Ed-72nTwSN9fqux72k/view?usp=drivesdk'
                    },
                    text: `Sample Elections Platform`
                },
            ]
        },
        // --- New Event --- //
        {
            title: `Learn Git with GitKraken`,
            date: `Thursday September 12, 2019`,
            time: `6:00 PM - 8:00 PM`,
            image: `git-kraken.png`,
            location: `TBD`,
            body: [
                {
                    tag: 'p',
                    text: `Getting started with version control can be confusing, but it doesn't have to be. Learn how to use Git with the intuitive GitKraken Git Client and Glo Boards for task tracking. With this free workshop hosted by cuHacking, you'll become familiar with this useful skill for personal and group projects.`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://www.facebook.com/events/418392405695054/'
                    },
                    text: `Facebook Event`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://forms.gle/jQJ3rw5kJYL4CM5w8'
                    },
                    text: `RSVP`
                },
            ]
        },
    ]
}
