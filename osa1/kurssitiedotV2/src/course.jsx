import { useState } from 'react'
const Header = ({header}) => {
	return(
		<div>
			<h1>
				{header}
			</h1>
		</div>
	)
}

const Content = ({parts}) => {
	return(
		<div>
		<ul>
			{parts.map((course)=>
				<li key={course.id}> 
				{course.name}  {course.exercises}
				</li>
			)}
		</ul>
		</div>
	)
}
const Course = ({course}) =>{

	return(
		<div>
			<Header header={course.name} />
			<Content parts={course.parts} />
			<b>
				total of {course.parts.reduce((total, cours)=>total+cours.exercises, 0)} exercises
			</b>
		</div>
	) 

}

export default Course
