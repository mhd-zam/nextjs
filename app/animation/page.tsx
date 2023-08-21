import React from 'react'
import Image from 'next/image'
import styles from './styles.module.css'

function AnimationPage() {
    return (
        <div className={styles.animationcontainer}>
            <div >
                <Image
                    className={styles.animatedimage}
                    src="/adminpanel.png"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />
            </div>
        </div>
    )
}

export default AnimationPage