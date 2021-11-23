import React, { useContext } from 'react';
import '../Styles/Invoice/Invoice.css';
import { InvoiceContext } from '../Contexts/InvoiceContext';

const Invoice = () => {
    const { invoiceList, viewInvoice } = useContext(InvoiceContext);
    return invoiceList.map((invoice) => (
        <li
            className="invoice"
            id="invoiceBtn"
            onClick={() => viewInvoice(invoice.id)}
        >
            <div className="hex">
                <span>#</span>
                {invoice.id}
            </div>
            <div className="name">{invoice.clientName}</div>
            <div className="bottomSide">
                <div className="date">Duo {invoice.paymentDue}</div>
                <div className="price">£ {invoice.total}</div>
                <div className={`status ${invoice.status}`}>
                    <div className="circle"></div>
                    <div className="statusName">{invoice.status}</div>
                </div>
            </div>
        </li>
    ));
};

export default Invoice;
