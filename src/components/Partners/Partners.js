//styles
import styles from './Partners.module.css'

export default function Partners() {
    return(
        <div className={styles.container}>
            <div className={styles.innerWrapper}>
                <div style={{margin: '1rem 2rem 1rem 0'}}>
                    <img src='/images/Partners/playstation.png' width='80%' height='80%' alt='playstation' />
                </div>
                <div style={{margin: '1rem 2rem 1rem 0'}}>
                    <img src='/images/Partners/blackberry.png' width='80%' height='80%' alt='blackberry' />
                </div>
                <div style={{margin: '1rem 2rem 1rem 0'}}>
                    <img src='/images/Partners/redbull.png' width='80%' height='80%' alt='redbull' />
                </div>
                <div style={{margin: '1rem 2rem 1rem 0'}}>
                    <img src='/images/Partners/tiktok.png' width='80%' height='80%' alt='tiktok' />
                </div>
                <div style={{margin: '1rem 0rem 1rem'}}>
                    <img src='/images/Partners/sennheiser.png' width='80%' height='80%' alt='sennheiser' />
                </div>
            </div>
        </div>
    )
}