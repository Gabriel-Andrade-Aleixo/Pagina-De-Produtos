import React, { useEffect, useState } from 'react';
import styles from './electronicsList.module.css';

const ElectronicsList = () => {
  const [electronics, setElectronics] = useState([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => {
        const filteredElectronics = data.filter(product => product.category.name === 'Electronics');
        setElectronics(filteredElectronics);
      })
      .catch(error => console.error('Erro ao buscar produtos:', error));
  }, []);

  return (
    <div className={styles.electronicsList}>
      {electronics.length > 0 ? (
        electronics.map(electronic => (
          <div key={electronic.id} className={styles.electronicItem}>
            <img src={electronic.images[0]} alt={electronic.title} />
            <h3>{electronic.title}</h3>
            <p>{`$${electronic.price}`}</p>
          </div>
        ))
      ) : (
        <p>Carregando produtos...</p>
      )}
    </div>
  );
};

export default ElectronicsList;
