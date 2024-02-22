import mongo from './assets/mongodbSocial.png'
import svg from './assets/svgGenerator.png'
import quiz from './assets/quiz.gif'
import readme from './assets/readmeGenerator.png'
import datamn from './assets/datamn.png'
import jamsearch from './assets/jamsearch.png'
import weather from './assets/WeatherApp.png'
import dish_disc from './assets/DishDiscovery.png'
import ecom from './assets/ecom.png'
import notetakr from './assets/noteTaker.png'
import dailyPlanner from './assets/daileyPlanner.png'
import password from './assets/passwordGenerator.png'

const projects = [
        {
            name: 'Weather Forcast',
            href: 'https://markcurtiss720.github.io/weather-forcast/',
            desc: 'A simple weather app where users can look up there city and see the current weather as well as the next 5 day forcast.',
            img: weather,
            repo: 'https://github.com/markcurtiss720/weather-forcast',
        },
        {
            name: 'Database Management System',
            href: 'https://github.com/markcurtiss720/database-managment-system',
            desc: 'A data management system that allows you to view update a remove employees, roles, departments, and budgets.',
            img: datamn,
            repo: 'https://github.com/tavargas9/employee-tracker',
        },
        {
            name: 'JAMSearchGamers',
            href: 'jackiechheng.github.io/JAMSearchGamers/',
            desc: 'Find out what games are being offered for free or discounted on Epic Games',
            img: jamsearch,
            repo: 'https://github.com/JackieChheng/JAMSearchGamers',
        },
        {
            name: 'MongoDB Social Network API',
            href: 'https://github.com/markcurtiss720/mongod-social-network',
            desc: 'An Express.js and MongoDB based API for a social network web application',
            img: mongo,
            repo: 'https://github.com/markcurtiss720/mongod-social-network',
        },
        {
            name: 'DishDiscovery',
            href: 'https://secure-hollows-55574-70e0c84bc001.herokuapp.com/',
            desc: 'The ultimate hub for chefs and aspiring chefs to find new recipes, share culinary masterpieces, and connect with a community that shares a love for cooking',
            img: dish_disc,
            repo: 'https://github.com/tavargas9/DishDiscovery',
        },
        {
            name: 'E-Commerce API',
            href: 'https://github.com/markcurtiss720/e-commerce-app',
            desc: 'A backend application to build out a functional back end for an e-commerce store.',
            img: ecom,
            repo: 'https://github.com/markcurtiss720/e-commerce-app',
        },
        {
            name: 'Notes App',
            href: 'https://rocky-beach-09930-036ddda07d93.herokuapp.com/',
            desc: 'A notemaking application that uses a backend databases with Express.js',
            img: notetakr,
            repo: 'https://github.com/markcurtiss720/notes-app',
        },
        {
            name: 'Logo Generator',
            href: 'https://github.com/markcurtiss720/Logo-generator',
            desc: 'A node.js application that allows you to quickly create a simple logo via the peramters that you set.',
            img: svg,
            repo: 'https://github.com/markcurtiss720/Logo-generator',
        },
        {
            name: 'README Generator',
            href: 'https://github.com/markcurtiss720/README-generator',
            desc: 'A node.js command line application that will generate a professional README.md',
            img: readme,
            repo: 'https://github.com/markcurtiss720/README-generator',
        },
        {
            name: 'Dailey Planner',
            href: 'https://markcurtiss720.github.io/daily-planner/',
            desc: 'A daily planner that tracks tasks hour by hour 9am to 5pm',
            img: dailyPlanner,
            repo: 'https://github.com/markcurtiss720/daily-planner',
        },
        {
            name: 'JavaScript Timed Test',
            href: 'https://markcurtiss720.github.io/timed-test/',
            desc: 'A timed quiz to test ones knowledge of JavaScript.',
            img: quiz,
            repo: 'https://github.com/markcurtiss720/timed-test',
        },
        {
            name: 'Password Generator',
            href: 'https://markcurtiss720.github.io/password-generator/',
            desc: 'A Random and secure password generator using HTML, CSS, and Javascript',
            img: password,
            repo: 'https://github.com/markcurtiss720/password-generator',
        },
];

export default projects;