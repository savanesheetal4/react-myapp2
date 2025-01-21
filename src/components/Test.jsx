function Test(){
    function display(){
        alert("Welcome to event concept in ReactJs")
    }
    return(
        <div>
            <button onDoubleClick={display}>Click me</button>
        </div>
    )
}
export default Test