import './App.css'
import ExpansionProvider from './Context/expansion-panel';
import { ThemeProvider } from './Context/theme-provider';
import Routers from './router/routes';

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <ExpansionProvider>
          <Routers />
        </ExpansionProvider>
      </ThemeProvider>
    </>
  )
}

export default App
