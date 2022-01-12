export default function Button({name, pr, pl, mr, mb, bgColor, color}) {
    return(
        <button 
            style={{
                width: 'max-content',
                paddingTop: '.5rem',
                paddingBottom: '.5rem',
                paddingRight: pr,
                paddingLeft: pl,
                outline: 0,
                border: '1px solid #7971E9',
                borderRadius: '4px',
                backgroundColor: bgColor ?? 'transparent',
                color: '#ffffff' ?? color,
                marginRight: mr,
                marginBottom: mb,
                fontSize: '16px'
            }}
        >
            {name}
        </button>
    )
}