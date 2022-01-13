//components
import { grey, white } from "../../constants/constants";
import Logo from "../Logo/Logo";
import Text from "../Text/Text";

//styles
import styles from './Footer.module.css'

export default function Footer() {
    const text = 'Radiohead is the first global music streaming service with high fidelity sound, hi-def video quality, along with expertly curated playlists and original content making it a trusted source for music and culture.'
    const list = [
        {
            'title': 'Get Started',
            'options': ['Get Started', 'Playlist Import', 'Supported Devices', 'Get Support']
        },
        {
            'title': 'Discover',
            'options': ['About', 'Magazine']
        },
        {
            'title': 'Account',
            'options': ['Sign Up', 'Redeem Vouche', 'Redeem Giftcard', 'Manage Account', 'Store']
        },
        {
            'title': 'Company',
            'options': ['Partners', 'Careers', 'Press']
        }
    ]

    return(
        <div className={styles.container}>
            <div className={styles.innerWrapper}>
                <div style={{paddingBottom: '3rem'}}>
                    <div style={{marginBottom: '2rem'}}>
                        <Logo/>
                    </div>
                    <Text 
                        text={text} 
                        textS='1.125rem'
                    />
                </div>
                <div className={styles.listWrapper}>
                    {
                        list.map((item, i) => <List key={i} title={item.title} item={item.options} />)
                    }
                </div>
            </div>
            <div style={{padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#1B262C'}}>
                <img src='/images/Social/instagram.png' className={styles.icons} width='22px' height='22px' alt='instagram' />
                <img src='/images/Social/facebook.png' className={styles.icons} width='14px' height='22px' alt='facebook' />
                <img src='/images/Social/twitter.png' className={styles.icons} width='22px' height='16px' alt='twitter' />
            </div>
        </div>
    )
}

const List = ({title, item}) => {
    return(
        <div>
            <div style={{color: grey, fontSize: '2rem'}}>{title}</div>
            <ul style={{listStyle: 'none', padding: 0, fontSize: '1.2rem', color: white}}>
                {
                    item.map((list, i) => <li key={i} style={{marginBottom: '.5rem'}}>{list}</li>)
                }
            </ul>
        </div>
    )
}