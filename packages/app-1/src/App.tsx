import React, { useState, ChangeEvent } from 'react'
import { Button, request, Input } from "@fiu/components"

interface Props {
  
}

const App: React.FC<Props> = () => {
  const [value, setValue] = useState("")
  return (
    <div>
      Hello from app 1
      <Button onClick={() => request('http://localhost:8080/').then((data: any) => setValue(data))}>click me</Button>
      <Input name="welcome" label="Bem vindo" value={value} onChange={(evt: ChangeEvent<HTMLInputElement>) => setValue(evt.target.value)} />
    </div>
  )
}

export default App
