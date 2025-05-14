import pp from './assets/challenge.jpg'
import pp1 from './assets/challenge1.jpg'
function Challenge(){
    return(
        <>
        <div className="challenge">
            <img className="challenge-img" src={pp} alt="Challenge image"></img>
            <h2 className="challenge-title"><b>100 Days of Coding </b></h2>
            <p className="challenge-text"> Complete this challenge to Earn Rewards </p>
            <button className="challenge-btn">Take Challenge</button>
        </div>
        <div className="challenge">
            <img className="challenge-img" src={pp1} alt="Challenge image"></img>
            <h2 className="challenge-title"><b>36 Hours HACKATHON </b></h2>
            <p className="challenge-text"> Complete this challenge to Earn Rewards </p>
            <button className="challenge-btn">Take Challenge</button>
        </div>
        </>
    );
}
export default Challenge