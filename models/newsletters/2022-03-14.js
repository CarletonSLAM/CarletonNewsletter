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
        title: `DFTC Hackathon`,
        date: `Friday March 25-27, 2021`,
        location: `Online Event`,
        img: `DFTCReminder.png`,
        body: [
          {
              tag: 'p',
              text: `uOttawa is pleased to extend a formal invitation to the Carleton engineering and computer science communities to DeFi The Conventional 2022! Participate in Canada's largest DeFi and Blockchain Hackathon, happening at the University of Ottawa from March 25th to March 27th, 2022.`
          },
          {
              tag: 'p',
              text: `Some facts about the event:
•Large-scale 36h hybrid (both in-person and online) programming competition on the Terra blockchain :terra:
•The event is completely free of charge for students from Carleton. This includes transportation 🚌
•The competition has a total prize pool of CA$12,000 💸
•Students that wish to participate will be fully accommodated in terms of transportation to Ottawa, food, hacking space, and merch 👕
•The deadline to apply is March 14th (EOD TODAY) and seats are limited, so apply today!`
          },
          {
            tag: 'p',
            text: `We look forward to seeing you all there!`
          },
          {
            tag: 'button',
            attr: {
                href: 'https://terraformlabs.typeform.com/to/TdPvI6y6'
            },
            text: `REGISTER`
          },
          {
            tag: 'button',
            attr: {
                href: 'https://www.linkedin.com/showcase/terra-hackathon/'
            },
            text: `LINKEDIN`
          },
          {
            tag: 'button',
            attr: {
                href: 'http://terrahackathon.com/'
            },
            text: `DEV-POST`
          },
          {
            tag: 'button',
            attr: {
              href: 'https://www.facebook.com/terrahackathon/?notif_id=1646073387476246&notif_t=page_fan&ref=notif'
            },
            text: `FACEBOOK`
          }
        ]
      }
    ]
}
