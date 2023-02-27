import React, {Component} from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from '../assets/Me.jpeg'
import MouseEffect from './MouseEffect';
import Title from './Title.js';
import Header from './Header';
import Reaction from '../projects/reaction'
//import { getValue } from '@testing-library/user-event/dist/utils';
const letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let name= 'Isaac Otero';
const trueName='Isaac Otero';
//component are nested elements and structured together
class App extends Component {
    
    state = {displayBio:false, h1Effect:false};

    toggleDisplayBio=()=>{
        this.setState({displayBio: !this.state.displayBio});
    }
    toggleCoolEffect=event=>{
    
        let iterations =0;
        if(!this.state.h1Effect){
        const interval= setInterval(()=>{
        this.setState({h1Effect: !this.state.displayBio});
        
        name=name.split("").map((letter,index)=>{
            if(index<iterations){
                return trueName.charAt(index);
            }
            return letters[Math.floor(Math.random() *26)]
        })
        .join("");
  
        if(iterations>=11) clearInterval(interval);
        iterations+=1/3;
       
        },30);
    }else{
        setTimeout(4000);
        this.setState({h1Effect:false})
    }
        
        
    }
    //where we define the structure of the component,
    render(){
        //component
        return(
            <div>
                <MouseEffect/>
                <img src={profile} alt='profile' className="profile"/>

                <h1 className='title-fade-in' onMouseEnter={this.toggleCoolEffect}> {name}</h1>
                <Title/> 
            {   //ternary expression with ? 
             this.state.displayBio? (<div>
                <p>I love learning and I'm always looking to improve my skills.</p>
                <p>I am currently living in San Diego after graduating from UCSD.</p>
                <p>I grew to love to code in my undergrad as I loved the challenge and felt awesome when I could figure out programming assignments. </p>
                <p>I love to cook, whether it be authentic Mexican dishes my mom passed down to me or new recipes of foods I love.</p>
                <p>I like to use my free time to volunteer at my church for events, in youth outreach, and being a part of the food team.</p>
                    <button onClick={this.toggleDisplayBio}> Show Less</button>
                </div>): (
                    <div> 
                        <button className='title-fade-in' onClick={this.toggleDisplayBio}> Read more</button>
                    </div>
                )
             }
             <hr />
             
             <Projects/>
             <hr />
             <SocialProfiles />
            </div>
            
        )
    }
}
export default App;