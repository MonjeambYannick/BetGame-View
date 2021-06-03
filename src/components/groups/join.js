import { useState } from 'react'

import { FETCH_POST_AUTHORIZED } from '../fetch-utils'

export function Join(props) {

    const [error, seterror] = useState(0);

    let join = async () => {

        let id = document.getElementById('join_id').value

        let response = await FETCH_POST_AUTHORIZED('/api/groups/join', props.token, { group_id: id })

        if (response.status == 200) {
            props.reload()
        } else {
            seterror(1)
        }
    }

    return (
        <div>
            <input id="join_id" type="text" name="invitationkey" placeholder="Invitation Key" />
            <div className="view-popup-btn" onClick={join}>Join</div>
            {(error == 1 ? (<div> Error: Diese Gruppe existiert nicht! </div>) : "")}
        </div>
    )
}