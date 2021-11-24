import React, { useState } from 'react';
import invoices from '../Constants/data';

export const InvoiceContext = React.createContext();

export function InvoiceProvider({ children }) {
    const [invoiceList, setInvoices] = useState(invoices);
    const [activeInvoice, setActiceInvoice] = useState(0);
    const [show, setShowResults] = useState(true);

    function viewInvoice(id) {
        if (id === undefined) {
            return;
        } else {
            setShowResults(false);
            setActiceInvoice(id);
        }
    }

    return (
        <InvoiceContext.Provider
            value={{
                invoiceList,
                activeInvoice,
                setActiceInvoice,
                viewInvoice,
                setInvoices,
                show,
                setShowResults,
            }}
        >
            {children}
        </InvoiceContext.Provider>
    );
}
