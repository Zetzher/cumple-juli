import logo from "./logo.svg";
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

  return (
    <section className="first-section">
      {arr.map((data) => (
        <div className="container">
          <div className="card">
            <div className="image">
              <img src="https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg" />
            </div>
            <div className="content">
              <h3>This is content</h3>
              <p>
                DIn publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content.
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default App;
