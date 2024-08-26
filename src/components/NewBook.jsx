import { useState } from 'react'

const NewBook = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [published, setPublished] = useState('')
  const [genre, setGenre] = useState('')
  const [genres, setGenres] = useState([])

  const submit = async (event) => {
    event.preventDefault()

    console.log('add book...')

    setTitle('')
    setPublished('')
    setAuthor('')
    setGenres([])
    setGenre('')
  }

  const addGenre = () => {
    setGenres(genres.concat(genre))
    setGenre('')
  }

  return (
    <div>
      <h1>add a book</h1>
      <form onSubmit={submit}>
        <div>
          <label htmlFor='title'>title </label>
          <input
            id='title'
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>
        <div>
          <label htmlFor='author'>author </label>
          <input
            id='author'
            value={author}
            onChange={({ target }) => setAuthor(target.value)}
          />
        </div>
        <div>
          <label htmlFor='published'>published </label>
          <input
            id='published'
            type='number'
            value={published}
            onChange={({ target }) => setPublished(target.value)}
          />
        </div>
        <div>
          <label htmlFor='genre'>genre </label>
          <input
            id='genre'
            value={genre}
            onChange={({ target }) => setGenre(target.value)}
          />
          {' '}
          <button
            onClick={addGenre}
            type='button'
          >
            add genre
          </button>
        </div>
        <div>added genres: {genres.join(' ')}</div>
        <button type='submit'>create book</button>
      </form>
    </div>
  )
}

export default NewBook
