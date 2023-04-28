import SearchBar from "../SearchBar/SearchBar";
import style from './Nav.module.css'
import { NavLink } from 'react-router-dom'

function Nav({onSearch, setAccess}){

    const handleLogOut=()=>{
        setAccess(false);
    }

    return(
        <div className={style.containerNav}>

            <button className={style.about}>
                <NavLink to='/about' className={style.navlink} >ABOUT</NavLink>
            </button>

            <button className={style.home}>
                <NavLink to='/home' className={style.navlink}>HOME</NavLink>
            </button>

            <button onClick={handleLogOut} className={style.logout}>LOG OUT</button>

            <button className={style.favorites}><NavLink to='/favorites' className={style.navlink}>FAVORITES</NavLink></button>

            <SearchBar
                onSearch={onSearch}
            />

        </div>
    )
}

export default Nav;