import { Provider } from 'react-redux'
import { ConfigurationRoutes } from './ConfigurationRoutes'
import { store } from './context/store'
import './App.css'

export const App = () => {
    
    return (
    <Provider store={store}>
      <ConfigurationRoutes />
    </Provider>
  )
}

