import Authors from './components/Authors'
import Books from './components/Books'
import NewBook from './components/NewBook'
import { NavLink, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <div>
        <NavLink to='/'>authors</NavLink> <NavLink to='/books'>books</NavLink>{' '}
        <NavLink to='/new-book'>add book</NavLink>
      </div>

      <Routes>
        <Route
          path='/'
          element={<Authors />}
        />
        <Route
          path='/books'
          element={<Books />}
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
