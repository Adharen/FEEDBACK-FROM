
import "./App.css";
import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function App() {
  const [number, setNumber] = useState(0);
  const [hoverStar, setHoverStar] = useState(undefined);


  const handleText = () => {
    switch (number || hoverStar) {
      case 0:
        return "Evaluate";
      case 1:
        return "Dissatifation";
      case 2:
        return "Unsatisfied";
      case 3:
        return "Normal";
      case 4:
        return "Satisfied";
      case 5:
        return "Very Satisfied";
      default:
        return "Evaluate";
    }
  };

  return (
    <div className="App">
      <div className="popup">
        <div className="content">
          <div className="product">
           
            <h1>FEEDBACK</h1>
          </div>
          <p>Your feedback help us to improve</p>
          <div>
            <h1>{handleText()}</h1>
            {Array(5)
              .fill()
              .map((_, index) =>
                number >= index + 1 || hoverStar >= index + 1 ? (
                  <AiFillStar
                    onMouseOver={() => !number && setHoverStar(index + 1)}
                    onMouseLeave={() => setHoverStar(undefined)}
                    style={{ color: "orange"}}
                    onClick={() => setNumber(index + 1)}
                  />
                ) : (
                  <AiOutlineStar
                    onMouseOver={() => !number && setHoverStar(index + 1)}
                    onMouseLeave={() => setHoverStar(undefined)}
                    style={{ color: "orange"}}
                    onClick={() => setNumber(index + 1)}
                  />
                )
              )}
          </div>
          <textarea placeholder="Your experience in words or scope of improvement"></textarea>
          <textarea placeholder="What more event you want from CESA" required></textarea>
          <button className={` ${!number && "disabled"} `}>Send Feedback</button>
        </div>
      </div>
    </div>
  );
}
