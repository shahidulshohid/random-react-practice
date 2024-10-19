import { useState } from "react"

export default function MyButton({count, onClick}){
    return (
        <div>
            <button onClick={onClick}> Clicked {count} times </button>
        </div>
    )
}