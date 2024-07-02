import { useEffect, useState } from "react";
import { useRoutes } from "react-router";
import "./App.css";
import routes from "./routes";
import { sayHello } from "./service";

function App() {
  const elements = useRoutes(routes);
  console.log("elements", elements);
  const [helloMes, sethelloMes] = useState("changing...");
  const getHello = async () => {
    const res = await sayHello();
    if (res.status === 200) sethelloMes(res.data);
  };
  useEffect(() => {
    getHello();
  }, []);
  return (
    <div className="App">
      <h3>{helloMes} </h3>

      {elements}
    </div>
  );
}

export default App;
