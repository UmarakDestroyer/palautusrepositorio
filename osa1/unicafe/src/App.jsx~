import { useState } from 'react'

const StatisticsLine = (props) =>{
	const text = props.text
	const value = props.value
	return(
		
		<tr>
			<td>{text}</td>
			<td>{value}</td>
		</tr>)}
const Statistics = (props) => {
	const all = props.good+props.neutral+props.bad
	if (all == 0){
		return(
			<div>
		<h2>statisics</h2>
			no feedback given
			</div>
		)
	}
	else {
	return ( 
	<div>	
		<h2>statistics</h2>
	<table>
		<StatisticsLine text="good" value={props.good} />
		<StatisticsLine text="netural" value= {props.neutral} />
		<StatisticsLine text="bad" value= {props.bad} />
		<StatisticsLine text="all" value={all} />
		<StatisticsLine text="average" value={(props.good-props.bad)/all} />
		<StatisticsLine text="positive" value= {props.good*100/all}/>
		</table>
	</div>
		
	)}
}
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
	  <div>
	  <h2>Give feedback</h2>
	  <button onClick={() => setGood(good+1)}>good</button>
	  <button onClick={() => setNeutral(neutral+1)}>neutral</button>
	  <button onClick={() => setBad(bad+1)}>bad</button>
	  <Statistics good={good} neutral={neutral} bad={bad} />

	  </div>
  )
}
export default App
