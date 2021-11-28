import React, { useContext } from 'react';
import '../Styles/EditInvoice/EditInvoice.css';
import GoBack from './GoBack';
import { InvoiceContext } from '../App';
import { useParams } from 'react-router';

const EditItem = () => {
    const { invoiceList } = useContext(InvoiceContext);
    const { id } = useParams();
    const invoice = invoiceList.filter((invoice) => invoice.id === id);
    return invoice.map((invoice) => (
        <div className="editItem">
            <GoBack />
            <div class="heading">
                <h1>Edit#{invoice.id}</h1>
            </div>
            <div className="itemInformations">
                <div className="billFrom">
                    <span className="title">Bill From</span>
                    <div className="inputBox">
                        <span>Street Address</span>
                        {/* <input value={state.id} onChange={(e) => idChange(e)} /> */}
                        <input />
                    </div>
                    <div className="doubleInputBox">
                        <div className="leftSide">
                            <span>City</span>
                            <input

                            // onChange={(e) => descriptionChange(e)}
                            />
                        </div>
                        <div className="rightSide">
                            <span>Post Code</span>
                            <input value={invoice.senderAddress.postCode} />
                        </div>
                    </div>
                    <div className="inputBox">
                        <span>Country</span>
                        <input value={invoice.senderAddress.country} />
                    </div>
                </div>
                <div className="billTo">
                    <span className="title">Bill To</span>
                    <div className="inputBox">
                        <span>Client's Name</span>
                        <input value={invoice.clientName} />
                    </div>
                    <div className="inputBox">
                        <span>Client's Email</span>
                        <input value={invoice.clientEmail} />
                    </div>
                    <div className="inputBox">
                        <span>Street Adress</span>
                        <input value={invoice.clientAddress.street} />
                    </div>
                    <div className="doubleInputBox">
                        <div className="leftSide">
                            <span>City</span>
                            <input value={invoice.clientAddress.city} />
                        </div>
                        <div className="rightSide">
                            <span>Post Code</span>
                            <input value={invoice.clientAddress.postCode} />
                        </div>
                    </div>
                    <div className="inputBox">
                        <span>Country</span>
                        <input value={invoice.clientAddress.country} />
                    </div>
                    <div className="inputBox">
                        <span>Invoice Date</span>
                        <input value={invoice.createdAt} />
                    </div>
                    <div className="inputBox">
                        <span>Payment Terms</span>
                        <input value={`Net ${invoice.paymentTerms} Days`} />
                    </div>
                    <div className="inputBox">
                        <span>Project Description</span>
                        <input value={invoice.description} />
                    </div>
                </div>
                {invoice.items.map((item) => {
                    return (
                        <div className="itemList">
                            <h1>Item List</h1>
                            <div className="item">
                                <div className="inputBox">
                                    <span>Item Name</span>
                                    <input value={item.name} />
                                </div>
                                <div className="tripleInputBox">
                                    <div className="left">
                                        <span>Qty.</span>
                                        <input value={item.quantity} />
                                    </div>
                                    <div className="mid">
                                        <span>Price</span>
                                        <input value={item.price} />
                                    </div>
                                    <div className="right">
                                        <span>Total</span>
                                        <span className="totalNumber">
                                            {item.total}.00
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
                <div className="addNew" type="button">
                    + Add New Item
                </div>
            </div>
        </div>
    ));
};

export default EditItem;
