import { IApp } from "../interfaces/iapp";

const apps: IApp[] = [
    {
        id: 1,
        name: 'Tickers',
        description: 'Tickers is a simple application that counts up or down in ticks (seconds). It was my first Angular application. The current version has been refactored to use Angular 18.',
        appUrl: 'https://permutate.us/stuff/tickers',
        gitHubUrl: 'https://github.com/boogermanus/tickers'
    },
    {
        id: 2,
        name: 'Insulter',
        description: 'The insulter application was the first app I wrote with both a backend API, and a separate frontend in Angular. The backend API generates the insults while the frontend simply displays them. The backend is built with .NET Core, while The frontend uses Angular.',
        appUrl: 'https://permutate.us/stuff/insulter',
        gitHubUrl: 'https://github.com/boogermanus/insulter'
    },
    {
        id: 3,
        name: 'Groclist',
        description: 'Groclist is an application I built to use while grocery shopping. It lets me add a lists of items from different stores so that I can check them off as I am shopping. It features a backend API and a frontend to display the data. The backend API was built with NestJS and uses TypeORM to connect to a database to store lists and their items. The backend API features an authentication system so that users have to enter a username and password to gain access. The frontend is written in Angular, and uses Angular Material and bootstap to display items. Register a user and give it a try.',
        appUrl: 'https://permutate.us/stuff/groclist',
        gitHubUrl: 'https://github.com/boogermanus/groclist'
    },
    {
        id: 4,
        name: 'Special Move!',
        description: 'Special Moves is an application that I built after seeing one of those "What\'s your" cards on facebook. Users select the first letter of their first name, the day of the month of their birth, and the first letter of their surname to generate their Special Move. This application is only a frontend as all the information is stored in the app. It uses Angular, Angular Material, and bootstrap in its UI. I built this app in order to teach myself more about unit testing Angular applications.',
        appUrl: 'https://permutate.us/stuff/specialmove',
        gitHubUrl: 'https://github.com/boogermanus/specialmove'
    },
    {
        id: 5,
        name: 'Dogs Age',
        description: 'Dogs Age is a cute little application that will tell you how old your dog is in human years. I has three different ways to calculate the age, and each will provide a slightly different result. Pick your favorite! The app was built with Angular and makes heavy use of Angular Material. It was another move on my part to learn more about unit testing in Angular.',
        appUrl: 'https://permutate.us/stuff/dogsage',
        gitHubUrl: 'https://github.com/boogermanus/dogsage'
    },
    {
        id: 6,
        name: 'The Rules of Acquisition',
        description: 'If you don\'t like Star Trek, then this app isn\'t for you! The Rules of Acquisition is an Angular application I built after finding a complete list of them in JSON format. You can read more about the app on its about page. I set out to learn more about bootstrap and continue my journey learning about unit testing in Angular. This app was also a chance for me to learn more about storing information on the browser.',
        appUrl: 'https://permutate.us/stuff/rulesofacquisition',
        gitHubUrl: 'https://github.com/boogermanus/rulesofacquisition'
    },
    {
        id: 7,
        name: 'Texas Seasons',
        description: 'The weather is different down here y\'all! Seriously, Texas weather is some weird s**t. I seen it sleet, snow, and rain; there was a dust storm after the rain. When I watched a funny video on TikTok where someone described new seasons for Texas I was on board to develop this application. The app will tell you which \'season\' we\'re in based on the date. Its written in Angular, and features more extensive use of Angular Material and, as always, unit tests',
        appUrl: 'https://permutate.us/stuff/texasseasons',
        gitHubUrl: 'https://github.com/boogermanus/texasseasons'
    },
    {
        id: 8,
        name: 'Secs',
        description: 'Did you ever wonder how many megaseconds it is till your birthday? What about how many gigaseconds since the moon landing? Wonder no more! Secs is a simple application that will tell you the number of Giga, Mega, Kilo, and actual seconds between two dates. Written in Angular, it features unit testing and use of ng-bootstrap since Angular Material doesn\'t have a good time entry component.',
        appUrl: 'https://permutate.us/stuff/secs',
        gitHubUrl: 'https://github.com/boogermanus/secs'
    },
    {
        id: 9,
        name: 'FauxScope',
        description: 'FauxScope is a simple application that will tell you what your actual horoscope is. I built this app after I remembered what I was taught in Solar Astronomy. Basically, the idiots that invented horoscopes didn\'t ever account for the movement of the stars; so, what you believe your actual horoscope is..isn\'t.',
        appUrl: 'https://permutate.us/stuff/fauxscope',
        gitHubUrl: 'https://github.com/boogermanus/fauxscope'
    },
    {
        id: 10,
        name: 'FauxScope',
        description: 'iFry is an Oven to Air Fryer temp/time conversion tool. Built with Angular and Angular Material.',
        appUrl: 'https://permutate.us/stuff/ifry',
        gitHubUrl: 'https://github.com/boogermanus/ifry'
    },
    {
        id: 11,
        name: 'WeatherAlerts',
        description: 'WeatherAlerts is an application that uses the National Weather Service\'s API to allow users to search and view NWS Alerts for all 50 states. You can save \'Zones\' and view alerts for your area. Written in ASP.NET Core this is a full backend/frontend application which uses Angular to display the frontend.',
        appUrl: 'https://permutate.us/stuff/weatheralerts',
        gitHubUrl: 'https://github.com/boogermanus/weatheralerts'
    },
    {
        id: 12,
        name: 'Memory',
        description: 'A basic memory game built with entirely with Angular and Angular Material. Play a game and test your memory!',
        appUrl: 'https://permutate.us/stuff/memory',
        gitHubUrl: 'https://github.com/boogermanus/memory'
    },

]

export {apps}