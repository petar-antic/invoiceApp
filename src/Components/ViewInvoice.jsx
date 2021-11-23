import React, { useContext } from 'react';
import '../Styles/ViewInvoice/ViewInvoice.css';
import { InvoiceContext } from '../Contexts/InvoiceContext';
import GoBack from './GoBack';

const ViewInvoice = () => {
    const { invoiceList, activeInvoice } = useContext(InvoiceContext);
    const invoice = invoiceList.filter(
        (invoice) => invoice.id === activeInvoice
    );
    return invoice.map((invoice) => (
        <>
            <GoBack />
            <div className="viewInvoice">
                <div className="viewStatus">
                    <div>Status</div>
                    <div className={`status ${invoice.status}`}>
                        <div className="circle"></div>
                        <div className="statusName">{invoice.status}</div>
                    </div>
                </div>
                <div className="invoiceInfo">
                    <div className="topSide">
                        <div className="head">
                            <div className="hexId">
                                <span>#</span>
                                {invoice.id}
                            </div>
                            <div className="description">
                                {invoice.description}
                            </div>
                        </div>
                        <div className="senderAddress">
                            <div className="street">
                                {invoice.senderAddress.street}
                            </div>
                            <div className="city">
                                {invoice.senderAddress.city}
                            </div>
                            <div className="postCode">
                                {invoice.senderAddress.postCode}
                            </div>
                            <div className="country">
                                {invoice.senderAddress.country}
                            </div>
                        </div>
                    </div>
                    <div className="midSide">
                        <div className="leftColumn">
                            <div className="invoiceDateBox">
                                <div className="title">Invoice Date</div>
                                <div className="date">{invoice.createdAt}</div>
                            </div>
                            <div className="paymentDueBox">
                                <div className="title">Payment Due</div>
                                <div className="date">{invoice.paymentDue}</div>
                            </div>
                        </div>
                        <div className="rightColumn">
                            <div className="clientName">
                                <div className="billTo">Bill To</div>
                                <div className="name">{invoice.clientName}</div>
                            </div>
                            <div className="clientAddress">
                                <div className="clientStreet">
                                    {invoice.clientAddress.street}
                                </div>
                                <div className="clientCity">
                                    {invoice.clientAddress.city}
                                </div>
                                <div className="clientPostCode">
                                    {invoice.clientAddress.postCode}
                                </div>
                                <div className="clientCountry">
                                    {invoice.clientAddress.country}
                                </div>
                            </div>
                        </div>
                        <div className="emailBox">
                            <div className="sentTo">Sent to</div>
                            <div className="clientEmail">
                                {invoice.clientEmail}
                            </div>
                        </div>
                    </div>
                    <div className="botSide">
                        {invoice.items.map((task) => {
                            return (
                                <div className="task">
                                    <div className="title">{task.name}</div>
                                    <div className="quantity">
                                        {task.quantity} x £ {task.price}.00
                                    </div>
                                    <div className="price">
                                        £ {task.total}.00
                                    </div>
                                </div>
                            );
                        })}
                        <div className="grandTotal">
                            <div className="title">Grand Total</div>
                            <div className="price">£ {invoice.total}.00</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ));
};

export default ViewInvoice;
