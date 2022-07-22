// to create and start our React app:

// npx create-react-app APP_NAME
// cd APP_NAME
// npm start



import React from 'react';
import ReactDOM from 'react-dom/client';



// .createRoot
// ReactDOM.createRoot(rootNode).render(<App />);
// Replaces ReactDOM.render(<App />, rootNode) and enables Concurrent Mode.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1>Hello world!</h1>
  </div>

);