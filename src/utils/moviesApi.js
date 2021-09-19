export class Api {
    constructor(options) {
      this.baseUrl = options.baseUrl;
      this.headers = options.headers;
    }
  
    getAllMovies() {
      return fetch(`https://api.nomoreparties.co/beatfilm-movies`, {
        method: 'GET',
      })
        .then((res) => {
          if (res.ok) {
            return res.json()
          }
          return Promise.reject(`err : ${res.status}`)
        })
    }
  
    
}
  const api = new Api({
    baseUrl: 'https://api.diploma_shvayka.nomoredomains.work',
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
  });
  
  export default api;
  