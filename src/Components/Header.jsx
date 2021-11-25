import React, { useState } from 'react';
import '../Styles/Header/Header.css';
import plus from '../Assets/icon-plus.svg';
import arrowDown from '../Assets/icon-arrow-down.svg';
import { Link } from 'react-router-dom';

function Header() {
    const [show, setShow] = useState(false);
    return (
        <div className="header">
            <div className="heading">
                <span className="title">Invoices</span>
                <span className="subtitle">7 invoices</span>
            </div>
            <div className="right">
                <div className="dropdown">
                    <div className="dropdownSelect">
                        <span className="select" type="button">
                            Filter
                        </span>
                        <img
                            className="arrowDown"
                            src={arrowDown}
                            alt="arrowDown"
                            type="button"
                            onClick={setShow}
                        />
                    </div>
                    {show ? (
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
                    ) : null}
                </div>
                <Link className="newBtn" to={`/add/invoice`}>
                    <div className="circle">
                        <img className="plus" src={plus} alt="plus" />
                    </div>
                    <span>New</span>
                </Link>
            </div>
        </div>
    );
}

export default Header;
