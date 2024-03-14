import React, { useEffect, useState } from 'react'
import { animateScroll as scroll } from 'react-scroll';

const Layout = ({ children }) => {
    const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
    //   const windowHeight = window.innerHeight;
      const scrollTriggerPosition = 200; // Vị trí cuộn xuống để hiển thị nút, ở đây là 500px

      if (scrollTop > scrollTriggerPosition) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div>
        <div>
      {/* Các nội dung của trang */}
      {children}

      {/* Hiển thị nút cuộn lên đầu */}
      {showScrollButton && (
        <button onClick={scrollToTop} className="scroll-up-button btn btn-primary ms-5">
          Scroll To Top
        </button>
      )}
    </div>

    </div>
  )
}

export default Layout