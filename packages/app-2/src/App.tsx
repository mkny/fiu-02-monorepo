import React from 'react'
import { Button, request } from '@fiu/components'

interface Props {
  
}

const App: React.FC<Props> = () => {
  return (
    <div>
      Hello from app-2
      <Button onClick={() => request('http://localhost:8080/').then((data: any) => alert(data))}>click me</Button>
    </div>
  )
}

export default App
