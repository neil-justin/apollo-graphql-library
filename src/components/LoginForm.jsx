import { useState, useEffect } from 'react'
import { useMutation } from '@apollo/client'
import { LOGIN } from '../queries'
import { useNavigate } from 'react-router-dom'

const LoginForm = ({ setToken }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [login] = useMutation(LOGIN, {
    update(cache, result) {
      if (result.data) {
        const token = result.data.login.value
        setToken(token)
        localStorage.setItem('user-token', token)
      }
    },
  })

  const navigate = useNavigate()

  const submit = (event) => {
    event.preventDefault()
    login({ variables: { username, password } })
    navigate('/')
  }

  return (
    <div>
      <h2>login</h2>
      <form onSubmit={submit}>
        <div>
          <label htmlFor='username'>username </label>
          <input
            value={username}
            onChange={({ target }) => setUsername(target.value)}
            id='username'
          />
        </div>
        <div>
          <label htmlFor='username'>password </label>
          <input
            type='password'
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            id='password'
          />
        </div>
        <button type='submit'>login</button>
      </form>
    </div>
  )
}

export default LoginForm
