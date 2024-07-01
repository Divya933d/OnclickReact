
function Navbar(){

    const handleNavClick = (name) => {
        console.log(name);
    };

    return (
        <div className="navbar">
            <a href="#" onClick={() => handleNavClick('Home')}>Home</a>
            <a href="#" onClick={() => handleNavClick('About')}>About</a>
            <a href="#" onClick={() => handleNavClick('Contact us')}>Contact us</a>
        </div>
    );
};

export default Navbar;
