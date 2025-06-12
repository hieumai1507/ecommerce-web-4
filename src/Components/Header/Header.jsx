import "./header.css"
import logo from '../../assets/pakbayz-logo.png'

const Header = () => {
    return (
        <div className="header-bg">
        <div className='header'>
            <div className="header-logo">
                <img src={logo} alt="pakbayz-logo" />
            </div>
            <div className="header-searchbar">
                <input type="text" placeholder='What are you looking for?' />
            </div>
            <div className="header-links">
                <a href="/">Shop</a>
                <a href="/">Track your order</a>
                <a href="/">Register or Sign in</a>
            </div>
        </div>
        </div>
    )
}

export default Header
