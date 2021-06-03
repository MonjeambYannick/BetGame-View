import '../../style/group_object.css'

export function Group(props) {

    return (
        <div className="grouplist-obj">

            <div className="grouplist-obj-open" onClick={() => { props.callback(props.data.id) }}>
                <i class="fi-br-check"></i>
            </div>

            <div className="grouplist-obj-name">{props.data.name}</div>

            <div className="grouplist-obj-placment">
                #{props.data.placement}
            </div>

            <div className="grouplist-obj-settigs">
                <i class="fi-br-settings-sliders"></i>
            </div>
        </div>
    )
}