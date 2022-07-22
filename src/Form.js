function Form() {
    return (
        <form>
          <select>
            <option value="">Выбор студента</option>
          </select>
          <div>
            <input type="number" placeholder="Бал"/>
            <button type="submit">Отправить</button>
          </div>
        </form>
    )
}

export default Form;