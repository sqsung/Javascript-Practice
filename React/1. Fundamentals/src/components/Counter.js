/* eslint-disable */
import React, { useState } from 'react';

export default function Counter() {
    // const [count, setCount] = useState(0);
    // const [show, setShow] = useState(true);
    // const [operator, setOperator] = useState(operators[0]);
    const operators = ['+', '-', '*'];
    const [info, setInfo] = useState({
        count : 0,
        show : true,
        operator : operators[0],
    });

    return (
        <div>
            <button onClick={() => {
                let result;
                if (info.operator === '+') result = info.count + 1;
                if (info.operator === '-') result = info.count - 1;
                if (info.operator === '*') result = info.count * 2;
                setInfo({...info, count : result})
                }}
            >
                {info.operator}1
            </button>
            
            <button onClick={() => {
                setInfo({...info, show : !info.show})
                }}
            >Show and Hide
            </button>
            
            <button onClick={() => { 
                const idx = Math.floor(Math.random() * operators.length)
                setInfo({...info, operator : operators[idx]})
            }}
            >Change Operator
            </button>

            <br/>
            { info.show && `Counter: ${info.count}`}
        </div>
    )
            {/* <button onClick={() => {
                let result;
                if (operator === '+') result = count + 1;
                if (operator === '-') result = count - 1;
                if (operator === '*') result = count * 2;
                setCount(result)
                }}
            >
                {operator}1
            </button>
            
            <button onClick={() => setShow(!show)}>Show and Hide</button>
            
            <button onClick={() => { 
                const idx = Math.floor(Math.random() * operators.length)
                setOperator(operators[idx])
            }}
            >Change Operator
            </button> */}
            
        //     <br/>
        //     {show && `Counter: ${count}`}
        // </div>
}