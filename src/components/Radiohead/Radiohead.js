//components
import { purple, white } from '../../constants/constants'
import Text from '../Text/Text'
import Title from '../Title/Title'

//styles
import styles from './Radiohead.module.css'

export default function Radiohead() {
    const list = [
        {
            'title': 'A world of music in your pocket.',
            'text': 'Find new loves and old favourites from over 56 million tracks.'
        },
        {
            'title': 'Craft your collection',
            'text': 'Create playlists from millions of tracks and take them with you wherever you go.'
        },
        {
            'title': 'No WiFi? No problem.',
            'text': "With Deezer Premium, you don't need to be connected to enjoy your favourite tracks."
        },
        {
            'title': 'Made for you',
            'text': "Flow gets to know what you like and what you don't. Discover your personal soundtrack."
        },
    ]

    return(
        <div className={styles.container}>
            <div className={styles.innerWrapper}>
                <Title
                    title='Why radiohead?'
                />
                <div className={styles.listWrapper}>
                    {
                        list.map((item, i) => <List key={i} title={item.title} text={item.text} />)
                    }
                </div>
            </div>
        </div>
    )
}

const List = ({title, text}) => {
    return(
        <div className={styles.list}>
            <h1 style={{fontSize: '2rem', color: white, borderLeft: `4px solid ${purple}`, paddingLeft: '1rem'}}>{title}</h1>
            <div style={{paddingLeft: '1.3rem'}}>
                <Text text={text} />
            </div>
        </div>
    )
}