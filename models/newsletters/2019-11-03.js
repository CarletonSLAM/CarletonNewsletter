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
            text: `If you are having trouble viewing this as an email, click <a href='http://staylateandmake.ca/CarletonNewsletter/output/2019-11-03.html'>here</a> to view in browser.`
        }
    ],
    articles: [
        // --- New Event --- //
        {
            title: `Advance Network Security Workshop`,
            date: `November 7, 14; 2019`,
            time: `6:00 PM - 7:30 PM`,
            location: `ME 4359`,
            img: `network.png`,
            body: [
                {
                    tag: 'p',
                    text: `The sequence of workshops is presented by Professor Ashouri from the University of Isfahan who will review two important and widely-used network security protocols, namely Pretty Good Privacy (PGP) and Secure Socket Layer (SSL).`
                },
                {
                    tag: 'p',
                    text: `The workshops will explain the security requirements of an email system and discuss the PGP protocol that provides authentication, integrity and confidentiality services for email. Then, in the next two sessions, the SSL protocol, which is a security protocol of the transport layer of TCP/IP, is explained. Then there will be a discussion of the four sub-protocols of SSL namely SSL Handshake Protocol, Change Cipher Spec Protocol, Alert Protocol, and Record Protocol.`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://tinyurl.com/AdvanceNetworkSecurityWorkshop'
                    },
                    text: `Sign-up`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://www.facebook.com/events/547266379403375/'
                    },
                    text: `Facebook Event`
                },
            ]
        },
        // --- New Event --- //
        {
            title: `Intro to Xilinx MicroBlaze Workshop`,
            date: `Sunday November 10, 2019`,
            time: `1:00 PM - 3:30 PM`,
            location: `ME 4166`,
            img: `microblaze.png`,
            body: [
                {
                    tag: 'p',
                    text: `MicroBlaze is a complex IP available on all versions of Vivado. It is a full-on processor you can build on your FPGA which can do anything from executing C code to running a full-on operating system! Its incredibly versatile and will allow you to make incredible FPGA designs for your ELEC3500 final lab or personal projects!`
                },
                {
                    tag: 'p',
                    text: `In this workshop we will cover how to set up a basic MicroBlaze design, connect your design to other peripherals such as the PMOD OLED screen, how to connect it to your Verilog code, how to use Vivado SDK and how to use TCL scripts to rebuild your designs so you won't have to repeat it!`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://tinyurl.com/IEEE-MICROBLAZE-WORKSHOP'
                    },
                    text: `Sign-up`
                },
            ]
        },
        // --- New Event --- //
        {
            title: `Stay Late And Make SLAM`,
            date: `Every Tuesday + Thursday`,
            time: `6:00 PM - 9:00 PM`,
            location: `ME 4463`,
            img: `https://drive.google.com/open?id=1YjEg1GuBsf5NBf7kqplPmuqU_mI1GUoe`,
            body: [
                {
                    tag: 'p',
                    text: `Bring your own project or join one of our projects! We are running 3 main projects this year!`
                },
                {
                    tag: 'p',
                    text: `🎧 Reverse-engineering an Analog Amplifier 🎸`
                },
                {
                    tag: 'p',
                    text: `🛩 Quadcopter Project ⌘`
                },
                {
                    tag: 'p',
                    text: `🤖 AI Software Project 👾`
                },
                {
                    tag: 'p',
                    text: `We have many upper-year Electrical and Software Engineering students there to help!`
                },
                {
                    tag: 'p',
                    attr: {
                        style: {
                            fontWeight: 'bold'
                        }
                    },
                    text: `SLAM sessions are happening twice a week now: Tuesdays and Thursdays, from 6 PM to 9 PM.`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://www.staylateandmake.ca'
                    },
                    text: `ADD BUTTON TEXT`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://www.facebook.com/events/442167939743249/'
                    },
                    text: `ADD BUTTON TEXT`
                },
            ]
        },
        // --- New Event --- //
        {
            title: `IEEE SPAC 2020`,
            date: `Thursday January 23, 2020`,
            time: `5:30 PM`,
            time: `10:30 PM`,
            location: `Sala San Marco Conference & Events Centre`,
            img: `spac.jpg`,
            body: [
                {
                    tag: 'p',
                    text: `IEEE SPAC 2020 is back! We are currently selling tickets today! 🎫 We have a limited quantity of early bird tickets so be sure you’re the first to latch onto the discount! Want to know more or buy your tickets today?`
                },
                {
                    tag: 'p',
                    text: `Follow us on our website and make sure you put yourself as “interested” on our Facebook event to stay up to date! We also have Instagram now, so we will be posting a lot of awesome content!`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://ieeespac.ca/'
                    },
                    text: `Website (Tickets)`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://www.facebook.com/events/706341783179994/'
                    },
                    text: `Facebook Event`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://www.instagram.com/ieeespac/'
                    },
                    text: `Instagram`
                },
            ]
        },
        // --- New Event --- //
        {
            title: `WISE National Conference 2020`,
            date: `January 25 - 26, 2020`,
            location: `Hilton Toronto`,
            img: `wise-conference.jpg`,
            body: [
                {
                    tag: 'p',
                    text: `Women in Science and Engineering is proud to present their 8th Annual National Conference!`
                },
                {
                    tag: 'p',
                    text: `The WISE National Conference serves as a catalyst to inspire and empower individuals to pursue their passions, broaden their horizons, and form meaningful connections. The conference brings together delegates from all across Canada to share ideas and become inspired over the course of a two-day event dedicated to professional and personal growth, featuring inspirational leaders from a wide range of STEM fields, as well as workshops, case competitions, and career fairs.`
                },
                {
                    tag: 'p',
                    text: `Join them in Toronto on January 25-26th to be part of a movement dedicated to diversity and inclusion in STEM and learn how to Lead Without Limits!`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://www.facebook.com/cuwise/'
                    },
                    text: `CU-WISE`
                },
                {
                    tag: 'button',
                    attr: {
                        href: 'https://conference.wiseuoft.org'
                    },
                    text: `More Info`
                },
            ]
        },
    ]
}
