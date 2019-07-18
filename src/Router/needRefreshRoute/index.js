import React from 'react';
import { Route,withRouter, Redirect } from "react-router-dom";
import {connect} from 'react-redux';

const needRefreshRoute = (props) => {
    const {exact, path, component, hasNoData} = props;
    return (
    hasNoData ? 
        (<Route path={path} exact={exact} component={component} />) : <Redirect to="/card/list" />
    ) 
}

const mapStateToProps = (state) => {
    return {
        hasNoData: state.App.needPageToRefresh
    }
}
export default withRouter(connect(mapStateToProps, null)(needRefreshRoute))