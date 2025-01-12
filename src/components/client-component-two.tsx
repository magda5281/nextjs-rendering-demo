'use client';
import { useState } from 'react';

export default function ClientComponentOne() {
 const [name, setName] = useState('Batman');
 return <h1>Client Component One</h1>;
}
