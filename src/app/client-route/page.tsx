'use client';

import { clientSideFunction } from '@/app/utils/client-utils';

import { useTheme } from '@/components/ThemeProvider';

export default function ClientRoutePage() {
 console.log('Client route rendered ');
 const theme = useTheme();
 const result = clientSideFunction();
 return (
  <div className='image-slider-container'>
   <h1 style={{ color: theme.colors.primary }}>Client route {result}</h1>
  </div>
 );
}
