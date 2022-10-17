import Card from "./components/Card";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Counter />

      <Card
        name="Sara"
        image="https://images.pexels.com/photos/7775639/pexels-photo-7775639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        button="Read More"
      />
      {/* <Card
        name="Nikhil"
        image="https://images.pexels.com/photos/7775636/pexels-photo-7775636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      /> */}
    </div>
  );
}

export default App;
