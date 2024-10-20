import React from 'react';
import styles from './Newpay.module.css';
import { useState, useEffect } from "react";

const Newpay = () => {
    const [isChecked, setIsChecked] = useState(false);

  // Step 2: Create a function to handle checkbox changes
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle the state value
  };
  return (
    <>
       <div className={styles.nav_code}>
        <div className={styles.div}>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bf55ac0e6cf99293ff39f98c60129102a28c9feffee6fc9cd083a9972568f473?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf55ac0e6cf99293ff39f98c60129102a28c9feffee6fc9cd083a9972568f473?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf55ac0e6cf99293ff39f98c60129102a28c9feffee6fc9cd083a9972568f473?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf55ac0e6cf99293ff39f98c60129102a28c9feffee6fc9cd083a9972568f473?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf55ac0e6cf99293ff39f98c60129102a28c9feffee6fc9cd083a9972568f473?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf55ac0e6cf99293ff39f98c60129102a28c9feffee6fc9cd083a9972568f473?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf55ac0e6cf99293ff39f98c60129102a28c9feffee6fc9cd083a9972568f473?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf55ac0e6cf99293ff39f98c60129102a28c9feffee6fc9cd083a9972568f473?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd"
            className={styles.img}
          />
          <div className={styles.div2}>
            <div>practice</div>
            <div>interview pre.</div>
            <div>Evaluate</div>
            </div>
            <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/df74f5459d8ab7d43c3c3c41ca98f3a388fa5760b9aef88c12c5b2c6e3f27a55?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/df74f5459d8ab7d43c3c3c41ca98f3a388fa5760b9aef88c12c5b2c6e3f27a55?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/df74f5459d8ab7d43c3c3c41ca98f3a388fa5760b9aef88c12c5b2c6e3f27a55?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/df74f5459d8ab7d43c3c3c41ca98f3a388fa5760b9aef88c12c5b2c6e3f27a55?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/df74f5459d8ab7d43c3c3c41ca98f3a388fa5760b9aef88c12c5b2c6e3f27a55?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/df74f5459d8ab7d43c3c3c41ca98f3a388fa5760b9aef88c12c5b2c6e3f27a55?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/df74f5459d8ab7d43c3c3c41ca98f3a388fa5760b9aef88c12c5b2c6e3f27a55?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/df74f5459d8ab7d43c3c3c41ca98f3a388fa5760b9aef88c12c5b2c6e3f27a55?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd"
            className={styles.img2}
          />
        </div>
        </div>

      <div className={styles.coding2}>
        <div className={styles.div3}>
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
        <div className={styles.div6}>
    <select className={styles.div7}>
      <option value="java">JAVA</option>
      <option value="python">Python</option>
      <option value="c">C</option>
      <option value="sql">SQL</option>
      <option value="csharp">C#</option>
      <option value="cpp">C++</option>
    </select>
        <div className={styles.div8}>
          <div className={styles.autoComplete}>Auto Complete</div>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/472074a1feccab44c5ce2a4d255923a80cf907dd1543bbd9b168d0b0419e858d?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/472074a1feccab44c5ce2a4d255923a80cf907dd1543bbd9b168d0b0419e858d?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/472074a1feccab44c5ce2a4d255923a80cf907dd1543bbd9b168d0b0419e858d?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/472074a1feccab44c5ce2a4d255923a80cf907dd1543bbd9b168d0b0419e858d?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/472074a1feccab44c5ce2a4d255923a80cf907dd1543bbd9b168d0b0419e858d?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/472074a1feccab44c5ce2a4d255923a80cf907dd1543bbd9b168d0b0419e858d?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/472074a1feccab44c5ce2a4d255923a80cf907dd1543bbd9b168d0b0419e858d?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/472074a1feccab44c5ce2a4d255923a80cf907dd1543bbd9b168d0b0419e858d?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd"
            className={styles.img7}
          />
        </div>
      </div>
    </div>
    <div className={styles.div9}>
          <div className={styles.div10}>
            <div className={styles.column}>
              <div className={styles.div11}>
                <div className={styles.div12}>
                  <div className={styles.div13}>
                    <div className={styles.div14}>
                      <div className={styles.div15}>
                        {/* <button className={styles.description}>Description</button> */}
                      </div>
                      <div className={styles.div16} />
                      <div className={styles.div17}>
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/456f855a5cfc26cca567d8072456f507222d14904036faa25f378cb98d53f08f?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/456f855a5cfc26cca567d8072456f507222d14904036faa25f378cb98d53f08f?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/456f855a5cfc26cca567d8072456f507222d14904036faa25f378cb98d53f08f?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/456f855a5cfc26cca567d8072456f507222d14904036faa25f378cb98d53f08f?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/456f855a5cfc26cca567d8072456f507222d14904036faa25f378cb98d53f08f?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/456f855a5cfc26cca567d8072456f507222d14904036faa25f378cb98d53f08f?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/456f855a5cfc26cca567d8072456f507222d14904036faa25f378cb98d53f08f?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/456f855a5cfc26cca567d8072456f507222d14904036faa25f378cb98d53f08f?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd"
                          className={styles.img8}
                        />
                        </div>
                      <div className={styles.div18} />
                    </div>
                    <div className={styles.div19} >
                    </div>
                  </div>
                  <div className={styles.div20}>
                    <div className={styles.div21}>
                      <div className={styles.mergeStrings}>1. Merge Strings</div>
                      <div className={styles.solved}>SOLVED</div>
                    </div>
                    <div className={styles.div22}>
                      <div className={styles.order}>
                        Merge sort is an efficient, stable, and comparison-based
                        sorting algorithm that follows the divide-and-conquer
                        approach. It divides the input array into two halves,
                        recursively sorts each half, and then merges the sorted
                        halves to produce the final sorted array. The merge
                        process ensures that elements are combined in a sorted
                        order.
                      </div>
                      <div className={styles.sample1Input}>Sample 1 Input</div>
                      <div className={styles.div23} />
                      <div className={styles.sample1Input}>Sample 1 Input</div>
                      <div className={styles.div24} />
                      <div className={styles.div25} />
                    </div>
                    <div className={styles.div26}>
                      <div>Sample UseCase 2</div>
                      <div className={styles.div27} />
                      <div className={styles.sampleUseCase2}>Sample UseCase 2</div>
                      <div className={styles.div28} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.column2}>
              <div className={styles.div29}>
                <div className={styles.div30}>
                  <div className={styles.div31} />
                </div>
                <div className={styles.div32}>
                  <div className={styles.div33}>
                       <input type="checkbox" id="remember" className={styles.div34}/>
                       <label htmlFor="remember-me" className={styles.putCustomInput}>put custom input</label>
                  </div>
                  <div className={styles.div35}>
                    <div className={styles.div36}>
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/221e53cdd6833f83aa093a46f343e6d6b782dd0abadc2e83a5b61edcc611913b?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/221e53cdd6833f83aa093a46f343e6d6b782dd0abadc2e83a5b61edcc611913b?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/221e53cdd6833f83aa093a46f343e6d6b782dd0abadc2e83a5b61edcc611913b?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/221e53cdd6833f83aa093a46f343e6d6b782dd0abadc2e83a5b61edcc611913b?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/221e53cdd6833f83aa093a46f343e6d6b782dd0abadc2e83a5b61edcc611913b?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/221e53cdd6833f83aa093a46f343e6d6b782dd0abadc2e83a5b61edcc611913b?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/221e53cdd6833f83aa093a46f343e6d6b782dd0abadc2e83a5b61edcc611913b?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/221e53cdd6833f83aa093a46f343e6d6b782dd0abadc2e83a5b61edcc611913b?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd"
                        className={styles.img9}
                      />
                      <div>RUN</div>
                    </div>
                    <div className={styles.submit}>SUBMIT</div>
                  </div>
                </div>
                <div className={styles.div37}>
                  <div className={styles.div38}>
                    <div className={styles.column3}>
                      <div className={styles.div39}>
                        <div className={styles.usecase1}>usecase 1</div>
                        <div className={styles.usecase2}>usecase 2</div>
                        <div className={styles.usecase3}>usecase 3</div>
                        <div className={styles.div40}>
                          <div className={styles.more}>more</div>
                          <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bd6d61b43e5aa97f35284fd9ba125a0f28e65e7e5b9bbb1c7d786000cd63ec52?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd6d61b43e5aa97f35284fd9ba125a0f28e65e7e5b9bbb1c7d786000cd63ec52?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd6d61b43e5aa97f35284fd9ba125a0f28e65e7e5b9bbb1c7d786000cd63ec52?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd6d61b43e5aa97f35284fd9ba125a0f28e65e7e5b9bbb1c7d786000cd63ec52?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd6d61b43e5aa97f35284fd9ba125a0f28e65e7e5b9bbb1c7d786000cd63ec52?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd6d61b43e5aa97f35284fd9ba125a0f28e65e7e5b9bbb1c7d786000cd63ec52?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd6d61b43e5aa97f35284fd9ba125a0f28e65e7e5b9bbb1c7d786000cd63ec52?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd6d61b43e5aa97f35284fd9ba125a0f28e65e7e5b9bbb1c7d786000cd63ec52?placeholderIfAbsent=true&apiKey=873d6dc44f1342a980a85381e2d0eabd"
                          className={styles.img10}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.column4}>
                    <div className={styles.div41}>
                      <div className={styles.usecase1Input}>usecase 1 Input</div>
                      <div className={styles.div42} />
                      <div className={styles.usecase1Output}>usecase 1 Output</div>
                      <div className={styles.div43} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Newpay;
