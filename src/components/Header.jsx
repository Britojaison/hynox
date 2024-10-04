import '../assets/styles/header.css';
import img1 from "../assets/images/cate1.webp";
import img2 from "../assets/images/cate2.webp";
import img3 from "../assets/images/cate3.webp";
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const Header = () => {

    const images = [
        img1, // Replace with your actual image URLs
        img2,
        img3,
        img2,
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImages = () => {
        if (currentIndex + 3 < images.length) {
            setCurrentIndex(currentIndex + 3);
        }
    };

    const prevImages = () => {
        if (currentIndex - 3 >= 0) {
            setCurrentIndex(currentIndex - 3);
        }
    };


    return (
        <>
            <header className="header">
                <div className="logo">Hynox</div>

                <div className="search-container">
                    <input type="text" placeholder="Search products..." className="search-input" />
                    <button className="search-button">Search</button>
                </div>
            </header>
           <div className='categories-div'>
                <div className='categories'>
                    <p>All Categories</p>
                    <Link to="/viewAll" >View All</Link>
                </div>
                <div className='categories-options'>
                    <button onClick={prevImages} disabled={currentIndex === 0} className='arrow-button'>
                        &lt;
                    </button>
                    <div className='image-container'>
                        {images.slice(currentIndex, currentIndex + 3).map((src, index) => (
                            <img key={index} src={src} alt={`Category ${index}`} className='category-image' />
                        ))}
                    </div>
                    <button onClick={nextImages} disabled={currentIndex + 3 >= images.length} className='arrow-button'>
                        &gt;
                    </button>
                </div>
            </div>
        </>

    );
};

export default Header;
