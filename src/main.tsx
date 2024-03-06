
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/post/store.ts'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // огортаємо наш проект в провайдер
  <Provider store={store}>
    <App />
  </Provider>,
)
