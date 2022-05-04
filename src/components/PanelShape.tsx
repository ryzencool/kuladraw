import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setShapeType } from '../data/shapeType'


export default function PanelShape() {

    const dispatch = useDispatch()

    return (
        <div className={"rounded-2xl z-50 bg-white h-14 w-64 justify-center gap-2 flex"}>
            <button onClick={() => {
                dispatch(setShapeType('rect'))
            }}>rect</button>
            <button onClick={() => {
                dispatch(setShapeType('circle'))
            }}>circle</button>
            <button onClick={() => {
                dispatch(setShapeType('line'))
            }}>line</button>
            <button onClick={() => {
                dispatch(setShapeType('arrow'))
            }}>arrow</button>
            <button>text</button>
        </div>)
}


