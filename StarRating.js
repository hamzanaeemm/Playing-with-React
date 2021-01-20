import React, {useState, Component} from "react";
import { FaStar } from 'react-icons/fa';
import ScriptTag from 'react-script-tag';

class Demo extends Component {
    render() {
        return (<ScriptTag isHydrating={true} type="text/javascript" src="Clickresponse.js" />);
    }
    
}
const StarRating = () => {

    
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    
    const message = () => {
        window.alert("Hello World!") 
       }
 
        return (
           
        <div>
            <h1 className="hh">Please Rate My Skills </h1>
            {[... Array(5)].map((star, i) => {
            const ratingValue = i +1;
            
            return (
                
                <label>
                <input
                id="abc"
                type="radio" 
                name="rating" 
                value={ratingValue} 
                onClick={(message) => setRating(ratingValue)
                    
                }
                
                />
                
                <FaStar 
                className="star" 
                color={ratingValue <= (hover ||rating) ? "#ffc107" : "#e4e5e9"} 
                size={100} 
                onMouseEnter = {() => setHover(ratingValue)}
                onMouseLeave = {() => setHover(null)}
                                
                />
                
                </label>
                
            );
            
        }
        )
        }
		</div>
       
        );
       
    };
    
    


export default StarRating;