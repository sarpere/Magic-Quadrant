import ScatterChart from "./Components/ScatterChart";

function App() {
  return (
    <div className="App">
     <ScatterChart items={[{ x: 20, y: 20, label:'sarper' },  {x: 60, y: 70, label:'sarper2' },{x: 120, y: 30, label:'sarper3' }]}/>
    </div>
  );
}

export default App;
