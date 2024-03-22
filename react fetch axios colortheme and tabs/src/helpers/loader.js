import React from "react";

function loader(Component) {
    return function LoadingComponent({ isLoading, ...props  }) {
        if (!isLoading) return <Component {...props} />;
        return (
          <div className="container">
            <div className="dashboard">
              <div className="dashboard_container">
                Loading {Component.name}, please wait.
              </div>
            </div>
          </div>
        );
    }
}

export default loader;