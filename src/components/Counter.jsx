import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Counter() {

    const Count = () => {
        const [count, setCount] = useState(0);

        const increment = () => {
            setCount(count + 1);
        };

        const decrement = () => {
            setCount(count - 1);
        };

        return (
            <div className={`text-center mt-4 ${count > 0 ? 'text-primary' : count < 0 ? 'text-danger' : ''}`}>
                <h2 className='m-3'>{count}</h2>
                <button className="btn btn-danger mr-2 ps-4 pe-4" onClick={decrement}><strong>-</strong></button>
                <button className="btn btn-primary mr-2 ps-4 pe-4" onClick={increment}><strong>+</strong></button>
            </div>
        );
    };
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow rounded">
                <div className="container d-flex align-items-center">
                    <a className="navbar-brand" href="">
                        <img src="/images/logo-counter.png" width="50" height="50" className="d-inline-block align-top" alt="" />
                    </a>

                    <h5 className="navbar-text ml-2" style={{ color: 'black', fontStyle: 'italic' }}>Compteur</h5>
                </div>
            </nav>
            <div className="shadow rounded p-3 text-center mt-5 pb-5" style={{ maxWidth: '500px', margin: '0 auto' }}>
                <Count />
            </div>
        </div>
    );
}
