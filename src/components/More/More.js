import { purple } from "../../constants/constants";

export default function More({text}) {
    return(
        <div style={{display: 'flex', alignItems: 'center', color: purple, margin: '1rem 0 0 0'}}>
            <svg width="15" height="18" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.36016 23.5C2.65189 23.5 1.94311 23.2396 1.38933 22.7158C0.244659 21.6313 0.199012 19.8271 1.28701 18.6861L7.68656 11.9801L1.29353 5.32047C0.20152 4.18347 0.241649 2.37926 1.38332 1.29074C2.52548 0.202217 4.3358 0.242699 5.4278 1.3802L13.7069 10.0029C14.7623 11.1024 14.7643 12.8342 13.7134 13.9372L5.43482 22.6139C4.87152 23.2021 4.1176 23.5 3.36016 23.5Z" fill="#7971E9"/>
            </svg>
            <p 
                style={{
                    fontSize: '1.5rem', 
                    maxWidth: '610px',
                    margin: '0 0 0 .5rem'
                }}
            >
                {text}
            </p>
        </div>
    )
}