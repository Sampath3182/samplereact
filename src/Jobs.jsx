import pp from "./assets/meesho.jpg"
import pp1 from "./assets/swiggy.jpg"
import Header from "./Header";
function Jobs(){
return(
        <>
        <div className="challenge">
            <img className="challenge-img" src={pp} alt="Challenge image"></img>
            <h2 className="challenge-title"><b>Meesho </b></h2>
            <p className="challenge-text"> Software Developer Role </p>
            <button className="challenge-btn" > Apply</button>
        </div>
        <div className="challenge">
            <img className="challenge-img" src={pp1} alt="Challenge image"></img>
            <h2 className="challenge-title"><b>Swiggy </b></h2>
            <p className="challenge-text"> Technical Assistant Role </p>
            <button className="challenge-btn">Apply</button>
        </div>
        </>
    );
}
export default Jobs