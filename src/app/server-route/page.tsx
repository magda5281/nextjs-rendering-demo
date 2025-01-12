import { serverSideFunction } from '@/app/utils/server-utils';
export default function ServerRoutePage() {
 console.log('Server route rendered ');
 const result = serverSideFunction();
 return (
  <>
   <h1>Server route page</h1>
   <p>{result}</p>
  </>
 );
}
