import React, { useEffect, useState } from 'react'
import data from '../info.json'
import ElementModal from './ElementModal'

const PeriodicTable = () => {
    const [openModal, setOpenModal] = useState(false)
    const [element, setElement] = useState(null)

    useEffect(() => {
        let s = []
        data.elements.map(e => {
            if(!s.includes(e.category)){
                s.push(e.category)
            }
        })
        console.log(s);
    }, [])

    const colors = value => {
        switch(value){
            case 'alkali metal':
                return "#F5B700"
            case 'alkaline earth metal':
                return "#FFFB46"
            case 'transition metal':
                return "#FEFFA5"
            case "metalloid":
                return "#FF7B9C"
            case 'noble gas':
                return '#80FFDB'
            case 'polyatomic nonmetal':
                return '#9EF01A'
            case 'diatomic nonmetal':
                return '#13F679'
            case 'actinide':
                return '#FF99E2'
            case 'lanthanide':
                return '#54F2F2'
            default:
                return '#E2CFEA'
        }
    }

    const handleClick = (data, color) => {
        document.documentElement.style.setProperty("--theme-clr", color)
        setElement(data)
        setOpenModal(true)
    }

    const handleClose = () => {
        setElement(null)
        setOpenModal(false)
    }

    return (
        <>
            <div className="table">
                {
                    data.elements.map(element => {
                        return (
                            <div 
                                key={element.number}
                                className="element" 
                                style={{
                                    gridColumn: element.xpos,
                                    gridRow: element.ypos,
                                    borderColor: colors(element.category)
                                }}
                                onClick={() => handleClick(element, colors(element.category))}
                            >
                                <span>{ element.number }</span>
                                <div>
                                    <span>{element.symbol }</span>
                                    <span>{ element.name }</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {
                openModal &&
                <ElementModal data={element} onClose={handleClose} />
            }
        </>
    )
}

export default PeriodicTable
