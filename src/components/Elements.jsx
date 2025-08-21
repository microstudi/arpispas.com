import { useState, useEffect } from 'react';

export default function Elements() {
    const images = Array.from({ length: 20 }, (_, i) => `/gallery/image${i + 1}.jpg`);
    const [current, setCurrent] = useState(0);
    const [fade, setFade] = useState(false);
    // Preload images
    useEffect(() => {
        images.forEach(src => {
            const img = new window.Image();
            img.src = src;
        });
    }, [images]);

    const triggerFade = (nextIdxFn) => {
        setFade(true);
        setTimeout(() => {
            setCurrent(nextIdxFn);
            setFade(false);
        }, 250); // duration matches CSS
    };

    const nextSlide = () => {
        triggerFade(prev => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        triggerFade(prev => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="slideshow">
            <button className='left' onClick={prevSlide}>&lt;</button>
            <img
                src={images[current]}
                alt={`Slide ${current + 1}`}
            onClick={nextSlide}
            style={{ cursor: 'pointer' }}
            className={fade ? 'fade-img' : ''}
        />
        <button className='right' onClick={nextSlide}>&gt;</button>
        <div>
            {current + 1} / {images.length}
        </div>
    </div>
    );
}

