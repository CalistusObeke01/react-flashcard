type ButtonProps = { 
    text: string,
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
    className?: string,
} 

const Button= ({text, onClick, className}:ButtonProps) => {
    return <button 
        onClick={onClick} 
        className={`bg-blue-500 hover:bg-blue-700 capitalize text-white font-bold mt-8 py-2 px-4 rounded float-right ${className}`}>
        {text}
    </button>
}

export default Button