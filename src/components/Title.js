import React,{Component} from "react";

const TITLES=[
    'a software engineer',
    'a music lover', 
    'an excellent cook',
    'a follower of Jesus',
    'an enthusiastic learner'
];

class Title extends Component{
    state={titleIndex:0,fadeIn:true};

    //queues something in the foreground
    componentDidMount(){
        this.timeout= setTimeout(()=> this.setState({fadeIn:false}),2000);
        this.animateTitles();

    }
    
    //clears in the background to prevent memory leaks
    componentWillUnmount(){

        clearInterval(this.titleInterval);
        clearTimeout(this.timeout);
    }

    animateTitles=()=>{
        this.itleInterval = setInterval(()=>{
            const titleIndex=(this.state.titleIndex+1)%TITLES.length;
            
            this.setState({titleIndex,fadeIn:true});
           this.timeout= setTimeout(()=> this.setState({fadeIn:false}),2000);
            
        },4000);
    }

    render(){
        const{fadeIn,titleIndex}=this.state;

        const title=TITLES[titleIndex];
        
        return(
            <p className={fadeIn ? 'title-fade-in': 'title-fade-out'}>I am {title}</p>

        )
    }
}
export default Title;