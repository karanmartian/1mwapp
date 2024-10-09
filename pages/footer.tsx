const Footer = () => {
    return (
        <div className="center">
            <hr className="featurette-divider" />
            <footer className="footer">
                <div className="container">
                    <p className="text-muted">
                        &copy; {new Date().getFullYear()} 1 Martian Way
                        Industries Pvt. Ltd
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
