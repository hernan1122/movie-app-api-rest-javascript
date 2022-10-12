searchFormBtn.addEventListener('click', () => {
  location.hash = '#search=' + searchFormInput.value;
});

trendingBtn.addEventListener('click', () => {
  location.hash = '#trends';
});

arrowBtn.addEventListener('click', () => {
  history.back();
  /* location.hash = '#home'; */
});

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator() {
  console.log({ location });
  
  if (location.hash.startsWith('#trends')) {
    trendsPage();
  } else if (location.hash.startsWith('#search=')) {
    searchPage();
  } else if (location.hash.startsWith('#movie=')) {
    movieDetailsPage();
  } else if (location.hash.startsWith('#category=')) {
    categoriesPage();
  } else {
    homePage();
  }

  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function homePage() {
  console.log('Home!!');

  //para remover la clase 'header-container--long'
  headerSection.classList.remove('header-container--long');
  //para que se vea de fondo el poster de cada pelicula
  headerSection.style.background = '';
  //para que no aparezca la flecha de 'atras'
  arrowBtn.classList.add('inactive');
  arrowBtn.classList.remove('header-arrow--white');
  //para que se vea el titulo
  headerTitle.classList.remove('inactive');
  //para esconderlo cuando no estemos en la sec. de categorias
  headerCategoryTitle.classList.add('inactive');
  //para que aparezca la barra de busqueda
  searchForm.classList.remove('inactive');

  //para que aparezca la sec. tendencia
  trendingPreviewSection.classList.remove('inactive');
  //para que aparezca la sec. actegorias
  categoriesPreviewSection.classList.remove('inactive');
  //para ocultar la sec. horizontal de peliculas
  genericSection.classList.add('inactive');
  //para ocultar esta seccion
  movieDetailSection.classList.add('inactive');
  
  getTrendingMoviesPreview();
  getCategegoriesPreview();
}

function categoriesPage() {
  console.log('categories!!');

  headerSection.classList.remove('header-container--long');
  headerSection.style.background = '';
  arrowBtn.classList.remove('inactive');
  arrowBtn.classList.remove('header-arrow--white');
  headerTitle.classList.add('inactive');
  headerCategoryTitle.classList.remove('inactive');
  searchForm.classList.add('inactive');

  trendingPreviewSection.classList.add('inactive');
  categoriesPreviewSection.classList.add('inactive');
  genericSection.classList.remove('inactive');
  movieDetailSection.classList.add('inactive');

  // ['#category', 'id-name']
  const [_, categoryData] = location.hash.split('=');
  const [categoryId, categoryName] = categoryData.split('-');

  headerCategoryTitle.innerHTML = categoryName;

  getMoviesByCategory(categoryId);
}

function movieDetailsPage() {
  console.log('Movie!!');

  headerSection.classList.add('header-container--long');
  // headerSection.style.background = '';
  arrowBtn.classList.remove('inactive');
  arrowBtn.classList.add('header-arrow--white');
  headerTitle.classList.add('inactive');
  headerCategoryTitle.classList.add('inactive');
  searchForm.classList.add('inactive');

  trendingPreviewSection.classList.add('inactive');
  categoriesPreviewSection.classList.add('inactive');
  genericSection.classList.add('inactive');
  movieDetailSection.classList.remove('inactive');

  // ['#movie', '']
  const [_, movieId] = location.hash.split('=');
  getMovieById(movieId);
}

function searchPage() {
  console.log('Search!!');

  headerSection.classList.remove('header-container--long');
  headerSection.style.background = '';
  arrowBtn.classList.remove('inactive');
  arrowBtn.classList.remove('header-arrow--white');
  headerTitle.classList.add('inactive');
  headerCategoryTitle.classList.add('inactive');
  searchForm.classList.remove('inactive');

  trendingPreviewSection.classList.add('inactive');
  categoriesPreviewSection.classList.add('inactive');
  genericSection.classList.remove('inactive');
  movieDetailSection.classList.add('inactive');

  // ['#search', 'lo buscado']
  const [_, query] = location.hash.split('=');
  getMoviesBySearch(query);
}

function trendsPage() {
  console.log('TRENDS!!');

  headerSection.classList.remove('header-container--long');
  headerSection.style.background = '';
  arrowBtn.classList.remove('inactive');
  arrowBtn.classList.remove('header-arrow--white');
  headerTitle.classList.add('inactive');
  headerCategoryTitle.classList.remove('inactive');
  searchForm.classList.add('inactive');

  trendingPreviewSection.classList.add('inactive');
  categoriesPreviewSection.classList.add('inactive');
  genericSection.classList.remove('inactive');
  movieDetailSection.classList.add('inactive');

  headerCategoryTitle.innerHTML = 'Tendencias'

  getTrendingMovies();
}