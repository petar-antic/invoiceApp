import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import { useParams } from 'react-router';
import '../Styles/AddInvoiceFooter/AddInvoiceFooter.css';
import { InvoiceContext } from '../App';

const AddInvoiceFooter = () => {
    const { addInvoice } = useContext(InvoiceContext);
    // const { id } = useParams();
    const newObject = {
        id: 'RT3090',
        createdAt: '2021',
        paymentDue: '2021-08-19',
        description: 'Re-branding',
        paymentTerms: 1,
        clientName: 'Jensen Huang',
        clientEmail: 'jensenh@mail.com',
        status: 'paid',
        senderAddress: {
            street: '19 Union Terrace',
            city: 'London',
            postCode: 'E1 3EZ',
            country: 'United Kingdom',
        },
        clientAddress: {
            street: '106 Kendell Street',
            city: 'Sharrington',
            postCode: 'NR24 5WQ',
            country: 'United Kingdom',
        },
        items: [
            {
                name: 'Brand Guidelines',
                quantity: 1,
                price: 1800.9,
                total: 1800.9,
            },
        ],
        total: 1800.9,
    };
    return (
        <div className="AddInvoiceFooter">
            <div className="discard" type="button">
                Discard
            </div>
            <div className="saveAsDraft" type="button">
                Save as Draft
            </div>
            <Link
                className="saveAndSend"
                type="button"
                onClick={() => addInvoice(newObject)}
                to={`/`}
            >
                Save & Send
            </Link>
        </div>
    );
};

export default AddInvoiceFooter;
