function Education() {
  return (
    <>
      <label htmlFor="education">Education Level: </label>
      <select type="select" id="education" placeholder="Jhon">
        <option value="">-----------</option>
        <option value="">Elementary</option>
        <option value="">Highschool</option>
        <option value="">2yr Graduate Degree </option>
        <option value="">Graduate Degree</option>
        <option value="">Masters Degree</option>
        <option value="">Phd</option>
      </select>
      <label htmlFor="type">Graduation: </label>
      <input type="text" id="type" placeholder="Smith" />
      <label htmlFor="school">School: </label>
      <input type="text" id="school" placeholder="" />
      <label htmlFor="certificates">Certificates: </label>
      <input type="text" id="certificates" placeholder="JhonSmith@gmail.com" />
    </>
  );
}

export default Education;
