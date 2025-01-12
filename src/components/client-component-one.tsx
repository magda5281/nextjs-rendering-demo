'use client';
import { useState } from 'react';
import ClientComponentTwo from './client-component-two';

export default function ClientComponentOne() {
 const [name, setName] = useState('Batman');
 return (
  <>
   <h1>Client Component One</h1>
   <ClientComponentTwo />
  </>
 );
}
