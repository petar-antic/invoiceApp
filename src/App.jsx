import React, { useState } from 'react';
import './Styles/App.css';

import Navbar from './Components/Navbar';
import Invoices from './Components/Invoices';
import InvoicesDetails from './Components/InvoiceDetails';
import EditInvoice from './Components/EditInvoice';
import AddInvoice from './Components/AddInvoice';
import Modal from './Components/Modal';

import data from './Constants/data';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export const InvoiceContext = React.createContext();

export default function App() {
    const [invoiceList, setInvoices] = useState(data);
    const [activeInvoice, setActiveInvoice] = useState();
    const [toggle, setToggle] = useState(false);

    const findActiveInvoice = (id) => {
        setActiveInvoice(id);
    };

    const addInvoice = (newObject) => {
        const newData = invoiceList.concat(newObject);
        // const newData = { ...invoiceList, newObject };
        setInvoices(newData);
    };

    const deleteInvoice = (id) => {
        const updatedInvoice = invoiceList.filter(
            (invoice) => invoice.id !== id
        );
        setInvoices(updatedInvoice);
    };

    return (
        <InvoiceContext.Provider
            value={{
                invoiceList,
                setInvoices,
                activeInvoice,
                findActiveInvoice,
                deleteInvoice,
                toggle,
                setToggle,
                addInvoice,
            }}
        >
            <Router>
                <div id="app">
                    <header>
                        <Navbar />
                    </header>
                    <div className="container">
                        <Switch>
                            <Route path="/" exact component={Invoices} />
                            <Route
                                path="/invoice/:id"
                                component={InvoicesDetails}
                            />
                            <Route
                                path="/edit/:id/invoice"
                                component={EditInvoice}
                            />
                            <Route path="/add/invoice" component={AddInvoice} />
                        </Switch>
                        {toggle && <Modal />}
                    </div>
                </div>
            </Router>
        </InvoiceContext.Provider>
    );
}
