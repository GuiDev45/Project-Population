import "./Style.css";
import Header from "./Components/Header";
import Sidenav from "./Components/Sidenav";
import Mapa from "./Pages/Mapa";
import { DataContextProvider } from "./Context/DataContext";

function App() {
  return (
    // Envolve os componentes com o DataContextProvider para fornecer contexto de dados
    <DataContextProvider>
      <div>
        <Sidenav />
        <main>
          <Header />
          <Mapa />
        </main>
      </div>
    </DataContextProvider>
  );
}

export default App;
