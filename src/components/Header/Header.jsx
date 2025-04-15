import './Header.css'
import InfoBar from '../InfoBar/Infobar'
import Notification from '../Notification/Notification'

function Header() {
  return (
    <header className="header">
      <InfoBar/>
      <nav className="menu">
        
        <a href="/home">Home</a>
        <a href="/dashboard">Dashboard</a>
        <a className='sair' href="/dashboard">Sair</a>
        <Notification/>
      </nav>
    </header>
  )
}

export default Header
