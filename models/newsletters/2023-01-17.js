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
        title: `LaTeX Software Workshops`,
        img: `w1 - Ghassan Arnouk.png`,
        location: `Minto CASE 6030`,
        body: [
          {
              tag: 'p',
              text: `Week 1: What is LaTeX?  @Jan. 25th 7 - 9pm`
          },
          {
              tag: 'p',
              text: `Week 2: More Advanced LaTeX packages @Feb. 1 7-8 pm`
          },
          {
              tag: 'p',
              text: `Week 3: LaTeX in different environments   @Feb. 7   7-8 pm`
          },
          {
              tag: 'p',
              text: `Week 4: Fully Reproducible Documents, Literate Programming, and Experiment LaTeX   @Feb. 15   7-8pm`
          },
          {
              tag: 'p',
              text: `Note that the workshops will run a hybrid model. It will be in person while being streamed online via zoom`
          },
          {
            tag: 'button',
            attr: {
              href: ''
            },
            text: `WEEK 1 REGISTRATION`
          }
        ]
      },
      {
        title: `IEEE Sweater Sale`,
        img: `sweater.png`,
        body: [
          {
              tag: 'p',
              text: `IEEE Carleton is planning on ordering another batch of sweaters in the near future! Come swing by the office or email services@ieeecarleton.ca for more information`
          }
        ]
      }
    ]
}
