function Book(props) {
    return(
        
        <div className="book">
            <h2>{props.title}</h2>
            <div className="image"><img src={props.image} alt={props.title}/></div>
            <div className="descr"><p>{props.description}</p></div>
        </div>
    );
}
export default Book;