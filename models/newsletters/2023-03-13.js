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
        img: `wine.png`,
        date: `Friday March 31, 2023`,
        time: `7:00 PM - 10:00 PM EDT`,
        location: `Lago 1001 Queen Elizabeth Driveway`,
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
        title: `IEEE AGM`,
        img: `ieee-carleton-blue.png`,
        date: `Monday March 27, 2023`,
        time: `6:00 PM - 7:00 PM`,
        location: `Mackenzie Building ME4494 `,
        body: [
          {
              tag: 'p',
              text: `Our end of the year AGM is next week! Come hear us talk about our successful year and plans for next year!`
          },
          {
              tag: 'p',
              text: `Everyone is invited, feel free to stop by!`
          }
        ]
      },
      {
        title: `New IEEE Mugs!`,
        img: `mugs.png`,
        body: [
          {
              tag: 'p',
              text: `Check out our design for our new I-Triple Mugs! `
          },
          {
              tag: 'p',
              text: `We just ordered a large batch and each mug is $7.50! If you are interested, please message services@ieeecarleton.ca for more information.`
          }
        ]
      },
      {
        title: `WIE Sweater Sale Update`,
        img: `wie_sweaters.png`,
        body: [
          {
            tag: 'p',
            text: `Thank you for filling our interest form!
Our next step is to finalize the order and get them within 2 Weeks. `
          },
          {
            tag: 'p',
            text: `for those that filled the interest form we need you to please E-transfer the cost ($40) to:
Finance.director@ieeecarleton.ca OR pay by tap at the ieee office (ME3359) `
          },
          {
            tag: 'p',
            text: `We hope everyone pays by tomorrow (24 March).
The sooner we order, the sooner we get them :)`
          },
          {
            tag: 'p',
            text: `Please respond to this email if you have payed`
          }
        ]
      }
    ]
}
