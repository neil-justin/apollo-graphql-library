import { useQuery } from '@apollo/client'
import { ALL_BOOKS } from '../queries'
import { useState } from 'react'

const Books = () => {
  const [filterBy, setFilterBy] = useState('all genres')
  const { data, loading } = useQuery(ALL_BOOKS)

  if (loading) {
    return <div>Fetching books...</div>
  }

  const booksToDisplay =
    filterBy === 'all genres'
      ? data.allBooks
      : data.allBooks.filter((book) => book.genres.includes(filterBy))

  const genres = new Set([
    ...data.allBooks.map((book) => book.genres).flat(),
    'all genres',
  ])

  return (
    <div>
      <h2>books</h2>

      <table>
        <tbody>
          <tr>
            <th>title</th>
            <th>author</th>
            <th>published</th>
          </tr>
          {booksToDisplay.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author.name}</td>
              <td>{book.published}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p>filter by genre:</p>
      <div>
        {Array.from(genres).map((genre) => {
          return (
            <span key={genre}>
              <button onClick={() => setFilterBy(genre)}>{genre}</button>{' '}
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default Books
