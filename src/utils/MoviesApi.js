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
  
    // получаем информацию профиля
    getProfileInfo(token) {
      return fetch(`${this._address}/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }).then(this._handleResponse);
    }
  
    // отправляем информацию об изменении профиля
    editProfile(data, token) {
      return fetch(`${this._address}/profile`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          about: data.about,
        }),
      }).then(this._handleResponse);
    }
  
    // получаем карточки aильмов
    getInitialCards(token) {
      return fetch(`${this._address}/movies`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }).then((res) => this._handleResponse(res));
    }
  
    // добавляем новую карточку
    addCard(data, token) {
      return fetch(`${this._address}/movies`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          link: data.link,
          id: data.id,
        }),
      }).then(this._handleResponse);
    }
  
    // отправляем информацию об удалении карточки
    deleteCard(id, token) {
      return fetch(`${this._address}/cards/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }).then(this._handleResponse);
    }
  
    // отправляем информацию о лайке
    changeLikeCardStatus(id, isLiked, token) {
      return fetch(`${this._address}/cards/${id}/likes`, {
        method: `${isLiked ? "DELETE" : "PUT"}`,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }).then(this._handleResponse);
    }
  }
  
  // подключаем к серверу
  const moviesApi = new MoviesApi({
    address: "https://api.nomoreparties.co/beatfilm-movies",
  });
  
  export default moviesApi;
  