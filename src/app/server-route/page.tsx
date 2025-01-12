import { serverSideFunction } from '@/app/utils/server-utils';
import ImageSlider from '@/components/ImageSlider';
import { clientSideFunction } from '@/app/utils/client-utils';

export default function ServerRoutePage() {
 console.log('Server route rendered ');
 const result = clientSideFunction();
 return (
  <>
   <h1>Server route page</h1>
   <p>{result}</p>
   <ImageSlider />
  </>
 );
}
