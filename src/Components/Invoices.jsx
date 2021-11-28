import React from 'react';
import '../Styles/Invoices/Invoices.css';
import Invoice from './Invoice';
import Header from './Header';

const Invoices = () => {
    return (
        <div className="invoices">
            <Header />
            <ul className="invoiceList">
                <Invoice />
            </ul>
        </div>
    );
};

export default Invoices;
