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
        title: `2022 AGM`,
        date: `Friday March 25-27, 2021`,
        location: `Online Event`,
        img: `DFTCReminder.png`,
        body: [
          {
              tag: 'p',
              text: `uOttawa is pleased to extend a formal invitation to the Carleton engineering and computer science communities to DeFi The Conventional 2022! Participate in Canada's largest DeFi and Blockchain Hackathon, happening at the University of Ottawa from March 25th to March 27th, 2022.`
          }

        ]
      },
      {
        title: `13th Annual Wine & Cheese`,
        date: `Friday April 1, 2022`,
        location: `Canadian Museum of Nature (240 McLeod St, Ottawa, ON K2P 2R1)`,
        time: `7:00 - 10:00 PM`,
        img: ``,
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
