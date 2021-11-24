import React from 'react';
import '../Styles/Footer/Footer.css';

const Footer = () => {
    const toggle = () => {
        const editItem = document.querySelector('.editItem');
        editItem.classList.toggle('hidden');
    };
    return (
        <div className="footer">
            <div className="edit" type="button" onClick={toggle}>
                Edit
            </div>
            <div className="delete" type="button">
                Delete
            </div>
            <div className="mark" type="button">
                Mark as Paid
            </div>
        </div>
    );
};

export default Footer;
