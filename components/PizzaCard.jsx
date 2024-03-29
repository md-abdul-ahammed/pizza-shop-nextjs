import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/PizzaCard.module.css'

const PizzaCard = ({ pizza }) => {
    { }
    return (
        <div className={styles.container}>

            <Link passHref href={`product/${pizza._id}`} >
                <Image src={pizza.img} width='500' height='500' alt="" />
            </Link>
            <h1 className={styles.title}>{pizza.title}</h1>
            <span className={styles.price}>{pizza.prices[0]}</span>
            <p className={styles.desc}>
                {pizza.desc}
            </p>
        </div>
    );
};

export default PizzaCard;