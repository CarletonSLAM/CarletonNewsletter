module.exports = {
    toast: [
        {
            tag: 'h2',
            text: 'Keeping up with IEEE Carleton.'
        },
        {
            tag: 'p',
            text: 'Welcome Back To School!'
        },
        {
            tag: 'htmlString',
            text: `If you are having trouble viewing this as an email, click <a href='http://staylateandmake.ca/CarletonNewsletter/output/2023-03-13.html'>here</a> to view in browser.`
        }
    ],
    articles: [
        {
            title: `WHAT IS IEEE?`,
            img: `elections.png`,
            body: [
              {
                  tag: 'p',
                  text: `IEEE Carleton Student Branch was founded in [DATE]. The Institute of Electrical and Electronics Engineers 
                  is the largest technological institution in the world. Many university and colleges such as Carleton University
                  host their own branch! We strive for fostering a vibrant and diverse community of students in various fields such as
                  engineering, computer science and many others.`
              },
              {
                tag: 'p',
                text: `We are hosted in Mackenzie Building 3359!`
            },
              {
                tag: 'htmlString',
                text: `Visit our new and improved website! <a href='ieeecarleton.ca'>here</a>`
              }
            ]
        },
        {
          tag: 'h2',
          text: 'EVENTS'
        },
        {
          tag: 'p2',
          text: 'What kind of events can you be apart of?'
        },
        {
        title: `SLAM: Stay Late and Make`,
        img: `BRXV.png`,
        body: [
            {
                tag: 'p',
                text: `Hosted in IEEE's own space, Stay Late and Make (SLAM), is `

            },
            {
                tag: 'htmlString',
                text: `Click <a href='https://linktr.ee/ieeeslam?utm_source=qr_code&fbclid=IwAR2H9v2dVEhxLo7U72IhRU5YKEpiSSYqRTBVCU6mwKeTO2j_wL4fkyauFg4'>here</a>`
            }
          ]
          },
          { 
        title: `cuHacking`,
        img: `slamnew.png`,
        body: [
          {
              tag: 'p',
              text: ``
          },
          {
            tag: 'htmlString',
            text: ``
          },
          {
            tag: 'htmlString',
            text: `Click <a href='ieeecarleton.ca'>here</a>`
          }
        ]
        }
    ]
}
