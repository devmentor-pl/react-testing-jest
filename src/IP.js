import React, {useState, useEffect} from 'react';
import {get} from './api/ipProvider';

function IP() {
    const [ip, setIp] = useState(null);
    useEffect(() => {
        get().then(data => {
            setIp(() => data.ip);
        })
    }, []);

    if(ip === null) {
        return <p>Loading...</p>
    }

    return <h1>{ ip }</h1>
}

export default IP;