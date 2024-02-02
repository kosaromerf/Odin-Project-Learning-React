function fetchAPI(
  keyAPI = "42152601-52feed1ed258b10882cfd9096",
  setData,
  setError,
  setIsLoading,
  count
) {
  setIsLoading(true);
  fetch(
    `https://pixabay.com/api/?key=${keyAPI}&q=animal+forest+wild&image_type=photo`,
    {
      mode: "cors",
    }
  )
    .then((response) => response.json())
    .then((fetchedData) => {
      let processedData = [];
      for (let i = 0; i < fetchedData.hits.length; i++) {
        processedData.push({
          id: fetchedData.hits[i].id,
          image: fetchedData.hits[i].largeImageURL,
          clicked: false,
        });
      }
      let data = processedData.slice(0, count);
      setData([...data].sort(() => Math.random() - 0.5));
      setIsLoading(false);
    })

    .catch((error) => {
      setError(error);
    })
    .finally(() => {
      setIsLoading(false);
    });
}

export { fetchAPI };
