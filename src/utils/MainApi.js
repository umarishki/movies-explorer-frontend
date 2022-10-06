export class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }

    async _request (methodApi, urlApi, dataObj) {
        const token = this._getAuthToken();
    
        if (token) {
            this._headers['authorization'] = `Bearer ${token}`;
        }
            const res = await fetch(`${this._baseUrl}${urlApi}`, {
                method: methodApi,
                headers: this._headers,
                body: dataObj ? JSON.stringify(dataObj) : undefined
            });
    
            if (!res.ok) {
                return Promise.reject({status: res.status, message: `Ошибка: ${res.message}`});
            }
    
            const data = await res.json();
            if (!data) {
                return Promise.reject({status: res.status, message: `Ошибка: ${res.message}`});
            }
            return data;
    };
    
    _getAuthToken() {
        return localStorage.getItem('token');
    }

    getSavedMovies() {
        return this._request(
            'GET',
            'movies',
            undefined
        )
    }

    postSavedMovie(data) {
        return this._request(
            'POST',
            'movies',
            data
        );
    }

    deleteSavedMovie(movieId) {
        return this._request(
            'DELETE',
            `movies/${movieId}`,
            undefined
        );
    }

    postUser({ email, password, name }) {
        return this._request(
            'POST',
            'signup',
            {
                email: email,
                password: password,
                name: name
            }
        );
    }

    postUserAuth({ email, password }) {
        return this._request(
            'POST',
            'signin',
            {
                password: password,
                email: email 
            }
        );
    }

    getProfileInfo() {
        return this._request(
            'GET',
            'users/me',
            undefined
        )
    }

    patchProfileInfo(data) {
        const { name, email } = data;
        return this._request(
            'PATCH',
            'users/me',
            {
                name: name,
                email: email
            }
        );
    }
}

export const mainApi = new Api({
    baseUrl: 'https://api.umarishki.diploma.nomorepartiesxyz.ru/',
    headers: {
        'Content-Type': 'application/json'
    }
});
