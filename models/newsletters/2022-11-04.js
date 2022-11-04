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
        title: `Ace the Interview`,
        date: `Wednesday Nov. 9 2022`,
        time: `6:00 - 7:30 PM`,
        location: `NI4010`,
        img: `AtI.png`,
        body: [
          {
              tag: 'p',
              text: `Prepare to Ace your next Interview by joining us for a next tech-talk event with Ciena!`
          },
          {
            tag: 'p',
            text: `Top 5 Resumes receive a lab tour of Ciena so bring your all!`
          }
        ]
      },
      {
        title: `Canadian Space Conference 2023`,
        date: `January 28th and 29th 2023`,
        location: `Montreal`,
        img: `sedseeds-banner-red-black.png`,
        body: [
          {
              tag: 'p',
              text: `on behalf of SEDS-Canada, Students for the Exploration & Development of Space, a non-profit organisation that promotes and encourages students to pursue opportunities in the space industry. We are excited to announce our annual space conference, known as the Canadian Space Conference, will take place on January 28th and 29th of 2023 in Montreal. The conference is broadcasted as well if anyone would like to join us virtually. `
          },
          {
            tag: 'p',
            text: `The theme of this year’s conference is Space Through A Looking Glass with sessions and workshops on JWST and Canada’s contributions, Robotics, Space Health, Astrophotography, Space Law and more! The conference gives students the opportunity to network with professionals and space enthusiasts, showcase their research and to learn about the latest technologies in the industry. `
          },
          {
            tag: 'button',
            attr: {
              href: 'https://www.eventbrite.ca/e/canadian-space-conference-2023-tickets-403123833237'
            },
            text: `REGISTRATION`
          },
          {
            tag: 'button',
            attr: {
              href: 'https://csc.seds.ca/'
            },
            text: `WEBSITE`
          }
        ]
      },
      {
        title: `SLAM Meeting`,
        date: `Thursdays`,
        location: `ME 4463`,
        time: `6:00 - 9:00 PM`,
        img: `slamAdvert.png`,
        body: [
          {
              tag: 'p',
              text: `You have an Idea and a Dream - We have: `
          },
          {
              tag: 'p',
              text: `Free arduinos`
          },
          {
              tag: 'p',
              text: `CAD workshops`
          },
          {
              tag: 'p',
              text: `1 on 1 Assistance`
          },
          {
              tag: 'p',
              text: `3D printing...? (future)`
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
