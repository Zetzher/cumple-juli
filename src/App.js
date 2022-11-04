import armandoPx from "./assets/armandoDef.gif";
import cristobalPx from "./assets/cristobalDef.gif";
import julianPx from "./assets/julianDef.gif";
import alejandroPx from "./assets/alejandroDef.gif";
import joanPx from "./assets/joanDef.gif";
import javiPx from "./assets/javiDef.gif";
import armandoFoto from "./assets/foto-armando.png";
import cristobalFoto from "./assets/foto-cristobal.png";
import javiFoto from "./assets/foto-javi.png";
import alejandroFoto from "./assets/foto-alejandro.png";
import julianFoto from "./assets/foto-julian.png";
import joanFoto from "./assets/foto-joan.png";
import "./App.css";

const App = () => {
  const arr = [
    { name: "Armando" },
    { name: "Javi" },
    { name: "Alejandro" },
    { name: "Joan" },
    { name: "Cristobal" },
    { name: "Julian" },
  ];

  const dynamicPhoto = ({ key }) => {
    switch (key) {
      case 0:
        return armandoFoto;
      case 1:
        return javiFoto;
      case 2:
        return cristobalFoto;
      case 3:
        return joanFoto;
      case 4:
        return alejandroFoto;
      case 5:
        return julianFoto;
    }
  };

  const dynamicPx = ({ key }) => {
    switch (key) {
      case 0:
        return armandoPx;
      case 1:
        return javiPx;
      case 2:
        return cristobalPx;
      case 3:
        return joanPx;
      case 4:
        return alejandroPx;
      case 5:
        return julianPx;
    }
  };

  const dymanicResult = ({ type, key }) => {
    switch (key) {
      case 0:
        if (type === "picture") {
          return armandoFoto;
        } else if (type === "text") {
          return "Chupa y mama que se derrama";
        } else {
          return armandoPx;
        }
      case 1:
        if (type === "picture") {
          return javiFoto;
        } else if (type === "text") {
          return "Nunca pensé que hacer la ventosa contigo nos uniera tanto";
        } else {
          return javiPx;
        }
      case 2:
        if (type === "picture") {
          return cristobalFoto;
        } else if (type === "text") {
          return "Eres la guarra mas bonica q conozco";
        } else {
          return cristobalPx;
        }
      case 3:
        if (type === "picture") {
          return joanFoto;
        } else if (type === "text") {
          return "Falta texto";
        } else {
          return joanPx;
        }
      case 4:
        if (type === "picture") {
          return alejandroFoto;
        } else if (type === "text") {
          return "Felicidades maricón, espero que los años te hagan más sabia pero no menos guarra";
        } else {
          return alejandroPx;
        }
      case 5:
        if (type === "picture") {
          return julianFoto;
        } else if (type === "text") {
          return "Que ni mil fiestas, ni mil rabos nos separen, guarrilla mía";
        } else {
          return julianPx;
        }
    }
  };

  return (
    <section className="first-section">
      {arr.map((data, key) => {
        return (
          <div className="container">
            <div className="card">
              <div className="image">
                <img src={dynamicPhoto({ key })} />
              </div>
              <div className="content">
                <h3>{dymanicResult({ type: "text", key })}</h3>
                <img
                  src={dynamicPx({ key })}
                  style={{ width: 50, marginLeft: 10 }}
                />
                <p></p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default App;
