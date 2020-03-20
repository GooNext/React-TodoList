import React from 'react'
import classes from './List.module.scss'

const List = props => {

    const Data = new Date();
    const Year = Data.getFullYear();
    const Month = Data.getMonth();
    const Day = Data.getDate();

    return (
        <ul className = {classes.List}>
            {
                
                props.li.map((index, list) => {
                    return (
                        <div className="listchecked" style = {{display: 'flex', alignItems: 'center'}} key = {index + 1}>
                            <li>
                                {index}
                                <small>{`Добавлена: ${Day}.${Month}.${Year}`}</small>
                                <span onClick = {() => {props.removeList(index)}}>
                                    
                                </span>
                            </li>
                        </div>
                    )
                })
            }
        </ul>
    )
}

export default List