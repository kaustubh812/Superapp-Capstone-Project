import React from "react";
import DJ from '../../assets/DJ.png'
import styles from './Banner.module.css'

const Banner = () => {
    return (
        <img src={DJ} className={styles.DJ} />
    )
}

export default Banner