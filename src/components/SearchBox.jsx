
const SearchBox = (props) => {
    return (
        <div className="col col-sm-4">
            <input type="text" className="form-control" 
            value={props.value}
            onChange={(e) => props.setSearchValue(e.target.value)}
            placeholder="Type to search..." />
        </div>
    )
}

export default SearchBox;