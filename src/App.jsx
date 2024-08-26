import { useQuery } from '@apollo/client'
import Authors from './components/Authors'
import Books from './components/Books'
import NewBook from './components/NewBook'
import { NavLink, Route, Routes } from 'react-router-dom'
import { ALL_AUTHORS } from './queries'

const App = () => {
  const result = useQuery(ALL_AUTHORS)

  if (result.loading) {
    return <div>loading...</div>
  }

  return (
    <>
      <div>
        <NavLink to='/'>authors</NavLink> <NavLink to='/books'>books</NavLink>{' '}
        <NavLink to='/new-book'>add book</NavLink>
      </div>

      <Routes>
        <Route
          path='/'
          element={<Authors authors={result.data.allAuthors} />}
        />
        <Route
          path='/books'
          element={<Books/>}
        />
        <Route
          path='/new-book'
          element={<NewBook />}
        />
      </Routes>
    </>
  )
}

export default App
