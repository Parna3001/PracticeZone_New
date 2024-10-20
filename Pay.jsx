import React from 'react'
import styles from'./Pay.module.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Pay = () => {
    return (
        <>
        <div className={styles.entire}>
         <div className={styles.level}>
           
            <div className={styles.nav}>
                <img src="/image 1.svg" alt="" className={styles.logo} />
                <li className={styles.nav}>
                 <a href="#about">practice</a>
                 <a href="#testimonials">interview pre.</a>
                 <a href="#course">evaluate</a>
                </li>
            </div>
            <div className={styles.secondpart}>
                <div className={styles.textfirst}>
                  <h1>Level Up Your Skills — Practice, Compete, and Conquer Code!</h1>
                  <p className={styles.subtitlecloud}>From Beginner to Pro — Build Your Coding Confidence with Every Challenge!</p>
                  <button className={styles.start}>start from today</button>
                </div>

                <div className={styles.imagefirst}>
                   <img src="/image 83.svg" alt="" className={styles.image83} />
                </div>
            </div>
            
         </div>
         <div className={styles.bodypart}>
            <div className={styles.practice}>
                <div className={styles.pra}>
                  <h1>practice</h1>
                  <button>SEE ALL</button>
                </div>
                  <div className={styles.practicebox}></div>
            </div>
            <div className={styles.interview}>
                <div className={styles.inter}>
                  <h1>interview pre.</h1>
                  <button>SEE ALL</button>
                </div>
                <div className={styles.practicebox}></div>
            </div>
         </div>
         </div>
        </>
    );
};
export default Pay;


