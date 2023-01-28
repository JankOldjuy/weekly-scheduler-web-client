import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'



export default function WeekPlan(){

  const [loaded, setLoaded] = useState(false)
  const userId = 187
  const [events, setEvents] = useState()
  const [days, setDays] = useState()

  useEffect(() => {/* 
    fetch(`http://localhost:5000/user_${userId}`)
      .then(res => res.json())
        .then(data => {
          setEvents(data)
          setLoaded(true)}) */
  },[])


  return <div> 
    <div className = "WeekGrid"> 
      
      {}
      
      <WeekDay weekDay = 'monday' events = {events !== undefined? events['Monday']['events']: undefined } />
      <div>Tuesday </div>
      <div>Wednesday </div>
      <div>Thursday </div>
      <div>Friday </div>
      <div>Saturday </div>
      <div>Sunday </div>
      </div>
    </div>


}


function WeekDay({events, weekDay}){


  const [dayEvents, setDayEvents] = useState('')

  useEffect(() => {
    console.log(events)
    if(events !== undefined && events.length != 0){
      setDayEvents(events.map((event, index) => <li key ={index}> {event['Description']} </li> ))
    }
    
  },[])

  {/* <span onClick = {() => {setAdding(true)}}>+</span>
   */}    

  return <div>
    {weekDay}
    <ol>
      {dayEvents} 
    </ol>
  </div>
}
