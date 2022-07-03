import { useState } from "react";

import InfoCards from "./Components/InfoCards/InfoCards";
import Totals from "./Components/Totals/Totals";
import Card from "./Components/UI/Card";
import UserInputs from "./Components/UserInputs/UserInputs";

function App() {
  const [cost, setCost] = useState(0);
  const [desc, setDesc] = useState("");
  const [total, setTotal] = useState(0);
  const [infoCard, setInfoCard] = useState([]);

  const handleProfit = (value) => {
    setCost(value);
    console.log(total);
  };
  const handleDesc = (value) => {
    setDesc(value);
  };
  const handleTotal = (event) => {
    event.preventDefault();
    setTotal((prev) => +prev + +cost);

    setInfoCard([...infoCard, { value: cost, desc: desc }]);
  };

  return (
    <Card>
      <UserInputs
        profit={cost}
        onProfit={handleProfit}
        onDesc={handleDesc}
        onTotal={handleTotal}
      />
      <InfoCards infoCardContent={infoCard} />
      <Totals cost={cost} total={total} />
    </Card>
  );
}

export default App;
