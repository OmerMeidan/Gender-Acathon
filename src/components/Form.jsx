import React from 'react';
// import mandance from './images/mandance.jpg'
// import woman from './images/womansoccer.jpg'
import '../del.css'
import NavBar from './NavBar';

const DeleteMe = () => {
    return (
        <div>
            <NavBar/>
            <br />
        <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
        <div style={{display:"flex", justifyContent:"center"}}>
          <img
            src='https://images.pexels.com/photos/1701194/pexels-photo-1701194.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt=""
            style={{
              width: "20vw",
              borderRadius: "26px",
                
          
            }}
            className="hey"
          />
        </div>
        <br />
        <div style={{display:"flex", justifyContent:"center"}}>
        <div style={{width:"20vw", display:"flex", justifyContent:"center", border:"2px solid black", borderRadius:"26px", backgroundColor:"whitesmoke"}}>
          <label htmlFor="" style={{fontFamily:"Mynerve"}}>Dance - Boys</label>
        </div>
        </div>
        <br />
        <div style={{display:"flex", justifyContent:"center"}}>
          <img
            src='https://images.pexels.com/photos/264384/pexels-photo-264384.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt=""
            style={{
              width: "20vw",
              borderRadius: "26px"
            }}
            className="hey"
          />
        </div>
        <br />
        <div style={{display:"flex", justifyContent:"center"}}>
        <div style={{width:"20vw", display:"flex", justifyContent:"center", border:"2px solid black", borderRadius:"26px", backgroundColor:"whitesmoke"}}>
          <label htmlFor="" style={{fontFamily:"Mynerve"}}>Soccer - Girls</label>
        </div>
        </div>
      </div>
      </div>
    
    );
}

export default DeleteMe;