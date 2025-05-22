import type {Metadata} from 'next';
import { Inter, Roboto_Mono } from 'next/font/google'; // Changed from GeistSans, GeistMono
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ // Changed from geistSans = GeistSans(...)
  variable: '--font-geist-sans', // CSS variable name remains the same
  subsets: ['latin'],
});

const robotoMono = Roboto_Mono({ // Changed from geistMono = GeistMono(...)
  variable: '--font-geist-mono', // CSS variable name remains the same
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Luminary Canvas',
  description: 'An immersive personal website for Immersive Storytellers.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark"> {/* Apply dark class by default */}
      <body className={`${inter.variable} ${robotoMono.variable} antialiased font-sans`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
