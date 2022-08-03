import { useState } from "react";
import './App.css';
import Form from './Form';
import Student from "./Student";
import data from './data'

function App() { 
  let [list, setList] = useState(data)
  
  list.sort((a, b) => {
    if(a.score < b.score) {
      return 1;
    }
    if(a.score > b.score) {
      return -1;
    }
    return 0
  })
  
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
          {list.map((element, index) => {
            return (
              <Student 
              key={element.id}
              position={index + 1}
              photo={element.studentPhoto}
              name={element.studentName}
              surname={element.studentSurname}
              dz={element.doneDz}
              score={element.score}
              />
            )
          })}
        </tbody>
      </table>
      <Form data={list} getList={(el) => {setList(el)}}/>
    </div>
  );
}

export default App;
