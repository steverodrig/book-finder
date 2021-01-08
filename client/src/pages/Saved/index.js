import axios from "axios";
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import BookCard from "../../components/BookCard";

function Saved() {

    const [saved, setSaved] = useState([]);

    function loadSaves() {
        axios.get(/*get all saved books from mongoDB collection */)
            .then(res => 
                setSaved(res.data)
                )
                .catch(err => console.log(err));
    }

    useEffect(() => {
        loadSaves()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Navbar />
            <div className="container">
                <h2 class="jumbotron">My Book Collection</h2>
            </div>
            <div>
            {saved.length > 0 
                    ? (saved.map(book => {
                        return (
                            //Would be a different card with a delete button that deletes by :id
                            <BookCard
                                title={book.title}
                                authors={book.authors}
                                description={book.description}
                                canonicalVolumeLink={book.canonicalVolumeLink}
                                imageLinks={book.imageLinks}
                            />
                        );
                    })
                    ) : (
                        <h3>No saved books</h3>
                    )
                }
            </div>
        </>
    )
    
}

export default Saved;