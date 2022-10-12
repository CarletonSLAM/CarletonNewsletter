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
        title: `IEEE Merch Competition`,
        date: `Monday Oct. 30 2022`,
        time: `11:59 PM`,
        img: `merch.png`,
        body: [
          {
              tag: 'p',
              text: `Calling all designers, we've got some merch that needs designing! `
          },
          {
              tag: 'p',
              text: `Any kind of merch is welcome, whether that be cups, pens, sweaters, caps etc.`
          },
          {
              tag: 'p',
              text: `The only requirement is that the design must include the IEEE logo and have "Carleton" on it`
          },
          {
              tag: 'p',
              text: `To submit, use the form below and email competitions@ieeecarleton.ca if there are further questions`
          },
          {
            tag: 'button',
            attr: {
              href : 'https://docs.google.com/forms/d/e/1FAIpQLSdZt-TBvDR_gNLXFiDpXgOHm3rcxM2t_TOxKHWeIwQ5Dt28BQ/viewform'
            },
            text: `SUBMISSION FORM`
          }
        ]
      },
      {
        title: `AMATEUR RADIO - Training`,
        date: `Every Sunday from Sept. 18 - Dec. 11`,
        location: `Online`,
        img: `v3.png`,
        body: [
          {
              tag: 'p',
              text: `Communicate with people around the world!`
          },
          {
              tag: 'p',
              text: `Experiment with Electronics`
          },
          {
              tag: 'p',
              text: `Help your Community!`
          },
          {
              tag: 'p',
              text: `Learn about the Amateur Radio Operator Certificate`
          },
          {
              tag: 'p',
              text: `First 10 IEEE members get 30$ off!`
          },
          {
              tag: 'button',
              attr: {
                  href: 'https://bit.ly/3To7Za7'
              },
              text: `REGISTER`
          }
        ]
      }
    ]
}
