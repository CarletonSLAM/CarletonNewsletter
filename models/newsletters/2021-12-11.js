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
      // --- New Event --- //
      {
        title: `Carleton AI Show: Episode 4!`,
        img: `pod.jpg`,
        body: [
          {
            tag: 'p',
            text:'Curious about the current state of AI? So are we! On the Carleton AI Show, we’re inviting guests from a plethora of different backgrounds to come and discuss how AI have affected their lives, how they perceive the future of AI, and much, much more! Join us, the Carleton AI Society, as we talk about all things AI with numerous industry professionals. Special thanks to Quddus Gordon for our intro and outro jingle, and the CAIS team for making this all possible.'
          },
          {
              tag: 'p',
              text: 'Our fourth official podcast episode features new host Serdar Tuncer and his interview with Carleton University’s own Dr. Tracey P. Lauriault from the School of Journalism and Communication! Dr. Lauriault is an Associate Professor of Critical Media and Big Data. Her research covers open data, big data, open smart cities, open government, data sovereignty, data preservation and data governance. Join us as Dr. Lauriault discusses digital twins, trust in artificial intelligence and recommendations for future AI researchers from a critical data perspective. Host’s Twitter: @serdartun `
          },
          {
              tag: 'button',
              attr: {
                  href: 'https://carletonai.com/podcast/'
              },
              text: `LINK`
          },
        ]
      }
    ]
}
