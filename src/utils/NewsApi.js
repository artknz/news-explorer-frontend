const url = 'http://newsapi.org/v2';
const urlProxy = 'https://nomoreparties.co/news/v2';
const apiKey = '917264a7877b42beb56d5d28951f459d';

class NewsApi {
  constructor ({ baseUrl, apiKey }) {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
  }

  getArticles(keyword) {
    return fetch(`${this.baseUrl}/everything?q=${keyword}&from=2021-02-12&to=2021-02-19&pageSize=100&apiKey=${this.apiKey}`,{ method: 'GET',
      headers: {
        ...this.headers,
      }
    })
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Ошибка: ${res.status}`)
    })
  }
};

export default new NewsApi({
  baseUrl: url,
  apiKey
});
