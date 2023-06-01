import React, { useEffect, useRef } from 'react';
import Carousel from 'react-elastic-carousel';
import { useMediaQuery } from 'react-responsive';
import '../../styles/Article.css';
import Art1 from '../../assets/Art1.png';
import Art2 from '../../assets/Art2.png';
import Art3 from '../../assets/Art3.png';
import Art4 from '../../assets/Art4.png';
import Art5 from '../../assets/Art5.png';
import Art6 from '../../assets/Art6.png';
import Art7 from '../../assets/Art7.png';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default function Article() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.slideNext();
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='article'>
      <div className='flex flex-col'>
        <span className='text-5xl text-black font-semibold flex px-24 '>
          Nos évènement et film du moments
        </span>
        <div className='px-24 py-5'>
          <p className='text-2xl text-gray-700'>
            Prenez une place en payant votre ticket à  moindre coût et <br /> regaler vous avec les
            les évenement et film programmés.
          </p>
        </div>
      </div>

      <div className='space-x-5 py-5 px-5'>
        <Carousel
          breakPoints={breakPoints}
          renderArrow={({ type, onClick }) => (
            <button
              onClick={onClick}
              className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full h-11 relative top-40'
            >
              {type === 'PREV' ? '<' : '>'}
            </button>
          )}
          renderPagination={({ pages, activePage, onClick }) => (
            <div className='flex justify-center mt-4'>
              {pages.map((page, index) => (
                <button
                  key={index}
                  onClick={() => onClick(index)}
                  className={`mx-1 w-4 h-4 rounded-full ${
                    activePage === index ? 'bg-red-500' : 'bg-red-200'
                  }`}
                ></button>
              ))}
            </div>
          )}
          className={isMobile ? 'px-2' : 'px-40'}
          ref={carouselRef}
        >
          <img className='w-80 h-auto' src={Art1} alt='Art1' />
          <img className='w-80 h-auto' src={Art2} alt='Art2' />
          <img className='w-80 h-auto' src={Art3} alt='Art3' />
          <img className='w-80 h-auto' src={Art4} alt='Art4' />
          <img className='w-80 h-auto' src={Art5} alt='Art5' />
          <img className='w-80 h-auto' src={Art6} alt='Art6' />
          <img className='w-80 h-auto' src={Art7} alt='Art7' />
        </Carousel>
      </div>
    </div>
  );
}
