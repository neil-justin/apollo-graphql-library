import { useApolloClient, useQuery } from '@apollo/client'
import Authors from './components/Authors'
import Books from './components/Books'
import NewBook from './components/NewBook'
import { NavLink, Route, Routes } from 'react-router-dom'
import { ALL_AUTHORS } from './queries'
import { useState } from 'react'
import LoginForm from './components/LoginForm'

const App = () => {
  const [token, setToken] = useState(null)

  const result = useQuery(ALL_AUTHORS)
  const client = useApolloClient()

  const logout = () => {
    setToken(null)
    localStorage.clear()
    client.resetStore()
  }

  if (result.loading) {
    return <div>loading...</div>
  }

  return (
    <>
      <div>
        <NavLink to='/'>authors </NavLink>
        <NavLink to='/books'>books </NavLink>
        {token ? (
          <>
            <NavLink to='/new-book'>add book </NavLink>
            <button onClick={logout}>logout</button>
          </>
        ) : (
          <NavLink to='/login'>login</NavLink>
        )}
      </div>

      <Routes>
        <Route
          path='/'
          element={<Authors authors={result.data.allAuthors} />}
        />
        <Route
          path='/books'
          element={<Books />}
        />
        <Route
          path='/new-book'
          element={<NewBook />}
        />
        <Route
          path='/login'
          element={<LoginForm setToken={setToken} />}
        />
      </Routes>
    </>
  )
}

export default App
