// import React, { Component } from "react";

// import "./flights.scss";

// import { Link } from "react-router-dom";

// class Flights extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <Link
//         to={`partner/${this.props.item.link}`}
//         className="airline-card"
//         style={
//           this.props.path == this.props.item.link ? { display: "none" } : {}
//         }
//       >
//         <div className="airline-image">
//           <img
//             src={require(`../assets/images/svg/${this.props.item.image_url}`)}
//             width="50px"
//             height="50px"
//           />
//         </div>
//         <div className="airline-name">
//           <h3>{this.props.item.name}</h3>
//         </div>
//         <div className="link">
//           <span>See More</span>
//         </div>
//       </Link>
//     );
//   }
// }
// export default Flights;
