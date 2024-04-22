import React, { useState, useEffect, Fragment } from 'react';

function Nav() {
    const colors = {
        Sea: '#a2ccb6',
        Sand: '#fceeb5',
        Peach: '#ee786e',
    }

    const [color, setColor] = useState(colors.Sea)
    // Only run when color is updated 👍
    useEffect(
        () => {
            console.info('Color changed')
            document.body.style.background = color
        },
        [color]
    )
    return(
        <div className="navigation">
            <Fragment>
                <select value={color} onChange={e => setColor(e.target.value)}>
                    {Object.entries(colors).map(([name, value]) => (
                        <option key={`color--${name}`} value={value}>
                            {name}
                        </option>
                    ))}
                </select>
                <h3>{color}</h3>
            </Fragment>
            <a href="/">Home</a>
            <a href="/dashboardchild">ChildsQuery</a>
            <a href="/dashboardparent">ParentQuery</a>
            <a href="/dashboardaxios">AxiosFetch</a>
            <a href="/dashboardonclick">OnclickQuery</a>
        </div>
    )
}    

export default Nav;