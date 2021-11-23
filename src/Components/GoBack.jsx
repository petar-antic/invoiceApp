import React, { useContext } from 'react';
import '../Styles/GoBack/GoBack.css';
import arrowLeft from '../Assets/icon-arrow-left.svg';
import { InvoiceContext } from '../Contexts/InvoiceContext';

const GoBack = () => {
    const { showInvoice } = useContext(InvoiceContext);
    return (
        <div className="goBack" type="button">
            <img src={arrowLeft} alt="Go Back" />
            <span>Go Back</span>
        </div>
    );
};

export default GoBack;
