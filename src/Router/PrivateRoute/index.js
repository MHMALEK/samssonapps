import React from 'react';
import { Route,withRouter, Redirect } from "react-router-dom";
import {connect} from 'react-redux';

const PrivateRoute = (props) => {
    const {ComponentName, exact, path, shouldRefresh, haveSelectedAnyCard } = props;
    if(shouldRefresh)  {
        if(haveSelectedAnyCard) {
            return <Route path={path}  exact={exact}  
            render={(props) => <ComponentName {...props} isAuthed={true} />} 
            />
        }
        else {
            return <Redirect to={"/"} />
        }
    }
    else {
        return <Route path={path}  exact={exact}  
        render={(props) => <ComponentName {...props} isAuthed={true} />} 
        />
    }         
}

const mapStateToProps = (state) => {
    return {
        haveSelectedAnyCard: state.Cards.hasSelectedAnyCard
    }
}
export default 
withRouter(
    connect(
        mapStateToProps,
        null
        ) 
    (PrivateRoute)
)