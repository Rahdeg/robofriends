import axios from 'axios';
import { useState,useEffect } from 'react';
import './App.css';
import Cards from './components/Cards';
import Scroll from './components/Scroll';
import Searchbox from './components/Searchbox';

function App() {
    const [searchfield, setsearchfield] = useState('');
    const [Robots, setrobots] = useState([]);

    const onSearch=(event)=>{
    setsearchfield(event.target.value);
    }

    const loadData = async () =>{
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setrobots(response.data)
  }


    useEffect(() => {
     loadData(); 
     
    }, [])

    

    const filterrobot= Robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })

  return (
    <div className="  min-h-screen  bg-primary pb-20">
    <Searchbox onSearch={onSearch} />
      <Scroll>
      <Cards Robots={filterrobot}/>
      </Scroll>
    </div>
  );
}

export default App;
