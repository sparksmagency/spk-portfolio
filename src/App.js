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
      </header>

      <section>
  {/* first column */}
  <div className='flex flex-col md:flex-row md:flex-wrap'>
            {/* image wrapper */}
        <div className='w-full max-w-[300px] h-full max-h-[300px] overflow-hidden m-[50px]' id='image-wrap'>
         
          <img className='w-full h-full object-cover object-top transition-all duration-1000 ease-in-out hover:translate-y-[-300px]' src={sample}/>
         
        </div>
        <div className='w-full max-w-[300px] h-full max-h-[300px] overflow-hidden m-[50px]' id='image-wrap'>
         
          <img className='w-full h-full object-cover object-top transition-all duration-1000 ease-in-out hover:translate-y-[-300px]' src={sample}/>
          
        </div>
        <div className='w-full max-w-[300px] h-full max-h-[300px] overflow-hidden m-[50px]' id='image-wrap'>
         
          <img className='w-full h-full object-cover object-top transition-all duration-1000 ease-in-out hover:translate-y-[-300px]' src={sample}/>
        
        </div>


        </div>
        {/* first column */}
        <div className='flex flex-col md:flex-row md:flex-wrap'>
            {/* image wrapper */}
        <div className='w-full max-w-[300px] h-full max-h-[300px] overflow-hidden m-[50px]' id='image-wrap'>
         
          <img className='w-full h-full object-cover object-top transition-all duration-1000 ease-in-out hover:translate-y-[-300px]' src={sample}/>
         
        </div>
        <div className='w-full max-w-[300px] h-full max-h-[300px] overflow-hidden m-[50px]' id='image-wrap'>
         
          <img className='w-full h-full object-cover object-top transition-all duration-1000 ease-in-out hover:translate-y-[-300px]' src={sample}/>
          
        </div>
        <div className='w-full max-w-[300px] h-full max-h-[300px] overflow-hidden m-[50px]' id='image-wrap'>
         
          <img className='w-full h-full object-cover object-top transition-all duration-1000 ease-in-out hover:translate-y-[-300px]' src={sample}/>
        
        </div>


        </div>
        {/* first column */}
        <div className='flex flex-col md:flex-row md:flex-wrap'>
            {/* image wrapper */}
        <div className='w-full max-w-[300px] h-full max-h-[300px] overflow-hidden m-[50px]' id='image-wrap'>
         
          <img className='w-full h-full object-cover object-top transition-all duration-1000 ease-in-out hover:translate-y-[-300px]' src={sample}/>
         
        </div>
        <div className='w-full max-w-[300px] h-full max-h-[300px] overflow-hidden m-[50px]' id='image-wrap'>
         
          <img className='w-full h-full object-cover object-top transition-all duration-1000 ease-in-out hover:translate-y-[-300px]' src={sample}/>
          
        </div>
        <div className='w-full max-w-[300px] h-full max-h-[300px] overflow-hidden m-[50px]' id='image-wrap'>
         
          <img className='w-full h-full object-cover object-top transition-all duration-1000 ease-in-out hover:translate-y-[-300px]' src={sample}/>
        
        </div>


        </div>
      </section>

      <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 Spark Social. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-300">Home</a>
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
            <a href="#" className="hover:text-gray-300">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default App;
