
export function AppHeader(){

    return (
        <header className="app-header">
            <form className="playlist-search">
                <input type="text"
                placeholder="Search on Youtube"
                 />

                 <button className="search-btn" type="submit">
                   Search 
                 </button>
            </form>
        </header>
    )

        
}