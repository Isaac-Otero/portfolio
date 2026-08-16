import React, {Component} from 'react';
import { Link } from 'react-router-dom';
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
      h1Effect:false,
      revealAboutCloud: false,
      revealDoor: false,
      doorTiltX: 0,
      doorTiltY: 0
    };
    aboutCloudRef = React.createRef();
    doorStageRef = React.createRef();
    hideAboutCloudTimer = null;

    componentWillUnmount() {
      if (this.hideAboutCloudTimer) {
        window.clearTimeout(this.hideAboutCloudTimer);
      }
    }

    handleAboutCloudReveal = (isOverlapping) => {
      if (isOverlapping) {
        if (this.hideAboutCloudTimer) {
          window.clearTimeout(this.hideAboutCloudTimer);
          this.hideAboutCloudTimer = null;
        }
        this.setState({ revealAboutCloud: true });
      } else {
        this.hideAboutCloudTimer = window.setTimeout(() => {
          this.setState({ revealAboutCloud: false });
          this.hideAboutCloudTimer = null;
        }, 260);
      }
    };

    revealHiddenDoor=()=>{
        if (this.hideAboutCloudTimer) {
          window.clearTimeout(this.hideAboutCloudTimer);
          this.hideAboutCloudTimer = null;
        }
        this.setState({revealDoor: true}, () => {
          window.setTimeout(() => {
            this.doorStageRef.current?.scrollIntoView({
              behavior: 'smooth',
              block: 'center'
            });
          }, 120);
        });
    }

    handleDoorMove=(event)=>{
        const rect = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

        this.setState({
          doorTiltX: y * -23.5,
          doorTiltY: x * 28.5
        });
    }

    resetDoorTilt=()=>{
        this.setState({doorTiltX: 0, doorTiltY: 0});
    }

    toggleCoolEffect=event=>{
    
        let iterations =0;
        if(!this.state.h1Effect){
        const interval= setInterval(()=>{
        this.setState({h1Effect: true});
        
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
              targetRef={this.aboutCloudRef}
              onOverlapChange={this.handleAboutCloudReveal}
              revealThreshold={0.38}
              hideThreshold={0.18}
            />
            <div className=''>
              <ProfileReveal src={profile} alt='profile' className="profile" />
            </div>

            <h1 className='title-fade-in' onMouseEnter={this.toggleCoolEffect}> {name}</h1>
            <Title/> 
            <div
              id='read-more'
              ref={this.aboutCloudRef}
              className={`home-cloud-about-zone ${this.state.revealAboutCloud ? 'read-more-visible' : 'read-more-hidden'}`}
            >
              <button
                className='home-cloud-about-link'
                type='button'
                onClick={this.revealHiddenDoor}
                tabIndex={this.state.revealAboutCloud ? 0 : -1}
              >
                <span className='cloud-puffs' aria-hidden='true'>
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </span>
                <span className='cloud-button-label'>What's this?</span>
              </button>
            </div>
            {this.state.revealDoor && (
              <div
                ref={this.doorStageRef}
                className='hidden-door-stage'
                aria-label='Hidden door discovery'
              >
                <div className='spark-field' aria-hidden='true'>
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <Link className='hidden-door-entry' to='/about' aria-label='Enter about page'>
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
                </Link>
              </div>
            )}
            <hr />
            <SocialProfiles />
          </div>
        )
    }
}
export default App;
