const request = async (methodApi, urlApi, baseUrl, headers) => {

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
