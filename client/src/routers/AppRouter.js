import React from 'react';
import  {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import FormsListPage from '../components/FormsListPage';
import FormBuilderPage from '../components/FormBuilderPage';
import FormSubmitPage from '../components/FormSubmitPage';
import FormSubmissionsPage from '../components/FormSubmissionsPage';
import Home from '../components/Home';


export default class AppRouter extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                <Header />
                    <Switch>
                        <Route path="/" component={Home} exact={true} />
                        <Route path="/FormsListPage" component={FormsListPage}  />
                        <Route path="/FormBuilderPage" component={FormBuilderPage} />
                        <Route path="/FormSubmitPage/:id" component={FormSubmitPage} />
                        <Route path="/FormSubmissionsPage/:id" component={FormSubmissionsPage} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
    
}
