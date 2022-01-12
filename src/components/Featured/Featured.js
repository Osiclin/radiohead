//styles
import More from '../More/More'
import Text from '../Text/Text'
import Title from '../Title/Title'
import styles from './Featured.module.css'

export default function Featured() {
    const text='With over 60 million tracks and tons of exclusive interviews and videos, TIDAL is here to bring you closer to the artists you listen to.'
    const featured = [
        '/images/Featured/1.png',
        '/images/Featured/2.png',
        '/images/Featured/3.png',
        '/images/Featured/4.png',
        '/images/Featured/5.png',
        '/images/Featured/6.png',
    ]

    return(
        <div className={styles.container}>
            <div className={styles.innerWrapper}>
                <div className={styles.imageContainer}>
                    {
                        featured.map((item, i) => <Card src={item} key={i} />)
                    }
                </div>
                <div className={styles.textContainer}>
                    <Title
                        title='The music you love'
                    />
                    <Text
                        text={text}
                    />
                    <More
                        text='More Featured'
                    />
                </div>
            </div>
        </div>
    )
}

const Card = ({src, alt}) => {
    return(
        <div>
            <img src={src} className={styles.image} width='250px' height='250px' alt='featured' />
        </div>
    )
}