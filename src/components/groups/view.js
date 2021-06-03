import React from 'react';
import { useState, useEffect } from 'react';

import '../../style/view.css'
import '../../style/view/popup.css'
import '../../style/view/grouplist.css'
import '../../style/view/settings.css'

import { Group } from './group'
import { Create } from './create'
import { Join } from './join'
import { GroupView } from './page/groupview'


import { FETCH_GET_AUTHORIZED } from '../fetch-utils'

export function View(props) {

    const [pagestate, setpagestate] = useState(0);
    const [apidata, setapidata] = useState({ isLoaded: false, data: [] });
    const [btnstate, setbtnstate] = useState({ create: false, join: false });
    const [gid, setgid] = useState(0);

    useEffect(async () => {
        let result = await FETCH_GET_AUTHORIZED('/api/groups', props.token).catch((err) => {
            throw err;
        })
        setapidata({ isLoaded: true, data: result.data })
    }, []);

    let open_group = (id) => {
        setpagestate(1)
        setgid(id)
    }

    if (pagestate == 0) {
        // SHOW Selection Menu
        return (

            <div className="view view-grouplist">
                <div className="view-controlls">
                    <div className={"view-controlls-btn view-controlls-btn-create"} onClick={() => {
                        setbtnstate({ create: !btnstate.create, join: false })
                    }}>
                        Create
                    </div>
                    <div className={"view-controlls-btn view-controlls-btn-join"} onClick={() => {
                        setbtnstate({ create: false, join: !btnstate.join })
                    }}>
                        Join
                    </div>
                </div>

                <div className={"popup " + (btnstate.create || btnstate.join ? "show" : "")}>
                    {(btnstate.create == true ? (<Create token={props.token} reload={() => { setapidata({ isLoaded: false }) }} />) : "")}
                    {(btnstate.join == true ? (<Join token={props.token} reload={() => { setapidata({ isLoaded: false }) }} />) : "")}
                </div>

                <div className={"view-grouplist-list"}>
                    {
                        apidata.data.map(obj => (
                            <Group data={obj} callback={open_group} />
                        ))
                    }
                </div>
            </div>
        )
    } else if (pagestate == 1) {
        return (
            <GroupView className="view view-group" gid={gid} token={props.token} />
        )
    }
}