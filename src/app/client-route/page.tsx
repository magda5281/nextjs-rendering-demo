'use client';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTheme } from '@/components/ThemeProvider';

export default function ClientRoutePage() {
 console.log('Client route rendered ');
 const theme = useTheme();
 const settings = {
  dots: true,
 };

 return (
  <div className='image-slider-container'>
   <h1 style={{ color: theme.colors.primary }}>Client route </h1>
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
 );
}
