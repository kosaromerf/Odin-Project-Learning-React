function General() {
  return (
    <>
      <label htmlFor="name">Name: </label>
      <input type="text" id="name" placeholder="Jhon" />
      <label htmlFor="surname">Surname: </label>
      <input type="text" id="surname" placeholder="Smith" />
      <label htmlFor="phıne">Phone: </label>
      <input type="tel" id="phone" placeholder="+1 234 567 89 01" />
      <label htmlFor="email">Email: </label>
      <input type="email" id="email" placeholder="JhonSmith@gmail.com" />
    </>
  );
}

export default General;
