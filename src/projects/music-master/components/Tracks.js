import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart, faX } from '@fortawesome/free-solid-svg-icons'
library.add(faHeart, faX)

class Tracks extends Component {
    state = { playing: false, audio: null, playingPreviewUrl: null, currentIndex: 0, maxIndex: 10 };
    playAudio = previewUrl => () => {

        const audio = new Audio(previewUrl);
        if (!this.state.playing) {
            audio.play();
            this.setState({ playing: true, audio, playingPreviewUrl: previewUrl });
        } else {
            this.state.audio.pause();

            if (this.state.playingPreviewUrl === previewUrl) {
                this.setState({ playing: false });
            } else {
                audio.play();
                this.setState({ audio, playingPreviewUrl: previewUrl });
            }
        }
    }

    trackIcon = track => {
        if (!track.preview_url) {
            return <span>N/A</span>;
        }

        if (

            this.state.playing &&
            this.state.playingPreviewUrl === track.preview_url

        ) {
            console.log(track.album);
            return <span>| |</span>;
        }

        return <span>&#9654;</span>;
    }

    renderCards = tracks => {
        if (!tracks[0]) {
            return null;
        }
        let images = tracks.map(track => {
            const { id, name, album, preview_url } = track;

            return (
       
                    <div
                        key={id}
                        onClick={this.playAudio(preview_url)}
                        className='track'
                    >
                        <div alt='track-image'
                            className='track-image'
                            style={{backgroundImage:`url(${album.images[0].url})` }}
                            >
                        </div>
                        <p className='track-text'>{name}</p>
                        <p className='track-icon'>{this.trackIcon(track)}</p>
                       
                    </div>
                
            )
        })
        return (
            images[this.state.currentIndex]
        );
    }
    handleLove = () => {
        this.setState({ currentIndex: this.state.currentIndex + 1 <= this.state.maxIndex - 1 ? this.state.currentIndex + 1 : 0 });

    }
    handleDislike = () => {
        this.setState({ currentIndex: this.state.currentIndex - 1 >= 0 ? this.state.currentIndex - 1 : this.state.maxIndex - 1 });

    }

    changeTrack = () => {
        return (
            <div className='swipe-buttons'>
                <button className='dislike-button' onClick={this.handleDislike}>
                    <FontAwesomeIcon icon={["fas", "x"]} />
                </button>
                <button className='like-button' onClick={this.handleLove}>
                    <FontAwesomeIcon icon={["fas", "heart"]} />
                </button>
            </div>

        );
    }




    render() {
        const { tracks } = this.props;
        return (
            <div >

                {

                    this.renderCards(tracks)

                }
                {
                    this.changeTrack()
                }
               
            </div>
        )
    }
}
export default Tracks;