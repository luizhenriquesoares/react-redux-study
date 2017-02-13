import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './component/search_bar';

const API_KEY = 'AIzaSyAZN3BFSAJaW2Ne3XAqbMh1hJLNh7v-TGA';

// Create a new component. This component should produce
// some HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    ); 
}
 
// Take this component's generated HTML and put it
//on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));