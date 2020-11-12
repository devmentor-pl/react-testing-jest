// ./src/app/ipProvider.js
const url = 'https://api.ipify.org?format=json';

export function get() {
    return _fetch()
}

function _fetch(options = null) {
    return fetch(url, options)
        .then(resp => {
            if(resp.ok) {
                return resp.json();
            }

            return Promise.reject(resp.statusText);
        });
}