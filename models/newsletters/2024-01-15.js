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
            title: `WIE Wine and Cheese`,
            img: `winencheese2024.jpeg`,
            body: [
              {
                  tag: 'p',
                  text: `Wine and Cheese tickets are still being sold!`
              },
              {
                tag: 'htmlString',
                text: `Get your tickets <a href='https://www.eventbrite.ca/e/wie-wine-cheese-2024-tickets-759089064827?aff=ebdssbdestsearch'>here</a>`
              }
            ]
        },
        { 
        title: `Redbull Patches`,
        img: `redbull.jpeg`,
        body: [
          {
              tag: 'p',
              text: `Redbull patches are here!`
          },
          {
              tag: 'p',
              text: `If you've been participating in our battlepass and have completed 10 weeks straight of buying redbull, come to our office for your hard earned patch!`
          },
        ]
        },
        { 
        title: `SLAM Proposal Submissions`,
        img: `slamlogo.png`,
        body: [
          {
              tag: 'p',
              text: `Send in your proposal submissions for SLAM!`
          },
          {
            tag: 'htmlString',
            text: `Click <a href='https://epics.ieee.org/fall-environmental-call-for-projects/?fbclid=IwAR1wW80tiGrb0dhdzGUnk1PCq3H_IMG4AL0_KzIWmLmyJgtfpVpAkNgkWxc'>here</a>`
          }
        ]
        }
    ]
}
