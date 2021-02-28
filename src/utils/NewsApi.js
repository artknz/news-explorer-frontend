const url = 'http://newsapi.org/v2';
const urlProxy = 'https://nomoreparties.co/news/v2';
const apiKey = '917264a7877b42beb56d5d28951f459d';

class newsApi {
  constructor ({ baseUrl, apiKey }) {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
  }

  getArticles(keyword) {
    return fetch(`${this.baseUrl}/everything?q=${keyword}&from=2021-02-20&to=2021-02-27&pageSize=100&apiKey=${this.apiKey}`,{ method: 'GET',
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

export default new newsApi({
  baseUrl: urlProxy,
  apiKey
});
