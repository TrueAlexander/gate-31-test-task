const renderContent = (posts) => {
  const postsWrapper = document.querySelector('.main__row')

  postsWrapper.innerHTML = ''

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
  })
}

export default renderContent