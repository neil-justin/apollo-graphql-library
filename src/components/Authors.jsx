import { useMutation } from '@apollo/client'
import { useState } from 'react'
import { ALL_AUTHORS, UPDATE_BIRTHYEAR } from '../queries'

const Authors = ({ authors }) => {
  console.log('authors', authors)
  const [name, setName] = useState('')
  const [birthyear, setBirthyear] = useState('')

  const [updateBirthyear] = useMutation(UPDATE_BIRTHYEAR, {
    refetchQueries: [{ query: ALL_AUTHORS }],
  })

  const handleAuthorUpdate = (event) => {
    event.preventDefault()

    updateBirthyear({ variables: { name, setBornTo: parseInt(birthyear) } })

    setName('')
    setBirthyear('')
  }

  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
          {authors.map((author) => (
            <tr key={author.name}>
              <td>{author.name}</td>
              <td>{author.born}</td>
              <td>{author.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Set birthyear</h3>
      <form onSubmit={handleAuthorUpdate}>
        <div>
          <label htmlFor='name'>name </label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </div>
        <div>
          <label htmlFor='born'>born </label>
          <input
            type='text'
            id='born'
            value={birthyear}
            onChange={({ target }) => setBirthyear(target.value)}
          />
        </div>
        <button type='submit'>update author</button>
      </form>
    </div>
  )
}

export default Authors
