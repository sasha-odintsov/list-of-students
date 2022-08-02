import { useState } from 'react';
import './Form.css';
import data from './data.js';

function Form() {
  const [score, setScore] = useState(0)
  const [updateScore, setUpdateScore] = useState();
  const [student, setStudent] = useState();
  function handleSubmit(event) {
    event.preventDefault();
    setScore(updateScore)
    
  }
  console.log(score)
  console.log(student)
    return (
      <form onSubmit={handleSubmit}>
        <select onChange={(event) => setStudent(event.target.value)}>
          <option value="">Выбор студента</option>
          {data.map((el) => {
            return <option key={el.id} value={el.id}>{el.studentName} {el.studentSurname}</option>
          })}
        </select>
        <div>
          <input type="number" placeholder="Бал" value={updateScore} onChange={(event) => setUpdateScore(event.target.value)}/>
          <button type="submit">Отправить</button>
        </div>
      </form>  
    )
}

export default Form;