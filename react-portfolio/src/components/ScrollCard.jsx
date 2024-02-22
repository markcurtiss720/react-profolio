import { Carousel, Typography, Button } from '@material-tailwind/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import dish_disc from '../assets/DishDiscovery.png'
import datamn from '../assets/datamn.png'
import weather from '../assets/WeatherApp.png'
import jamsearch from '../assets/jamsearch.png'

export default function ScrollCard() {

    const clickLink = (link) => {
        window.open(link, '_blank')
    };

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
            repo: 'https://github.com/markcurtiss720/database-managment-system',
        },
        {
            name: 'JAMSearchGamers',
            href: 'jackiechheng.github.io/JAMSearchGamers/',
            desc: 'Find out what games are being offered for free or discounted on Epic Games',
            img: jamsearch,
            repo: 'https://github.com/JackieChheng/JAMSearchGamers',
        },
        {
            name: 'DishDiscovery',
            href: 'https://secure-hollows-55574-70e0c84bc001.herokuapp.com/',
            desc: 'The ultimate hub for chefs and aspiring chefs to find new recipes, share culinary masterpieces, and connect with a community that shares a love for cooking',
            img: dish_disc,
            repo: 'https://github.com/tavargas9/DishDiscovery',
        },
    ];

  return (  
    <div className='flex flex-col items-center'>
        <h2 className='text-4xl font-bold mb-5 text-blue-800' id='featured-projects'>
            Featured Projects
        </h2>
        <a href='/portfolio' className='mb-5'>
            <button 
                className='group flex items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none text-white bg-gradient-to-r from-blue-500 to-orange-500 enabled:hover:bg-gradient-to-l focus:ring-blue-200 dark:focus:ring-blue-800 rounded-full focus:ring-2'
            >
                <span className='items-center flex justify-center bg-white text-blue-900 transition-all duration-75 ease-in group-enabled:group-hover:bg-opacity-0 group-enabled:group-hover:text-inherit dark:bg-gray-900 dark:text-white w-full rounded-full text-sm px-4 py-2 border border-transparent'>
                    See Full Portfolio <FontAwesomeIcon icon={faRightToBracket} className="ml-2"/>
                </span>
            </button>
        </a>
        <div className='w-full md:w-3/4 h-screen md:h-[700px] mb-12' >
            <Carousel 
            transition={{ duration:1 }} 
            autoplay={true} 
            loop={true} 
            className="rounded-xl"
            >
                {projects.map((item) => (
                <div className="relative h-full">
                    <img
                        src={item.img}
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
                        <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                        <Typography
                            variant="h1"
                            color="white"
                            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                        >
                            {item.name}
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-12 opacity-80"
                        >
                            {item.desc}
                            </Typography>
                            <div className="flex gap-2">
                                <Button className='rounded-full' ripple={false} size="lg" color="white" onClick={() => clickLink(item.href)}>
                                Live Demo
                                </Button>
                                <Button className='rounded-full' ripple={false} size="lg" color="white" variant="text" onClick={() => clickLink(item.repo)}>
                                View Code
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </Carousel>
        </div>
    </div>
  );
}