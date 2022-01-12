import { grey } from "../../constants/constants";

export default function Text({text, textS}) {
    return(
        <p 
            style={{
                fontSize: textS ?? '1.5rem', 
                color: grey,
                maxWidth: '610px',
                margin: 0
            }}
        >
            {text}
        </p>
    )
}