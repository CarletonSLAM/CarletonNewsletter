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
          title: `IEEE and SREE Trivia Night`,
          date: `Wednesday March 24, 2021`,
          time: `7:00 PM`,
          location: `Online`,
          img: `triv.png`,
          body: [
              {
                  tag: 'p',
                  text: `Join IEEE on Wednesday @ 7pm for IEEE and SREE Trivia Night! From science to pop-culture, you and your three teammates could win amazing prizes! Sign up with IEEE using the docs page!`
              },
              {
                  tag: 'p',
                  text: `Where: SREESociety and IEEE discords`
              },
              {
                  tag: 'p',
                  text: `When: Wednesday 24, 2021 @7PM`
              },
              {
                  tag: 'p',
                  text: `Wanna join? Please fill out the form below:`
              },
              {
                  tag: 'button',
                  attr: {
                      href: 'https://forms.gle/xKw9jxMSiotihqcg9'
                  },
                  text: `SIGN UP`
              },
              {
                  tag: 'button',
                  attr: {
                      href: 'https://zoom.us/j/91904620400?pwd=cDRlcW45ZWxpUXlLejVEaTdzdlQ2QT09'
                  },
                  text: `ZOOM LINK`
              },
          ]
      },
    ]
}
