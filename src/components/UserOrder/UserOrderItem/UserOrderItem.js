import React, { useContext, useEffect, useState } from 'react';
import { userCreate } from '../../../App';
import Header from '../../Header/Header';
import UserOrderItemDetail from '../UserOrderItemDetail/UserOrderItemDetail';

const UserOrderItem = () => {
    const [bookCart, setBookCart] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(userCreate);
    useEffect(() => {
        fetch('http://localhost:5050/oderBook?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setBookCart(data);

            })
    }, []);
    console.log(bookCart);
    return (
        <div>
            <Header userName={loggedInUser.name} success={loggedInUser.success}></Header>
           {
               bookCart.map(bookItem=><UserOrderItemDetail bookItem={bookItem.order}></UserOrderItemDetail>)
           }
        </div>
    );
};

export default UserOrderItem;