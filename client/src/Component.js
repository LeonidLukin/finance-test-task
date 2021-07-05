// import React, { Component } from "react";
// // import { render } from "react-dom";

// export default class Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             error: null,
//             isLoaded: false,
//             items: []
//         };

//         componentDidMount() {
//             fetch("http://localhost:4000")
//             .then(res => res.json)
//             .then(
//                 (result) => {
//                     this.setState({
//                         isLoaded: true,
//                         items: result.ticker
//                     });
//                 },
//                 (error) => {
//                     this.setState({
//                         isLoaded: true,
//                         error
//                     });
//                 }
//             )
//         }

//         render() {
//             const {error, isLoaded, items} = this.state;
//             if (error) {
//                 return <p>Error {error.message} </p>
//             } else if (!isLoaded) {
//                 return <p> Loading... </p>
//             } else {
//                 return (
//                     <ul>
//                         {items.map(item => (
//                             <li key={item.name} >
//                                 {item.ticker}
//                             </li>
//                         ))}
//                     </ul>
//                 )
//             }
//         }
//     }
// }