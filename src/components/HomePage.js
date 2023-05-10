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
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
        modi ratione in? Nobis explicabo cupiditate doloremque pariatur maxime
        ad, facere accusantium quam fuga tempore! Sequi, autem minima
        perferendis nulla labore expedita accusamus molestias?
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
        modi ratione in? Nobis explicabo cupiditate doloremque pariatur maxime
        ad, facere accusantium quam fuga tempore! Sequi.
      </p>
    </div>
  );
};
export default Home;
