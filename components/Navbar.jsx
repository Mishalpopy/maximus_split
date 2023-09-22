"use client"
import { Fragment, useState } from "react"
import { Dialog, Popover, Tab, Transition } from "@headlessui/react"
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { func } from "prop-types"


const navigation = {
  categories: [
    {
      id: 'women',
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: '/women-nav.png',
          imageAlt: 'Models',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: '/basic_tee.png',
          imageAlt: 'Models Tee'
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Dresses', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Denim', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '#' },
          ],
        },
        {
          id:'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Sunglasses', href: '#' },
            { name: 'Hats', href: '#' },
            { name: 'Belts', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Brand A', href: '#' },
            { name: 'Brand B', href: '#' },
            { name: 'Brand C', href: '#' },
            { name: 'Brand D', href: '#' },
            

          ],
        },
      ],
    },
    {
      id: 'men',
      name: 'Men',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: '/men-nav.png',
          imageAlt: 'men',
        },
        {
          name: 'Artwork Tees',
          href: '#',
          imageSrc: '/men-two.png',
          imageAlt: 'Men Two'
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Brand D', href: '#' },
            { name: 'Brand D', href: '#' },
            { name: 'Brand D', href: '#' },
            { name: 'Brand D', href: '#' },
            { name: 'Brand D', href: '#' },
            { name: 'Brand D', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brans',
          items: [
            { name: 'Brand D', href: '#' },
            { name: 'Brand D', href: '#' },
            { name: 'Brand D', href: '#' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'New', href: '#'},
    { name: "Men", href: '#'},
    { name: "Women", href: '#'},
    { name: "Sports", href: '#'},
    { name: "Brands", href: '#'},
    { name: "Collections", href: '#'},
    { name: "About", href: '#'},



  ],
}

function className(...classes) {
  return classes.filter(Boolean).join('')
}

export default function Navbar() {
  const [open, setOpen ] = useState(false)

  return(
    <div className="bg-white">
      {/*Mobile Menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
              <div className="flex px-4 pb-2 pt-5">
                <button
                type="button"
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
               onClick={() => setOpen(false)}
                >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close Menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/*Links */}
              <Tab.Group as="div" className="mt-2">
                <div className="border-b border-gray-200">
                  <Tab.List className="mb-px flex space-x-8 px-4">
                    {navigation.categories.map((category) => (
                      <Tab
                      key={category.nam}
                      className={({ selected }) => 
                      className(
                        selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-900',
                        'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                      )
                      }
                      >
                      {category.name}

                      </Tab>
                    ))}
                  </Tab.List>
                </div>
                <Tab.Panels as={Fragment}>
                  {navigation.categories.map((category) => (
                    <Tab.Panel key={category.name} className="Space-y-10 px-4 pb-8 pt-10">
                      <div className="grid grid-col-2 gap-x-4">
                        {category.featured.map((items) => (
                          <div key={items.name} className="group relative text-sm">
                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                            <img  src={items.imageSrc} alt={items.imageAlt} className="object-cover object-center" />
                            </div>
                            <a href={items.href} className="mt-6 block font-medium text-gray-900">
                              <span className="absolute inset-0 z-10" aria-hidden="true" />
                              {items.name}
                            </a>
                            <p aria-hidden="true" className="mt-1">Shop Now</p>
                            </div>
                        ))}
                      </div>
                      {category.sections.map((section) => (
                        <div key={section.name}>
                          <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                            {section.name}
                          </p>
                          <ul
                          role="list"
                          aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                          >
                          {section.items.map((item) => (
                            <li key={item.name} className="flow-root">
                              <a href={item.href} className="m-2 block p-2 text-gray-500">
                                {item.name}
                              </a>
                            </li>
                          ))}
                          </ul>
                        </div>
                      ))}
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>


                <div className="space-y-6 border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                    <a href={page.href} className="m-2 block p-2 font-medium text-gray-900">
                      {page.name}
                    </a>
                    </div>
                  ))}
                </div>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <a href="#" className="m-2 block p-2 font-medium text-gray-900">
                      Sign In
                    </a>
                  </div>
                  <div className="flow-root">
                    <a href="" className="m-2 block p-2 font-medium text-gray-900">
                      Create Account
                    </a>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                    src="/Flag_of_the_United_Arab_Emirates.svg"
                    className="block h-auto w-5 flex-shrink-0" 
                    
                    />
                    <span ml-3 block text-base font-medium text-gray-900>AED</span>
                    <span className="sr-only">, change currency</span>
               

                  </a>
                </div>

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

<header className="relative bg-white">
<p className="flex h-10 justify-center items-center text-center bg-black px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
Get free delivery on orders AED 100
 </p>

<nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-8">
  <div className="border-b border-gray-200">
    <div className="flex h-16 items-center">
      <button
      type="button"
      className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
      onClick={() => setOpen(true)}
      >
        <span className="absolute -inset-0.5" />
        <span className="sr-only">Open Menu</span>
        <Bars3Icon className="h-6 w-6 " aria-hidden='true' />
      </button>

{/*Logo*/}

<div className="ml-4 flex lg:ml-0">
  <a href="#">
    <span className="sr-only">Your Company</span>
    <img
    className="h-8 w-auto"
    src="/logo-black.svg" width={100} height={100}
    alt=""
     />
  </a>
</div>
{/*Flyout Menus */}
<Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
  <div className="flex h-full space-x-8">
    {navigation.categories.map((category) => (

    <Popover key={category.name} className="flex">

      {({ open }) => {
        <>
          <div className="relative flex">
          <Popover.Button
            className={className (
              open
              ? 'border-indigo-600 text-indigo-600'
              : 'border-transparent text-gray-700 hover:text-gray-800',
              'relative z-10 -mb-px flex items-center boder-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'

            )}
            >
            {category.name}

          </Popover.Button>
          </div>

          <Transition 
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          >
          <Popover.Panel
          className="absolute inset-x-0 top-full text-sm text-gray-500">

          <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

          <div className="relative bg-white">
            <div className="mx-auto max-w-7xl px-8">
              <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                <div className="col-start-2 grid grid-cols-2 gap-x-8">
                  {category.featured.map((item) => (
                    <div key={item.name} className="group relative text-base sm:text-sm">
                    <div className="aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                    <img
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    className="object-cover object-center" />
                    </div>

                    <a href="" className="mt-6 block font-medium  text-gray-900">
                      <span className="absolute inset-0 z-10 " aria-hidden="true" />
                      {item.name}
                    </a>
                    <p aria-hidden="true" className="mt-1">
                      Shop Now
                    </p>

                    </div>
                  ))}
                </div>


              <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                {category.sections.map((section) => (
                  <div key={section.name}>
                  <p id={`$(section.name)-heading`} className="font-medium text-gray-900">
                    {section.name}
                  </p>
                  <ul
                  role="list"
                  aria-labelledby={`${section.name}-heading`} className="mt-6 space-y-6 sm:space-y-4">
                  {section.items.map((item) => (
                    <li key={item.name} className="flex">
                      <a href={item.href} className="hover:text-gray-800">
                        {item.name}
                      </a>
                    </li>
                  ))}
                  

                  </ul>
                  </div>
                ))}
              </div>


              </div>
            </div>
          </div>

          </Popover.Panel>

          </Transition>


        </>
      }}
    </Popover>





   
    ))}
    {navigation.pages.map((page) => (
      <a 
      key={page.name}
      href={page.href}
      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
      >
        {page.name}
      </a>
    ))}
  </div>
</Popover.Group> 
<div className="ml-auto flex items-center">
  <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
    <a href="#" className="text-sm font-medium  text-gray-700 hover:text-gray-800">
      Create Accouunt
    </a>
  </div>
  <div className="hidden lg:ml-8 lg:flex">
    <a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
      <img 
  src="/Flag_of_the_United_Arab_Emirates.svg"
  className="block h-auto w-5 flex-shrink-0"
  alt=""

      />
      <span className="ml-3 block text-sm font-medium">AED</span>
      <span className="sr-only">, change currency</span>
    </a>
  </div>


{/*Search */}
<div className="flex lg:ml-6">
  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
    <span className="sr-only">Search</span>
    <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />

  </a>
</div>


{/*Cart */}
<div className="ml-4 flow-root lg:ml:6">
  <a href="#" className="group -m-2 flex items-center p-2">
    <ShoppingBagIcon 
    className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />\
    <span className="ml-2 text-sm font-medium text-gray-400 group-hover:text-gray-800">
      0
    </span>
    <span className="sr-only">Items in Cart</span>
  </a>
</div>

</div>

    </div>
  </div>
</nav>


</header>


    </div>


    )
}