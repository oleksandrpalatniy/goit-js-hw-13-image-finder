const BASE_URL = 'https://pixabay.com/api'
const API_KEY = '23910272-237fb2deb4bad5ae314da2849'

export default class ImageApiService {
    constructor() {
        this.searchQuery = ''
        this.page = 1
    }

    fetchImages() {
           
        return fetch(`${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                this.page += 1
                return data.hits
            })
    }
 
    resetPage() {
        this.page = 1
    }
 
    get query() {
        return this.searchQuery
    }

    set query(newQuery) {
        this.searchQuery = newQuery
    }
}