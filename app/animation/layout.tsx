import React from 'react'
import styles from './styles.module.css'
function layout({ children }) {
    return (
        <div className={styles.body} >
            {children}
        </div>
    )
}

export default layout