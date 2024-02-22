import { Typography } from "@material-tailwind/react";
import MC from '../assets/MC.svg'
 
export default function Footer() {
  return (
    <footer className="w-full bg-white p-8 mt-12">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <img src={MC} alt="logo-ct" className="w-8 2xl:ml-72" />
        <ul className="flex lg:flex-1 flex-wrap items-center justify-end gap-y-2 gap-x-12 2xl:mr-72">
          <li>
            <Typography
              as="a"
              href="https://github.com/markcurtiss720"
              target="_blank"
              color="blue-gray"
              className="font-bold transition-colors text-light-blue-900 hover:text-red-500 focus:text-red-500"
            >
              GitHub
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="https://www.linkedin.com/in/mark-curtiss-b959582b1/"
              target="_blank"
              className="font-bold transition-colors text-light-blue-900 hover:text-red-500 focus:text-red-500"
            >
              LinkedIn
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="mailto:markcurtiss720@gmail.com"
              color="blue-gray"
              className="font-bold transition-colors text-light-blue-900 hover:text-red-500 focus:text-red-500"
            >
              Email Me
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2024 (MIT) Mark Addam Curtiss
      </Typography>
    </footer>
  );
}