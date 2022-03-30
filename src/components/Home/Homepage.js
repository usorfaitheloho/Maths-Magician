import React from 'react';
import './Homepage.css';

const Homepage = () => {
  const words = [
    {
      id: 1,
      text: 'Mathematics is the science that deals with the logic of shape, quantity and arrangement. Math is all around us, in everything we do. It is the building block for everything in our daily lives, including mobile devices, computers, software, architecture (ancient and modern), art, money, engineering and even sports.',
    },
    {
      id: 2,
      text: 'Since the beginning of recorded history, mathematical discovery has been at the forefront of every civilized society, and math has been used by even the most primitive and earliest cultures. ',
    },
    {
      id: 3,
      text: 'The more complex a society, the more complex the mathematical needs. Primitive tribes needed little more than the ability to count, but also used math to calculate the position of the sun and the physics of hunting.',
    },
  ];

  return (
    <div className="wrapper">
      <h1>Welcome to the world of mathematics</h1>
      <h2>Mathematics</h2>
      {words.map((word) => (<p key={word.id}>{word.text}</p>))}
    </div>

  );
};

export default Homepage;
