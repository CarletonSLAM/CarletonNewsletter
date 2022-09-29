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
        title: `WIE Paint Night`,
        date: `Thursday September 29th`,
        time: `7 pm`,
        location: `Nicol 3022`,
        img: `wie_paintpng`,
        body: [
          {
              tag: 'p',
              text: `Come out and join us for a fun paint night with IEEE Women in Engineering!`
          },
          {
            tag: 'button',
            attr: {
              href : 'https://docs.google.com/forms/d/e/1FAIpQLSeCCZguStuEOKL3uHjHV3bYol4N8_LnXZqDPOeeuG7VitG_hw/viewform'
            },
            text: `REGISTER`
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
