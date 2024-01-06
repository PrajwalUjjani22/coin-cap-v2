import './Header.css'

function Header(){
    return (
        <div className='header'>
            <div>
                <span className='item'>Coins</span>
                <span className='item'>Exchanges</span>
                <span className='item'>Swap</span>
            </div>
            
            <img className='logo' alt='logo' src="https://coincap.io/static/logos/black.svg"></img>

            <div>
                <span>USD</span>
                <span className='item'>Exchanges</span>
                <span className='item'>Swap</span>
            </div>
            
        </div>

        
    )
}

export default Header