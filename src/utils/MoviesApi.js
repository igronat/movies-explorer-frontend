class MoviesApi {
    constructor({ address, headers }) {
      this._address = address;
    }
  
    _handleResponse(res) {
      if (res.ok) {
        return res.json();
      }
      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  
    // получаем карточки фильмов
    getInitialMovies(token) {
      return fetch(`${this._address}`, {
        headers: {
          
          "Content-Type": "application/json",
        },
      }).then((res) => this._handleResponse(res));
    }

 }
  
  // подключаем к серверу
  const moviesApi = new MoviesApi({
    address: "https://api.nomoreparties.co/beatfilm-movies",
  });
  
  export default moviesApi;
  