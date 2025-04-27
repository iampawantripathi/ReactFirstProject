// import './App.css';
// import Show from './components/Show';
// import Create from './components/Create';
// import Edit from './components/Edit';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route path='' element={<Show />}></Route>
//           <Route path='create' element={<Create />}></Route>
//           <Route path='edit/:id' element={<Edit />}></Route>
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import Home from './pages/Home';

const App = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

export default App;

