
export class Auth {

    constructor(options) {
        this.baseUrl = options.baseUrl;
        this.headers = options.headers;
    }
    getUserInfo() {
        return fetch(`${this.baseUrl}/users/me`, {
            method: 'GET',
            headers: this.headers
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`err : ${res.status}`)
            })
    }
    getSavedMovies(_id) {
        return fetch(`${this.baseUrl}/movies`, {
            method: 'GET',
            headers: this.headers,
            
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`err : ${res.status}`)
            })
    }
    onLogin({ email, password }) {
        return fetch(`${this.baseUrl}/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        }).then((res) => {
            if (res.ok) {
                return res.json()
            }
            return Promise.reject(`err : ${res.status}`)
        })
    }

    onRegister({ email, password, name }) {
        return fetch(`${this.baseUrl}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password, name })
        }).then((res) => {
            if (res.ok) {
                return res.json();

            }
            return Promise.reject(`err : ${res.status}`)
        })
    }

    tokenCheck(token) {

        return fetch(`${this.baseUrl}/users/me`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }).then((res) => {
            if (res.ok) {
                return res.json()
            }
            return Promise.reject(`err : ${res.status}`)
        })

    }

    updateUserInfo(data) {
        return fetch(`${this.baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this.headers,
            body: data
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`err : ${res.status}`)
            })
    }


    changeMovieStatus(data) {
        return fetch(`${this.baseUrl}/movies`, {
            method: 'POST' ,
            headers: this.headers,
            body: data
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`err : ${res.status}`)
            })
    }

    removeLike(_id) {
        return fetch(`${this.baseUrl}/movies/${_id}`, {
            method: 'DELETE',
            headers: this.headers
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`err : ${res.status}`)
            })
    }
}


const auth = new Auth({
    baseUrl: 'https://api.diplomashvayka.nomoredomains.club',
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
});
export default auth;