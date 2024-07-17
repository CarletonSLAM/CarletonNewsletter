module.exports = {
    toast: [
        {
            tag: 'h2',
            text: 'Keeping up with IEEE Carleton.'
        },
        {
            tag: 'p',
            text: "Part of the world's largest technical professional organization, here at Carleton University."
        },
        {
            tag: 'htmlString',
            text: `If you are having trouble viewing this as an email, click <a href=''>here</a> to view in browser!`
        }
    ],
    articles: [
        {
            title: `Welcome!`,
            img: '',
            body: [
              {
                  tag: 'p',
                  text: 'Hello! If you are recieving this newsletter, you are a member of the IEEE Carleton Newsletter. '
              },
              {
                tag: 'p',
                text: ``
            },
              {
                tag: 'htmlString',
                text: `Here is another link <a href=''>here</a>`
              }
            ]
        },
        {
            title: `Event! Event! Event!`,
            img: ``,
            body: [
              {
                  tag: 'p',
                  text: `From intense gaming to unbeatable bragging rights, Battle Royale has it all. If you think you have what it takes to rise to the top or simply want to have a good time. Battle Royale is for you!

                  From Friday March 22nd - Sunday March 24th IEEE is proud to offer CS:2, League of Legends, and Rocket League with the addition of a Game Jam for those who love making games with up to $1000 in prizes! 
                  
                  The event is fully online on their discord channel and all proceeds will go towards the Ottawa Food Bank to support the local community.
                  
                  Click the link below to register and for a more detailed breakdown of the scheduling and prizing.
                  
                  See you on the Battlegrounds`
              },
              {
                tag: 'htmlString',
                text: `Click <a href=''>here</a>`
              }
            ]
        },
        { 
        title: `SLAM Proposal Submissions`,
        img: `slamnew.png`,
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
            text: `Click <a href='https://linktr.ee/ieeeslam?utm_source=qr_code&fbclid=IwAR2H9v2dVEhxLo7U72IhRU5YKEpiSSYqRTBVCU6mwKeTO2j_wL4fkyauFg4'>here</a>`
          }
        ]
        }
    ]
}
