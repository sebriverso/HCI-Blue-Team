import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface HeaderProps {
  text: string;
}

const MobileHeader: React.FC<HeaderProps> = ({ text }) => {
  const router = useRouter();

  const navigateToPage = (destination: string) => {
    router.push(destination);
  };

  return (
    <main style={{ position: 'sticky', top: 0, background: 'white', zIndex: 1, backgroundColor: 'white', boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.1)' }}>
      <link href="https://fonts.cdnfonts.com/css/sanchez-2" rel="stylesheet"></link>
      <link href='https://fonts.googleapis.com/css?family=League Spartan' rel='stylesheet'></link>

      <h1 style={{ paddingLeft: '10px', display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
        <div className="button-container" style={{ display: 'flex', gap: '40px', alignItems: 'flex-end' }}>
          {/* Logo and Welcome */}
          <Link href="/">
            <button className="AAMS logo home">
              <img src="./aamslogo.png" alt="aams Logo" style={{ maxHeight: '90px' }} />
            </button>
          </Link>
        </div>
      </h1>
    </main>
  );
};

export default MobileHeader;
