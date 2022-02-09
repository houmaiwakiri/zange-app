import "./App.css";
import { InputForm } from "./components/InputForm";
import { Title } from "./components/Title";
import { ZangeList } from "./components/ZangeList";

function App() {
  return (
    <div className="body">
      <Title />
      <InputForm />
      <ZangeList />
    </div>
  );
}

export default App;
