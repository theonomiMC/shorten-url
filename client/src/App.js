import { useRoutes } from './routes'

const App = () => {
  const routes = useRoutes()
  return  <main>{routes}</main>    
  
}

export default App
