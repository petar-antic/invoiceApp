import React, { useState } from 'react';
import '../Styles/AddInvoice/AddInvoice.css';
import AddItemFooter from './AddInvoiceFooter';
import GoBack from './GoBack';
import { useParams } from 'react-router';
import data from '../Constants/data.json';

const AddInvoice = () => {
    const { id } = useParams();
    const [invoice, setInvoice] = useState(data);
    console.log(JSON.stringify(invoice));
    const newData = [JSON.stringify(invoice)];
    return (
        <>
            <div className="addItem">
                <GoBack />
                <div class="heading">
                    <h1>New Invoice</h1>
                </div>
                <div className="itemInformations">
                    <div className="billFrom">
                        <span className="title">Bill From</span>
                        <div className="inputBox">
                            <span>Street Address</span>
                            <input
                                type="text"
                                value={invoice.street}
                                onChange={(e) =>
                                    setInvoice({
                                        ...invoice,
                                        street: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="doubleInputBox">
                            <div className="leftSide">
                                <span>City</span>
                                <input
                                    type="text"
                                    value={invoice.city}
                                    onChange={(e) =>
                                        setInvoice({
                                            ...invoice,
                                            city: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="rightSide">
                                <span>Post Code</span>
                                <input
                                    type="text"
                                    value={invoice.postCode}
                                    onChange={(e) =>
                                        setInvoice({
                                            ...invoice,
                                            postCode: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>
                        <div className="inputBox">
                            <span>Country</span>
                            <input
                                type="text"
                                value={invoice.country}
                                onChange={(e) =>
                                    setInvoice({
                                        ...invoice,
                                        country: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>
                    <div className="billTo">
                        <span className="title">Bill To</span>
                        <div className="inputBox">
                            <span>Client's Name</span>
                            <input
                                type="text"
                                value={invoice.clientName}
                                onChange={(e) =>
                                    setInvoice({
                                        ...invoice,
                                        clientName: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="inputBox">
                            <span>Client's Email</span>
                            <input
                                type="text"
                                value={invoice.clientEmail}
                                onChange={(e) =>
                                    setInvoice({
                                        ...invoice,
                                        clientEmail: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="inputBox">
                            <span>Street Adress</span>
                            <input
                                type="text"
                                value={invoice.clientAddress}
                                onChange={(e) =>
                                    setInvoice({
                                        ...invoice,
                                        clientAddress: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="doubleInputBox">
                            <div className="leftSide">
                                <span>City</span>
                                <input
                                    type="text"
                                    value={invoice.clientCity}
                                    onChange={(e) =>
                                        setInvoice({
                                            ...invoice,
                                            clientCity: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="rightSide">
                                <span>Post Code</span>
                                <input
                                    type="text"
                                    value={invoice.clientPostCode}
                                    onChange={(e) =>
                                        setInvoice({
                                            ...invoice,
                                            clientPostCode: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>
                        <div className="inputBox">
                            <span>Country</span>
                            <input
                                type="text"
                                value={invoice.clientCountry}
                                onChange={(e) =>
                                    setInvoice({
                                        ...invoice,
                                        clientCountry: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="inputBox">
                            <span>Invoice Date</span>
                            <input
                                type="text"
                                value={invoice.createdAt}
                                onChange={(e) =>
                                    setInvoice({
                                        ...invoice,
                                        createdAt: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="inputBox">
                            <span>Payment Terms</span>
                            <input
                                type="text"
                                value={invoice.paymentDue}
                                onChange={(e) =>
                                    setInvoice({
                                        ...invoice,
                                        paymentDue: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="inputBox">
                            <span>Project Description</span>
                            <input
                                type="text"
                                value={invoice.description}
                                onChange={(e) =>
                                    setInvoice({
                                        ...invoice,
                                        description: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>
                    <div className="itemList">
                        <h1>Item List</h1>
                        <div className="item">
                            <div className="inputBox">
                                <span>Item Name</span>
                                <input />
                            </div>
                            <div className="tripleInputBox">
                                <div className="left">
                                    <span>Qty.</span>
                                    <input />
                                </div>
                                <div className="mid">
                                    <span>Price</span>
                                    <input />
                                </div>
                                <div className="right">
                                    <span>Total</span>
                                    <span className="totalNumber">.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="addNew" type="button">
                        + Add New Item
                    </div>
                </div>
            </div>
            <AddItemFooter />
        </>
    );
};

export default AddInvoice;
