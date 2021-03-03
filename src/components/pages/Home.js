import { useState, useEffect } from 'react';
import { API } from '../../constants/Api';
import axios from 'axios';

function Home() {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(function () {
        async function fetchData() {
            try {
                const response = await axios.get(`${API}/cards`);
                console.log(response);
                if (response.status === 200) {
                    setCards(response.data.cards);
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
            {cards.map(function (card) {
                return <div key={card.id}>{card.title}</div>;
            })}
        </>
    );
}

export default Home;