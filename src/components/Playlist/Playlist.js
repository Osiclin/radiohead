//styles
import More from '../More/More'
import Text from '../Text/Text'
import Title from '../Title/Title'

//styles
import styles from './Playlist.module.css'

export default function Playlist() {
    const text='Stream guest playlists curated by the artists you love. Also, check out our original playlists hand-picked by our team of experts.'
    const featured = [
        '/images/Playlist/1.png',
        '/images/Playlist/2.png'
    ]

    return(
        <div className={styles.container}>
            <div className={styles.innerWrapper}>
                <div className={styles.textContainer}>
                    <Title
                        title='Hand-picked playlists'
                    />
                    <Text
                        text={text}
                    />
                    <More
                        text='Discover Radioheat'
                    />
                </div>
                <div className={styles.imageContainer}>
                    {
                        featured.map((item, i) => <Card src={item} key={i} />)
                    }
                </div>
            </div>
        </div>
    )
}

const Card = ({src}) => {
    return(
        <div>
            <img 
                src={src} 
                className={styles.image} 
                width='296px' 
                height='493px' 
                alt='featured' 
            />
        </div>
    )
}