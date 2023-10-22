import React from 'react';

const Home = () => {
  const styles = {
    color: 'black',
    fontSize: '14px',
    fontFamily: 'poppins, sans-serif',
  };
  return (
    <div style={styles} data-testid="home-component">
      <h3>Welcome to the home page</h3>
      <p>
      Welcome to Math Magicians, where we invite you to explore the enchanting world of mathematics. Unveil the secrets of numbers, equations, and calculations as you embark on a journey filled with wonder and insight. Whether you're a student, a professional, or simply a curious mind, our platform offers a unique opportunity to dive into the captivating realm of math. From interactive calculators to inspiring quotes, Math Magicians is your gateway to a world where numbers come alive and math becomes magical. Join us on this mathematical adventure, and let's make numbers dance together!
      </p>
    </div>
  );
};
export default Home;
