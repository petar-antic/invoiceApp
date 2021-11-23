import React, { useContext } from 'react';
import '../Styles/Invoices/Invoices.css';
import InvoicesList from './InvoicesList';
import ViewInvoice from './ViewInvoice';
// import EditItem from './EditItem';
import { InvoiceContext } from '../Contexts/InvoiceContext';

const Invoices = () => {
    const { showInvoice } = useContext(InvoiceContext);
    console.log(showInvoice);
    return (
        <>
            {!showInvoice && <InvoicesList />}
            {showInvoice && <ViewInvoice />}
            {/* <EditItem /> */}
        </>
    );
};

export default Invoices;
