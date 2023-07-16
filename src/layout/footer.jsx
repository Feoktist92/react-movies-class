function Footer() {
    return (
        <footer className='page-footer light-blue darken-1'>
            <div className='footer-copyright light-blue darken-1'>
                <div className='container'>
                    © {new Date().getFullYear()} Copyright Text
                    <a
                        className='grey-text text-lighten-4 right'
                        href='https://github.com/Feoktist92/react-movies'
                    >
                        Repository
                    </a>
                </div>
            </div>
        </footer>
    );
}

export { Footer };
