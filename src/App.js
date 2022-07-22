import { useState } from "react";
import './App.css';
import Form from "./Form";

function App() {
  const list = [
    {
      id: 1,
      studentPhoto: 'https://lms.ithillel.ua/uploads/images/885d3b77fc0d39a12aad31af709b9bd6.jpg',
      studentName: 'Антон',
      studentSurname: 'Чебикін',
      doneDz: '38',
      score: '3759'
    },
    {
      id: 2,
      studentPhoto: 'https://lms.ithillel.ua/uploads/images/7e0475ff04937622a8aa27a8d38be520.jpg',
      studentName: 'Oleksandr',
      studentSurname: 'Odintsov',
      doneDz: '38',
      score: '3752'
    },
    {
      id: 3,
      studentPhoto: 'https://lms.ithillel.ua/uploads/images/74ad3ec0535885ce0d279a4181b27760.jpg',
      studentName: 'Shapka',
      studentSurname: 'Evheny',
      doneDz: '34',
      score: '3051'
    },
    {
      id: 4,
      studentPhoto: 'https://lms.ithillel.ua/uploads/images/d1b3870e354c2d9668b8cd64e63bbf37.jpg',
      studentName: 'Kushniruk',
      studentSurname: 'Oleksandra',
      doneDz: '28',
      score: '2679'
    },
    {
      id: 5,
      studentPhoto: 'https://lms.ithillel.ua/uploads/images/0fd3a6a4e07969f0dcb87452a6ba2d5f.jpg',
      studentName: 'Vashchenko',
      studentSurname: 'David',
      doneDz: '37',
      score: '3537'
    },
    {
      id: 6,
      studentPhoto: 'https://lms.ithillel.ua/uploads/images/5d6a97aefe779d59786a11f9063d1ff0.jpg',
      studentName: 'Oleksandr',
      studentSurname: 'Yaremenko',
      doneDz: '30',
      score: '2716'
    },
    {
      id: 7,
      studentPhoto: 'https://lms.ithillel.ua/uploads/images/b86e405b95a95b5011f856ad81f4c6a5.jpg',
      studentName: 'Антон',
      studentSurname: 'Сквирский',
      doneDz: '23',
      score: '2093'
    }
  ];

  let listStudents = list.map((element, index) => {
    return (
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
      </tr>
    )
  });
  console.log(listStudents)
  
  return (
    <div className="wrapper">
        <table>
          <thead>
            <tr>
              <th colSpan="4">Рейтинг группы</th>
            </tr>
            <tr className="header">   
              <th colSpan="3">Студент</th>
              <th>Баллы</th>
            </tr> 
          </thead>
          <tbody>
          {listStudents}
          </tbody>
        </table>
        <Form />
    </div>   
  );
}

export default App;
