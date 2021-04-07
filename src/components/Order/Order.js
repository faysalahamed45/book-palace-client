// import React, { useContext, useEffect, useState } from 'react';
// import { useParams } from 'react-router';
// import { Link } from 'react-router-dom';
// import { userCreate } from '../../App';
// import Header from '../Header/Header';
// import './Order.css';


// const Order = () => {
//     const { id } = useParams();
//     const [loggedInUser, setLoggedInUser, addCart, setAddCart] = useContext(userCreate);
//     const [order, setOrder] = useState([]);

//     useEffect(() => {
//         const uri = `https://afternoon-savannah-22003.herokuapp.com/books/${id}`
//         fetch(uri)
//             .then(res => res.json())
//             .then(data => setOrder(data))
//     }, [])

//     const handleAddBook = (bookData) => {
//         setAddCart(bookData);

        // const sameproduct = addCart.find(pd => pd.key === bookData.key);
        // let count = 1;
        // let newCart;
        // if (sameproduct) {
        //     count = sameproduct.quantity + 1;
        //     sameproduct.quantity = count;
        //     const others = addCart.filter(pd => pd.key !== bookData.key);
        //     newCart = [...others, sameproduct];
        //     setAddCart(newCart);
        // }
        // else {
        //     bookData.quantity = 1;
        //     newCart = [...addCart, bookData];
        //     setAddCart(newCart);
        // };
     
//     }
//     return (
//         <div>
//             <Header userName={loggedInUser.name} success={loggedInUser.success}></Header>
//             <div className="order-container">
//                 {
//                     order.map(addCart => <div>
//                         <div className="home-container">
//                             <div className="card card-container border-0 box-shadow-sm">
//                                 <img className=" p-2" src={addCart.imageUrl} alt="" />
//                                 <div className="card-body p-1 border-0 m">
//                                     <h5 className="card-title p-0 text-white">{addCart.name}</h5>
//                                     <p className="card-text p-0 text-white">{addCart.author}</p>

//                                 </div>
//                                 <div className="card-footer d-flex justify-content-between p-2 border-0 bg-transparent">
//                                     <button className="btn btn-primary " type="button">${addCart.price}</button>

//                                     <Link to="/checkout"> <button onClick={() => handleAddBook(order[0])} className="btn btn-primary btn-buy " type="button">AddCart</button></Link>

//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     )}

//             </div>
//         </div>
//     );
// };

// export default Order;