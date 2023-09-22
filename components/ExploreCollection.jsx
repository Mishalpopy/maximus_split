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
  return (
    <div className='exploreCollectionSec'>
            <div className='min-h-screen flex bg-gray-100'>
            <div className='w-1/2 flex ' style={exploreCollectionImgBanner}>

            </div>
            <div className="w-1/2 flex px-28 border border-gray-200/25  " >
      <div className='flex flex-col justify-evenly '>
      <div className='section_subHeading_start flex flex-col justify-evenly'>
      <p className='section_subHeading'>Explore Our</p>
      <h2 className='section_heading'>SAINT MAXIMUS <br></br>COLLECTION</h2>
      <p className='section_subHeading'>Check outer exclusive line Saint Maximus.</p>
      
      </div>
      <button className='btnBlack'>
       SHOP NOW
      </button> 
      <div className='flex justify-evenly explore_product_list'>
        <div className='explore_product_list1 pr-9'>
        <div className='explore_product_list_ImageArea'>
          <img src='https://abdulk30.sg-host.com/maximus/wp-content/uploads/2023/01/Saint-maximus-collection-tee.jpg'  />
         </div>
        <div className='explore_product_list_ContentArea'>
          <h3 className='explore_product_list_ContentArea_heading font-bold'>SM SHIRT</h3>
          <p className='explore_product_list_ContentArea_type'>Clothing</p>
          <div className='explore_product_list_ContentArea_prcing'>
          <h3 className='explore_product_list_ContentArea_heading font-bold'>55.00 AED</h3>
          <i></i>
          </div>
        </div>


        </div>
        <div className='explore_product_list2 pr-9' >
        <div className='explore_product_list_ImageArea'>
          <img src='https://abdulk30.sg-host.com/maximus/wp-content/uploads/2023/01/Saint-maximus-collection-set.jpg'  />
         </div>
        <div className='explore_product_list_ContentArea'>
          <h3 className='explore_product_list_ContentArea_heading font-bold'>GYM SET</h3>
          <p className='explore_product_list_ContentArea_type'>Clothing</p>
          <div className='explore_product_list_ContentArea_prcing'>
          <h3 className='explore_product_list_ContentArea_heading font-bold'>165.00 AED</h3>
          <i></i>
          </div>
        </div>
        </div>
        <div className='explore_product_list3 pr-9'>
        <div className='explore_product_list_ImageArea'>
          <img src='https://abdulk30.sg-host.com/maximus/wp-content/uploads/2023/01/Saint-maximus-collection-tote.jpg'  />
         </div>
        <div className='explore_product_list_ContentArea'>
          <h3 className='explore_product_list_ContentArea_heading font-bold'>TOTE BAG</h3>
          <p className='explore_product_list_ContentArea_type'>Accessories</p>
          <div className='explore_product_list_ContentArea_prcing'>
          <h3 className='explore_product_list_ContentArea_heading font-bold'>50.00 AED</h3>
          <i></i>
          </div>
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
