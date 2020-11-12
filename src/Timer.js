// ./src/Timer.js
import React, {useState, useEffect} from 'react';
import {useErrorHandler} from 'react-error-boundary';

function Timer({seconds = 3}) {
    const [time, setTime] = useState(seconds);
    const errorHandler = useErrorHandler();

    if(typeof seconds !== 'number') {
        errorHandler(
            new Error('This is not a number!')
        );
    }

    useEffect(() => {
        const id = setInterval(() => {
            setTime(curr => {
                const next = curr - 1;
                if(next === 0) {
                    throw new Error('Your time is up!');
                }

                return next;
            });
        }, 1000);
        return () => clearInterval(id);
    }, []);

    return (
        <h2>Time left: { String(time).padStart(3) }s</h2>
    );
}

export default Timer;