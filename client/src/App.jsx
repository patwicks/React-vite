import React from 'react'

const App = () => {
  const sample = React.useCallback(() => {
    console.log(sample)
  }, [])
  return (
    <div>
      <span>sample</span>
    </div>
  )
}

export default App
