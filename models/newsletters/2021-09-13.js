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
            text: `If you are having trouble viewing this as an email, click <a href='http://staylateandmake.ca/CarletonNewsletter/output/2021-02-22.html'>here</a> to view in browser.`
        }
    ],
    articles: [
      // --- New Event --- //
      {
          title: `Learn about the Internet of Things`,
          time: `Wednesday September 20th, 21st, 10 AM`,
          location: `ZOOM`,
          body: [
              {
                  tag: 'p',
                  text: `Come learn all about the Internet of Things!
Professor Maede Ashouri will do an introduction to IoT security requirements and some of the well-known IoT security architectures for the first day, before delving into the security requirements of some of the applications of IoT, including smart grid, smart life, smart health, and many more on the second day.
The workshop is open to both graduate and undergraduate students.`
              },
              {
                tag: 'p',
                text:`Day 1: Introduction to IoT security requirements and some of the well-known IoT security architectures`
              },
              {
                tag: 'p',
                text:`Day 2: Security requirements of the applications of IoT, including smart grid, smart life, smart health, etc`
              },
              {
                tag: 'p',
                text:`The first day of the workshop will be hosted on zoom at the following link on September 20th at 10 am:`
              },
              {
                tag: 'button',
                attr: {
                    href: 'https://us04web.zoom.us/j/77041188966#success'
                },
                text:`DAY 1 LINK`
              },
              {
                tag: 'p',
                text:`The second day of the workshop will be hosted on zoom at the following link on September 21st at 10 am:`
              },
              {
                tag: 'button',
                attr: {
                    href: 'https://us02web.zoom.us/j/87940656720#success'
                },
                text:`DAY 2 LINK`
              },
              {
                tag: 'button',
                attr: {
                    href: 'https://www.facebook.com/ieeecarleton/photos/a.201988126536758/4364443543624508/?type=3'
                },
                text:`FACEBOOK`
              },
          ]
      },

      {
          title: `CCSS Tech Talk Jason Bernard`,
          time: `Saturday Sept.20, 6PM EDT`,
          location: `Online`,
          body: [
            {
                tag: 'p',
                text: `On September 20th at 6PM EDT, the Carleton Computer Science Science will be hosting Dr. Jason Bernard, a postdoctoral affiliate at the Vector Institute for Artificial Intelligence, and a research assistant at Athabasca University. `
            },
            {
                tag: 'p',
                text: ` This presentation will discuss Dr. Bernard’s work on inferring L-systems and RGGs using artificial intelligence techniques. Additionally, some practical applications will be presented such as plant modelling and neural activity to demonstrate the widespread potential utility of this research.`
            },
            {
                tag: 'button',
                attr: {
                    href: 'https://ccss.carleton.ca/events/inferring-the-algorithms-used-by-different-processes/'
                },
                text: `LINK`
            },

          ]
      },
      {
          title: `Introduction to Scientific Python`,
          time: `Monday, September 20th 2021, 5:30 PM - 7:30 PM `,
          location: `Online`,
          img: `IntroductiontoScientificPython.png`,
          body: [
            {
                tag: 'p',
                text: `In the introduction to the scientific python workshop, we will be delving into some of the most common data science tools that are used such as Numpy, Pandas, Sci-Kit Learn and matplotlib. The goal would be to showcase some of the common operations we use in standard data science/ machine learning workflows and to share some of the intuition behind the inner working of these libraries. This workshop is for those with a beginner understanding of Python. `
            },
            {
                tag: 'p',
                text: `The following week, we will be offering Office Hours on Discord! The presenter and other CAIS executives will be available to answer questions about the workshop content and other information! Check it out:`
            },
            {
                tag: 'p',
                text: `Please make sure to register with Microsoft Teams to attend! Registration will be open till the end of the event.`
            },
            {
                tag: 'button',
                attr: {
                    href: 'https://teams.microsoft.com/registration/lRjZagbeXki8UfzhJsyFMA,eqaDjyVuv0K2RTJhoBkv7Q,S2Faye49wEOo53wBS-3GVw,KrB6PGZ5FUuGkaKGaVP6Qw,GjeLFJyyckWCL3_scG7o4Q,ANg8--Lz9026q2jecLtofA?mode=read&tenantId=6ad91895-de06-485e-bc51-fce126cc8530&skipauthstrap=1'
                },
                text: `REGISTRATION`
            },
          ]
      },
      {
          title: `Office Hours: Introduction to Scientific Python`,
          time: `Monday, September 27th 2021, 5:30 PM - 6:30 PM `,
          location: `CAIS Discord`,
          img: `OHWS1IntroSciPyCAIS.png`,
          body: [
            {
                tag: 'p',
                text: `Presenting the CAIS Office Hour! Have any questions related to last weeks workshop about Scientific Python? Need help or want to expand on what you learned? Join anytime to chat directly with the presenter on Discord!`
            },
            {
                tag: 'button',
                attr: {
                    href: 'https://discord.gg/BPqSRnaC'
                },
                text: `DISCORD`
            },
          ]
      },
    ]
}
