import React, { useEffect, useState } from 'react';
import styles from './clothesList.module.css';

const ClothesList = () => {
    const [clothes, setClothes] = useState([]);

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data => {
                const filteredClothes = data.filter(product => product.category.name === 'Clothes');
                setClothes(filteredClothes);
            })
            .catch(error => console.error('Erro ao buscar produtos:', error));
    }, []);

    return (
        <div className={styles.clothesList}>
            {clothes.length > 0 ? (
                clothes.map(cloth => (
                    <div key={cloth.id} className={styles.clothItem}>
                        <img src={cloth.images[0]} alt={cloth.title} />
                        <h3>{cloth.title}</h3>
                        <p>{`$${cloth.price}`}</p>
                    </div>
                ))
            ) : (
                <p>Carregando produtos...</p>
            )}
        </div>
    );
};

export default ClothesList;
