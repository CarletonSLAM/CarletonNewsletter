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
          ]
      },

      {
          title: `IEEE Annual Election Season`,
          date: 'March 14 @ 12:00 pm - 1:00 pm',
          img: `pds4.jpg`,
          body: [
            {
                tag: 'p',
                text: `With the onset of the pandemic from early March 2020, nearly everything from shopping groceries to job recruitment is being virtualized. It completely changed the landscape for graduating students to get a job. Not just students even organizations are finding it difficult to recruit the perfect candidate for the position. Are you a recent graduate student looking for a job? Are you in your final term of school and wondering how to get your dream job?
IEEE WIE Ottawa along with IEEE YP Ottawa brings to you Professional Development Series! Join us for our 4th event of the Professional Development Series – Landing your dream job. The event will discuss how one should approach job search in a way they could easily get their dream job during this pandemic. It is going to be delivered by Tegbir Singh – data analyst professional. He will be sharing his experience of successfully landed on his job during the pandemic.`
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
                      href: 'https://wie.ieeeottawa.ca/event/professional-development-series-landing-your-dream-job/'
                  },
                  text: `EVENT SIGNUP`
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
    ]
}
