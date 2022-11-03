const cardClick = () => {

  const allCheckboxes = document.querySelectorAll('.card__checkbox input')
  
  allCheckboxes.forEach(checkbox => {
    checkbox.addEventListener("click", (e) => { 
      const checkedPost = e.target.parentNode.parentNode
      checkedPost.classList.toggle("clicked")
    })
  })

}

export default cardClick