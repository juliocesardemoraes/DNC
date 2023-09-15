import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/card";

function App() {
  const [modal, setModal] = useState(false);
  // true ou falso

  useEffect(() => {
    console.log("MODAL", modal);
  }, [modal]);

  return (
    <div className="App">
      <nav>
        <div>
          <img src="./logo.png" alt="LOGO DNC"></img>
          <ul>
            <li className="nav__item">Food</li>
            <li className="nav__item">Variedades</li>
            <li className="nav__item">Lanches</li>
            <li className="nav__item">Pizzas</li>
            <li className="nav__item">Doces</li>
            <li className="nav__item">Promoções</li>
          </ul>
        </div>
        <div>
          <span className="nav__item">Minhas Compras</span>
          <img src="./cart.png"></img>
        </div>
      </nav>
      <main>
        {modal?.image != undefined ? (
          <div className="modal">
            <div>
              <Card image={modal.image} name={modal.name} button={false}></Card>
              <p></p>
            </div>
            <div className="column__2">
              <h3>Minha Sacola</h3>
              <h2>Frango Frito</h2>
              <hr></hr>
              <span className="price">R$ 50,00</span>
              <div className="button__container">
                <button
                  className="button__continue"
                  onClick={() => setModal(false)}
                >
                  Continuar Comprando
                </button>
                <button className="button__finish">Finalizar Compra</button>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid">
            <Card
              image="./Burguer.png"
              name={"X-Burguer"}
              setModal={setModal}
            ></Card>
            <Card
              image="./Acai.png"
              name={"Açai com mix de frutas"}
              setModal={setModal}
            ></Card>
            <Card
              image="./Frango.png"
              name={"Frango"}
              setModal={setModal}
            ></Card>
            <Card
              image="./Pastel.png"
              name={"Pastel"}
              setModal={setModal}
            ></Card>
            <Card image="./Pizza.png" name={"Pizza"} setModal={setModal}></Card>
            <Card
              image="./Biscoitos.png"
              name={"Biscoitos"}
              setModal={setModal}
            ></Card>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
