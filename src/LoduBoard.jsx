import { useState } from "react"

export default function LoduBoard() {

    let [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });
    let [arr, setArr] = useState(["no moves"]);
    let updateBlue = () => {
        //moves.blue+=1;
        // console.log(`moves.blue = ${moves.blue}`)
        // setMoves(preMoves =>{
        //     return {...moves, blue: moves.blue+1};
        // })

        setArr(preArr => { return [...preArr, "blue moves"] });
        console.log(arr);
    }

    let updateYellow = () => {
        setMoves(preMoves => {
            return { ...moves, yellow: moves.yellow + 1 }
        })
    }

    let updateGreen = () => {
        setMoves(preMoves => {
            return { ...moves, green: moves.green + 1 }
        })
    }

    let updateRed = () => {
        setMoves(preMoves => {
            return { ...moves, red: moves.red + 1 }
        })
    }

    return (
        <>
            <p>Game Begins</p>
            <p>{arr}</p>
            <div className="board">
                <p>Blue moves = {moves.blue} </p>
                <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>+1</button>
                <p>Yellow moves = {moves.yellow} </p>
                <button style={{ backgroundColor: "yellow" }} onClick={updateYellow}>+1</button>
                <p>Green moves = {moves.green} </p>
                <button style={{ backgroundColor: "green" }} onClick={updateGreen}>+1</button>
                <p>Red moves = {moves.red} </p>
                <button style={{ backgroundColor: "red" }} onClick={updateRed}> +1</button>
            </div>
        </>
    )
}