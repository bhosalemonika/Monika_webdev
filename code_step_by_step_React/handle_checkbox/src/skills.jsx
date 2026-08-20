import {useState} from "react"
function Skills() {
  const [skills, setSkills] = useState([]);

  const handleSkills = (event) => {
    if (event.target.checked) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(
        skills.filter((item) => item !== event.target.value)
      );
    }
  };

  return (
    <>
      <h3>Select your skills</h3>

      <input
        type="checkbox"
        value="php"
        onChange={handleSkills}
      />
      PHP

      <input
        type="checkbox"
        value="js"
        onChange={handleSkills}
      />
      JS

      <input
        type="checkbox"
        value="java"
        onChange={handleSkills}
      />
      JAVA

      <h3>Selected Skills:</h3>

      {skills.map((skill) => (
        <p>{skill}</p>
      ))}
    </>
  );
}

export default Skills;