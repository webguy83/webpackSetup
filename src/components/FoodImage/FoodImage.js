import React from 'react';
import styles from './FoodImage.module.css';
import FoodImage from '../../assets/pizza.jpg';

export default (props) => {
    return (
        <div className={styles.FoodImage}>
            <img src={FoodImage} className={styles.FoodImg} alt="Tasty Food"/>
        </div>
    );
};