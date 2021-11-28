import React, { useEffect, useState } from 'react';
import '../Styles/Navbar/Navbar.css';

const Item = (props) => {
    const [item, setItem] = useState(props.item);
    useEffect(() => {
        props.setItemss(item, props.itemIndex);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [item]);
    return (
        <div id="item">
            <div className="inputBox">
                <span>Item Name</span>
                <input
                    type="text"
                    value={item.name}
                    onChange={(e) => {
                        setItem({
                            ...item,
                            name: e.target.value,
                        });
                    }}
                />
            </div>
            <div className="tripleInputBox">
                <div className="left">
                    <span>Qty.</span>
                    <input
                        type="text"
                        value={item.quantity}
                        onChange={(e) => {
                            setItem({
                                ...item,
                                quantity: e.target.value,
                            });
                        }}
                    />
                </div>
                <div className="mid">
                    <span>Price</span>
                    <input
                        type="text"
                        value={item.price}
                        onChange={(e) => {
                            setItem({
                                ...item,
                                price: e.target.value,
                            });
                        }}
                    />
                </div>
                <div className="right">
                    <span>Total</span>
                    <span className="totalNumber">{props.total}.00</span>
                </div>
            </div>
        </div>
    );
};

export default Item;
