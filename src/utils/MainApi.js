class mainApi {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  _statusResponse(res) {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getArticles() {
    return fetch(`${this.baseUrl}/articles`, {
      method: 'GET',
      headers: {
        ...this.headers,
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      }
    })
    .then(this._statusResponse);
  }

  addNewCard({ keyword, title, text, date, source, link, image }) {
    return fetch(`${this.baseUrl}/articles`, {
      method: 'POST',
      headers: {
        ...this.headers,
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify({ keyword, title, text, date, source, link, image })
    })
    .then(this._statusResponse);
  }

  deleteArticle(id) {
    return fetch(`${this.baseUrl}/articles/${id}`, {
      method: 'DELETE',
      headers: {
        ...this.headers,
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      },
    })
  }

  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        ...this.headers,
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      }
    })
    .then(this._statusResponse);
  }
}

export default new mainApi({
  baseUrl: `${window.location.protocol}${process.env.REACT_APP_API_URL || '//api.artknz1.students.nomoreparties.xyz'}`,
  headers: {
    'Content-Type': 'application/json',
  }
})


