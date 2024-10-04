import React from 'react';
import styles from './ProductList.module.css';
import img1 from '../ProductList/img1.webp';
import img2 from '../ProductList/img2.jpeg';
import img3 from '../ProductList/img3.jpeg';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: "Anupam 18G Tope / Patila Round & Flat Bottom | Stainless Steel", price: 165, originalPrice: 220, discount: "25% OFF", imgSrc: img1 },
  { id: 2, name: "Anupam Hammered (Matar) 18G Tope / Patila", price: 188, originalPrice: 250, discount: "25% OFF", imgSrc: img2 },
  { id: 3, name: "Anupam 18G Tope / Patila Round & Flat Bottom | Stainless Steel", price: 165, originalPrice: 220, discount: "25% OFF", imgSrc: img3 },
  { id: 4, name: "Anupam 18G Tope / Patila Round & Flat Bottom | Stainless Steel", price: 165, originalPrice: 220, discount: "25% OFF", imgSrc: img2 },
  { id: 5, name: "Anupam 18G Tope / Patila Round & Flat Bottom | Stainless Steel", price: 165, originalPrice: 220, discount: "25% OFF", imgSrc: img1 },
];

const ProductList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button className={styles.backButton}> <Link to={"/"}>←</Link></button>
        <h2>Anupam (Premium) (24 items)</h2>
        <div className={styles.searchIcon}>🔍</div>
      </div>

      <div className={styles.productsGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <img src={product.imgSrc} alt={product.name} className={styles.productImage} />
            <div className={styles.productDetails}>
              <h4 className={styles.productName}>{product.name}</h4>
              <p className={styles.productPrice}>
                ₹{product.price} <span className={styles.originalPrice}>₹{product.originalPrice}</span> <span className={styles.discount}>{product.discount}</span>
              </p>
              <button className={styles.addButton}>ADD +</button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        <button className={styles.sortButton}>⇅ Sort</button>
        <button className={styles.filterButton}>⧉ Filter</button>
      </div>
    </div>
  );
};

export default ProductList;
