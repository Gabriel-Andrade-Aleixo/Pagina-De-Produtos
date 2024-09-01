import React, { useEffect, useState } from 'react';
import styles from './allProductsList.module.css';

const AllProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Erro ao buscar produtos:', error));
  }, []);

  return (
    <div className={styles.productsList}>
      {products.length > 0 ? (
        products.map(product => (
          <div key={product.id} className={styles.productItem}>
            <img src={product.images[0]} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{`$${product.price}`}</p>
          </div>
        ))
      ) : (
        <p>Carregando produtos...</p>
      )}
    </div>
  );
};

export default AllProductsList;
