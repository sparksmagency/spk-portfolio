import logo from './logo.svg';
import sample from "./assets/sample_site.jpg.jpg"

function App() {
  return (
    <div className="App">
      <header className="App-header">
    
       
        <h1>
        Where Vision Meets Reality
        </h1>
        <p className=' text-lg w-full max-w-24'>
        At Spark Social, we believe that every great website begins with a vision. Our portfolio is a collection of dreams turned into stunning digital realities. We’re dedicated to making your aspirations come to life with creativity and precision.
        </p>
        <div className='w-full max-w-[300px] h-full max-h-[300px] overflow-hidden m-[50px]' id='image-wrap'>
        <img className='w-full h-full object-cover object-top transition-all duration-1000 ease-in-out hover:translate-y-[-300px]' src={sample}></img>
        </div>
      
      </header>

      <section>

      </section>
    </div>
  );
}

export default App;
