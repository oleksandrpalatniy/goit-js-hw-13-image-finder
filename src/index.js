import './sass/main.scss';
import ImageApiService from './js/apiService.js'
import imageCard from './templates/imageCard.hbs'

const refs = {
    searchForm: document.querySelector('.search-form'),
    imagesContainer: document.querySelector('.gallery'),
    loadMoreBtn: document.querySelector('.btn-load-more')
}
const imageApiService = new ImageApiService()



refs.searchForm.addEventListener('submit', onSearch)
refs.loadMoreBtn.addEventListener('click', onLoadMore)


function onSearch(evt) {
    evt.preventDefault()

    imageApiService.query = evt.currentTarget.elements.query.value
    if (imageApiService.query === '') {
        return alert('Enter name of image...')
    }
    imageApiService.resetPage()
    imageApiService.fetchImages().then(hits => {
        clearImagesList()
        imageListMarkup(hits)
     })
}

function onLoadMore() {
    imageApiService.fetchImages().then(imageListMarkup)
}

function imageListMarkup(hits) {
    refs.imagesContainer.insertAdjacentHTML('beforeend', imageCard(hits))
    refs.loadMoreBtn.scrollIntoView({
  behavior: 'smooth',
  block: 'end',
})
}

function clearImagesList() {
    refs.imagesContainer.innerHTML = ''
}