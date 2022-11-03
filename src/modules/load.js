import getData from "./getData"
import renderContent from "./renderContent"
import cardClick from "./cardClick"

const load = async () => {
  await getData().then((data) => {
    //filter posts by title if applicated
    //get the index of the requested title from URL
    const titleIndex = document.URL.indexOf('title')
    //the requested title
    const title = document.URL.slice(titleIndex).slice(6).replace(/\+/g, " ").toLowerCase() 
    
    //array of data to render
    const dataToRender = []

    data.forEach(element => {
      if (title.length === 0) {
        dataToRender.push(element)
      } else if (element.title.includes(title)) {
        dataToRender.push(element)
      }
    })
    //render the posts
    renderContent(dataToRender)
  })
  //highlight cards
  cardClick()
}

export default load