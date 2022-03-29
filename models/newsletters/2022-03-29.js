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
      {
        title: `IEEE CARLETON 2022 AGM`,
        date: `Monday April 4, 2022`,
        location: `Online Event`,
        img: `2022 AGM.jpg`,
        body: [
          {
              tag: 'p',
              text: `IEEE Carleton is pleased to invite all those interested in attending this years AGM`
          },
          {
              tag: 'p',
              text: `Submit a platform for the AGM or just come by to see what we've been up to lately!`
          }
        ]
      },
      {
        title: `13th Annual Wine & Cheese`,
        date: `Friday April 1, 2022`,
        location: `Canadian Museum of Nature (240 McLeod St, Ottawa, ON K2P 2R1)`,
        time: `7:00 - 10:00 PM`,
        body: [
          {
              tag: 'p',
              text: `Tickets for the 2022 Wine and Cheese are available! Come out April 1st to the Canadian Museum of Nature for a sweet networking event with music and food! Would love to see lots of people there`
          },
          {
              tag: 'button',
              attr: {
                  href: 'https://www.celebratewie.ca/'
              },
              text: `OFFICIAL WEBSITE`
          },
          {
              tag: 'button',
              attr: {
                  href: 'https://ieee-uottawa.square.site/'
              },
              text: `IEEE UOTTAWA SITE`
          }
        ]
      }
    ]
}
