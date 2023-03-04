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
            text: `If you are having trouble viewing this as an email, click <a href='http://staylateandmake.ca/CarletonNewsletter/output/2022-11-14.html'>here</a> to view in browser.`
        }
    ],
    articles: [
      {
        title: `NEW IEEE Merch!`,
        img: `hat.png`,
        body: [
          {
              tag: 'p',
              text: `Submit the form below to help IEEE decide on their next merch! We're currently looking at Crewnecks, Mugs, and, Bucket Hats!`
          },
          {
            tag: 'button',
            attr : {
              href: `https://docs.google.com/forms/d/e/1FAIpQLSdm2z1UmxYV2pJZVyH61ppaddl6IE9VYxOyUr_B_fQPNK_MaQ/viewform`
            },
            text : `CREWNECKS`
          },
          {
            tag: 'button',
            attr : {
              href: `https://docs.google.com/forms/u/1/d/e/1FAIpQLSe_Int_yaZ2wejj7FvM8_c27BRlaQNwQycCOGB2oMkBdtP_kQ/viewform?usp=send_form`
            },
            text : `BUCKET HATS`
          },
          {
            tag : 'button',
            attr : {
              href : `https://docs.google.com/forms/u/1/d/e/1FAIpQLSeohM36rJYwB5---lmKebISd2vguERyxtJH7kfEcS05xgvl4g/viewform?usp=send_form`
            },
            text : `MUGS`
          }
        ]
      },
      {
        title: `IEEE Sweater Sale`,
        img: `sweater.png`,
        body: [
          {
              tag: 'p',
              text: `IEEE Carleton is still planning on ordering another batch of sweaters in the near future! Come swing by the office or email services@ieeecarleton.ca for more information`
          }
        ]
      }
    ]
}
