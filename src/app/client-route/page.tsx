'use client';

//Error:   × You're importing a component that needs "server-only". That only works in a Server Component but one of its parents is marked with "use client", so it's a Client Component.
// │ Learn more: https://nextjs.org/docs/app/building-your-application/rendering
// import { serverSideFunction } from '@/app/utils/server-utils';
export default function ClientRoutePage() {
 console.log('Client route rendered ');
 //  const result = serverSideFunction();
 return (
  <>
   <h1>Client route page</h1>
   {/* <p>{result}</p> */}
  </>
 );
}
