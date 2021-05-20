import {useState} from 'react'

export function Create(props) {

    const [key, setkey] = useState(0);

    if(key === 0)
    {
        return (
            <div>
                <input type="text" name="name" placeholder="Name" />
                <input type="submit" value="Create" className="view-popup-btn"/>
            </div>
        )
    } else {
        return (
            <div>
                <input type="text" name="name" placeholder="Name" />
                <input type="submit" value="Create" className="view-popup-btn"/>
                <div>
                    <span>Key:</span>
                    <span>{key}</span>
                </div>
            </div>
        )
    }
}

