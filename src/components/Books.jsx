import { useQuery } from "@apollo/client"
import { ALL_BOOKS } from "../queries"

const Books = () => {
  const {data, loading} = useQuery(ALL_BOOKS)

  if (loading) {
    return <div>Fetching books...</div>
  }

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
          {data.allBooks.map((book) => (
            <tr key={book.title}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.published}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Books
