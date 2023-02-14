import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import { api } from '../../ApiProvider'



export default function WeekPlan(){

  const [events, setEvents] = useState()
  const [changed, setChanged] = useState(false)

  
  const weeklyPlan = useWeeklyPlan()

  return <div> 
    <div className = "WeekGrid"> 
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


function useWeeklyPlan(){

  const plan = {planEvent: 'alldayFree'}

  useEffect(() => {

   console.log('all free')


   api.get('/users')
   .then(res => res.data)
   .then(users =>users.find(user => user['userName'] === 'ceq'))
   .then(user => user['userSchedule'])
   .then(schedule => schedule['Monday'])
   .then(day => day['events'].forEach(event => {
    let date = new Date(event['Time'])
    console.table(date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric'}))
  }))


  },[])


  return plan
}


function WeekDay({events, weekDay}){


  const [dayEvents, setDayEvents] = useState('')

  useEffect(() => {
    console.log(events)
    if(events !== undefined && events.length != 0){
      setDayEvents(events.map((event, index) => <li key ={index}> {event['Description']} </li> ))
    }
    
  },[])
    

  return <div>
    {weekDay}
    <ol>
      {dayEvents} 
    </ol>
  </div>
}

  function Event({description, date}){


    return <div className = 'Event'> 
        {description}
        <br/>
        {date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric'})}
    </div>
  }
