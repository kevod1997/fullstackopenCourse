import React from 'react'
import Content from './Content'
import Header from './Header'
import Total from './Total'

function Course({courses}) {
  return (
    <div>
        <Header header={courses[0].name}/>
        <Content parts={courses[0].parts} />
         <Total course={courses[0]}/> 
        <Header header={courses[1].name}/>
        <Content parts={courses[1].parts} />
         <Total course={courses[1]}/> 
    </div>
  )
}

export default Course