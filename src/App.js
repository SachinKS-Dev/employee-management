// Import the necessary components from react-router-dom
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MyForm from "./MyForm";
import EmployeeList from "./EmployeeList";

// Use the Routes component in your Router
function App() {
    return (
        <Router>
            <Routes>
                <Route path="" element={<EmployeeList/>}/>
                <Route path="/form" element={<MyForm/>}/>
            </Routes>
        </Router>
    );
}
export default App;