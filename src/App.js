import React, { Component } from 'react';
import Home from './components/home';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import styled from "styled-components";
import Routes from './components/routes';
import { Provider } from 'react-redux';
import { configureStore } from './store/configureStore'

const store = configureStore();

const AppContainer = styled.div`
  text-align: center;
`;

function App() {
  return (
    <Provider store={store}>
      <AppContainer>
        <Routes />
      </AppContainer>
    </Provider>
  );
}

// class App extends Component {
//   render() {
//     return (
//         // <div>
//         //     <BrowserRouter>
//         //         <div>
//         //             <div>
//         //                 <Link to='/'>Home</Link>
//         //             </div>
//         //             <Switch>
//         //                 <Route path="/" component={Home}/>
//         //             </Switch>
//         //         </div>
//         //     </BrowserRouter>
//         // </div>
//         <AppContainer>
//           <Routes/>
//         </AppContainer>

//     );
// }
// }

export default App;
