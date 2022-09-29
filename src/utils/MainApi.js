export class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }

    async _request (methodApi, urlApi, dataObj) {
        // const token = this._getAuthToken();
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzM1YmZmMDNmZGRhODNjOTlhZjBkMzAiLCJpYXQiOjE2NjQ0NjY5NDAsImV4cCI6MTY2NDQ3NDE0MH0.QojTDUABTUB8U868sBQb38Kfr-0szXAZulNMvgULKRw';
    
        if (token) {
            this._headers['authorization'] = `Bearer ${token}`;
        }
            const res = await fetch(`${this._baseUrl}${urlApi}`, {
                method: methodApi,
                headers: this._headers,
                body: dataObj ? JSON.stringify(dataObj) : undefined
            });
    
            if (!res.ok) {
                Promise.reject({status: res.status, message: `Ошибка ${res.status}: ${res.statusText}`});
            }
    
            const data = await res.json();
            if (!data) {
                throw new Error('Ничего не найдено');
            }
            return data;
    };
    
    // _getAuthToken() {
    //     return localStorage.getItem('token');
    // }

    getSavedMovies() {
        return this._request(
            'GET',
            'movies',
            undefined
        )
    }

    postSavedMovie(data) {
        console.log(data);
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






    putLike(cardId) {
        return this._request(
            'PUT',
            `cards/${cardId}/likes`,
            undefined
        );
    }

    deleteLike(cardId) {
        return this._request(
            'DELETE',
            `cards/${cardId}/likes`,
            undefined
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
        const { name, about } = data;
        return this._request(
            'PATCH',
            'users/me',
            {
                name: name,
                about: about
            }
        );
    }

    patchProfileAvatar({ avatar }) {
        return this._request(
            'PATCH',
            'users/me/avatar',
            {
                avatar: avatar,
            }
        );
    }

    postUser({ password, email }) {
        return this._request(
            'POST',
            'signup',
            {
                password: password,
                email: email
            }
        );
    }

    postUserAuth({ password, email }) {
        return this._request(
            'POST',
            'signin',
            {
                password: password,
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
