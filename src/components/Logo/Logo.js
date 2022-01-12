//styles
import styles from './Logo.module.css'

export default function Logo() {
    return(
        <div style={{width: '50%'}}>
            <img src='/images/Logo/logo.png' className={styles.logo} width='236px' height='20px' alt='logo' />
        </div>
    )
}