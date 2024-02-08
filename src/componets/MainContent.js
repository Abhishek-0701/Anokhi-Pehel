



// MainContent.js
import React from 'react';
import './MainContent.css'; // Import of MainContent CSS file
import AnokhiPehel from './AnokhiPehel.jpg';  // import of image



function MainContent() {
  return (
    <main>
      <h1>Anokhi Pehel</h1>
      <img src={AnokhiPehel} alt="AnokhiPehel" style={{ width: '300px', height: '300px' }} />

      <p>Anokhi Pehel is an initiative taken by the students of MNNIT to help the children of the economically weaker sections of the society by providing them an education in the best possible way. Under this initiative, we teach students from preparatory classes to 12th level teaching them various subjects.Not only do we develop academic skills of the students but also other extra curricular activities such as painting, dancing, sketching, etc. Started with a few teachers and just 20 students, today we have a team of about 100 teachers shaping the life of more than 300 students. Our students have shown great performance in various fields.</p>
      {/* <img src={AnokhiPehel} alt="AnokhiPehel" style={{ width: '300px', height: '300px' }} /> */}



    </main>
  
  );
}

export default MainContent;
