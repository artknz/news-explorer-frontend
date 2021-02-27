const jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDBlZjAxNTFjMzMyNDQzZjk4NDhlODEiLCJpYXQiOjE2MTQyODg2MzYsImV4cCI6MTYxNDg5MzQzNn0._-K_n3jy306oMILF1lL-XPU11MdAgqrNszGrocvCuBQ';
const url = 'http://localhost:3000';

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
        'Authorization': `Bearer ${jwt}`
      }
    })
    .then(this._statusResponse);
  }

  addNewCard({ keyword, title, text, date, source, link, image }) {
    return fetch(`${this.baseUrl}/articles`, {
      method: 'POST',
      headers: {
        ...this.headers,
        'Authorization': `Bearer ${jwt}`
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
        'Authorization': `Bearer ${jwt}`
      },
    })
  }
}

export default new mainApi({
  baseUrl: url,
  headers: {
    'Content-Type': 'application/json',
  }
})


