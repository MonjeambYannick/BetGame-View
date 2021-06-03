import { useState } from 'react'

import { FETCH_POST_AUTHORIZED } from '../fetch-utils'

export function Create(props) {

    const [key, setkey] = useState(0);

    let create = async () => {
        let name = document.getElementById('create_name').value
        let response = await FETCH_POST_AUTHORIZED('/api/groups/create', props.token, { name: name })
        setkey(response.id)
        props.reload()
    }

    return (
        <div>
            <input id="create_name" type="text" name="name" placeholder="Name" />
            <input type="submit" value="Create" className="view-popup-btn" onClick={create} />
            {
                (key === 0) ? (
                    <div>
                        <span>Key:</span>
                        <span>{key}</span>
                    </div>
                ) : ""
            }
        </div>
    )

}

