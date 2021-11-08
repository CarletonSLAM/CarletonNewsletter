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
          title: `Generative Neural Networks`,
          time: `Wednesday November 18, 6:00-7:30 PM`,
          location: `Online`,
          img: `Carleton AI Society.png`,
          body: [
            {
                tag: 'p',
                text: `Presenting CAIS’s AI Coffee Hour! Our AI Coffee hour is a social event where everyone is invited to bring a cup of coffee and chat with the CAIS members about anything relating to Artificial Intelligence and Machine Learning. Want to exchange where you get your AI news and research? Feeling good or need help with your personal AI project? This is the perfect place to meet fellow AI enthusiasts. The discussions will be lightly guided by new themes every week, but nothing AI-related is off-limits. No prior experience or knowledge is required.`
            },
            {
                tag: 'p',
                text: `This week we’ll be discussing Generative Neural Networks and related AI/ML topics!`
            },
            {
                tag: 'button',
                attr: {
                    href: 'https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fmeetup-join%2F19meeting_NDY1ODVjZWItMDZkMi00MWU2LWFmMDYtZjZiMTE2MmEzNmQxthread.v2%2F0%3Fcontext%3DTid6ad91895-de06-485e-bc51-fce126cc8530Oidab72a30b-581e-45d2-abc3-37cc554dfefb&type=meetup-join&deeplinkId=60fad6c4-94d0-4bed-9119-4e9e0678e62c&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true'
                },
                text: 'MEETING LINK'
            },
          ]
      },
      {
        title: `Feature Selection/Transformation`,
        time: `Wednesday November 24, 7:30-9:30 PM`,
        location: `Online`,
        img: `cais ws3 feat seltr.png`,
        body: [
          {
              tag: 'p',
              text: `The quality of the features used when building a machine learning model directly affects the quality of the model’s predictions. It’s not always about what model you used but what type of data you feed into your data. With bad data, machine learning algorithms will produce results that are inaccurate or incomprehensible. In this workshop, we’ll be exploring feature selection and transformation techniques that can be used to improve model quality and performance.`
          },
          {
              tag: 'p',
              text: `The following week, we will be offering Office Hours on Discord! The presenter and other CAIS executives will be available to answer questions about the workshop content and other information! Check it out:`
          },
          {
              tag: 'button',
              attr: {
                  href: `https://teams.microsoft.com/registration/lRjZagbeXki8UfzhJsyFMA,eqaDjyVuv0K2RTJhoBkv7Q,S2Faye49wEOo53wBS-3GVw,YbpQ_OLbq0esto7IX-DBcQ,fj4Ew1RfLkeLtqPvnQNSTA,k3Pyb2XLG0aey7teR5EuNA?mode=read&tenantId=6ad91895-de06-485e-bc51-fce126cc8530`
              },
              text: 'REGISTER'
          },
        ]
      }
    ]
}
