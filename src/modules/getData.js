const getData = async () => {
  return await fetch(`https://jsonplaceholder.typicode.com/posts/?_start=0&_limit=7`)

    .then((response) => {
      return response.json()
    })
}

export default getData