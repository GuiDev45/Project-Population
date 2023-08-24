import "./Style.css";
import Header from "./Components/Header";
import Sidenav from "./Components/Sidenav";
import { Mapa } from "./Pages/Mapa";

function App() {
  return (
    <div>
      <Sidenav />
      <main>
        <Header />
        <Mapa />
      </main>
    </div>
  );
}

export default App;
