import "./pok.css"
import Info from "./info";
export default function Pokemon(props) {
    const num = Math.floor(Math.random() * 10);
    let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${num}.png`
    return (
        <div className="pokcont">
            <h1>{props.name.name}</h1>
            <h1>pokemon{num}</h1>
            <img src={url}></img>
            <Info {...props} />
            <ul>{props.color.map((col) => (
                <li><h1>{col}</h1></li>
            ))}</ul>
        </div>
    )
}