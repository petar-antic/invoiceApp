import React from 'react';

// import { Link } from 'react-router-dom';
// import { useParams } from 'react-router';
import '../Styles/EditInvoiceFooter/EditInvoiceFooter.css';

const AddItemFooter = () => {
    // const { id } = useParams();
    return (
        <div className="addItemFooter">
            <div className="cancel" type="button">
                Cancel
            </div>
            <div className="save" type="button">
                Save Changes
            </div>
        </div>
    );
};

export default AddItemFooter;
