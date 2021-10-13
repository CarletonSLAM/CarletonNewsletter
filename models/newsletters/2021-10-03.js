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
            text: `If you are having trouble viewing this as an email, click <a href='http://staylateandmake.ca/CarletonNewsletter/output/2021-10-03.html'>here</a> to view in browser.`
        }
    ],
    articles: [
      // --- New Event --- //
      {
          title: `IEEE Elections`,
          time: `Wednesday October 13, 6:00 PM`,
          body: [
              {
                tag: 'p',
                text:`IEEE Carleton will be extending the deadline for by-election platform submissions to Wednesday, October 13th, make sure to submit a platform (https://bit.ly/3ohHUfQ) to vicechair@ieeecarleton.ca if you're interested in running for a position! You can find out more about them in our position description document (https://bit.ly/39IsLLX)

We look forward to meeting the candidates this Wednesday!.`
              },
              {
                tag: 'button',
                attr: {
                    href: 'https://bit.ly/3ohHUfQ'
                },
                text:`SUBMIT PLATFORM`
              },
              {
                tag: 'button',
                attr: {
                  href: 'https://bit.ly/39IsLLX',
                },
                text: `PLATFORM DESCRIPTIONS`
              }
          ]
      },
      {
          title: `Linear Regression Workshop`,
          time: `Wednesday October 13th, 7:30 pM`,
          location: `Online`,
          img: `CAIS WS2 lin reg.png`,
          body: [
            {
                tag: 'p',
                text: `In this workshop, we will be introducing one of the foundational algorithms in machine learning: linear regression. Linear regression is a learning algorithm that finds a linear relationship between the inputted features and the desired output. This workshop will cover the definition of linear regression, suggest situations where it might be useful, and explain how the algorithm works. Although some knowledge of linear algebra and calculus is needed to understand some of the technical details involved in linear regression, this workshop will be suitable for those who just want to get an intuition on how it works.`
            },
            {
                tag: 'p',
                text: `The following week, we will be offering Office Hours on Discord! The presenter and other CAIS executives will be available to answer questions about the workshop content and other information! Check it out:`
            },
            {
                tag: 'button',
                attr: {
                    href: 'https://teams.microsoft.com/registration/lRjZagbeXki8UfzhJsyFMA,eqaDjyVuv0K2RTJhoBkv7Q,S2Faye49wEOo53wBS-3GVw,PDPVXpyRokOVQmJJD-A2bQ,dSP3F-53DUqzVKge5eckbw,GVjaRR3WGkKtzIQ0hAYr3w?mode=read&tenantId=6ad91895-de06-485e-bc51-fce126cc8530&skipauthstrap=1'
                },
                text: `REGISTRATION`
            },
          ]
      },
      {
          title: `Office Hours: Linear Regression`,
          time: `Wednesday October 20th 2021, 7:30-8:30 PM `,
          location: `CAIS Discord`,
          img: `OH-2-lin-alg.png`,
          body: [
            {
                tag: 'p',
                text: `Presenting the CAIS Office Hour! Have any questions related to last week’s workshop about Linear Regression? Need help or want to expand on what you learned? Join anytime to chat directly with the presenter on Discord!`
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
    ]
}
