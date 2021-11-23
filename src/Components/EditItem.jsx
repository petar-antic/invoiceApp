import React, { useContext } from 'react';
import '../Styles/EditItem/EditItem.css';
import GoBack from './GoBack';
import { InvoiceContext } from '../Contexts/InvoiceContext';

const EditItem = () => {
    const { invoiceList, activeInvoice } = useContext(InvoiceContext);
    return (
        <div className="editItem">
            <GoBack />
            <div class="heading">
                <h1>Edit#</h1>
            </div>
            <div className="itemInfo">
                <div className="billFrom">
                    <span className="title">Bill From</span>
                    <div className="inputBox">
                        <span>Street Address</span>
                        <input></input>
                    </div>
                    <div className="doubleInputBox">
                        <div className="leftSide">
                            <span>City</span>
                            <input></input>
                        </div>
                        <div className="rightSide">
                            <span>Post Code</span>
                            <input></input>
                        </div>
                    </div>
                    <div className="inputBox">
                        <span>Country</span>
                        <input></input>
                    </div>
                </div>
                <div className="billTo">
                    <span className="title">Bill To</span>
                    <div className="inputBox">
                        <span>Client's Name</span>
                        <input></input>
                    </div>
                    <div className="inputBox">
                        <span>Client's Email</span>
                        <input></input>
                    </div>
                    <div className="inputBox">
                        <span>Street Adress</span>
                        <input></input>
                    </div>
                    <div className="doubleInputBox">
                        <div className="leftSide">
                            <span>City</span>
                            <input></input>
                        </div>
                        <div className="rightSide">
                            <span>Post Code</span>
                            <input></input>
                        </div>
                    </div>
                    <div className="inputBox">
                        <span>Country</span>
                        <input></input>
                    </div>
                    <div className="inputBox">
                        <span>Invoice Date</span>
                        <input></input>
                    </div>
                    <div className="inputBox">
                        <span>Payment Terms</span>
                        <input></input>
                    </div>
                    <div className="inputBox">
                        <span>Project Description</span>
                        <input></input>
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
    );
};

export default EditItem;
