import Image from 'next/image';
import React from 'react';
import styles from '../styles/Header.module.css';
import { useSelector } from 'react-redux';
import Link from 'next/link';


const Header = () => {
    const quantity = useSelector(state => state.cart.quantity)
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <Image width='32' height='32' src="/img/telephone.png" alt="call-logo" />
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>ORDER NOW !</div>
                    <div className={styles.text}>01865 763836 </div>
                </div>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <Link href="/" passHref>
                        <li className={styles.listItem}>Homepage</li>
                    </Link>
                    <li className={styles.listItem}>Products</li>
                    <li className={styles.listItem}>Menu</li>
                    <Image width='160' height='69' src="/img/ahammed-logo.png" alt="call-logo" />
                    <li className={styles.listItem}>Events</li>
                    <li className={styles.listItem}>Blog</li>
                    <li className={styles.listItem}>Contact</li>
                </ul>
            </div>
            <Link href='/cart' passHref>
                <div className={styles.item}>
                    <div className={styles.cart}>
                        <Image width='30' height='30' src="/img/cart.png" alt="call-logo" />
                        <div className={styles.counter}>{quantity}</div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Header;