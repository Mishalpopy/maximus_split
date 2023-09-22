"use client"
import { StarIcon } from '@heroicons/react/20/solid'

const products = [
  {
    id: 1,
    name: 'BELT GREY BAG',
    price: '50.00 AED',
    rating: 5,
    reviewCount: 'Bags | Sport',
    imageSrc: 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2022/12/shop-list-sidebar-23.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 2,
    name: 'GREY ADIDAS',
    price: '45.00 AED',
    rating: 5,
    reviewCount: 'Clothes | Footwear',
    imageSrc: 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2022/12/shop-list-filter-13.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 3,
    name: 'BLACK SHOES NIKE',
    price: '15 AED',
    rating: 5,
    reviewCount: 'Clothes | Footwear',
    imageSrc: 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2022/12/shop-list-filter-19.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 4,
    name: 'BELT GREY BAG',
    price: '50.00 AED',
    rating: 5,
    reviewCount: 'Bags | Sport',
    imageSrc: 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2022/12/shop-list-sidebar-23.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 5,
    name: 'GREY ADIDAS',
    price: '45.00 AED',
    rating: 5,
    reviewCount: 'Clothes | Footwear',
    imageSrc: 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2022/12/shop-list-filter-13.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 6,
    name: 'BLACK SHOES NIKE',
    price: '15 AED',
    rating: 5,
    reviewCount: 'Clothes | Footwear',
    imageSrc: 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2022/12/shop-list-filter-19.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  
  // More products...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="bg-white py-9 ">
      <div className="mx-auto max-w-7xl overflow-hidden sm:px-6  justify-center items-center text-center ">
        <h2 className="sr-only">Products</h2>
        <p className='section_subHeading'>Explore Our</p>
      <h2 className='section_heading pb-9'>BESTSELLERS</h2>

        <div className="-mx-px grid grid-cols-2 border-l border-t border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="group relative border-r border-b border-gray-200 p-4 sm:p-6">
              <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="pt-10 pb-4 text-left">
                <h3 className="text-sm font-bold text-gray-900">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0 " />
                    {product.name}
                  </a>
                </h3>
                <div className="mt-3 flex flex-col items-left">
                  <p className="sr-only">{product.rating} out of 5 stars</p>
      
                  <p className="mt-1 text-sm text-gray-500 font-bold">{product.reviewCount} </p>
                </div>
                <p className="mt-4 text-base font-bold text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
