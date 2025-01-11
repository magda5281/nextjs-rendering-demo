import { cookies } from 'next/headers';
export default async function AboutPage() {
 console.log('About server component ');
 const cookieStore = cookies();
 const theme = (await cookieStore).get('theme');
 console.log('theme', theme);
 return <h1>About page {new Date().toLocaleTimeString()}</h1>;
}

//next.js switches to dynamic rendering automatically when encounters functions in the component like cookies(), headers(), or searchParams object
