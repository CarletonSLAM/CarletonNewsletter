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
            text: `If you are having trouble viewing this as an email, click <a href='http://staylateandmake.ca/CarletonNewsletter/output/2021-02-17.html'>here</a> to view in browser.`
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
              text:`While the Director Election Application form will be released shortly. So stay tuned! In the meanwhile, feel free to look at the available position above`
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
                      href: 'https://accounts.google.com/ServiceLogin?service=wise&passive=1209600&continue=https://docs.google.com/document/u/1/d/1je1tLaQi_KDuUjpjZO3oXb4T_D5LMV7ZTPAMHmp9Obg/edit&followup=https://docs.google.com/document/u/1/d/1je1tLaQi_KDuUjpjZO3oXb4T_D5LMV7ZTPAMHmp9Obg/edit&ltmpl=docs&authuser=1'
                  },
                  text: `HANDBOOK`
              },
              {
                  tag: 'button',
                  attr: {
                      href: 'https://docs.google.com/forms/d/e/1FAIpQLSe3IiqYp7bn2-slDVpgGcbkS4af6qd63cOZgFYxLvp6aLlFvg/viewform'
                  },
                  text: `FORM`
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

          // --- New Event --- //
          {
              title: `Webinar: Honing Your Research Skills`,
              date: `Monday February 15, 2021`,
              time: `4:00 PM - 5:00 PM`,
              location: `Online Event`,
              img: `researchSkills.png`,
              body: [
                  {
                      tag: 'p',
                      text: `Interested in improving your research skills? This webinar is for you!!`
                  },
                  {
                      tag: 'p',
                      text: `This webinar will cover general research skills necessary for success in engineering research, and is intended to undergraduate students, new graduate students, or anyone starting or getting back into engineering research. Topics covered will include journal paper reading and writing, academic metrics, research communication, problem solving, and more!`
                  },
                  {
                      tag: 'button',
                      attr: {
                          href: 'http://bit.ly/YPOSKILLS'
                      },
                      text: `REGISTER`
                  },
                  {
                      tag: 'button',
                      attr: {
                          href: 'https://www.linkedin.com/events/6757363321290207232/about/'
                      },
                      text: `LINKEDIN`
                  },
              ]
          },
    ]
}
