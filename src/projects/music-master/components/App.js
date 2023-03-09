import React, { Component } from 'react';
import Search from './Search';
import Artist from './Artist';
import Tracks from './Tracks';
import Genre from './Genre';

const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com'

class App extends Component {
    state = {artist: null,tracks:[], genres:[], gLength:null};

    componentDidMount(){
        this.searchArtist('citizens');
    }

    searchArtist = artistQuery => {
        fetch(`${API_ADDRESS}/artist/${artistQuery}`)
            .then(respone => respone.json())
            .then(json => {
                if (json.artists.total > 0) {
                    const artist = json.artists.items[0];
                    const genres=json.artists.items[0].genres;
                    const gLength=json.artists.items[0].genres.length;
                    this.setState({gLength});
                    this.setState({genres});
                    this.setState({ artist });
                    fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
                        .then(respone => respone.json())
                        .then(json => this.setState({tracks:json.tracks}))
                        .catch(error => alert(error.message));
                        console.log(`https://spotify-api-wrapper.appspot.com/artist/${artist.id}/top-tracks`);
                }
            
            })
            .catch(error => alert(error.message));
    }

    render() {
        return (
            <div>
                <h1 className='title'> Music Master</h1>
                <Search searchArtist={this.searchArtist}/>
                <Artist artist={this.state.artist}/>
                <Genre gLength={this.state.gLength} genres={this.state.genres}/>
                <Tracks tracks={this.state.tracks}/>
             
                
            </div>
        )
    }
}
export default App;