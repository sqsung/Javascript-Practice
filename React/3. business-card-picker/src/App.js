import React, { useState, useEffect } from 'react';
import datas from './data/cards.js';
import BusinessCard from './components/BusinessCard.js';

export default function App() {
    const [cards, setCards] = useState([]);
    const [selected, setSelected] = useState([]);

    function draw() {
        if (selected.length > 2) {
            const names = selected.reduce((acc, cur) => {
                return acc = acc.concat(`${cur.name}, `)
            }, '');
            return alert(`당첨자는 ${names}입니다.`)
        }

        const randomIdx = Math.floor(Math.random() * cards.length);
        const randomItem = cards[randomIdx];

        setCards(cards.filter(c => c.phoneNumber !== randomItem.phoneNumber));
        setSelected([...selected, randomItem]);
    }

    useEffect(() => {
        setCards(datas);
    }, []);

    return (
        <div>
            { cards.length > 0 && <button onClick={draw}>추첨하기</button> }
            {/* { selected.length > 0 &&  */}
                {/* (<BusinessCard info={selected[selected.length - 1]} />) } */}

            { selected.length > 0
                && selected.map(card => <BusinessCard info={card} key={card.phoneNumber} />)}
        </div>
    );
}

