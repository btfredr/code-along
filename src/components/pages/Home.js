import { useState, useEffect } from 'react';
import API from '../../constants';

function Home() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(function () {
        async function fetchData() {
            try {
                const response = await fetch(API);

                if (response.ok) {
                    const json = await response.json();
                    console.log(json);
                    setBooks(json.data);
                } else {
                    setError('An error occured');
                }
            } catch (error) {
                setError(error.toString());
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>ERROR: An error occured</div>;
    }

    return (
        <>
            {books.map(function (book) {
                return <div key={book.id}>{book.title}</div>;
            })}
        </>
    );
}

export default Home;