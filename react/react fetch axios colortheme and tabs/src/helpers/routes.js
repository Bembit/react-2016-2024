import React from 'react';
import Main from '../components/Main';
import Dashboard from '../components/Dashboard';
import DashboardParent from '../components/DashboardParent';
import DashboardAxios from "../components/DashboardAxios";
import DashboardOnclick from "../components/DashboardOnclick";
import Context from "../components/Context";

const routes = {
    "/": () => <Main />,
    "/dashboardchild": () => <Dashboard />,
    "/dashboardparent": () => <DashboardParent />,
    "/dashboardaxios": () => <DashboardAxios />,
    "/dashboardonclick": () => <DashboardOnclick />,
    "/context": () => <Context />,
};

export default routes;