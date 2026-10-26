import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'FORMA Fitness', description: 'Your personal fitness command center', manifest: '/manifest.webmanifest' };
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body>{children}</body></html>}
