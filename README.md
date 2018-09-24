# Weekly Newsletter Generator

## Made for the IEEE Carleton University Student Branch: [ieeecarleton.ca](http://ieeecarleton.ca)

## Motivation

This tool was created in order to create a consistent look and feel for the newsletters that were sent out to all IEEE members, volunteers, and subscribeers throug multiple different mailing clients.

## Prerequisites

- Node.js (at least v6): https://nodejs.org/en/

## Installation

1. Clone this repo.
2. Add necessary cover photos in `./img`.
3. Create a new newsletter under `./models/newsletters`.
4. Commit and push changes, otherwise build will not work properly.
5. Run `npm run build` in the root directory.
6. See generated HTML email in `./output`
7. Copy the HTML into a mail client using a HTML append tool.

## Customization

The theme and basic information for each email can be customized by modifying `theme.js` and `globals.js` in the `./models` directory.

## Steps

1. Duplicate latest newsletter (or template) in `./models/newsletters`, and rename with current date.
2. Add all the information in the file.
3. Add all images you wish to use in the `./img` folder.
4. Commit and push changes to github.
5. Review generated HTML file in `./output` folder.
6. Use HTML Editing extension [explained below] to draft email, using gmail.
7. Send email to someone else to review and make sure it is displaying properly for other people.
8. Once it is reviewed, send out newsletter.

## HTML Editing Extension

You can create an email in gmail using the chrome extention [coudHQ](https://chrome.google.com/webstore/detail/free-html-editor-for-gmai/ioinaaeeacahcmbgfmeaaofhfkijpdeb/related).

If you use it, you may have to change your security settings to permit third party cookies, or add some exceptions. You can find information on how to that on the company's support [website](https://support.cloudhq.net/how-to-enable-3rd-party-cookies-in-google-chrome-browser/).

To use this extension: Copy the html output within the `<body>...</body>` tags and past them into an email draft in gmail. Then you can press the little brush button and view the email to make sure it works properly.

## Contributions

The tool was originally developed by Irusha Vidanamadura (https://irusha.vidanamadura.net/)

The newsletters were created by the 2017-2018 Office Director for IEEE Carleton, Viraj Dave.