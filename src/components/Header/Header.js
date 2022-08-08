import '../../styles/partials/_global.scss';
import avatar from '../../assets/icons/avatar.svg';
function Header () {
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

            <section className='nav' >
                <ul className='nav__list' >
                    <li className='nav__list-item' >DASHBOARD</li>
                    <li className='nav__list-item' >PROJECTS</li>
                    <li className='nav__list-item' >TASKS</li>
                </ul>
            </section>

        </header>
    )
}

export default Header 