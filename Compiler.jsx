import React from 'react'
import styles from './Compiler.module.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Compiler = () => {
    return (
        <>
            <div className={styles.mainnnn}>
                <div className={styles.nav}>
                    <img src="/image 1.svg" alt="" className={styles.logo} />
                    <li className={styles.nav}>
                        <a href="#about">practice</a>
                        <a href="#testimonials">interview pre.</a>
                        <a href="#course">evaluate</a>
                    </li>
                </div>
                <div className={styles.division}>
                    <div className={styles.row}>
                        <div className={styles.row1}>
                            <div className={styles.div4}>
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8c570b689ea06e9a5cef63f3b5c0482ef60eff6b259320293cf2f7f6fe3d1401?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c570b689ea06e9a5cef63f3b5c0482ef60eff6b259320293cf2f7f6fe3d1401?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c570b689ea06e9a5cef63f3b5c0482ef60eff6b259320293cf2f7f6fe3d1401?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c570b689ea06e9a5cef63f3b5c0482ef60eff6b259320293cf2f7f6fe3d1401?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c570b689ea06e9a5cef63f3b5c0482ef60eff6b259320293cf2f7f6fe3d1401?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c570b689ea06e9a5cef63f3b5c0482ef60eff6b259320293cf2f7f6fe3d1401?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c570b689ea06e9a5cef63f3b5c0482ef60eff6b259320293cf2f7f6fe3d1401?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c570b689ea06e9a5cef63f3b5c0482ef60eff6b259320293cf2f7f6fe3d1401?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd"
                                    className={styles.img3}
                                />
                                <div className={styles.div5}>
                                    <div className={styles.problemSolving}>Problem Solving </div>
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/725c41511f71756ca71d472d19c1ee5b85a03884eb18b2944f421657bde469f8?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/725c41511f71756ca71d472d19c1ee5b85a03884eb18b2944f421657bde469f8?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/725c41511f71756ca71d472d19c1ee5b85a03884eb18b2944f421657bde469f8?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/725c41511f71756ca71d472d19c1ee5b85a03884eb18b2944f421657bde469f8?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/725c41511f71756ca71d472d19c1ee5b85a03884eb18b2944f421657bde469f8?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/725c41511f71756ca71d472d19c1ee5b85a03884eb18b2944f421657bde469f8?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/725c41511f71756ca71d472d19c1ee5b85a03884eb18b2944f421657bde469f8?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/725c41511f71756ca71d472d19c1ee5b85a03884eb18b2944f421657bde469f8?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd"
                                        className={styles.img4}
                                    />
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4d76857c353db7f746de8dd4c8221c85efca7073fd46bd65f04cbce05098f38c?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d76857c353db7f746de8dd4c8221c85efca7073fd46bd65f04cbce05098f38c?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d76857c353db7f746de8dd4c8221c85efca7073fd46bd65f04cbce05098f38c?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d76857c353db7f746de8dd4c8221c85efca7073fd46bd65f04cbce05098f38c?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d76857c353db7f746de8dd4c8221c85efca7073fd46bd65f04cbce05098f38c?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d76857c353db7f746de8dd4c8221c85efca7073fd46bd65f04cbce05098f38c?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d76857c353db7f746de8dd4c8221c85efca7073fd46bd65f04cbce05098f38c?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d76857c353db7f746de8dd4c8221c85efca7073fd46bd65f04cbce05098f38c?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd"
                                        className={styles.img5}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={styles.row2}>
                            <select className={styles.dropdown2}>
                                <option value="java">JAVA</option>
                                <option value="python">Python</option>
                                <option value="c">C</option>
                                <option value="sql">SQL</option>
                                <option value="csharp">C#</option>
                                <option value="cpp">C++</option>
                            </select>

                            <div className={styles.auto}>
                                <div className={styles.autoComplete}>Auto Complete</div>
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/472074a1feccab44c5ce2a4d255923a80cf907dd1543bbd9b168d0b0419e858d?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/472074a1feccab44c5ce2a4d255923a80cf907dd1543bbd9b168d0b0419e858d?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/472074a1feccab44c5ce2a4d255923a80cf907dd1543bbd9b168d0b0419e858d?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/472074a1feccab44c5ce2a4d255923a80cf907dd1543bbd9b168d0b0419e858d?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/472074a1feccab44c5ce2a4d255923a80cf907dd1543bbd9b168d0b0419e858d?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/472074a1feccab44c5ce2a4d255923a80cf907dd1543bbd9b168d0b0419e858d?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/472074a1feccab44c5ce2a4d255923a80cf907dd1543bbd9b168d0b0419e858d?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/472074a1feccab44c5ce2a4d255923a80cf907dd1543bbd9b168d0b0419e858d?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd"
                                    className={styles.img7}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.main}>
                        <div className={styles.scroll}>
                        <div className={styles.sidebar}>
                                <button>Description</button>
                                <button>Hints</button>
                                <button>Solution</button>
                                <button>Discussion</button>
                            </div>
                        </div>
                    
                        <div className={styles.box1}>
                            
                            <div className={styles.questionbody}>
                                <div className={styles.title}>
                                    <h1>1. Merge Strings</h1>
                                    <button>solved</button>
                                </div>
                                <div className={styles.paragraph}>
                                    <p>Merge sort is an efficient, stable, and comparison-based
                                        sorting algorithm that follows the divide-and-conquer
                                        approach. It divides the input array into two halves,
                                        recursively sorts each half, and then merges the sorted
                                        halves to produce the final sorted array. The merge
                                        process ensures that elements are combined in a sorted
                                        order.
                                    </p>
                                </div>
                                <div className={styles.input}>
                                    <h1>Sample 1 Input</h1>
                                    <div className={styles.inputbox}></div>
                                </div>
                                <div className={styles.input}>
                                    <h1>Sample 1 Input</h1>
                                    <div className={styles.inputbox}></div>
                                </div>
                                <div className={styles.line} />
                                <div className={styles.input}>
                                    <h1>Sample 1 Input</h1>
                                    <div className={styles.inputbox}></div>
                                </div>
                                <div className={styles.input}>
                                    <h1>Sample 1 Input</h1>
                                    <div className={styles.inputbox}></div>
                                </div>
                                <div><br></br><br></br><br></br></div>
                            </div>
                        </div>

                        <div className={styles.box2}>
                            
                            <div className={styles.questionbody}>
                                <div className={styles.title}>
                                    <h1>1. Merge Strings</h1>
                                    <button>solved</button>
                                </div>
                                <div className={styles.paragraph}>
                                    <p>Merge sort is an efficient, stable, and comparison-based
                                        sorting algorithm that follows the divide-and-conquer
                                        approach. It divides the input array into two halves,
                                        recursively sorts each half, and then merges the sorted
                                        halves to produce the final sorted array. The merge
                                        process ensures that elements are combined in a sorted
                                        order.
                                    </p>
                                </div>
                                <div className={styles.input}>
                                    <h1>Sample 1 Input</h1>
                                    <div className={styles.inputbox}></div>
                                </div>
                                <div className={styles.input}>
                                    <h1>Sample 1 Input</h1>
                                    <div className={styles.inputbox}></div>
                                </div>
                                <div className={styles.line} />
                                <div className={styles.input}>
                                    <h1>Sample 1 Input</h1>
                                    <div className={styles.inputbox}></div>
                                </div>
                                <div className={styles.input}>
                                    <h1>Sample 1 Input</h1>
                                    <div className={styles.inputbox}></div>
                                </div>
                                <div><br></br><br></br><br></br></div>
                            </div>
                        </div>

 
                    </div>
                </div>

            </div>
        </>
    );
};
export default Compiler;