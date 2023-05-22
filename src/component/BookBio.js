function BookBio(props){
const title=props.props.title;
function AddTo(){
        fetch("http://localhost:1337/api/likebook/"+localStorage.getItem("_id")+"/"+props.props._id)

}
    return(
            <div>
                <h1>Author:{props.props.Author}</h1>
                <h1>Title:{title}</h1>
                <button onClick={AddTo}> Dodaj</button> 
                <br />
            </div>
        )
        
}
export default BookBio