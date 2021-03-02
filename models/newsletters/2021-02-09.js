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
      {
          title: `IEEE Annual Election Season`,
          img: `elections.png`,
          body: [
            {
                tag: 'p',
                text: `Want to be an exec ? Gain some leadership experience and have fun on a team? Be a leader in Carleton and Global engineering community?`
            },
            {
                tag: 'p',
                text: ` Unlike in the past, this year we will be holding two elections, the Officers Elections and the Director Election, and each will have their own separate application form respectively.`
            },
            {
              tag:'p',
              text:`If you're interested in becoming part of the next IEEE Carleton executive team, please submit the application form seen below.`
            },
              {
                  tag: 'button',
                  attr: {
                      href: 'https://accounts.google.com/ServiceLogin?service=wise&passive=1209600&continue=https://docs.google.com/document/u/1/d/1je1tLaQi_KDuUjpjZO3oXb4T_D5LMV7ZTPAMHmp9Obg/edit&followup=https://docs.google.com/document/u/1/d/1je1tLaQi_KDuUjpjZO3oXb4T_D5LMV7ZTPAMHmp9Obg/edit&ltmpl=docs&authuser=1'
                  },
                  text: `HANDBOOK`
              },
              {
                  tag: 'button',
                  attr: {
                      href: 'https://docs.google.com/forms/d/e/1FAIpQLScFH9Mes0ftM1Kpstc4d1NB-vZqixpc_2tffi_ROSrHtJ95JQ/viewform'
                  },
                  text: `DIRECTORSHIP FORM`
              },

              {
                  tag: 'button',
                  attr: {
                      href: 'https://docs.google.com/forms/d/e/1FAIpQLSe3Iiqx'
                  },
                  text: `OFFICER FORM`
              },
          ]
      },
      {
          title: `Wine and Cheese 2021`,
          body: [
            {
                tag: 'p',
                text: `Whoa check out IEEE WIE's upcoming networking event!`
            },
            {
                tag: 'p',
                text: `Looking to make meaningful connections with students and professionals in Ottawa’s engineering community? Want to hone your leadership and networking skills in an engaging and interactive online event? Wine and Cheese Networking is the place for you!
Introducing the IEEE Women in Engineering 12th annual Wine and Cheese Networking Event. A fantastic opportunity for students to practice their networking skills and build a network with industry professionals and academia from the Ottawa community. This year, our online event will combine our usual format with some new activities that you won’t want to miss!
With an evening filled with interesting speakers, ice-breakers, and networking opportunities, there's no better time and place to start networking! `
            },
            {
              tag: 'p',
              text: `For more information, please visit our website at https://www.celebratewie.ca/, or email us at celebratewie@gmail.com.`
            },
              {
                  tag: 'button',
                  attr: {
                      href: 'https://hopin.com/events/ieee-wie-wine-and-cheese-networking'
                  },
                  text: `REGISTER FOR TICKETS`
              },
              {
                  tag: 'button',
                  attr: {
                      href: 'https://forms.gle/wpMEA8SLUNkkG5JL7'
                  },
                  text: `UPLOAD RESUME`
              },

              {
                  tag: 'button',
                  attr: {
                      href: 'https://www.facebook.com/events/1889764247829473/?acontext=%7B%22ref%22%3A%2252%22%2C%22action_history%22%3A%22%5B%7B%5C%22surface%5C%22%3A%5C%22share_link%5C%22%2C%5C%22mechanism%5C%22%3A%5C%22share_link%5C%22%2C%5C%22extra_data%5C%22%3A%7B%5C%22invite_link_id%5C%22%3A125832629428606%7D%7D%5D%22%7D'
                  },
                  text: `FACEBOOK`
              },
              {
                  tag: 'button',
                  attr: {
                      href: 'https://www.celebratewie.ca/'
                  },
                  text: `OUR SITE`
              },
          ]
      },
      // --- New Event --- //
      {
          title: `Introduction to HFSS breakthrough Mesh Fusion technology`,
          date: `Wednesday March 3, 2021`,
          time: `3:00 PM - 4:00 PM`,
          location: `Online`,
          img: `ansys.jpg`,
          body: [
              {
                  tag: 'p',
                  text: `This webinar spotlights Ansys 2021 R1's latest release of Ansys HFSS and provides a deep dive look at its new groundbreaking Mesh Fusion technology. Learn how this 3D full-wave EM simulator can cover the capacity, complexity and density of detail in a fully coupled, full-wave electromagnetic simulation like nothing else on the market.`
              },
              {
                  tag: 'button',
                  attr: {
                      href: 'https://events.vtools.ieee.org/event/register/261001'
                  },
                  text: `REGISTER`
              },
              {
                  tag: 'button',
                  attr: {
                      href: 'https://www.linkedin.com/feed/update/urn:li:activity:6768292796798427136'
                  },
                  text: `LINKEDIN`
              },
          ]
      },
      // --- New Event --- //
      {
          title: `Seminar on Leaky-Wave Antennas for 5G Applications`,
          date: `Friday March 19, 2021`,
          time: `4:00 PM - 5:00 OM`,
          location: `Online`,
          img: `localSquare.jpg`,
          body: [
              {
                  tag: 'p',
                  text: `Join us for a workshop with Nima Javanbakht, who is currently pursuing a Ph.D. degree in electrical engineering at Carleton University. His research interest includes analysis and design of leaky-wave antennas, sidelobe suppression, reconfigurable antennas, compact microwave sensors, and 5G mm-wave applications.`
              },
              {
                  tag: 'button',
                  attr: {
                      href: 'https://www.eventbrite.ca/e/leaky-wave-antennas-for-5g-applications-tickets-142521139565'
                  },
                  text: `REGISTER`
              },
              {
                  tag: 'button',
                  attr: {
                      href: 'https://www.facebook.com/events/332308274858513'
                  },
                  text: `FACEBOOK`
              },
              {
                  tag: 'button',
                  attr: {
                      href: 'https://www.linkedin.com/events/6769633183890771969/'
                  },
                  text: `LINKEDIN`
              },
          ]
      },
          {
              title: `Clarifying the path to becoming a Professional Engineer`,
              date: `Friday March 5, 2021`,
              time: `4:00 PM - 5:00 PM`,
              location: `Online Event`,
              img: `clarify.jpg`,
              body: [
                {
                    tag: 'p',
                    text: `If you are an engineering undergraduate or post-graduate student, or a recent graduate starting out your engineering career, then this seminar might be for you.`
                },
                {
                    tag: 'p',
                    text: `In it you will learn: What is PEO? What engineering experience is PEO looking for once I graduate? I have international engineering education and experience; how is that evaluated by PEO? How is my engineering experience evaluated by PEO? How do I prepare my Experience Record? What is the PPE? What is the EIT Program and the Student Membership Program?`
                },
                {
                    tag: 'p',
                    text: `Emphasis of this webinar will be on the P. Eng. licensure process - what PEO is looking for. The webinar will focus on how engineering experience is evaluated and how you can facilitate the process. Learn the dos and don’ts of preparing your licensing application for evaluation. To participate, you will require: internet connection to view the webinar, and/or phone access to dial into the conference for audio. We look forward to speaking with you!`
                },
                  {
                      tag: 'button',
                      attr: {
                          href: 'https://bit.ly/YPPEO21'
                      },
                      text: `REGISTER`
                  },
                  {
                      tag: 'button',
                      attr: {
                          href: 'https://www.linkedin.com/company/65487492'
                      },
                      text: `LINKEDIN`
                  },
                  {
                      tag: 'button',
                      attr: {
                          href: 'https://www.peo.on.ca'
                      },
                      text: `PEO Website`
                  },
              ]
          },
    ]
}
