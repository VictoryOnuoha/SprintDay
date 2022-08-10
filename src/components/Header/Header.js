import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../styles/partials/_global.scss';
import avatar from '../../assets/icons/avatar.svg';

class Header extends Component {
    state = {
        displayMenu: false
    }
   
    render() {
        const handleClick = (e) => {
            e.preventDefault();
            this.setState({
                displayMenu: !this.state.displayMenu
            })
            console.log('You clicked a button')
        }
        return (
            <header className='header' >
                <section className='header__logo'>
                    <h1 className='header__logo-text' >SPRINTDAY</h1>
                </section>

                <section className='header__navigation'>
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
                        {/* ternary statemnet of e.g displayMenu ? 'header__list' : 'header__list--hidden' */}
                        <ul className='header__list'   >
                            <Link to='/' >
                                <li className='header__list-item' >DASHBOARD</li>
                            </Link>

                            <Link to='/projects' >
                                <li className='header__list-item' >TASKS</li>
                            </Link>

                          
                        </ul>
                    </section>

                    {/* Will be displayed in mobile: Hamburger menu */}
                    <section className='header__hamburger'  onClick={handleClick}  >
                        <div className='header__hamburger1'></div>
                        <div className='header__hamburger2'></div>
                        <div className='header__hamburger3'></div>
                    </section>

                </section>
            </header>
        )
    }

}

export default Header 