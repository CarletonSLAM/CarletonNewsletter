# Weekly Newsletter Generator

## Made for the IEEE Carleton University Student Branch: [ieeecarleton.ca](http://ieeecarleton.ca)

## Motivation

This tool was created in order to create a consistent look and feel for the newsletters that were sent out to all IEEE members, volunteers, and subscribers through multiple different mailing clients.

## Prerequisites

- Node.js (at least v6): https://nodejs.org/en/

## File Structure
    <ROOT>
    ├── components/     --> React components used in building newsletter
    ├──img/             --> Stores newsletter images
    ├── output/         --> Final HTML files
    └── models/         --> JSON config files
        ├── globals.js              --> General information used in all newsletters
        ├── theme.js                --> Theme customizations  
        ├── newsletter-template.js  --> template newsletter config file
        └── newsletters/            --> config files to create HTML files in output/

## Installation

1. Clone this repo.
2. Run `npm install` in the root directory.
3. Add necessary cover photos in `./img`.
4. Create a new newsletter under `./models/newsletters`.
5. Commit and push changes, otherwise build will not work properly.
6. Run `npm run build` in the root directory.
7. See generated HTML email in `./output`
8. Copy the HTML into a mail client using a HTML append tool.

## Generating Newsletters
### Process
1. Duplicate latest newsletter (or template) in `./models/newsletters`, and rename with current date.
2. Add all the information in the file.
3. Add all images you wish to use in the `./img` folder.
4. Commit and push changes to github.
5. Run `npm run build` in the root directory.
6. Review generated HTML file in `./output` folder.
7. Use HTML Editing extension [explained below] to draft email, using gmail.
8. Send email to someone else to review and make sure it is displaying properly for other people.
9. Make sure newsletter mailing list is up to date.
10. Once it is reviewed, send out newsletter.

### HTML tags that can be used
- All standard HTML tags (`<a>,<p>, etc.`)
- `button` --> Creates a button element that is clickable
- `htmlString` --> string with embedded HTML for usages that is not possible with the above tag types.

## HTML Editing Extension

You can create an email in gmail using the chrome extention [coudHQ](https://chrome.google.com/webstore/detail/free-html-editor-for-gmai/ioinaaeeacahcmbgfmeaaofhfkijpdeb/related).

If you use it, you may have to change your security settings to permit third party cookies, or add some exceptions. You can find information on how to that on the company's support [website](https://support.cloudhq.net/how-to-enable-3rd-party-cookies-in-google-chrome-browser/).

To use this extension: Copy the html output within the `<body>...</body>` tags and past them into an email draft in gmail. Then you can press the little brush button and view the email to make sure it works properly.

## Contributions

The tool was originally developed by Irusha Vidanamadura (https://irusha.vidanamadura.net/)

The newsletters were created by the 2017-2018 Office Director for IEEE Carleton, Viraj Dave.