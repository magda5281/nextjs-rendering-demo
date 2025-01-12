'use client';
import { serverSideFunction } from '@/app/utils/server-utils';
export default function ClientRoutePage() {
 console.log('Client route rendered ');
 const result = serverSideFunction();
 return (
  <>
   <h1>Client route page</h1>
   <p>{result}</p>
  </>
 );
}
