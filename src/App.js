import React, { useState, useEffect } from 'react'
import Clock from './components/Clock'

function App() {
	const [timerDays, setTimerDays] = useState()
	const [timerHours, setTimerHours] = useState()
	const [timerMinutes, setTimerMinutes] = useState()
	const [timerSeconds, setTimerSeconds] = useState()

	let interval

	const startTimer = () => {
		const countDownDate = new Date('January 29, 2025').getTime()

		interval = setInterval(() => {
			const now = new Date().getTime()

			const distance = countDownDate - now

			const days = Math.floor(distance / (24 * 60 * 60 * 1000))
			const hours = Math.floor(
				(distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
			)
			const minutes = Math.floor(
				(distance % (60 * 60 * 1000)) / (1000 * 60)
			)
			const seconds = Math.floor((distance % (60 * 1000)) / 1000)

			if (distance < 0) {
				// Stop timer
				clearInterval(interval.current)
			} else {
				setTimerDays(days)
				setTimerHours(hours)
				setTimerMinutes(minutes)
				setTimerSeconds(seconds)
			}
		})
	}

	useEffect(() => {
		startTimer()
	})

	return (
		<div className='App'>
			<Clock
				timerDays={timerDays}
				timerHours={timerHours}
				timerMinutes={timerMinutes}
				timerSeconds={timerSeconds}
			/>
		</div>
	)
}

export default App
