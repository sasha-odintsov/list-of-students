import { useEffect, useState } from 'react';
import './Form.css';

function Form({data, getList}) {
  const [value, setValue] = useState();
  const [student, setStudent] = useState();
  const [list, setList] = useState(data)
  
  useEffect(() => {
    getList(list)
  }, [list])

  const handleSubmit = (event) => {
    event.preventDefault();
    setList(list.map((el) => ({ ...el, score: parseInt(value) + parseInt(el.score)})))
  }
  return (
    <form onSubmit={handleSubmit}>
      <select value={student} onChange={(event) => setStudent(event.target.value)}>
        <option value="">Выбор студента</option>
        {list.map((el) => {
          return <option key={el.id} value={el.studentSurname}>{el.studentName} {el.studentSurname}</option>
        })}
      </select>
      <input
        type="number"
        placeholder="Бал"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button type="submit">Отправить</button>
    </form>
  )
}

export default Form;