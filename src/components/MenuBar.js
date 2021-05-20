import React from 'react';

export function MenuBar(props) {
    return (
        <div className="menubar">
            {
                props.children.map(obj => {
                    return React.cloneElement(obj, {callback: props.callback})
                })
            }
        </div>
    )
} 

export function MenuItem(props) {
    if(!props.noaction)
    {
        return (
            <div className="menu-item" onClick={() => (props.callback(props.id))}>
                {props.children}
            </div>
        )
    } else {
        return (
            <div className="menu-item noclick">
                {props.children}
            </div>
        )
    }

    
}