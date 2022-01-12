//components
import Button from "../Button/Button";
import Title from "../Title/Title";

//styles
import styles from './Hero.module.css'

export default function Hero() {
    return(
        <div className={styles.container}>
            <div className={styles.innerWrapper}>
                <div className={styles.leftSection}>
                    <Title
                        title='Discover, search, and play any song featuring voice control.'
                    />
                    <Button
                        name='Try it free'
                        pr='1.5rem'
                        pl='1.5rem'
                        mb='2rem'
                        bgColor='#7971E9'
                    />
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                        <img src='/images/Hero/store.png' className={styles.icon} width='120px' height='40px' alt='apple store' />
                        <img src='/images/Hero/play.png' className={styles.icon} width='120px' height='40px' alt='google store' />
                    </div>
                </div>
                <div>
                    <div>
                        <div style={{position: 'absolute', overflowX: 'hidden', top: 0, left: '790px'}}>
                            <img src='/images/Hero/1.png' className={styles.images} width='453px' height='451px' alt='apple store' />
                        </div>
                        <div style={{position: 'absolute', overflow: 'hidden', top: 0, left: '1200px'}}>
                            <img src='/images/Hero/2.png' className={styles.images} width='453px' height='409px' alt='google store' />
                        </div>
                    </div>
                    <div>
                        <div style={{position: 'absolute', overflow: 'hidden', bottom: -4, left: '500px'}}>
                            <img src='/images/Hero/3.png' className={styles.images} width='453px' height='439px' alt='apple store' />
                        </div>
                        <div style={{position: 'absolute', overflow: 'hidden', bottom: -4, left: '910px'}}>
                            <img src='/images/Hero/4.png' className={styles.images} width='454px' height='481px' alt='google store' />
                        </div>
                    </div>
                    <div>
                        <div style={{position: 'absolute', overflow: 'hidden', top: '220px', left: '1380px'}}>
                            <img src='/images/Hero/5.png' className={styles.images} width='318px' height='552px' alt='apple store' />
                        </div>
                        <div style={{position: 'absolute', overflow: 'hidden', bottom: -4, left: '1100px'}}>
                            <img src='/images/Hero/6.png' className={styles.images} width='453px' height='127px' alt='apple store' />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}