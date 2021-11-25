import React, { useContext } from 'react';
import '../Styles/Invoice/Invoice.css';
import { InvoiceContext } from '../App';
import { Link } from 'react-router-dom';

const Invoice = () => {
    const { invoiceList, findActiveInvoice } = useContext(InvoiceContext);
    return invoiceList.map((invoice) => (
        <Link
            className="invoice"
            key={invoice.id}
            id="invoiceBtn"
            to={`/invoice/${invoice.id}`}
            onClick={() => findActiveInvoice(invoice.id)}
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
        </Link>
    ));
};

export default Invoice;
