import cardClick from "./cardClick"
import getData from "./getData"
import renderContent from "./renderContent"

const load = async () => {
  await getData().then((data) => {
    renderContent(data)
  })
 
  cardClick()
}

export default load