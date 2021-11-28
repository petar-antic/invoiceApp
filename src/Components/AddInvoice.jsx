import React, { useEffect, useState } from 'react';
import '../Styles/AddInvoice/AddInvoice.css';
import AddItemFooter from './AddInvoiceFooter';
import GoBack from './GoBack';
import Item from './Item';

const AddInvoice = () => {
    const [items, setItems] = useState([
        {
            name: '',
            quantity: 0,
            price: 0,
            total: 0,
        },
    ]);
    const [invoice, setInvoice] = useState({
        id: '',
        createdAt: '',
        paymentDue: '',
        description: '',
        paymentTerms: 0,
        clientName: '',
        clientEmail: '',
        status: '',
        senderAddress: {
            street: '',
            city: '',
            postCode: '',
            country: '',
        },
        clientAddress: {
            street: '',
            city: '',
            postCode: '',
            country: '',
        },
        items: items,
        total: 0,
    });

    useEffect(() => {
        setInvoice({
            ...invoice,
            items: items,
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [items]);

    const setItemss = (item, index) => {
        let updatedArr = [...items];
        // let updatedElement = updatedArr[index];
        // updatedElement = item;
        updatedArr[index] = item;
        setItems(updatedArr);
    };

    useEffect(() => {
        setInvoice({
            ...invoice,
            id: generateId(),
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const abc = 'qwertyuiopasdfghjklzxcvbnm';

    const generateId = () => {
        let stringPart = `${abc.charAt(
            Math.floor(Math.random() * (26 + 1))
        )}${abc.charAt(Math.floor(Math.random() * (26 + 1)))}`.toUpperCase();
        let numberPart = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
        return `${stringPart}${numberPart.toString()}`;
    };

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
                                value={invoice.senderAddress.street}
                                onChange={(e) =>
                                    setInvoice({
                                        ...invoice,
                                        senderAddress: {
                                            ...invoice.senderAddress,
                                            street: e.target.value,
                                        },
                                    })
                                }
                            />
                        </div>
                        <div className="doubleInputBox">
                            <div className="leftSide">
                                <span>City</span>
                                <input
                                    type="text"
                                    value={invoice.senderAddress.city}
                                    onChange={(e) =>
                                        setInvoice({
                                            ...invoice,
                                            senderAddress: {
                                                ...invoice.senderAddress,
                                                city: e.target.value,
                                            },
                                        })
                                    }
                                />
                            </div>
                            <div className="rightSide">
                                <span>Post Code</span>
                                <input
                                    type="text"
                                    value={invoice.senderAddress.postCode}
                                    onChange={(e) =>
                                        setInvoice({
                                            ...invoice,
                                            senderAddress: {
                                                ...invoice.senderAddress,
                                                postCode: e.target.value,
                                            },
                                        })
                                    }
                                />
                            </div>
                        </div>
                        <div className="inputBox">
                            <span>Country</span>
                            <input
                                type="text"
                                value={invoice.senderAddress.country}
                                onChange={(e) =>
                                    setInvoice({
                                        ...invoice,
                                        senderAddress: {
                                            ...invoice.senderAddress,
                                            country: e.target.value,
                                        },
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
                                value={invoice.clientAddress.street}
                                onChange={(e) =>
                                    setInvoice({
                                        ...invoice,
                                        clientAddress: {
                                            ...invoice.clientAddress,
                                            street: e.target.value,
                                        },
                                    })
                                }
                            />
                        </div>
                        <div className="doubleInputBox">
                            <div className="leftSide">
                                <span>City</span>
                                <input
                                    type="text"
                                    value={invoice.clientAddress.city}
                                    onChange={(e) =>
                                        setInvoice({
                                            ...invoice,
                                            clientAddress: {
                                                ...invoice.clientAddress,
                                                city: e.target.value,
                                            },
                                        })
                                    }
                                />
                            </div>
                            <div className="rightSide">
                                <span>Post Code</span>
                                <input
                                    type="text"
                                    value={invoice.clientAddress.postCode}
                                    onChange={(e) =>
                                        setInvoice({
                                            ...invoice,
                                            clientAddress: {
                                                ...invoice.clientAddress,
                                                postCode: e.target.value,
                                            },
                                        })
                                    }
                                />
                            </div>
                        </div>
                        <div className="inputBox">
                            <span>Country</span>
                            <input
                                type="text"
                                value={invoice.clientAddress.country}
                                onChange={(e) =>
                                    setInvoice({
                                        ...invoice,
                                        clientAddress: {
                                            ...invoice.clientAddress,
                                            country: e.target.value,
                                        },
                                    })
                                }
                            />
                        </div>
                        <div className="inputBox">
                            <span>Invoice Date</span>
                            <input
                                id="calendar"
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
                    </div>
                    {items.map((item, index) => (
                        <Item
                            item={item}
                            itemIndex={index}
                            setItemss={(e, i) => setItemss(e, i)}
                        />
                    ))}

                    <div
                        className="addNew"
                        type="button"
                        onClick={() => {
                            const newItem = {
                                name: '',
                                quantity: 0,
                                price: 0,
                                total: 0,
                            };
                            setItems([...items, newItem]);
                        }}
                    >
                        + Add New Item
                    </div>
                </div>
            </div>
            <AddItemFooter invoice={invoice} />
        </>
    );
};

export default AddInvoice;
