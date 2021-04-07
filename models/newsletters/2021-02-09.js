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
          title: `IEEE Year End Debate Night`,
          date: `April 14, 2021`,
          time: `7:00 PM`,
          location: `Online`,
          img: `debate.png`,
          body: [
              {
                  tag: 'p',
                  text: `Join IEEE on the last day of the year for a night of debates on various random topics! Sign up as a team of 2-4 and compete against other societies and see who will be crowned C-Eng’s best debate team! May the most absurd arguments win!! Also there's a chill and study zone where we play games and stuff. WINNERS GET PRIZES`
              },
              {
                  tag: 'p',
                  text: `Wanna join? Please fill out the form below:`
              },
              {
                  tag: 'button',
                  attr: {
                      href: 'https://docs.google.com/forms/d/e/1FAIpQLSc_sWXuJyi49Wqc-3TP8wt7qiHfzI9ZCXJSr0uwXMIbruaOzA/viewform'
                  },
                  text: `SIGN UP`
              },
              {
                  tag: 'button',
                  attr: {
                      href: 'https://discord.gg/vbDKznwXdp'
                  },
                  text: `IEEE DISCORD`
              },
          ]
      },
    ]
}
