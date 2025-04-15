import './Input.css'

function Input({type = 'text', placeholder, value, onChange}) {
    return (
        <input
            type={type}
            className="input"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    )
}

export default Input 