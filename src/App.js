import { Switch, Route, Redirect } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
import Dashboard from 'pages/Dashboard';
import lakers from './components/Charts/Lakers/Lakers'
import clippers from './components/Charts/Clippers/Clippers'
import rockets from './components/Charts/Rockets/Rockets'
import gsw from './components/Charts/GSW/GSW'
import okc from './components/Charts/OKC/OKC'
import Timer from '../src/Timer'
import ReactGA from 'react-ga';
import auth from './auth.ts'; // Sample authentication provider


const trackingId = "UA-207304431-1"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);
ReactGA.set({
  userId: auth.currentUserId(),
  // any data that is relevant to the user session
  // that you would like to track with google analytics
})

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';
import phoenix_suns from './components/phoenix_suns';

function App() {
    return (
        <>
            <Sidebar />
            <div className="md:ml-64">
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                </Switch>
                <Switch>
                    <Route exact path="/phoenix_suns" component={phoenix_suns} />
                </Switch>
                <Switch>
                    <Route exact path="/lakers" component={lakers} />
                </Switch>
                <Switch>
                    <Route exact path="/clippers" component={clippers} />
                </Switch>
                <Switch>
                    <Route exact path="/rockets" component={rockets} />
                </Switch>
                <Switch>
                    <Route exact path="/GSW" component={gsw} />
                </Switch>
                <Switch>
                    <Route exact path="/OKC" component={okc} />
                </Switch>
                
                <Switch>
                    <Route exact path="/Timer" component={Timer} />
                </Switch>
         
            </div>
        </>
    );
}

export default App;
