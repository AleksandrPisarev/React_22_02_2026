import './card.css'

export default function Card(props){
    return(
        <div className="card">
            <img src={props.url} alt="карточка игрока"></img>
            <div className="age">
                <b>возраст:<br />
                {props.age}</b>
            </div>
            <div className="club">
                <b>футбольный клуб:<br />
                {props.club}</b>
            </div>
        </div>
    )
}