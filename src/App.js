import FilterData from "./usecallback/FilterData";
import FetchComponent from "./useeffect/FetchComponent";
import data from '../src/data/data.json'

function App() {
  
  
  return (
    <div className="App">
      {/*<FetchComponent/>*/}
      <FilterData data={data}/>
    </div>
  );
}

export default App;
