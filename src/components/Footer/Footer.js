import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <small>Copyright &copy; 2024 Catarina Esposito Mendes - 301453564 - Web Application Development - Fall {currentYear} -
                Assignment 1
            </small>
        </footer>
    );
};

export default Footer;
