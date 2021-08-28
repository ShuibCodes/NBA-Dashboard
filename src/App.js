import { Switch, Route, Redirect } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
import Dashboard from 'pages/Dashboard';



// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';

function App() {
    return (
        <>
            <Sidebar />
            <div className="md:ml-64">
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                </Switch>
         
            </div>
        </>
    );
}

export default App;
