import React, { useContext, useEffect, useState } from 'react';
import { userCreate } from '../../App';
import BookDetails from '../BookDetails/BookDetails';
import Header from '../Header/Header';
import './Home.css';




const Home = () => {
    const [loggedInUser, setLoggedInUser,addCart,setAddCart] = useContext(userCreate);
    const [bookInfo,setBookInfo] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5050/books')
            .then(res => res.json())
            .then(data => {
                setBookInfo(data);
                console.log(data);
             
            })
    }, [])
    console.log(loggedInUser.name);
    return (
       <div>
            <Header userName={loggedInUser.name} success={loggedInUser.success}></Header>
        <div className="home-container container">
            <div className="home-container-card">
                {
                    bookInfo.map(bookInfo => <BookDetails bookInfo={bookInfo}></BookDetails>)
                }
            </div>
        </div>
       </div>
    );
};

export default Home;