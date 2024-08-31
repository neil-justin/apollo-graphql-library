import { useQuery } from '@apollo/client'
import { ME } from '../queries'

const Recommendations = ({ books }) => {
  const me = useQuery(ME, { fetchPolicy: 'no-cache' })

  if (me.loading) {
    return <div>Fetching recommendations...</div>
  }

  const booksToDisplay = books.filter((book) =>
    book.genres.includes(me.data.me.favoriteGenre)
  )

  return (
    <>
      <h2>recommendations</h2>
      <p>
        books in your favorite genre <b>{me.data.me.favoriteGenre}</b>
      </p>

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
    </>
  )
}

export default Recommendations
