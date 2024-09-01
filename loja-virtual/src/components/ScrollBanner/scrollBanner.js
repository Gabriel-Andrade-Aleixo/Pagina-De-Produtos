// src/components/ScrollBanner.js
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import styles from './scrollBanner.module.css'; // Importa o módulo CSS

const ScrollBanner = () => {
    const [products, setProducts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const wrapperRef = useRef(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        if (products.length > 0) {
            // Duplicar a lista de produtos para criar um efeito contínuo
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => {
                    const newIndex = (prevIndex + 1) % products.length;
                    if (wrapperRef.current) {
                        wrapperRef.current.style.transform = `translateX(-${newIndex * 100}%)`;
                    }
                    return newIndex;
                });
            }, 5000); // Muda o produto a cada 3 segundos

            return () => clearInterval(interval);
        }
    }, [products]);

    // Duplicar os produtos para efeito contínuo
    const duplicatedProducts = [...products, ...products];

    return (
        <>
            <div className={styles.scrollBanner}>
                <div className={styles.bannerWrapper} ref={wrapperRef}>
                    {duplicatedProducts.map((product, index) => (
                        <div
                            key={index}
                            className={styles.bannerItem}
                        >
                            <img src={product.image} alt={product.title} />
                            <h3>{product.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
            <hr></hr>
        </>
    );
};

export default ScrollBanner;
