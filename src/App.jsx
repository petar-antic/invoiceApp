import React, { useState, useEffect } from 'react';
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
    const [invoiceListAll] = useState(data);
    const [activeInvoice, setActiveInvoice] = useState();
    const [toggle, setToggle] = useState(false);
    const [fil, setFil] = useState({
        paid: false,
        pending: false,
        draft: false,
    });

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

    useEffect(() => {
        if (invoiceList) {
            if (
                (!fil.paid && !fil.pending && !fil.draft) ||
                (fil.paid && fil.pending && fil.draft)
            ) {
                setInvoices(invoiceListAll);
                return;
            }

            let newInvoices = [];
            if (fil.paid) {
                newInvoices = [
                    ...newInvoices,
                    ...invoiceListAll.filter((el) => el.status === 'paid'),
                ];
            }
            if (fil.pending) {
                newInvoices = [
                    ...newInvoices,
                    ...invoiceListAll.filter((el) => el.status === 'pending'),
                ];
            }
            if (fil.draft) {
                newInvoices = [
                    ...newInvoices,
                    ...invoiceListAll.filter((el) => el.status === 'draft'),
                ];
            }

            setInvoices(newInvoices);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fil]);

    const toggleFilter = (filterName) => {
        switch (filterName) {
            case 'paid':
                setFil({ ...fil, paid: !fil.paid });
                break;
            case 'pending':
                setFil({ ...fil, pending: !fil.pending });
                break;
            case 'draft':
                setFil({ ...fil, draft: !fil.draft });
                break;
            default:
                return;
        }
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
                toggleFilter,
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
