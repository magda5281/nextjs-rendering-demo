'use client';
import { useState } from 'react';
import React, { ReactNode } from 'react';

interface Props {
 children: ReactNode;
}
export default function ClientComponentOne({ children }: Props) {
 const [name, setName] = useState('Batman');
 return (
  <>
   <h1>Client Component One</h1>
   {children}
  </>
 );
}
