//components
import Button from "../Button/Button"

//constants
import { white } from "../../constants/constants"

//styles
import styles from './Header.module.css'
import Logo from "../Logo/Logo"

export default function Header() {
    const menu = ['Contact', 'Plans', 'Blog']

    return(
        <div className={styles.container}>
            <div className={styles.innerWrapper}>
                <Logo/>
                <div className={styles.menu}>
                    <ul style={{margin: 0, listStyle: 'none', padding: 0, display: 'flex'}}>
                        {
                            menu.map((item, i) => <li key={i} style={{color: white, fontSize: '1.5rem', margin: '0 2rem 0 0'}}>{item}</li>)
                        }
                    </ul>
                    <Button
                        name='Sign In'
                        pr='1.5rem'
                        pl='1.5rem'
                        mr='2rem'
                        bgColor='#7971E9'
                    />
                    <Button
                        name='Sign Up'
                        pr='1.5rem'
                        pl='1.5rem'
                    />
                </div>
                <div className={styles.hamburger}>
                    <span style={{color: white}}>&#9776;</span>
                </div>
            </div>
        </div>
    )
}