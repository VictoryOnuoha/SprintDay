import '../../styles/partials/_global.scss';
import {useState} from 'react';

import avatar from '../../assets/icons/avatar.svg';

function Header () {
    const [hamburgermenu, setHamburgermenu] = useState(false);

    const toggleHamburgerMenu = () => {
        setHamburgermenu(!hamburgermenu)
    }

    return (
        <header className='header' >
            <section className='header__logo'>
                <h1 className='header__logo-text' >SPRINTDAY</h1>
            </section>

            <section className='header__user' >
                <article className='header__image' >
                    <img className='header__avatar' src={avatar} alt='avatar of user' />
                </article>

                <article className='header__title-box' >
                    <h2 className='header__title' >Hello Stella!</h2>
                </article>
                
            </section>
            {/* Will be displayed in tablet and desktop */}
            <section className='header__nav' >
                <ul className='header__list' >
                    <li className='header__list-item' >DASHBOARD</li>
                    <li className='header__list-item' >PROJECTS</li>
                    <li className='header__list-item' >TASKS</li>
                </ul>
            </section>

            {/* Will be displayed in mobile: Hamburger menu */}
            <section className='header__hamburger' >
                <div className='header__hamburger1'></div>
                <div className='header__hamburger2'></div>
                <div className='header__hamburger3'></div>
            </section>

        </header>
    )
}

export default Header 