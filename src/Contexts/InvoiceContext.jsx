import React, { useState } from 'react';
import invoices from '../Constants/data';

export const InvoiceContext = React.createContext();

export function InvoiceProvider({ children }) {
    const [invoiceList, setInvoices] = useState(invoices);
    const [activeInvoice, setActiceInvoice] = useState(0);
    const showInvoice = activeInvoice !== 0;

    function viewInvoice(id) {
        if (id === undefined) {
            return;
        } else {
            setActiceInvoice(id);
        }
    }

    return (
        <InvoiceContext.Provider
            value={{
                invoiceList,
                activeInvoice,
                viewInvoice,
                setInvoices,
                showInvoice,
            }}
        >
            {children}
        </InvoiceContext.Provider>
    );
}
