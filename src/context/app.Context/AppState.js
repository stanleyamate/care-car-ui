import React from 'react'
import AppContext from './appContext'

const AppState = (props) => {
  return (
     <AppContext.Provider value={{}}>
       {props.children}
     </AppContext.Provider>
  )
}

export default AppState