
type HeaderType = {
    text: string
}

const Header = ({text}: HeaderType) => {
    return <header className="font-bold bg-black text-white py-6" >
        <h1 className="uppercase text-4xl text-center">{text}</h1>
    </header>
}

export default Header