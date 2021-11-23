import React from 'react';
import '../Styles/Header/Header.css';
import plus from '../Assets/icon-plus.svg';
import arrowDown from '../Assets/icon-arrow-down.svg';

function Header() {
    return (
        <div className="header">
            <div className="heading">
                <span className="title">Invoices</span>
                <span className="subtitle">7 invoices</span>
            </div>
            <div className="right">
                <div className="dropdown">
                    <div className="dropdownSelect">
                        <span className="select">Filter</span>
                        <img
                            className="arrowDown"
                            src={arrowDown}
                            alt="arrowDown"
                        />
                    </div>
                    <ol className="dropdownList">
                        <li className="listItem">
                            <input type="checkbox" />
                            <span>Draft</span>
                        </li>
                        <li className="listItem">
                            <input type="checkbox" />
                            <span>Panding</span>
                        </li>
                        <li className="listItem">
                            <input type="checkbox" />
                            <span>Paid</span>
                        </li>
                    </ol>
                </div>
                <div className="newBtn">
                    <div className="circle">
                        <img className="plus" src={plus} alt="plus" />
                    </div>
                    <span>New</span>
                </div>
            </div>
        </div>
    );
}

export default Header;
