import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/AddInvoiceFooter/AddInvoiceFooter.css';
import { InvoiceContext } from '../App';

const AddInvoiceFooter = (props) => {
    const { addInvoice } = useContext(InvoiceContext);
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
                onClick={() => addInvoice(props.invoice)}
                to={`/`}
            >
                Save & Send
            </Link>
        </div>
    );
};

export default AddInvoiceFooter;
