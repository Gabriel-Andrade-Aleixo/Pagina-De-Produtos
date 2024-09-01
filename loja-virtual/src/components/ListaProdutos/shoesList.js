import React, { useEffect, useState } from 'react';
import styles from './shoesList.module.css';

const ShoesList = () => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => {
        const filteredShoes = data.filter(product => product.category.name === 'Shoes');
        setShoes(filteredShoes);
      })
      .catch(error => console.error('Erro ao buscar produtos:', error));
  }, []);

  return (
    <div className={styles.shoesList}>
      {shoes.length > 0 ? (
        shoes.map(shoe => (
          <div key={shoe.id} className={styles.shoeItem}>
            <img src={shoe.images[0]} alt={shoe.title} />
            <h3>{shoe.title}</h3>
            <p>{`$${shoe.price}`}</p>
          </div>
        ))
      ) : (
        <p>Carregando produtos...</p>
      )}
    </div>
  );
};

export default ShoesList;
