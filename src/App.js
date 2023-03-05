import './App.css';
import rider from "./assets/rider.jpeg";
import man from "./assets/man.png";

function App() {
  return (
    <div className="App">
      <div className='bar'>
        <div style={{fontWeight: "bold", fontSize: "1.7rem", color: "white"}}>
          HERRANDS
        </div>
        <div style={{fontWeight: "bold", fontSize: "1.7rem", color: "white"}}>
          Good Day!
        </div>
      </div>
      <div className='words'>
        <p style={{fontWeight: "bold", fontSize: "3rem"}}>Run the herrands that steal your time away!</p>
        <p style={{width: "45rem"}}>We help business owners, entrepreneurs, managers, office workers, techies, and individuals with tight schedules save a minimum of 1 hour weekly to free up more time and get more done.</p>
        <p style={{fontWeight: "bold", fontSize: "2rem", width: "40rem"}}>What type of herrands are you running today?</p>
      </div>
      <div className="TopImage">
        <img src={rider} style={{width: "100vw", height: "65vh"}}/>
      </div>
      <div className="Bottom">
      <div style={{position: "fixed", marginTop: "-4.5rem"}}>
          <img src={man} />
        </div>
        <div className='content'>
        <div className='Buttons'>
          <div className='but'>
            On Site
          </div>
          <div className='but' style={{background: "white", color: "#26344F"}}>
            Virtual
          </div>
        </div>
        <div className='text'>
          <p style={{fontSize: "1.8rem"}}>
          In too much of a hurry to fill out a form? 
          </p>
          <div style={{display: "flex", gap: "10rem"}}>
          <p className='contact'>
          <span style={{fontWeight: "bold"}}>Give us a call 📞</span>
          <span>+234 704 418 4306</span>
          </p>
          <p className='contact'>
          <span style={{fontWeight: "bold"}}>Send us an email 📩 </span>
          <span>send@herrands.com</span>
          </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
