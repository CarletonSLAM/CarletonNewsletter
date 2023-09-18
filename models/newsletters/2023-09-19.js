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
            text: `If you are having trouble viewing this as an email, click <a href='http://staylateandmake.ca/CarletonNewsletter/output/2023-03-13.html'>here</a> to view in browser.`
        }
    ],
    articles: [
        {
            title: `IEEE Fantastic Friends!`,
            img: `mugs.png`,
            body: [
              {
                  tag: 'p',
                  text: `Introducing the new IEEE membership!`
              },
              {
                  tag: 'p',
                  text: `Becoming a fantastic friend allows you to buy food, drinks and the oh so important redbull for our IEEE battlepass!*`
              },
              {
                tag: 'htmlString',
                text: `To join, click <a href='https://docs.google.com/forms/d/1U2Fpsw_n7rQlFM_mLG2UcVxldmcdUqWLC-GodKMKtaA/edit'>here</a>`
              },
              {
                  tag: 'p',
                  text: `*see below`
              }
            ]
        },
        { 
        title: `IEEE Redbull Battlepass!`,
        img: `mugs.png`,
        body: [
          {
              tag: 'p',
              text: `Also introducing the IEEE redbull battlepass! `
          },
          {
              tag: 'p',
              text: `If you buy one redbull a week for 10 weeks you will recieve a IEEE Redbull patch!*`
          },
          {
              tag: 'p',
              text: `*Points will only be rewarded for ONE redbull bought per week, additional redbulls purchased have no weight`
          }
        ]
        }
    ]
}
