// function Card(props) {
//   // console.log(props); //props is a object
//   return (
//     <div>
//       <div className="card" style={{ width: "18rem" }}>
//         <img src={props.image} className="card-img-top" alt="..." />
//         <div className="card-body">
//           <h5 className="card-title">{props.name}</h5>
//           <p className="card-text">
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </p>
//           <a href="#" className="btn btn-primary">
//             {props.button}
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// Destructuring the prop
function Card({ image, name, button = "Default Button" }) {
  // console.log(props); //props is a object
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            {button}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
