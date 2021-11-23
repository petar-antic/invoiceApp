import React from 'react';
import '../Styles/Invoices/Invoices.css';
import Invoice from './Invoice';
import Header from './Header';

const Invoices = () => {
    return (
        <div className="Invoices" type="button">
            <Header />
            <ul className="invoicesList">
                <Invoice />
            </ul>
        </div>
    );
};

export default Invoices;
