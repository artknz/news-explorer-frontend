// const jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDBlZjAxNTFjMzMyNDQzZjk4NDhlODEiLCJpYXQiOjE2MTQyODg2MzYsImV4cCI6MTYxNDg5MzQzNn0._-K_n3jy306oMILF1lL-XPU11MdAgqrNszGrocvCuBQ';
// const url = 'http://localhost:3000';

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
  baseUrl: `${window.location.protocol}${process.env.REACT_APP_API_URL || '//localhost:3000'}`,
  headers: {
    'Content-Type': 'application/json',
  }
})


