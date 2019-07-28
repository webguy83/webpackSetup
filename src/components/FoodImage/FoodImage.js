import React from 'react';
import styles from './FoodImage.module.css';
import FoodImage from '../../assets/pizza.jpg';

const FoodImage = (props) => {
    return (
        <div className={styles.FoodImage}>
            <img src={FoodImage} className={styles.FoodImg} alt="Tasty Food"/>
        </div>
    );
};

export default FoodImage;