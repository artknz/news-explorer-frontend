import moment from 'moment';
const url = 'http://newsapi.org/v2';
const urlProxy = 'https://nomoreparties.co/news/v2';
const apiKey = '917264a7877b42beb56d5d28951f459d';
const nowDate = moment().format('YYYY-MM-DD');
const beforeDate = moment().subtract(7, 'days').format('YYYY-MM-DD');

class newsApi {
  constructor ({ baseUrl, apiKey, nowDate, beforeDate}) {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
    this.nowDate = nowDate;
    this.beforeDate = beforeDate;
  }

  getArticles(keyword) {
    return fetch(`${this.baseUrl}/everything?q=${keyword}&from=${this.beforeDate}&to=${this.nowDate}&pageSize=100&apiKey=${this.apiKey}`,{ method: 'GET',
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
  apiKey,
  nowDate,
  beforeDate
});
