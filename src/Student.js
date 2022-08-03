function Student({ position, photo, name, surname, dz, score }) {
    return (
        <tr className="students-list">
            <td>
              <span>{position}</span>
            </td>
            <td >
              <img src={photo} alt="student"/>
            </td>
            <td>
              <div>{name}</div>
              <div>{surname}</div>
            </td>
            <td>
              <div>{dz}</div>
              <div>{score}</div>
            </td>
        </tr>
    )
}

export default Student;