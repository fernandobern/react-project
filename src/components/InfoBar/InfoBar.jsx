import './InfoBar.css'
import { IoIosSettings } from "react-icons/io";

function InfoBar() {
    return (
        <div className='infobar'>
            <img src="https://thumbs.dreamstime.com/b/fofo-cavalheiro-da-capybara-personagem-engra%C3%A7ada-de-capibara-no-s%C3%A9culo-capa-elegante-nobre-ador%C3%A1vel-roedor-ilustra%C3%A7%C3%A3o-do-306636479.jpg" alt="" />
            <a>Usuário</a>
            <IoIosSettings className='icon' size={25}/>
        </div>

    )
}

export default InfoBar