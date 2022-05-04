import { current } from '@reduxjs/toolkit'
import Konva from 'konva'
import React, { useEffect } from 'react'
import { Layer, Stage, Text, Rect, Circle, Line, Arrow } from 'react-konva'
import { useSelector } from 'react-redux'

export default function CanvasBoard() {

    const { currentShapeType } = useSelector((state: any) => state.shapeType)

    const [rectangles, setRectangles] = React.useState<any[]>([])

    const [circles, setCircles] = React.useState<any[]>([])

    const [lines, setLines] = React.useState<any>([])

    const [newShape, setNewShape] = React.useState<any>([])

    const [arrows, setArrows] = React.useState<any[]>([])

    const [texts, setTexts] = React.useState([])

    const [ellipses, setEllipses] = React.useState<any>([])

    

    const isDrawing = React.useRef(false)


    const handleMouseDown = (evt: Konva.KonvaEventObject<MouseEvent>) => {
        isDrawing.current = true
        const position = evt.target.getStage()?.getPointerPosition()
        switch (currentShapeType) {
            case 'rect':
                let property = {currentShapeType, x: position?.x, y: position?.y, width: 0, height: 0};
                setNewShape(property)
                let newRects = rectangles
                newRects.push(property)
                setRectangles(newRects)
                break;
            case 'line':
                setLines([...lines, { currentShapeType, points: [position?.x, position?.y] }])
                break;
            case 'circle':
                console.log("circle", position?.x, position?.y)
                let newCircles = circles
                setNewShape({ currentShapeType, x: position?.x, y: position?.y, radius: 0, fill: 'red' })
                newCircles.push({ currentShapeType, x: position?.x, y: position?.y, radius: 0, fill: 'red' })
                setCircles(newCircles)
                break;
            case 'arrow':
                setArrows([...arrows, { currentShapeType, points: [position?.x, position?.y] }])
                break;
            case 'text':
                break;
            default:
                break;
        }
    }

    const handleMouseMove = (evt: Konva.KonvaEventObject<MouseEvent>) => {

        if (isDrawing.current == false) return
        const stage = evt.target.getStage()
        const position: any = stage?.getPointerPosition()
        switch (currentShapeType) {
            case 'line':
                let lastLine = lines[lines.length - 1]
                lastLine.points = lastLine.points.slice(0, 2).concat([position?.x, position?.y]);
                lines.splice(lines.length - 1, 1, lastLine);
                setLines(lines.concat());
                break;
            case 'circle':
                if (newShape !== null) {
                    let lastCircle = circles[circles.length - 1]
                    let radius = (position?.x - newShape.x) / 2
                    lastCircle.radius = radius
                    lastCircle.x = newShape.x + (position?.x - newShape.x) / 2
                    lastCircle.y = newShape.y + (position?.y - newShape.y) / 2
                    console.log(circles)
                    setCircles(circles.concat())
                }
                break;
            case 'rect':
                if (newShape !== null) {
                    let lastRect = rectangles[rectangles.length - 1]
                    let w = (position?.x - newShape.x)
                    let h = (position?.y - newShape.y)
                    lastRect.width = w
                    lastRect.height = h
                    setRectangles(rectangles.concat())
                }
                break;
            case 'arrow':
                let lastArrow = arrows[arrows.length - 1]
                lastArrow.points = lastArrow.points.slice(0, 2).concat([position?.x, position?.y]);
                arrows.splice(arrows.length - 1, 1, lastArrow);
                setArrows(arrows.concat());
                break;
            case 'text':
                break;
            default:
                break;

        }
    }

    const handleMouseUp = (evt: Konva.KonvaEventObject<MouseEvent>) => {
        isDrawing.current = false;
        setNewShape(null)
    }


    return (
        <div className={"bg-zinc-200"}>
            <div>{currentShapeType}</div>
            <Stage
                width={window.innerWidth}
                height={window.innerHeight}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}>
                <Layer>
                    {
                        lines.map((line: any, index: any) => {
                            return <Line
                                key={index}
                                points={line.points}
                                stroke="#df4b26"
                                strokeWidth={5}
                                tension={0.5}
                                lineCap="round"
                                onClick={(e) => {
                                    console.log(e.target)
                                }} />
                        })



                    }
                    {
                        circles.map((circle: any, index: any) => {
                            return <Circle
                                key={index}
                                x={circle.x}
                                y={circle.y}
                                radius={circle.radius}
                                stroke="#df4b26"
                                strokeWidth={5} />
                        })
                    } 

                    {
                        rectangles.map((rect: any, index: any) => {
                            return <Rect 
                                key={index}
                                x= {rect.x}
                                y = {rect.y}
                                width = {rect.width}
                                height = {rect.height}
                                stroke = {"#df4b26"}
                                strokeWidth = {5}
                            />
                        })
                    }

                    {
                        arrows.map((arrow: any, index: any) => {
                            return <Arrow
                                key={index}
                                points={arrow.points}
                                stroke="#df4b26"
                                strokeWidth={5}
                                tension={0.5}
                                lineCap="round"
                                ccccc="ccc"
                                onClick={(e) => {
                                    console.log(e.target)
                                }}/>})
                    }
                </Layer>
            </Stage>
        </div>
    )
}

