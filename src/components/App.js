import React, {Component} from 'react';
import SocialProfiles from './SocialProfiles';
const profile = new URL('../assets/Me.jpeg', import.meta.url).href;
import MouseEffect from './MouseEffect';
import Title from './Title.js';
import ProfileReveal from './ProfileReveal';
const doorStill = new URL('../assets/door-still.png', import.meta.url).href;

console.log(profile)
//import { getValue } from '@testing-library/user-event/dist/utils';
const letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let name= 'Isaac Otero';
const trueName='Isaac Otero';
//component are nested elements and structured together
class App extends Component {
    
    state = {
      displayBio:false,
      h1Effect:false,
      revealReadMore: false,
      revealDoor: false,
      doorTiltX: 0,
      doorTiltY: 0
    };
    readMoreRef = React.createRef();

    handleReadMoreReveal = (isOverlapping) => {
      if (isOverlapping !== this.state.revealReadMore) {
        this.setState({ revealReadMore: isOverlapping });
      }
    };

    toggleDisplayBio=()=>{
        this.setState({displayBio: !this.state.displayBio});
    }

    revealHiddenDoor=()=>{
        this.setState({revealDoor: true});
    }

    handleDoorMove=(event)=>{
        const rect = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

        this.setState({
          doorTiltX: y * -18,
          doorTiltY: x * 22
        });
    }

    resetDoorTilt=()=>{
        this.setState({doorTiltX: 0, doorTiltY: 0});
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
          <div className='flex w-full justify-center flex-col items-center bg-black text-white'>
            <MouseEffect
              targetRef={this.readMoreRef}
              onOverlapChange={this.handleReadMoreReveal}
            />
            <div className=''>
              <ProfileReveal src={profile} alt='profile' className="profile" />
            </div>

            <h1 className='title-fade-in' onMouseEnter={this.toggleCoolEffect}> {name}</h1>
            <Title/> 
          {   //ternary expression with ? 
            this.state.displayBio ? (
              <div className='text-center'>
                <p>I love learning and I'm always looking to improve my skills.</p>
                <p>I am currently living in San Diego after graduating from UCSD.</p>
                <p>I grew to love to code in my undergrad as I loved the challenge and felt awesome when I could figure out programming assignments. </p>
                <p>I love to cook, whether it be authentic Mexican dishes my mom passed down to me or new recipes of foods I love.</p>
                <p>I like to use my free time to volunteer at my church for events, in youth outreach, and being a part of the food team.</p>
                <button onClick={this.toggleDisplayBio}> Show Less</button>
              </div>
            ) : (
              <div
                id='read-more'
                ref={this.readMoreRef}
                className={this.state.revealReadMore ? 'read-more-visible' : 'read-more-hidden'}
              >
                <button className='title-fade-in text-white border p-2 rounded-lg' onClick={this.toggleDisplayBio}>
                  Read more
                </button>
                <button className='cloud-discovery-button' onClick={this.revealHiddenDoor}>
                  What's this?
                </button>
              </div>
            )
          }
            {this.state.revealDoor && (
              <div className='hidden-door-stage' aria-label='Hidden door discovery'>
                <div className='spark-field' aria-hidden='true'>
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <div className='hidden-door-pop'>
                  <img
                    src={doorStill}
                    alt='Hidden door'
                    className='hidden-door-image'
                    onMouseMove={this.handleDoorMove}
                    onMouseLeave={this.resetDoorTilt}
                    style={{
                      transform: `perspective(720px) rotateX(${this.state.doorTiltX}deg) rotateY(${this.state.doorTiltY}deg)`
                    }}
                  />
                </div>
              </div>
            )}
            <hr />
            <SocialProfiles />
          </div>
        )
    }
}
export default App;
