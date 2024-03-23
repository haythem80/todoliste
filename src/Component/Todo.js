import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task}) => {
  return (
    <div className='Todo'>
      <p className='todotext'> {task.task}</p>
      <FontAwesomeIcon icon={ faPenToSquare}  className='pen'/>
      <FontAwesomeIcon icon={faTrash} className='trash' />
      </div>
  )
}
