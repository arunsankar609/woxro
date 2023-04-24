
import './App.css';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Header from './components/Header';
import Services from './components/Services';

function App() {
  return (
    <div className='bg-black w-full h-auto'>
    <div className="App  flex justify-center ">
      <div className='w-[80%] bg-slate-300 flex flex-col justify-center'>
      <Header/>
      <Banner/>
      <Services/>
      <Contact/>
      </div>
     
    </div>
    
    </div>
  );
}

export default App;
