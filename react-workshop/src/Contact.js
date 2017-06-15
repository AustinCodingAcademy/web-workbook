import React from 'react';

export default function App() {
  const connect = [
    {
    name: 'Meghan McQueen',
    number:'123-456-7890',
    email:'meghan.a.mcqueen@gmail.com',
  }
]
  return (
    <section>
      <h1>Connect</h1>
      { connect.map(contact=>(
     <div>
      <p>{ connect.name}</p>
      <p>{connect.number}</p>
     <span> {connect.email}</span>
     </div>

    ))
}
</section>
 )
}
