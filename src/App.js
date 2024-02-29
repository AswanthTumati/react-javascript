import FilterData from "./usecallback/FilterData";
import FetchComponent from "./useeffect/FetchComponent";
import data from '../src/data/data.json'
import Addition from "./usememo/Addition";

function App() {
  
  
  return (
    <div className="App">
      {/*<FetchComponent/>*/}
      <FilterData data={data}/>
      <Addition numbers={[1,2,3,4,5,6]}/>
    </div>
  );
}

export default App;
