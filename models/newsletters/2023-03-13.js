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
            text: `If you are having trouble viewing this as an email, click <a href='http://staylateandmake.ca/CarletonNewsletter/output/2022-11-14.html'>here</a> to view in browser.`
        }
    ],
    articles: [
      {
        title: `14'th Annual WiE Wine & Cheese (March 31)`,
        img: `bruh.png`,
        date: `Friday March 31, 2023`,
        time: `7:00 PM - 10:00 PM EDT`,
        location: `Lago 1001 Queen Elizabeth Driveway, Ottawa K1S 5K7`,
        body: [
          {
              tag: 'p',
              text: `14'th Annual Wine & Cheese tickets available, follow the link below to purchase Tickets! For more information about the event visit our celebrate WiE website.`
          },
          {
              tag: 'p',
              text: `Volunteers are needed for this event send us a message if you are interested`
          },
          {
            tag: 'button',
            attr : {
              href: `https://www.eventbrite.ca/e/14th-annual-ieee-wie-wine-and-cheese-tickets-556203257917`
            },
            text : `TICKETS`
          },
          {
            tag : 'button',
            attr : {
              href : `https://www.celebratewie.ca/`
            },
            text : `WEBSITE`
          }
        ]
      },
      {
        title: `IEEE Elections - All Positions Available!`,
        img: `election.png`,
        date: `Monday March 20, 2023`,
        time: `6:00 PM - 7:00 PM`,
        body: [
          {
              tag: 'p',
              text: `IEEE Carleton is having their annual elections and we're looking for Execs! All positions are available and can be found in the link below.`
          },
          {
              tag: 'p',
              text: `Whether you are new to IEEE or a returning Exec, please submit your election platform to vicechair@ieeecarleton.ca before the election using the template linked below.`
          },
          {
            tag: 'button',
            attr : {
              href: `https://docs.google.com/document/d/1JC0XkyyLrE0KtxxZ0a9FjKAg_Y88PEWX/edit`
            },
            text : `ELECTION PLATFORM TEMPLATE`
          },
          {
            tag : 'button',
            attr : {
              href : `https://docs.google.com/document/d/1je1tLaQi_KDuUjpjZO3oXb4T_D5LMV7ZTPAMHmp9Obg/edit`
            },
            text : `AVAILABLE POSITIONS`
          }
        ]
      },
    ]
}
