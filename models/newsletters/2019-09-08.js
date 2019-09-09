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
        // --- Office Volunteers --- //
        {
            title: `Office Volunteers`,
            body: [
                {
                    tag: 'htmlString',
                    text: `For those of you that wish to help out the community and volunteer at the IEEE Carleton Office (ME 3359), the online signup form at <a href="https://www.ieeecarleton.ca">https://www.ieeecarleton.ca</a> form has been fixed, so you can now pick your slots.`
                },
                {
                    tag: 'p',
                    text: `As an office volunteer you will be responsible for answering simple questions at the front desk and handling transactions for course packs. There will always be an exec in the office to help you if needed.`
                },
                {
                    tag: 'p',
                    text: `Please note these is a maximum of two timeslots slots per volunteer.`
                },
                {
                    tag: 'p',
                    text: `Even if you signed the form in the office, please sign again online. Thank you very much for your time and understanding.`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://www.ieeecarleton.ca/volunteer.php'
                    },
                    text: `Volunteer Signup`
                },
            ]
        },
        // --- LinkedIn Learning --- //
        {
            title: `LinkedIn Learning`,
            body: [
                {
                    tag: 'p',
                    text: `There are a ton of resources that Carleton provides us students, but does a poor job of letting us know, so here we've collected a few of the resources you should absolutely take advantage of.`
                },
                {
                    tag: 'p',
                    text: `Our first resource is LinkedIn Learning. It is an online educational platform where you can find an endless supply of videos to help you learn new concepts in various fields.`
                },
                {
                    tag: 'p',
                    text: `Click on the button below for instructions on how to activate your LinkedIn Learning account with your university email.`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://students.carleton.ca/services/linkedin-learning/'
                    },
                    text: `LinkedIn Learning`
                },
            ]
        },
        // --- MS Imagine --- //
        {
            title: `Microsoft Imagine: Development Tools`,
            body: [
                {
                    tag: 'p',
                    text: `The second resource you should absolutely make use of is Microsoft Imagine, which is a program run by Microsoft (MS) to provide professional-grade development tools to students at universities around the world. There you can find anything you could ever need to create any software application you could think of.`
                },
                {
                    tag: 'p',
                    text: `It's user interface is atrocious and hard to navigate but if you need a Windows 10 license, Azure, or something more specialized you can be sure to find it here (except MS Office).`
                },
                {
                    tag: 'htmlString',
                    text: `Click on the button below to go to <a href"https://imagine.carleton.ca">https://imagine.carleton.ca<a>.`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://imagine.carleton.ca'
                    },
                    text: `MS Imagine`
                },
            ]
        },
        // --- Matlab --- //
        {
            title: `Matlab for Students`,
            body: [
                {
                    tag: 'p',
                    text: `Anyone who's been in engineering for any length of time will be able to tell you how powerful and useful Matlab can be. You will probably use it in every single year of your program at Carleton so you might as well install it on your laptop.`
                },
                {
                    tag: 'p',
                    text: `Click on the button below to go to Carleton's website explaining how to install and get the student license for Matlab. Click on the 'Matlab for Students' link and login with your cuLearn credentials.`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://carleton.ca/its/all-services/computers/site-licensed-software/matlab-students/'
                    },
                    text: `Instructions`
                },
            ]
        },
        // --- IEEE Executive Position --- //
        {
            title: `IEEE Executive Position`,
            date: `Sunday September 15, 2019`,
            time: `11:59 PM`,
            location: `ME 3359`,
            body: [
                {
                    tag: 'p',
                    text: `😮 Want to be part of the exec team?! IEEE Carleton is looking for one volunteer to fill the 💥 Secretary position💥 🤓 Candidate Requirements:`
                },
                {
                    tag: 'p',
                    text: `1. Be students at Carleton University`
                },
                {
                    tag: 'p',
                    text: `2. Be part of the General Membership`
                },
                {
                    tag: 'p',
                    text: `3. Have actively volunteered at the McNaughton Resource Centre or other IEEE Carleton events for at least one semester, or the current election semester`
                },
                {
                    tag: 'p',
                    text: `4. Complete a nomination form containing the name, membership number and signature of ten members from the General Membership`
                },
                {
                    tag: 'p',
                    text: `5. Be attending instructional classes at Carleton University during the Carleton University Fall/Winter Session and not on a co-op work term.`
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
                    text: `2. Send your platform to <a href="mailto:covicechair@ieeecarleton.ca">covicechair@ieeecarleton.ca</a> by September 15th 2019 11:59 PM`
                },
                {
                    tag: 'p',
                    text: `3. Complete a short interview with the officers`
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
        // --- Learn Git with GitKraken --- //
        {
            title: `Learn Git with GitKraken`,
            date: `Thursday September 12, 2019`,
            time: `6:00 PM - 8:00 PM`,
            img: `git-kraken.png`,
            location: `ME 4463`,
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
        // --- IEEE WIE and CSES Speaker Panel --- //
        {
            title: `IEEE WIE and CSES Speaker Panel`,
            date: `Thursday September 19, 2019`,
            time: `6:00 PM - 8:00 PM`,
            img: `git-kraken.png`,
            location: `Dunton Tower 2017`,
            body: [
                {
                    tag: 'p',
                    text: `Do you want FREE food?! Do you support women??`
                },
                {
                    tag: 'p',
                    text: `IEEE Women in Engineering Carleton and CSES are hosting a speaker panel on September 19th, 2019. Speakers from Nokia, Accenture, Magnetic Forensics, and Iversoft will be coming in to share their experiences of being a woman in STEM. There will be FREE food and vegan and gluten-free options will be available.  `
                },
                {
                    tag: 'p',
                    text: `Stay tuned for more information. Check the IEEE Carleton Women in Engineering or the CSES Facebook page for more information.`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://www.facebook.com/CUIEEEWIE/'
                    },
                    text: `IEEE Women in Engineering Carleton`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://www.facebook.com/MyCSES/'
                    },
                    text: `CSES`
                },
            ]
        },
        // ieee carleton //
        {
            title: 'IEEE Carleton',
            location: 'ME 3359',
            img: 'ieee-carleton.png',
            body: [
                {
                    tag: 'p',
                    text: `We all volunteer our time and efforts to provide students and professionals multiple avenues to expose and drive innovation in the technical world.`
                },
                {
                    tag: 'p',
                    attr: {
                        style: {
                            fontWeight: 'bold'
                        }
                    },
                    text: `Interested in being part of the team? 🙋🏼‍♀️🙋🏽‍♂️`
                },
                {
                    tag: 'p',
                    text: `This opportunity allows you to experiment and improve your technical, communication, management, and leadership skills, receive credits in Carleton's Co-Curricular Record (CCR), and enhance your resume when the accomplishments you make at IEEE, all the while making new friends!`
                },
                {
                    tag: 'p',
                    attr: {
                        style: {
                            fontWeight: 'bold'
                        }
                    },
                    text: `Our office is in Mackenzie 3359, and our email us at info@ieeecarleton.ca.`
                },
                {
                    tag: 'p',
                    text: `Our executive meetings are held every other Monday in Mackenzie 4359 from 6 PM to 7:30 PM; stop by the office for more information.`
                },
                {
                    tag: 'htmlString',
                    text: `Follow us on <a href='http://facebook.com/ieeecarleton/'>facebook</a> and <a href='https://www.instagram.com/ieeecarleton/'>instagram</a>. 🙏🏼`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://goo.gl/forms/LSmMK3SFyyLh04XJ2'
                    },
                    text: 'Mailing List Sign-up'
                }
            ]
        }
    ]
}
