import React from 'react';
import Navbar from '@/Components/Navbar/page';
import './globals.css'
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>Footer alanı</footer>
    </div>
  );
};

export default Layout;
