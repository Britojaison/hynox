import React, { useState, useEffect } from 'react';
import styles from './OfferCarousel.module.css';
import img1 from '../OfferCarousel/offer1.png';
import img2 from '../OfferCarousel/offer2.png';
import img3 from '../OfferCarousel/offer3.png';
import img4 from '../OfferCarousel/offer4.png';

const offers = [
    { id: 1, src: img1 }, 
    { id: 2, src: img2 },
    { id: 3, src: img3 },
    { id: 4, src: img4 },
];

const OfferCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-scroll functionality
    useEffect(() => {
        const autoScroll = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % offers.length);
        }, 3000); // 3 seconds for each slide

        return () => clearInterval(autoScroll);
    }, []);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className={styles.carousel}>
            <h2 className={styles.offersHeading}>OFFERS! OFFERS!</h2>
            <div className={styles.carouselContainer}>
                <div className={styles.carouselSlides}>
                    {offers.map((offer, index) => (
                        <div
                            key={offer.id}
                            className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
                        >
                            <img src={offer.src} alt={`Offer ${offer.id}`} />
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.dotsContainer}>
                {offers.map((_, index) => (
                    <div
                        key={index}
                        className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
                        onClick={() => goToSlide(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default OfferCarousel;
