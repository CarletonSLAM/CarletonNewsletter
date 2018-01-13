# Weekly Newsletter Generator
## Made for the IEEE Carleton University Student Branch: https://ieeecarleton.ca

## Motivation
This tool was created in order to create a consistent look and feel for the newsletters that were sent out to all IEEE members, volunteers, and subscribeers throug multiple different mailing clients.

### Prerequisites
* Node.js (at least v6): https://nodejs.org/en/

### Installation
1. Clone this repo.
2. Add necessary cover photos in `./img`.
3. Create a new newsletter under `./models/newsletters`.
4. Run `npm run build` in the root directory.
5. See generated HTML email in `./output`
6. Copy the HTML into a mail client using a HTML append tool.


### Customization
The theme and basic information for each email can be customized by modifying `theme.js` and `globals.js` in the `./models` directory.


### Contributions
The tool was originally developed by Irusha Vidanamadura (https://irusha.vidanamadura.net/)

The newsletters were created by the 2017-2018 Office Director for IEEE Carleton, Viraj Dave.