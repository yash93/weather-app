import axios from 'axios';
import React, { useState } from 'react';
import './App.css';


function App() {
  
  const [data,setData] = useState({})
  const [location,setLocation] = useState('')
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&speed=metric&appid=eb3d13dbfafeb8e4fc98dc03a310779d`

  const searchLocation = (event) =>{
    if(event.key === 'Enter'){
      if(location.trim().toLowerCase()=="mumbai"){
  document.getElementById("first").style.display ='none';
  document.getElementById("second").style.display ='none'
  document.getElementById("third").style.display ='none'
  document.getElementById("fourth").style.display ='none'
  document.getElementById("default").style.display ='block'

      }
      axios.get(url).then((response) =>{
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  const myFunction = (event) => {
  document.getElementById("first").style.display ='block';
  document.getElementById("second").style.display ='none'
  document.getElementById("third").style.display ='none'
  document.getElementById("fourth").style.display ='none'
  document.getElementById("default").style.display ='none'
 // document.getElementById('loca').value = document.getElementById("b1").innerHTML;

  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=france&units=metric&speed=metric&appid=eb3d13dbfafeb8e4fc98dc03a310779d`).then((response) =>{
    setData(response.data)
    console.log(response.data)
  })
  setLocation('')
}

const myFunction2 = () => {
  document.getElementById("second").style.display ='block'
  document.getElementById("first").style.display ='none'
  document.getElementById("third").style.display ='none'
  document.getElementById("fourth").style.display ='none'
  document.getElementById("default").style.display ='none'


  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Africa&units=metric&speed=metric&appid=eb3d13dbfafeb8e4fc98dc03a310779d`).then((response) =>{
    setData(response.data)
    console.log(response.data)
  })
  setLocation('')
}

const myFunction3 = () => {
  document.getElementById("third").style.display ='block'
  document.getElementById("first").style.display ='none'
  document.getElementById("second").style.display ='none'
  document.getElementById("fourth").style.display ='none'
  document.getElementById("default").style.display ='none'


  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=qatar&units=metric&speed=metric&appid=eb3d13dbfafeb8e4fc98dc03a310779d`).then((response) =>{
    setData(response.data)
    console.log(response.data)
  })
  setLocation('')
}

const myFunction4 = () => {
  document.getElementById("fourth").style.display ='block'
  document.getElementById("first").style.display ='none'
  document.getElementById("second").style.display ='none'
  document.getElementById("third").style.display ='none'
  document.getElementById("default").style.display ='none'


  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=japan&units=metric&speed=metric&appid=eb3d13dbfafeb8e4fc98dc03a310779d`).then((response) =>{
    setData(response.data)
    console.log(response.data)
  })
  setLocation('')
}



  return (
    <div className="App">
        <div className="container">
            <div className="weather-detail">
              <div className="weather-info1">
                  <div className="location">
                    <p>{data.name}</p>
                  </div>
                  <div className="temp">
                     {data.main ? <h1>{data.main.temp.toFixed()}°</h1> : null}
                  </div>
                  <div className="description">
                     {data.weather ? <p>{data.weather[0].main}</p> : null}
                  </div>
              </div>
              
              {data.name !== undefined &&
                <div className="weather-info2">
                  <div className="humidity">
                    <p className='hum'>Humidity</p>
                     {data.main ? <p className='hu'>{data.main.humidity}%</p> : null}
                  </div>
                  <div class="line"></div>
                  <div className="wind">
                    <p className='win'>Wind</p>
                    {data.wind ? <p className='wi'>{data.wind.speed.toFixed()}K/m</p> : null}
                  </div>
              </div>
              }
              <div className='logo'><img src={require('./assets/logo_new.png')} alt="1"/></div>
              <div id="first"><img src={require('./assets/NoPath.jpg')} alt="1"/></div>
              <div id="second"><img src={require('./assets/Group-2.jpg')} alt="2"/> </div>
              <div id="third"><img src={require('./assets/Mask-Group-1.jpg')} alt="3"/> </div>
              <div id="fourth"><img src={require('./assets/Mask-Group-3.jpg')} alt="4"/> </div>
              <div id="default"><img src={require('./assets/Group-1.jpg')} alt="5"/> </div>
             
            </div>
            <div className="search-box">
              <button type="submit" className='search-icon'><img src={require('./assets/noun_Search_3808947.png')} alt="search" /></button>
                <input id="loca"
                  value={location}
                  onChange={event => setLocation(event.target.value)}
                  onKeyPress={searchLocation}
                  placeholder= "Search Location"
                  type="text" 
                />
              <button type="submit" className='loc-icon'><img src={require('./assets/noun_Location_3805844.png')} alt="search" /></button>

            </div>
            
            <div className="cities-button">
              <button className="b1" id="b1" onClick={myFunction}>FRANCE</button>
              <button className="b2" onClick={myFunction2}>NORTH AFRICA</button>
              <button className="b3" onClick={myFunction3}>QATAR</button>
              <button className="b4" onClick={myFunction4}>JAPAN</button>
            </div>
        </div>
    </div>
  );
}

export default App;
