export function Pages(props) {
    
    return (
        <div className="pagewrapper">
            {
                props.children.map((obj) => (
                    obj.props.id === props.id ? obj : "" 
                ))
            }
        </div>
    )


} 