import NewsApiService from './news-service.js'
import arcticleTemplate from '../tamplates/arcticles.hbs'

const refs = {
    searchForm: document.querySelector(".js-search-form"),
    articlesContainer: document.querySelector(".js-articles-container"),
    loadMoreBtn: document.querySelector('[data-action="load-more"]')
}

const newApiService = new NewsApiService()
console.log(newApiService)

refs.searchForm.addEventListener("submit", onSearch)
refs.loadMoreBtn.addEventListener("click", onLoadMore)

function onSearch(event) {
    event.preventDefault()
    newApiService.query = event.currentTarget.elements.query.value;
    newApiService.fetchArticles().then(articles => {
        clearArticlesContainer();
        appendArticleMarkUp(articles)
    })
}

function appendArticleMarkUp(articles) {
refs.articlesContainer.insertAdjacentHTML("beforeend", arcticleTemplate(articles))
}

function onLoadMore() {
    newApiService.fetchArticles().then(appendArticleMarkUp)
}

function clearArticlesContainer() {
    refs.articlesContainer.innerHTML = ""
}