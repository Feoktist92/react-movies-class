function Header() {
    return (
        <nav className='light-blue lighten-2'>
            <div className='nav-wrapper'>
                <a
                    href='https://feoktist92.github.io/react-movies/'
                    className='brand-logo'
                >
                    React Movies
                </a>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li>
                        <a href='https://github.com/Feoktist92/react-movies'>
                            Repository
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };
