import React from 'react'
import CanvasBoard from '../components/CanvasBoard'
import Panel from '../components/Panel'


export default function Kuladraw() {
  return (
    <div className={'relative'}>
      <Panel/>
      <CanvasBoard/>
    </div>
  )
}
