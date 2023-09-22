"use client"
import { Typography } from "@material-tailwind/react";


const SITEMAP = [
  {
    title: "QUICKLINKS",
    links: ["PRIVACY POLICY ", "SIZE GUIDE", "TRACK ORDER", "TERMS & CONDITIONS"],
  },
  {
    title: "HELP",
    links: ["FAQS", "SHIPPING & DELIVERY", "RETURNS & EXCHANGE", "CUSTOMER SERVICE"],
  },
  {
    title: "SHOP",
    links: ["MEN", "Newsletter", "Free Products", "Affliate Program"],
  },
  {
    title: "MORE",
    links: ["ABOUT US", "NEWS", "CONTACT", "CAREERS"],
  },
  {
    title: "NEWSLETTER",
    links: ["ABOUT US", "NEWS", "CONTACT", "CAREERS"],
  },

];

const currentYear = new Date().getFullYear();

export function FooterWithSitemap() {
  return (
    <footer className="relative w-full bg-black text-white pt-20">
    <div className="mx-auto w-full max-w-7xl px-8 bg-black text-white">
    <div className="flex w-full flex-col items-center justify-center border-b border-blue-gray-50 py-4 md:flex-row md:justify-between">
        <Typography
        variant="small"
        className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
        >
        <img
        src="logo_white.svg" width={100} 
         />

        </Typography>


        <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
        <Typography
        as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100"
        >
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>

        </Typography>
        </div>


      </div>
      <div className="mx-auto grid w-full grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-5 ">
        {SITEMAP.map(( {title, links }, key) => (
          <div key={key} className="w-full">
            <Typography 
            variant="small"
            color="blue-gray"
            className="mb-4 font bold uppercase opacity-50">
              {title}
            </Typography>
            <ul className="space-y-1">
            {links.map((link, key) => (
              <Typography key={key} as="li" color="blue-gray" className="font-normal">
                <a href="#" 
                className="inline-block py-1 pr-2 transition-transform uppercase hover:underline underline-offset-1 text-xs"
                >
                  {link}
                </a>
              </Typography>
            ) )}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
        <Typography
        variant="small"
        className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0 text-xs "
        >
        &copy; {currentYear} <a href="#">Maximus</a>.All Right Reserved

        </Typography>


        <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
        <Typography
        as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100"
        >
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>

        </Typography>
        </div>


      </div>
    </div>
    </footer>
  )
}

export default FooterWithSitemap