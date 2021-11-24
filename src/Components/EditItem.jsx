import React, { useContext } from 'react';
import '../Styles/EditItem/EditItem.css';
import GoBack from './GoBack';
import { InvoiceContext } from '../Contexts/InvoiceContext';

const EditItem = () => {
    const { invoiceList, activeInvoice } = useContext(InvoiceContext);
    const invoice = invoiceList.filter(
        (invoice) => invoice.id === activeInvoice
    );
    return invoice.map((invoice) => (
        <div className="editItem hidden">
            <GoBack />
            <div class="heading">
                <h1>Edit#{invoice.id}</h1>
            </div>
            <div className="itemInfo">
                <div className="billFrom">
                    <span className="title">Bill From</span>
                    <div className="inputBox">
                        <span>Street Address</span>
                        <input
                            placeholder={invoice.senderAddress.street}
                        ></input>
                    </div>
                    <div className="doubleInputBox">
                        <div className="leftSide">
                            <span>City</span>
                            <input
                                placeholder={invoice.senderAddress.city}
                            ></input>
                        </div>
                        <div className="rightSide">
                            <span>Post Code</span>
                            <input
                                placeholder={invoice.senderAddress.postCode}
                            ></input>
                        </div>
                    </div>
                    <div className="inputBox">
                        <span>Country</span>
                        <input
                            placeholder={invoice.senderAddress.country}
                        ></input>
                    </div>
                </div>
                <div className="billTo">
                    <span className="title">Bill To</span>
                    <div className="inputBox">
                        <span>Client's Name</span>
                        <input placeholder={invoice.clientName}></input>
                    </div>
                    <div className="inputBox">
                        <span>Client's Email</span>
                        <input placeholder={invoice.clientEmail}></input>
                    </div>
                    <div className="inputBox">
                        <span>Street Adress</span>
                        <input
                            placeholder={invoice.clientAddress.street}
                        ></input>
                    </div>
                    <div className="doubleInputBox">
                        <div className="leftSide">
                            <span>City</span>
                            <input
                                placeholder={invoice.clientAddress.city}
                            ></input>
                        </div>
                        <div className="rightSide">
                            <span>Post Code</span>
                            <input
                                placeholder={invoice.clientAddress.postCode}
                            ></input>
                        </div>
                    </div>
                    <div className="inputBox">
                        <span>Country</span>
                        <input
                            placeholder={invoice.clientAddress.country}
                        ></input>
                    </div>
                    <div className="inputBox">
                        <span>Invoice Date</span>
                        <input placeholder={invoice.createdAt}></input>
                    </div>
                    <div className="inputBox">
                        <span>Payment Terms</span>
                        <input
                            placeholder={`Net ${invoice.paymentTerms} Days`}
                        ></input>
                    </div>
                    <div className="inputBox">
                        <span>Project Description</span>
                        <input placeholder={invoice.description}></input>
                    </div>
                </div>
                <div className="itemList">
                    <h1>Item List</h1>
                    <div className="item">
                        <div className="inputBox">
                            <span>Item Name</span>
                            <input></input>
                        </div>
                        <div className="tripleInputBox">
                            <div className="left">
                                <span>Qty.</span>
                                <input></input>
                            </div>
                            <div className="mid">
                                <span>Price</span>
                                <input></input>
                            </div>
                            <div className="right">
                                <span>Total</span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ));
};

export default EditItem;
