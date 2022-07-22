import globeImg from '../assets/globe.svg'
function Header() {
    return (
        <header>
            <img src={globeImg} alt="a small globe icon" />
            <h1>my travel journal.</h1>
        </header>
    )
}

export default Header