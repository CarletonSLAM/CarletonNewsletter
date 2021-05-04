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
          title: `Share your Experience - Call for Speakers`,
          time: `TBA`,
          location: `Online`,
          img: `summer.jpg`,
          body: [
              {
                  tag: 'p',
                  text: `Have you recently (or not-so-recently) transitioned from university or academia to a STEM career? We are planning a series of talks this summer to help the next generation of grads make this transition; they would love to hear your experiences and insights as they make the jump. Potential topics include:`
              },
              {
                tag: 'p',
                text:`Industry vs. grad school`
              },
              {
                tag: 'p',
                text:`Looking for a job`
              },
              {
                tag: 'p',
                text:`Personal testimonies`
              },
              {
                tag: 'p',
                text:`Personal life as a professional`
              },
              {
                tag: 'p',
                text:`Keeping up to date`
              },
              {
                tag: 'p',
                text: `Please reach out if you are interested in speaking at one of the events.`
              },
          ]
      },

        // --- New Event --- //
        {
            title: `Bridging the Skill Gap`,
            date: `May 10th 12:00PM - 2:00 PM`,
            time: `4:00 PM`,
            time: `5:00 PM`,
            location: `Online`,
            img: `michael.jpg`,
            body: [

                {
                  tag: 'p',
                  text: `In a world where specialization and technical skills have become more important than ever, the significance of soft skills, such as interpersonal communication and leadership skills, should not be underestimated. IEEE YP Ottawa invites you to join us for a special Lunch and Learn session, where Michael will be sharing his experience and insights on bridging that skill gap, followed by a brief Q&A session.

Speaker: Michael Lalonde, Co-Owner, Purecolo Inc., Chair IEEE Ottawa Lunch and Learn`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'http://bit.ly/ypobridging21'
                    },
                    text: `SIGN UP`
                },
            ]
        },
    ]
}
