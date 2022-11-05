import armandoPx from "./assets/armando/armandoDef.gif";
import cristobalPx from "./assets/cristobal/cristobalDef.gif";
import julianPx from "./assets/julian/julianDef.gif";
import alejandroPx from "./assets/alejandro/alejandroDef.gif";
import alvaroPx from "./assets/alvaro/alvaroDef.gif";
import joanPx from "./assets/joan/joanDef.gif";
import javiPx from "./assets/javi/javiDef.gif";
import armandoFoto from "./assets/armando/foto-armando.png";
import cristobalFoto from "./assets/cristobal/foto-cristobal.png";
import javiFoto from "./assets/javi/foto-javi.png";
import alejandroFoto from "./assets/alejandro/foto-alejandro.png";
import julianFoto from "./assets/julian/foto-julian.png";
import joanFoto from "./assets/joan/foto-joan.png";
import alvaroFoto from "./assets/alvaro/foto-alvaro.png";
import "./App.css";

const App = () => {
  const arr = [
    { name: "Armando" },
    { name: "Javi" },
    { name: "Alejandro" },
    { name: "Joan" },
    { name: "Cristobal" },
    { name: "Julian" },
    { name: "Alvaro" },
  ];

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
          return "Ni todas las cervezas del mundo saben mejor que pasar una noche a tu lado";
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
          return "Que alegría el haberte conocido, sin haberme comido, una polla por el camino";
        } else {
          return julianPx;
        }
        case 6:
        if (type === "picture") {
          return alvaroFoto;
        } else if (type === "text") {
          return "Juliana, aunque te hagas anciana recuerda que eres y siempre serás un PUTON";
        } else {
          return alvaroPx;
        }
        default:
          break;
    }
  };

  return (
    <section className="first-section">
      {arr.map((data, key) => {
        return (
          <div className="container">
            <div className="card">
              <div className="image">
                <img alt={`picture_type_${key}`} src={dymanicResult({ type: "picture", key })} />
              </div>
              <div className="content">
                <h3>{dymanicResult({ type: "text", key })}</h3>
                <img
                alt={`pixel_type_${key}`}
                  src={dymanicResult({ type: "pixel", key })}
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
