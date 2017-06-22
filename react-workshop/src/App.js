import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render(){
    var connect =[

 {
Name: "Name: Meghan McQueen",
PhoneNumber: 'Phone: 123-456-7890',
Email: 'Email: meghan.a.mcqueen@gmail.com',
 }
]

return (
<section>
 <h1>Connect</h1>
{ connect.map(contact => (
<div> {contact.Name}<br />
{ contact.PhoneNumber}<br />
{ contact.Email} </div>
)) }

</section>

);
}
}

export default App;













// class App extends Component {
//   render() {
//   var connect = [
//       {
//       name: 'Meghan McQueen',
//       number:'123-456-7890',
//       email:'meghan.a.mcqueen@gmail.com',
//     }
//   ]
//     return (
//         <section>
//             <h1>Connect</h1>
//             { connect.map(product => (
//                 <div>
//                   <header>{ connect.name }</header>
//                     <p>{ connect.number }</p>
//                     <span>{ connect.email }</span>
//                 </div>
//               </section>
//             )
//     )
// }
