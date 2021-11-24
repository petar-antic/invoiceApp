import React, { useContext } from 'react';
import '../Styles/Invoices/Invoices.css';
import InvoicesList from './InvoicesList';
import { InvoiceContext } from '../Contexts/InvoiceContext';
import InvoiceDetails from './InvoiceDetails';

const Invoices = () => {
    const { show } = useContext(InvoiceContext);
    return (
        <>
            {show ? <InvoicesList /> : null}
            {!show ? <InvoiceDetails /> : null}
        </>
    );
};

export default Invoices;
