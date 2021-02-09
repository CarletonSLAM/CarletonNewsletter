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
            text: `If you are having trouble viewing this as an email, click <a href='http://staylateandmake.ca/CarletonNewsletter/output/2021-01-25.html'>here</a> to view in browser.`
        }
    ],
    articles: [
        // --- New Event --- //
        {
            title: `Welcome to Ottawa's LARGEST 24-Hour LAN competition for Charity!`,
            date: `Tuesday February 16, 2021`,
            time: `6:00 PM - 6:00 PM`,
            location: `Online Event`,
            img: 'br13.jpg',
            body: [
                {
                    tag: 'p',
                    text: `Introducing Battle Royale XIII!`
                },
                {
                    tag: 'p',
                    text: `Battle Royale XIII is a 24-hour gaming event geared towards raising money for charity (CHEO). Games are separated into three categories: Major, Minor, and Casual.
Major Tournaments include CS:GO and League of Legends; Minor Tournaments include Rocket League, VALORANT, Minecraft Design, and Players' Choice; and Casual Games include Among Us, Skribbl.io, DOTA 2, FIFA 21, and Brawlhalla.`
                },
                {
                    tag: 'p',
                    text: `Major Tournament tickets cost $7: these are the main features of the event, so the prize pool for the winners will be significantly higher compared to the Minor Tournaments' prize pools - hence the more expensive cost of the ticket. Note: Major Tournament ticket will also allow you access to the Minor Tournaments as well! However, if you'd like to participate in both the CS:GO and the League of Legends Tournaments, you'll need to buy each ticket separately.`
                },
                {
                  tag: 'p',
                  text:`Minor Tournament tickets cost $4: although the prizes won't be as epic, there will most likely be more participation in these tournaments, resulting in more fun!
Casual tickets count as donations, starting at a minimum of $1: play casual games at your own leisure!`
                },
                {
                  tag: 'p',
                  text:`The event will take place on Monday, February 15 at 6 PM, and will last until Tuesday, February 16 at 6 PM. This event takes place during reading week.`
                },
                {
                  tag: 'p',
                  text: `Hoping to see you there (and winning those big prizes too, of course)!`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://www.eventbrite.ca/e/battle-royale-xiii-tickets-136107688761'
                    },
                    text: `REGISTER`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://docs.google.com/spreadsheets/d/1JRowoEv58EAx8Y4MDpVrXTIqeG0AAKGHnqEcgcmxkyg/edit#gid=1004206347'
                    },
                    text: `EVENT SCHEDULE`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://br13.netlify.app/'
                    },
                    text: `WEBSITE`
                },
            ]
        },

          {
              title: `Clarifying the path to becoming a Professional Engineer`,
              date: `Friday March 5, 2021`,
              time: `4:00 PM - 5:00 PM`,
              location: `Online Event`,
              img: `clarify.jpg`,
              body: [
                {
                    tag: 'p',
                    text: `If you are an engineering undergraduate or post-graduate student, or a recent graduate starting out your engineering career, then this seminar might be for you.`
                },
                {
                    tag: 'p',
                    text: `In it you will learn: What is PEO? What engineering experience is PEO looking for once I graduate? I have international engineering education and experience; how is that evaluated by PEO? How is my engineering experience evaluated by PEO? How do I prepare my Experience Record? What is the PPE? What is the EIT Program and the Student Membership Program?`
                },
                {
                    tag: 'p',
                    text: `Emphasis of this webinar will be on the P. Eng. licensure process - what PEO is looking for. The webinar will focus on how engineering experience is evaluated and how you can facilitate the process. Learn the dos and don’ts of preparing your licensing application for evaluation. To participate, you will require: internet connection to view the webinar, and/or phone access to dial into the conference for audio. We look forward to speaking with you!`
                },
                  {
                      tag: 'button',
                      attr: {
                          href: 'https://bit.ly/YPPEO21'
                      },
                      text: `REGISTER`
                  },
                  {
                      tag: 'button',
                      attr: {
                          href: 'https://www.linkedin.com/company/65487492'
                      },
                      text: `LINKEDIN`
                  },
                  {
                      tag: 'button',
                      attr: {
                          href: 'https://www.peo.on.ca'
                      },
                      text: `PEO Website`
                  },
              ]
          },

          // --- New Event --- //
          {
              title: `Webinar: Honing Your Research Skills`,
              date: `Monday February 15, 2021`,
              time: `4:00 PM - 5:00 PM`,
              location: `Online Event`,
              img: `researchSkills.png`,
              body: [
                  {
                      tag: 'p',
                      text: `Interested in improving your research skills? This webinar is for you!!`
                  },
                  {
                      tag: 'p',
                      text: `This webinar will cover general research skills necessary for success in engineering research, and is intended to undergraduate students, new graduate students, or anyone starting or getting back into engineering research. Topics covered will include journal paper reading and writing, academic metrics, research communication, problem solving, and more!`
                  },
                  {
                      tag: 'button',
                      attr: {
                          href: 'http://bit.ly/YPOSKILLS'
                      },
                      text: `REGISTER`
                  },
                  {
                      tag: 'button',
                      attr: {
                          href: 'https://www.linkedin.com/events/6757363321290207232/about/'
                      },
                      text: `LINKEDIN`
                  },
              ]
          },
    ]
}
