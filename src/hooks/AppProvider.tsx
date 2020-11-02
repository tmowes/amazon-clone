import { FormEvent, useCallback, useReducer } from 'react'
// import { fakeLogin } from '~/utils'

export const initialState: LoginState = {
  username: '',
  password: '',
  isLoading: false,
  error: '',
  isLoggedIn: true,
}

interface LoginState {
  username: string
  password: string
  isLoading: boolean
  error: string
  isLoggedIn: boolean
}

// interface LoginAction {
//   type: string
//   fieldName?: string
//   payload?: string
// }

type LoginAction =
  | { type: 'login' | 'success' | 'error' | 'logOut' }
  | {
      type: 'field'
      fieldName: string
      payload: string
    }

export const loginReducer = (state: LoginState, action: LoginAction) => {
  switch (action.type) {
    case 'field': {
      return {
        ...state,
        [action.fieldName]: action.payload,
      }
    }
    case 'login': {
      return {
        ...state,
        error: '',
        isLoading: true,
      }
    }
    case 'success': {
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
      }
    }
    case 'error': {
      return {
        ...state,
        error: 'Incorrect username or password!',
        isLoggedIn: false,
        isLoading: false,
        username: '',
        password: '',
      }
    }
    case 'logOut': {
      return {
        ...state,
        isLoggedIn: false,
      }
    }
    default:
      return state
  }
}

export const LoginUseReducer = () => {
  const [state, dispatch] = useReducer(loginReducer, initialState)
  const { username, password, isLoading, error, isLoggedIn } = state

  const onSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault()
      dispatch({ type: 'login' })
      try {
        // await fakeLogin({ username, password })
        dispatch({ type: 'success' })
      } catch (err) {
        dispatch({ type: 'error' })
      }
    },
    [dispatch],
  )

  return (
    <div>
      {isLoggedIn ? (
        <>
          <h1>
            Welcome
            {username}
          </h1>
          <button type="button" onClick={() => dispatch({ type: 'logOut' })}>
            Log Out
          </button>
        </>
      ) : (
        <form onSubmit={onSubmit}>
          {error && <p className="error">{error}</p>}
          <p>Please Login!</p>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={e => {
              dispatch({
                type: 'field',
                fieldName: 'username',
                payload: e.currentTarget.value,
              })
            }}
          />
          <input
            type="password"
            placeholder="password"
            autoComplete="new-password"
            value={password}
            onChange={e => {
              dispatch({
                type: 'field',
                fieldName: 'password',
                payload: e.currentTarget.value,
              })
            }}
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Log In'}
          </button>
        </form>
      )}
    </div>
  )
}
