import { useState } from "react";
import './App.css';
import Form from './Form';
import list from './data'

function App() {
  let [score, setScore] = useState(0);
  const [value, setValue] = useState();
  const [student, setStudent] = useState();
  
  const newList = list.map((el) => ({ ...el, score: score}))
  const handleSubmit = (event) => {
    event.preventDefault();
    setScore(score += parseInt(value));
    newList()
  }

  return (
    <div className="App">
      <table>
          <thead>
            <tr>
              <th colSpan="4">Рейтинг группы</th>
            </tr>
            <tr className="header">   
              <th colSpan="3">Студент</th>
              <th className="header-heading">ДЗ/Баллы</th>
            </tr> 
          </thead>
          <tbody>
              {newList.map((element, index) => {
                return(
                  <tr key={element.id} className="students-list">
                    <td>
                      <span>{index + 1}</span>
                    </td>
                    <td >
                      <img src={element.studentPhoto} alt="student"/>
                    </td>
                    <td>
                      <div>{element.studentName}</div>
                      <div>{element.studentSurname}</div>
                    </td>
                    <td>
                      <div>{element.doneDz}</div>
                      <div>{element.score}</div>
                    </td>
                  </tr>)
                })
              }
          </tbody>
        </table>
        <form onSubmit={handleSubmit}>
          <select onChange={(event) => setStudent(event.target.value)}>
            <option value="">Выбор студента</option>
            {list.map((el) => {
              return <option key={el.id} value={el.id}>{el.studentName} {el.studentSurname}</option>
            })}
          </select>
          <input
            type="number"
            placeholder="Бал"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit" >Отправить</button>
        </form>
    </div>
  );
}

export default App;
