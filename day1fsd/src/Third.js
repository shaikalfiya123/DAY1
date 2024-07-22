import One from "./One"; // Assuming One.jsx is in the same directory as Two.jsx
import Two from "./Two";
function Third(){
    return (<div>
        <h1>Third Component</h1>
    
    <One/>
    <Two/>
    </div>
    )

}
export default Third;