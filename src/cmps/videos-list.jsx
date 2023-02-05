import { useSelector } from "react-redux"

export function VideosList() {
    const list = useSelector(storeState => storeState.videoModule.videos)
    return (list && (list.length === 0 ? <p>No results</p> :
        (
            <ul className="items">
                {list.map((item, index) => (
                    <li key={index} className="item">
                        <div>
                            <b><a href={item.link}>{item.title}</a></b>
                            <p>{item.description}</p>
                        </div>
                        <ul className="meta">
                            <li>By: <a href={item.author.ref}>{item.author.name}</a></li>
                            <li>Views: {item.views}</li>
                            <li>Duration: {item.duration}</li>
                            <li>Uploaded: {item.uploaded_at}</li>
                        </ul>
                        <img alt="" src={item.thumbnail} />
                    </li>
                ))}
            </ul>
        )
    )
    )
}