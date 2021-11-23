import React from 'react';
import Navbar from './Components/Navbar';
import Invoices from './Components/Invoices';
import './Styles/App.css';
import { InvoiceProvider } from './Contexts/InvoiceContext';

export default function App() {
    return (
        <div id="app">
            <header>
                <Navbar />
            </header>
            <div className="container">
                <InvoiceProvider>
                    <Invoices />
                </InvoiceProvider>
            </div>
        </div>
    );
}
