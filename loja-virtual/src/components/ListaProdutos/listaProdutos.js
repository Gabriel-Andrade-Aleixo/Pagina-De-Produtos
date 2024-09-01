import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './listaProdutos.module.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [sortBy, setSortBy] = useState('price');
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 5;

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

    const sortedProducts = products.sort((a, b) => {
        if (sortBy === 'preco') return a.price - b.price;
        if (sortBy === 'nome') return a.title.localeCompare(b.title);
        return 0;
    });

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            <div>
                <label>
                    Ordenar por:
                    <select onChange={(e) => setSortBy(e.target.value)}>
                        <option value="preco">Preço</option>
                        <option value="nome">Nome</option>
                    </select>
                </label>
            </div>
            <div className={styles.productList}>
                {currentProducts.map(product => (
                    <div key={product.id} className={styles.productItem}>
                        <img src={product.image} alt={product.title} className={styles.productImage} />
                        <h2 className={styles.productTitle}>{product.title}</h2>
                        <p className={styles.productPrice}>${product.price}</p>
                    </div>
                ))}
            </div>
            <div className={styles.pagination}>
                {[...Array(Math.ceil(products.length / productsPerPage)).keys()].map(number => (
                    <button key={number} className={styles.paginationButton} onClick={() => handlePageChange(number + 1)}>
                        {number + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
