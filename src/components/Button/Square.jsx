import React from "react";
import './Square.css'

export function Square({value}) {
    return (
        <button className="square">{value}</button>
    )
}