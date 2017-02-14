import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch  from 'youtube-api-search';
import SearchBar from './component/search_bar';
import VideoList from './component/video_list';
const API_KEY = 'AIzaSyAZN3BFSAJaW2Ne3XAqbMh1hJLNh7v-TGA';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {videos: []};

        YTSearch({key: API_KEY, term: 'surfboards'},  (videos) => {
            this.setState({videos});
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoList  videos={this.state.videos}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));