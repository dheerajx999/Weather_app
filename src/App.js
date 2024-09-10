import './App.css';
import Search from '/Users/dheerajpatwal/WebstormProjects/weather_app/src/components/search/search.js';
function App() {

    const handleOnSearchChange = (searchData) => {
        console.log(searchData)
    }

    return (
      <div className = "container">
        <Search onSearchChange={handleOnSearchChange}/>
      </div>
    );
}

export default App;
