import { Form, ListGroup } from "react-bootstrap";
import { useState, useEffect } from "react";
import HobbiesStyle from "../cssFiles/Hobbies.module.css";
import { map } from "jquery";
const DEFAULT_HOBBIES = [
  "Sports",
  "Gaming",
  "Traveling",
  "Reading",
  "Fishing",
  "Bird Watching",
  "Collecting",
  "Gardening",
  "Hiking",
  "Arts and Crafts",
  "Cooking",
];
const Hobbies = () => {
  const [style, setStyle] = useState(null);
  const [hobbies, setHobbies] = useState([]);
  useEffect(() => {
    // for (let i = 0; i < DEFAULT_HOBBIES.length; i++) {
    //   const val = DEFAULT_HOBBIES[i];
    //   if (!Number.isSafeInteger(i % 3)) console.log(val);
    //   else {
    //     setHobbies(...hobbies, val);
    //   }
    // }
    setStyle(HobbiesStyle.onClickNonActive);
    // console.log(hobbies);
  }, []);

  return (
    // <div>
    //   {DEFAULT_HOBBIES.map((a) => {
    //     return <div>{a}</div>;
    //   })}
    // </div>
    // <ListGroup defaultActiveKey="#link1">
    <>
      {/* <ListGroup defaultActiveKey="#link1"> */}
      {DEFAULT_HOBBIES.map((hobbie, idx) => {
        return (
          <div class={HobbiesStyle.chip}>
            {/* <img src="img_avatar.jpg" alt="Person" width="96" height="96"> */}
            John Doe
            <span
              class={HobbiesStyle.closebtn}
              onclick="this.parentElement.style.display='none'"
            >
              &times;
            </span>
          </div>

          //   <ListGroup.Item
          //     key={idx}
          //     //   id="style"
          //     className={style}
          //     onClick={(e) => {
          //       console.log(e.target.className);
          //       style === HobbiesStyle.onClickNonActive
          //         ? setStyle(HobbiesStyle.onClickActive)
          //         : setStyle(HobbiesStyle.onClickNonActive);
          //     }}
          //   >
          //     {hobbie}
          //   </ListGroup.Item>
        );
      })}
      {/* </ListGroup> */}
    </>
    // </ListGroup>
    //   <div key={idx} className="mb-3">
    //     <div class="container">
    //       <div class="row">
    //         <div class="col-sm">
    //           <Form.Check
    //             inline
    //             label={val}
    //             name="group1"
    //             type="checkbox"
    //             value={val}
    //             id={idx}
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
  );
};

export default Hobbies;
