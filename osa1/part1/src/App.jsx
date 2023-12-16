import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
const Header = (props) => {
	const exercises1 = 10
	const part1 = "Fundamentals of React"
	return (
		<h1>{props.course}</h1>
		<p>{part1}{exercises1}</p>
	)
	
}
const Content = () => {
	const part2 = "Using props to pass data"
	const exercises2 = 7
	return(
	<p>
		{part2}{exercises2}
	</p>
	)
}

const Total = () => {
	const part3 = "State of a component"
	const exercises3 = 14
	return(
		
	      <p>
	        {part3} {exercises3}
	      </p>
	      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>

	)}
const App = () => {
	const course = "Half Stack application development"
return (
	<div>
	<Header course={course} />
	<Content ... />
	<Total ... />
	</div>
	  )
}
export default App
