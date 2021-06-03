import { useState, useEffect } from 'react'
import { FETCH_GET_AUTHORIZED, FETCH_GET } from '../../fetch-utils'
import { Game } from './game'

export function GroupView(props) {

    const [api, setapi] = useState({ isLoaded: false, group_data: [], match_data: [], team_data: [] });

    useEffect(async () => {
        if (api.isLoaded === false) {
            let group_response = await FETCH_GET_AUTHORIZED('/api/' + props.gid, props.token)
            let match_response = await FETCH_GET('/fapi/fetch_matches')
            let team_response = await FETCH_GET('/fapi/fetch_teams')
            setapi({ isLoaded: true, group_data: group_response.data, match_data: match_response.data, team_data: team_response.data })
        }
    }, []);

    console.log('====================================');
    console.log(api.data);
    console.log('====================================');

    let data = api.match_data.map(obj => {

        let home = {
            name: "",
            logo_url: ""
        }
        let away = {
            name: "",
            logo_url: ""
        }
        let match = {
            id: obj.match_id,
            stage: obj.stage,
            status: obj.status,
            group: obj.group,
            score: obj.score
        }

        api.team_data.forEach(element => {
            if (obj.homeTeam == element.id) {
                home.name = element.name
                home.logo_url = element.logo_url
            }
            else if (obj.awayTeam == element.id) {
                away.name = element.name
                away.logo_url = element.logo_url
            }
        })


        return (
            <>
                <Game homeTeam={home} awayTeam={away} match={match} />
                <hr />
            </>
        )
    });

    return (
        <div>
            <span>Group {props.gid}</span>
            <hr />
            <span>Name {api.group_data.name}</span>
            <hr />
            {data}
        </div>
    )

}