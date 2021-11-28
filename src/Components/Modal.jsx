import React, { useContext } from 'react';
import '../Styles/Modal/Modal.css';
import { Link } from 'react-router-dom';
import { InvoiceContext } from '../App';

function Modal() {
    const { deleteInvoice, toggle, setToggle, activeInvoice } =
        useContext(InvoiceContext);
    return (
        <div className="confirmDel">
            <div className="overlay"></div>
            <div className="modalBody">
                <h1>Confirm Deletion</h1>
                <p>
                    Are you sure you want to delete invoice #{activeInvoice}?
                    This action cannot be undone.
                </p>
                <div className="buttons">
                    <Link
                        type="button"
                        className="cancel"
                        onClick={() => setToggle(!toggle)}
                    >
                        Cancel
                    </Link>
                    <Link
                        type="button"
                        className="delete"
                        onClick={() => [
                            deleteInvoice(activeInvoice),
                            setToggle(!toggle),
                        ]}
                        to={`/`}
                    >
                        Delete
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Modal;
