module.exports = {
    toast: '',  //i.e. 'Keeping up with IEEE Carleton messge',
    articles: [
        {
            title: '',
            // NOTES: //Image MUST be stored in
            // https://github.com/CarletonSLAM/CarletonNewsletter/tree/master/img
            img: '', // The name of the file in above url
            date: '', //October 1st, 2017
            time: {
                start: '',
                end: ''
            },
            location: '',
            body: [
                //text style <[tag] style=[styles]>[text]</[tag]>
                //ie.e when tag=p ,text='Hello World!' and style={color:'#fff'}
                // Result: <p style="color: #fff">Hello World</p>
                {
                    tag: 'p',
                    style: {},
                    text: ``
                },
                // More text
            ]
        },
    ]
}