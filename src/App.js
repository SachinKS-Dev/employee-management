// App.js
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
          <Route path="/form" element={<MyForm />} />
          <Route path="/employee-list" element={<EmployeeList />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
