// import getData from "./getData"
// import renderContent from "./renderContent"
// import { searchFilter } from "./filters"

const search = () => {
  const searchInput = document.querySelector('.search__input')
  const searchButton = document.querySelector('.search__button')


  searchInput.addEventListener('input', (e) => {
    const value = e.target.value
    console.log(value)

    searchButton.addEventListener('click', async () => {
      if (value.length > 0) {
        await fetch(`https://jsonplaceholder.typicode.com/posts?title=${value}`)
        .then((response) => response.json())
        .then((json) => console.log(json))
      }})
  })
  
  
    
     
  
}

export default search