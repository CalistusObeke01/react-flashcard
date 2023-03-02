
type HeaderProps = {
    text: string
}

const Header = ({text}: HeaderProps) => {
    return <header className="font-bold bg-black text-white py-6" >
        <h1 className="uppercase text-2xl text-center">{text}</h1>
    </header>
}

export default Header