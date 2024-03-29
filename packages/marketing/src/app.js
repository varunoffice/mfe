import React from "react";
import {Switch,Route, BrowserRouter} from 'react-router-dom';
import {StylesProvider} from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

const App = ()=>{
    return <div>
        <StylesProvider>
            <BrowserRouter>
                <Switch>
                    <Route path='/pricing' exact component={Pricing}></Route> 
                    <Route path='/' component={Landing}></Route>
                </Switch>
            </BrowserRouter>
        </StylesProvider>
    </div>
}
export default App;