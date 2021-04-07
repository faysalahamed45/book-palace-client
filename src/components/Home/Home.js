import './Home.css';
import React, { useContext, useEffect, useState } from 'react';
import BookDetails from '../BookDetails/BookDetails';
import Header from '../Header/Header';
import { userCreate } from '../../App';

const Home = () => {
    const [loggedInUser, setLoggedInUser,addCart,setAddCart] = useContext(userCreate);
    const [bookInfo,setBookInfo] = useState([]);
    useEffect(() => {
        fetch('https://afternoon-savannah-22003.herokuapp.com/books')
            .then(res => res.json())
            .then(data => {
                setBookInfo(data);
             
            })
    }, [])
    // console.log(loggedInUser.name);
    return (
       <div>
            <Header userName={loggedInUser.name} success={loggedInUser.success}></Header>
        <div className="home-container container">
            <div className="home-container-card">
                {
                    bookInfo.map((bookInfo,index) => <BookDetails key = {index} bookInfo={bookInfo}></BookDetails>)
                }
            </div>
        </div>
       </div>
    );
};

export default Home;