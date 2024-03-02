import FilterData from "./usecallback/FilterData";
import FetchComponent from "./useeffect/FetchComponent";
import data from '../src/data/data.json'
import Addition from "./usememo/Addition";
import LazyLoad from "./lazyloading/LazyLoad";
import { UserProvider } from "./contextApi/UserContext";
import ContextConsumer from "./contextApi/ContextConsumer";

function App() {
  
  
  return (
    <UserProvider>
      {/*<FetchComponent/>*/}
      <FilterData data={data}/>
      <Addition numbers={[1,2,3,4,5,6]}/>
      <LazyLoad/>
      <ContextConsumer/>
    </UserProvider>
  );
}

export default App;
