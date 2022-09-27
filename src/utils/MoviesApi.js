const request = async (methodApi, urlApi, baseUrl, headers) => {
    // const token = this._getAuthToken();

    // if (token) {
    //     this._headers['authorization'] = `Bearer ${token}`;
    // }
        const res = await fetch(`${baseUrl}${urlApi}`, {
            method: methodApi,
            headers: headers,
        });

        if (!res.ok) {
            throw new Error('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
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

export const getMovies = () => {
    return request(
        'GET',
        '/',
        'https://api.nomoreparties.co/beatfilm-movies',
        {
            'Content-Type': 'application/json'
        }
    )
};
