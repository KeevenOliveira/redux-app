import React from 'react';
import Header from './components/Header';
import Counter from './components/Counter';

function App() {
  return (
    <>
      <Header />
      <section className="sectionContainer">
        <Counter />
      </section>
    </>
  );
}

export default App;
