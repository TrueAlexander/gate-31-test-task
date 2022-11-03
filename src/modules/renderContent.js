const renderContent = (posts) => {
  const postsWrapper = document.querySelector('.main__row')
  const mainContainer = document.querySelector('main .container')
 
  if (posts.length > 0) {
    posts.forEach((post) => {
    postsWrapper.insertAdjacentHTML('beforeend', 
    `
          <div class="main__item card">
            <div class="card__title">${post.title}</div>
            <div class="card__text">${post.body}</div>
            <div class="card__checkbox">
              <input type="checkbox" name="check" id="">
            </div>
          </div> 
    `)
  })} else {
     mainContainer.insertAdjacentHTML('beforeend', 
  `     
        <div class="main__notFound">
          <p>Requested post(s) not found.... </p>
          <p>Let's try again!</p>
        </div> 
  `) }
}

export default renderContent