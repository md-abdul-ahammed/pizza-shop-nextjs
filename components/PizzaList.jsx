import React from 'react';
import styles from '../styles/PizzaList.module.css'
import PizzaCard from './PizzaCard';

const PizzaList = ({ pizzaList }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>The Best Pizza In Town</h1>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique atque eaque nam cumque cum est debitis sapiente laboriosam! Voluptates expedita, consectetur quaerat non vitae excepturi ad illum.
            </p>
            <div className={styles.wrapper}>
                {pizzaList.map(pizza => (
                    <PizzaCard key={pizza._id} pizza={pizza} />
                ))}

            </div>
        </div>
    );
};

export default PizzaList;