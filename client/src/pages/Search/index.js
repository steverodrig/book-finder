import React from "react";
import { useState, useEffect, Component } from "react";
import Navbar from "../../components/Navbar";
import Axios from "axios";
import axios from "axios";
// import BookCard from "../../components/BookCard";


function Search() {

    let bookies = [];
    const [books, setBooks] = useState([]);

    function submitHandler() {
        // need a better way to grab the search value
        const query = document.getElementById("search").value
        console.log(query)
        Axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
            .then(res =>
                setBooks(res.data.items[0].volumeInfo)
            )
            .catch(err => {
                console.log(err)
            })
    }
    console.log(books)

    function bookPost () {
        axios.post(/*data from specific card below by :id*/)
    };

    useEffect(() => {
        //Not an ideal method
        submitHandler()
    }, [])

    return (

        <>
            <Navbar />

            <div className="container">
                <h2 class="jumbotron">Book Search</h2>
                <form className="form-group" onSubmit={() => submitHandler}>
                    <div>
                        <label>search by title</label>
                        <br></br>
                        <input id="search" name="search" value="the road" />
                        <button type="submit">Search</button>
                    </div>
                </form>
            </div>
            {/* Was trying to get this to loop through an array and send props to the BookCard component, but was unable to pull 
            the response arrays correctly and instead only pulled one array so just did it this way for now.  Ideally need to make
            this whole page a class component to update 'search' with state, correctly grab response, loop, and import component. */}
            <div className="container">
                <div className="card">
                    <img src={books.imageLinks} className="card-img-top" alt="book" />
                    <div className="card-body">
                        <h5 className="card-title">{books.title}</h5>
                        <p className="card-text">{books.authors}</p>
                        <p className="card-text">{books.description}</p>
                        <a href={books.canonicalVolumeLink} className="btn btn-primary" target="blank">Go to Googlebooks</a>
                        <button onClick={()=>bookPost()} className="btn">Save</button>
                    </div>
                </div>
                
                {/* This is where the intended card and loop was set to be */}
                {/* {books.length > 0 
                    ? (books.map(book => {
                        return (
                            <BookCard
                                title={book.title}
                                authors={books.authors}
                                description={book.description}
                                canonicalVolumeLink={book.canonicalVolumeLink}
                                imageLinks={book.imageLinks}
                            />
                        );
                    })
                    ) : (
                        <h3>Search to see books</h3>
                    )
                } */}

            </div>
        </>
    )
}

export default Search;