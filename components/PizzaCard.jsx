import Image from 'next/image';
import React from 'react';
import styles from '../styles/PizzaCard.module.css'

const PizzaCard = () => {
    return (
        <div className={styles.container}>
            <Image src="/img/pizza.png" width='500' height='500' alt="" />
            <h1 className={styles.title}>FiORI DI ZUCCA</h1>
            <span className={styles.price}>$19.90</span>
            <p className={styles.desc}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, numquam!
            </p>
        </div>
    );
};

export default PizzaCard;