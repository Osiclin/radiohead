//styles
import styles from './Partners.module.css'

export default function Partners() {
    return(
        <div className={styles.container}>
            <div className={styles.innerWrapper}>
                <div style={{marginRight: '1rem'}}>
                    <img src='/images/Partners/playstation.png' width='100%' height='100%' alt='apple store' />
                </div>
                <div style={{marginRight: '1rem'}}>
                    <img src='/images/Partners/blackberry.png' width='100%' height='100%' alt='apple store' />
                </div>
                <div style={{marginRight: '1rem'}}>
                    <img src='/images/Partners/redbull.png' width='100%' height='100%' alt='apple store' />
                </div>
                <div style={{marginRight: '1rem'}}>
                    <img src='/images/Partners/tiktok.png' width='100%' height='100%' alt='apple store' />
                </div>
                <div>
                    <img src='/images/Partners/sennheiser.png' width='100%' height='100%' alt='apple store' />
                </div>
            </div>
        </div>
    )
}