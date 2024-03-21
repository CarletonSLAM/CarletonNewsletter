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
            title: `IEEE Elections`,
            img: `elections.png`,
            body: [
              {
                  tag: 'p',
                  text: `Elections are being held on the 27th of March at 6pm!`
              },
              {
                tag: 'htmlString',
                text: `More details to follow! Our positions <a href='https://docs.google.com/document/d/1je1tLaQi_KDuUjpjZO3oXb4T_D5LMV7ZTPAMHmp9Obg/edit?fbclid=IwAR2dwtEapsrCfD04jZZ-Zeiudjd1xketgS1SLEUj0rvg0zfq0gCUwzgp734'>here</a>`
              }
            ]
        },
        { 
        title: `Volunteer sign ups!`,
        body: [
          {
              tag: 'p',
              text: `IEEE is looking for volunteers!`
          },
          {
              tag: 'p',
              text: `Come sign up at the IEEE office! Look for the sign up sheet on the door!`
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
            text: `We are now also accepting commissions for our 3D-Printer!`
          },
          {
            tag: 'htmlString',
            text: `Click <a href='https://epics.ieee.org/fall-environmental-call-for-projects/?fbclid=IwAR1wW80tiGrb0dhdzGUnk1PCq3H_IMG4AL0_KzIWmLmyJgtfpVpAkNgkWxc'>here</a>`
          }
        ]
        }
    ]
}
