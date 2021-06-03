export function Game(props) {

    return (
        <div>
            <span>
                {props.homeTeam.name}
                <img src={props.homeTeam.logo_url} style={{ height: "1em" }} />
            </span>
            vs.
            <span>
                {props.awayTeam.name}
                <img src={props.awayTeam.logo_url} style={{ height: "1em" }} />
            </span>
        </div>
    )

}