
import '../App.css';
import  {useSelector, useDispatch} from "react-redux";
import { getAllData } from '../features/HomeSlice';
import { useEffect } from 'react';

function Gallery() {
  const dispatch = useDispatch();
  const db = useSelector((state) =>{
    console.log("states", state.counter);
    return state.counter
  });
  

  
  useEffect(() => {
    console.log('States', db);
  
  }, [db]);


  return (
    <div  className='user-gallery-container'>
      <button onClick={() => dispatch(getAllData())} className="fetch-button"> Get Gitub users </button>
      <div className='user-gallery'>
      
      {db.users.map((ele) =>(
        
        <div key={ele.id} className="user-card">
          <img src={ele.avatar_url} alt="User Avatar" className='user-avatar' />
          <p>{ele.login}</p>
          <a href={ele.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
        </div>
      ))}
      </div>

    </div>
  );
}

export default Gallery;
