function BookBio(props){
const title=props.props.title;
console.log(props)

    return(
            <div>
                <h1>Author:{props.props.devo.Author}</h1>
                <h1>Title:{props.props.devo.title}</h1>
                <br />
            </div>
        )
        
}
export default BookBio