import { useSelector } from "react-redux"

export function VideosList() {
    const list = useSelector(storeState => storeState.videoModule.videos)
    return (list && (list.length === 0 ? <p>No results</p> :
        (
            <ul className="items">
                {list.map((item, index) => (
                    <li key={index} className="item">
                        <div>
                            <p>{item.description}</p>
                        </div>
                        <ul className="meta" style={{display: 'flex', width: 'max-content'}}>
                        <img alt="" src={item.bestThumbnail.url} style={{width: '100px'}} />
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <b><a href={item.link}>{item.title}</a></b>
                            <li>By: <a href={item.author.ref}>{item.author.name}</a></li>
                            <li>Views: {item.views}</li>
                            <li>{item.description}</li>
                        </div>
                        </ul>
                    </li>
                ))}
            </ul>
        )
    )
    )
}