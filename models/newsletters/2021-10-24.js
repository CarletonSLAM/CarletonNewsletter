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
          title: `IEEE Halloween Costume Contest`,
          img:`POster.png`,
          body: [

        ]
      },
      {
          title: `Emerging Technologies and Applications for Spaceborn Synthetic Aperture Radar`,
          time: `Wednesday November 10, 1:00 - 2:30 PM`,
          img:`part3.jpg`,
          body: [
              {
                tag:'p',
                text: `Part 3 of the Space Technology Series: Emerging Technologies and Applications for Synthetic Aperture Radar, presented by MASc. Daniel Gale from Antwerp Space!`
              },
              {
                tag: 'button',
                attr: {
                  href: 'https://www.eventbrite.ca/e/sts-emerging-technologies-and-applications-for-synthetic-aperture-radar-tickets-195289545287'
                },
                text: 'REGISTER'
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
