// let mensaje = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     resolve({ status: true });
//   }, 2000);
// }).then((data) => {
//   console.log("Observar 2", data);
// });
// let mensaje = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     resolve({ status: true });
//   }, 2000);
// });

// const mostrarMensaje = async () => {
//   console.log("Observar 2", await mensaje);
//   console.log("Observar 3", "Hola hola");
// };

// // async function

// console.log("Observar 1", mensaje);
// mostrarMensaje();
import { useState } from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  const [state, setState] = useState(0);
  // [valor, function]
  return (
    <div className="container all-height">
      <div className="row">
        <div className="col-12">
          <p>Click: {state}</p>
        </div>
        <div className="col-12">
          <button
            onClick={() => {
              setState((prev) => prev + 1);
            }}
          ></button>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
        </div>
        <div className="col-12">
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Example textarea
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
