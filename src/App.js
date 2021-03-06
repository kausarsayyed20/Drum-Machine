import React,{Component} from 'react';
import './App.css';

const sounds = [
  {
    key: 'Q',
    type: 'Heater',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    key: 'W',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    key: 'E',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    key: 'A',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    key: 'S',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    key: 'D',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    key: 'Z',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    key: 'X',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    key: 'C',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  },
];

//const style = this.props.togglePower ? {background: "#0ad82c"} : {background: "#063d0f", boxShadow: "none"};


class App  extends Component
{
  constructor(props){
    super(props);
    this.state={
      power: true
    }
  
  }

 

  render(){
    return(
<div id="wrapper">
      <h1> DRUM MACHINE</h1>
    <div id="drum-machine" className="container">
    <div id="display" className="display">
         
      <h1>Play a sound</h1>
            {sounds.map((sound,idx)=>(
              <Box text={sound.key} key={idx} audio={sound.mp3}/>
            ))}
      </div>
      </div>
      </div>
    )
  }
}

 

class Box extends Component{
 
  constructor(props)
  {
    super(props);
    
    this.audio=React.createRef();
  }
//  box-shadow: 2px 2px 5px rgba(0,0,0,0.4);
//transform: scale(1.2) rotate(20deg);
  componentDidMount(){
  
    this.audio.current.addEventListener('ended',(e)=>{
      const parent=e.target.parentNode;
      parent.classList.remove('active');
    });
  }
    playSound=()=>{
     
      const id=this.audio.current.id;
      this.audio.current.play();
      const parent= this.audio.current.parentNode;
      parent.classList.add('active');
     const display=parent.parentNode;
     display.querySelector('h1').innerText=`${id} is Playing`;
     
    }
      
    
      render(){
        
        const{text,audio }=this.props;
        return(
      <div className="box" onClick={this.playSound} id={`drum-${text}`}>
        {text}
        <audio ref={this.audio} src={audio} className="clip" id={text}/>
        </div>
      ) 
      }
    }

    document.addEventListener('keydown',(e)=>{
      const id=e.type;
      const audio=document.getElementById(id);
      if(audio)
      {
       audio.currentTime=0;
        const parent=audio.parentNode;
        parent.classList.add('active');
        const display=parent.parentNode;
        display.querySelector('h1').innerText=`${id} is Playing`;
        audio.play();
      }
     
    });
      
    export default App;
