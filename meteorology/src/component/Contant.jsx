import React from 'react'

function Contant() {
  return (
    <div className='contant'>
        <div className="input-sec">
            <input type="search" name="weather" id="" placeholder='Search' className='in'/>
            <img src="img4.png" alt="" className="icon" />
        </div>
        <div className="temprature-sec">
            <img src="img2.png" alt="weather-img" srcset="" className='weather-icon' />
            <h1 className='celcius'>17°C</h1>
            <p className="loc">Narsingdhi, Dhaka, Bnagladesh</p>
        </div>
        <div className="last-sec">
            <div className="humidity"><img src="weather.png" alt="humidity-img" srcset=""  className='img5'/>
            <p className="persent">Humidity 28%</p>
            </div>
            <div className="wind"><img src="windy.png" alt="wind-img" srcset=""  className='img5'/>
            <p className="persent">wind 28%</p>
            </div>
        </div>
    </div>
  )
}

export default Contant
