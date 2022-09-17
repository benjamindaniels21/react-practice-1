import "./App.css";
import List from "./List";
import Message from "./Message";

function App() {
  return (
    <div className="App">
      <List />
      <Message message="This is a message passed in via props" />
    </div>
  );
}

export default App;
