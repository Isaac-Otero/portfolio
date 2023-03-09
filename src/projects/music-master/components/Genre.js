import React, { Component } from "react";

class Genre extends Component {
    state = { genreIndex: 0, fadeIn: true};
    //queues something in the foreground
    componentDidMount() {
        this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);
        this.animateTitles();
    }
    //clears in the background to prevent memory leaks
    componentWillUnmount() {

        clearInterval(this.genreInterval);
        clearTimeout(this.timeout);
    }


     animateTitles=()=>{

        this.genreInterval = setInterval(()=>{
            const genreIndex=(this.state.genreIndex+1)%this.props.gLength;
            this.setState({genreIndex,fadeIn:true});
           this.timeout= setTimeout(()=> this.setState({fadeIn:false}),2000);
        },4000);

        
    }

    render(){
        const{genres}=this.props
        const {fadeIn,genreIndex}=this.state;
        const genre=genres[genreIndex];


        return(
            <div className="genre">
                <p className={fadeIn ? 'genre-fade-in': 'genre-fade-out'}>{genre} </p>
            </div>
        )
    }


}



export default Genre;