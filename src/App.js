import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import { store } from './Store'; // Adjust the path accordingly
import MyForm from './MyForm';
import EmployeeList from './EmployeeList';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/form" element={<MyForm />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
