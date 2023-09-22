"use client"
// ProductList.js
import Link from 'next/link';

const ProductList = () => {
  const exploreCollectionImgBanner = {
    background: 'url("https://abdulk30.sg-host.com/maximus/wp-content/uploads/2023/06/MicrosoftTeams-image-19.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'top left',
    backgroundRepeat: 'no-repeat',
  };
  const products = [
    {
      id: 1,
      name: 'SM SHIRT',
      href: '#',
      price: '50 AED',
      availability: 'Clothing',
      imageSrc: 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2023/01/Saint-maximus-collection-tee.jpg',
      imageAlt: 'White fabric pouch with white zipper, black zipper pull, and black elastic loop.',
    },
    {
      id: 2,
      name: 'GYM SET',
      href: '#',
      price: '140 AED',
      availability: 'Washed Black',
      imageSrc: 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2023/01/Saint-maximus-collection-set.jpg',
      imageAlt: 'Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.',
    },
    {
      id: 3,
      name: 'TOTE BAG',
      href: '#',
      price: '220 AED',
      availability: 'Blue',
      imageSrc: 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2023/01/Saint-maximus-collection-tote.jpg',
      imageAlt:
        'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    },
    // More products...
  ]
  
  return (
    <div className='exploreCollectionSec bg-white'>
            <div className='min-h-screen flex bg-gray-100 bg-white'>
            <div className='w-1/2 flex bg-white' style={exploreCollectionImgBanner}>

            </div>
            <div className="w-1/2 flex px-28 border border-gray-200/25  " >
      <div className='flex flex-col justify-evenly '>
      <div className='section_subHeading_start flex flex-col justify-evenly'>
      <p className='section_subHeading'>Explore Our</p>
      <h2 className='section_heading'>SAINT MAXIMUS <br></br>COLLECTION</h2>
      <p className='section_subHeading'>Check outer exclusive line Saint Maximus.</p>
      
      </div>
      <button className='btnBlackCollection'>
       SHOP NOW
      </button> 
      <div className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden   sm:py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group text-sm">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden  bg-gray-100 group-hover:opacity-75">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-4 font-medium text-gray-900">{product.name}</h3>
              <p className="italic text-gray-500">{product.availability}</p>
              <p className="mt-2 font-medium text-gray-900">{product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
      </div>
    </div>
            </div>
    </div>
  );
};

export default ProductList;
