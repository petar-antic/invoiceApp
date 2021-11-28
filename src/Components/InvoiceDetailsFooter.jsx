import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/InvoiceDetailsFooter/InvoiceDetailsFooter.css';
import { useParams } from 'react-router';
import { InvoiceContext } from '../App';

const InvoiceDetailsFooter = () => {
    const { toggle, setToggle } = useContext(InvoiceContext);
    const { id } = useParams();
    return (
        <div className="footer">
            <Link className="edit" type="button" to={`/edit/${id}/invoice`}>
                Edit
            </Link>
            <Link
                className="delete"
                type="button"
                onClick={() => setToggle(!toggle)}
            >
                Delete
            </Link>
            <div className="mark" type="button">
                Mark as Paid
            </div>
        </div>
    );
};

export default InvoiceDetailsFooter;
