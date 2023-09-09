import React, { useState } from 'react'
import PomodoroClock from '../components/PomodoroClock'

export default function Pomodoro() {
  const [pomodoro, setPomodoro] = useState({
    workTime: localStorage.getItem('workTime') || 25,
    shortBreak: localStorage.getItem('shortBreak') || 5,
    longBreak: localStorage.getItem('longBreak') || 15,
  })
  const [status, setStatus] = useState(localStorage.getItem('status') || 'pomodoro')

  const handleChange = (e) => {
    const { name, value } = e.target
    localStorage.setItem(name, value)
    setPomodoro((prevPomodoro) => ({
      ...prevPomodoro,
      [name]: value,
    }))
  }

  const handleStatus = (newStatus) => {
    localStorage.setItem('status', newStatus)
    setStatus(newStatus)
  }

  return (
    <div className='Pomodoro Page'>
      <h1>Pomodoro</h1>
      <form>
        <input type='number' defaultValue={pomodoro.workTime} onChange={handleChange} name='workTime' inputMode='numeric' />
        <label>Pomodoro {pomodoro.workTime}</label>
        <input type='number' defaultValue={pomodoro.shortBreak} onChange={handleChange} name='shortBreak' inputMode='numeric' />
        <label>Short Break {pomodoro.shortBreak}</label>
        <input type='number' defaultValue={pomodoro.longBreak} onChange={handleChange} name='longBreak' inputMode='numeric' />
        <label>Long Break {pomodoro.longBreak}</label>
      </form>
      <PomodoroClock workTime={pomodoro.workTime * 60} shortBreak={pomodoro.shortBreak * 60} longBreak={pomodoro.longBreak * 60} status={status} handleStatus={(newStatus) => handleStatus(newStatus)} />
    </div>
  )
}
