const API_KEY = '22963299-57829f6e237632471c998bdfc';

export default function fetchImages(query, pageNumber) {
  return fetch(
    `https://pixabay.com/api/?q=${query}&page=${pageNumber}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  )
    .then(response => response.json())
    .catch(error => Promise.reject(error));
}
