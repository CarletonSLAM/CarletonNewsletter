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
          title: `CAIS Game Night`,
          time: `Wednesday September 15th, 7:00pm - 9:00pm EST`,
          location: `CAIS Discord`,
          img: `CopyofGame_Night_Poster.png`,
          body: [
              {
                  tag: 'p',
                  text: `Have you recently (or not-so-recently) transitioned from university or academia to a STEM career? We are planning a series of talks this summer to help the next generation of grads make this transition; they would love to hear your experiences and insights as they make the jump. Potential topics include:`
              },
              {
                tag: 'p',
                text:`Registration End Date: Thursday, September 16 2021`
              },
              {
                tag: 'p',
                text:`Join the Carleton Artificial Intelligence Society for our first Game Night of the year on Wednesday, Sept. 15 at 7 pm EST!`
              },
              {
                tag: 'p',
                text:`You will get to know more about CAIS and other attendees. See you there!!`
              },
              {
                tag: 'button',
                attr: {
                    href: 'https://discord.gg/BPqSRnaC'
                },
                text:`Discord`
              },
          ]
      },

      {
          title: `Computer Science Clubs and Societies Info Session`,
          time: `Saturday Sept. 18, 9:00 AM EST`,
          location: `Online`,
          img: `CCSS_CSStuClubExpo.jpg`,
          body: [
            {
                tag: 'p',
                text: `Are you an incoming or returning CS student looking to get involved this year, but not sure how? `
            },
            {
                tag: 'p',
                text: `Well, look no further! To kick off (and close off) Carleton Computer Science Society’s Week of Awesome, we are collaborating with clubs and societies affiliated with the School of Computer Science (SCS) to bring you an exciting, virtual CS Clubs & Societies Information Session!`
            },
            {
                tag: 'p',
                text: `This info session will have two identical sessions on Sunday, September 12 @ 1:00 pm EDT and Saturday, September 18 @ 9:00 am EDT.`
            },
            {
                tag: 'p',
                text: `Every club and society will speak for approximately 5 minutes each, and there will be a 30 minutes Q&A session at the end.`
            },
            {
                tag: 'p',
                text: `An email will be going out to all CS students soon with the link to the event. So be sure to check your Carleton email account within the next 2 weeks!`
            },
            {
                tag: 'p',
                text: `We hope to see you all there!!`
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
