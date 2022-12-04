import { useState } from 'react';
import './App.css';
import text from './data.js'
function App() {
  const [count, setcount] = useState(0);
  const [lorem, setlorem] = useState([]);
  let generate= (e)=>{
    if(count<0){
      setcount(1);
    }
    if(count>8){
      setcount(8);
    }
    e.preventDefault();
    setlorem(text.slice(0,count));
  }
 
  return (
   <>
   <div className="container mt-5">
    <div className="item">
      <h1 className=' text-center'>TIRED OF BORING LOREM IPSUM?</h1>
      <form onSubmit={generate} className=' d-flex align-items center justify-content-center my-5' >
        <label htmlFor="count" className='label-control me-2'> paragraph :</label>
        <input type="number" name="text" id="count" className='form-control w-25 ' onChange={(e)=>{
          setcount(e.target.value);
        }}/>
        <button className=' btn btn-outline-info mx-2'> generate</button>
      </form>
      <div className='w-50 m-auto  text-muted'>
      {lorem.map((item,idx)=><p key={idx} className="m-5">{item}</p>)}
      </div>
   
    </div>
   </div>
   
   </>
  );
}

export default App;
