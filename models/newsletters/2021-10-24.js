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
            text: `If you are having trouble viewing this as an email, click <a href='http://staylateandmake.ca/CarletonNewsletter/output/2021-10-17.html'>here</a> to view in browser.`
        }
    ],
    articles: [
      // --- New Event --- //
      {
          title: `Nanoscale Monolithic Phase`,
          time: `Tuesday October 26st, 4:00 - 6:00 PM`,
          img:`part2.jpg`,
          body: [
              {
                tag:'p',
                text: `Join us for Part 2 of the Space Technology Series: Nanoscale Monolithic Phase-Change and MEMS-Based Solutions for RF, presented by Dr. Tejinder Singh!`
              },
              {
                tag: 'button',
                attr: {
                  href: 'https://www.eventbrite.ca/e/sts-nanoscale-monolithic-phase-change-and-mems-based-solutions-for-rf-tickets-195283256477'
                },
                text: 'REGISTER'
              },
          ]
      },
      {
          title: `AI Coffee Hour 3: SpOOkY AI Application`,
          time: `Thursday October 28th 2021, 6:00 - 7:30 PM `,
          location: `CAIS Discord`,
          body: [
            {
                tag: 'p',
                text: `Presenting CAIS’s AI Coffee Hour! Our AI Coffee hour is a social event where everyone is invited to bring a cup of coffee and chat with the CAIS members about anything relating to Artificial Intelligence and Machine Learning. Want to exchange where you get your AI news and research? Feeling good or need help with your personal AI project? This is the perfect place to meet fellow AI enthusiasts. The discussions will be lightly guided by new themes every week, but nothing AI-related is off-limits. No prior experience or knowledge is required.

This week we’ll be discussing scary and unethical applications of AI/ML for Halloween!`
            },
            {
                tag: 'p',
                text: `This week we’ll be discussing scary and unethical applications of AI/ML for Halloween!`
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
      {
          title: `Linear Classification Office Hours`,
          time: `Wednesday November 10th, 8:30 PM`,
          img:`OH 3 lin clas.png`,
          body: [
              {
                tag: 'p',
                text:`Presenting the CAIS Office Hour! Have any questions related to last week’s workshop about Linear Classification? Need help or want to expand on what you learned? Join anytime to chat directly with the presenter on Discord!`
              },
          ]
      },
      {
          title: `Linear Classification`,
          time: `Wednesday November 3rd, 7:30 PM`,
          location: `Online`,
          img: `cais ws3 lin clas.png`,
          body: [
            {
                tag: 'p',
                text: `Classification is one of the fundamental problems that machine learning aims to solve. The goal is to use an object’s features to determine which class or category it belongs to. In this workshop, we introduce the notion of linear classifiers to make such predictions. In particular, we will go over a popular machine learning model called logistic regression. We will explain how this model works and the various problems it can be applied to. Similar to the linear regression workshop, knowledge of calculus and linear algebra is beneficial to understand the technical details but not required to get an overall idea of how linear classification works.`
            },
            {
                tag: 'p',
                text: `The following week, we will be offering Office Hours on Discord! The presenter and other CAIS executives will be available to answer questions about the workshop content and other information! Check it out:`
            },
            {
                tag: 'button',
                attr: {
                    href: 'https://teams.microsoft.com/registration/lRjZagbeXki8UfzhJsyFMA,eqaDjyVuv0K2RTJhoBkv7Q,S2Faye49wEOo53wBS-3GVw,qWbZ5k_X_0CEhb2qqTDIiQ,SazZbKylOEqDy0rFJacvWA,uIvp5fgDLESeAZg69Vs2Ew?mode=read&tenantId=6ad91895-de06-485e-bc51-fce126cc8530'
                },
                text: `REGISTRATION`
            },
          ]
      },
    ]
}
