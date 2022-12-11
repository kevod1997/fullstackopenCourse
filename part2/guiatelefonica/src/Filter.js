import React from 'react'

function Filter({findName, handleFindName}) {
  return (
    <div>
        filter shown with <input value={findName} onChange={handleFindName}/>
    </div>
  )
}

export default Filter