// import { serverSideFunction } from '@/app/utils/server-utils';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default function ServerRoutePage() {
 console.log('Server route rendered ');
 //  const result = serverSideFunction();
 const settings = {
  dots: true,
 };
 return (
  <>
   <h1>Server route page</h1>
   {/* <p>{result}</p> */}

   <div className='image-slider-container'>
    <Slider {...settings}>
     <div>
      <img src='http://picsum.photos/400/200' />
     </div>
     <div>
      <img src='http://picsum.photos/400/200' />
     </div>
     <div>
      <img src='http://picsum.photos/400/200' />
     </div>
     <div>
      <img src='http://picsum.photos/400/200' />
     </div>
    </Slider>
   </div>
  </>
 );
}

//adding component that uses client server features in server component will cause error
