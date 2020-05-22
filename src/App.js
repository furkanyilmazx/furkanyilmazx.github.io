import React, { Suspense } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { Normalize } from "styled-normalize";

import { routes } from "@furkanyilmazx/routes";
import NotFoundPage from "@furkanyilmazx/pages/NotFoundPage";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Normalize />
      <Switch>
        {routes.map(({ id, path, exact, component: Component, loading }) => {
          return (
            <Route
              key={id}
              exact={!!exact}
              path={path}
              component={() => (
                <Suspense fallback={loading || <div />}>
                  <Component />
                </Suspense>
              )}
            />
          );
        })}
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
*,
*:before,
*:after {
  font-family: "Raleway", sans-serif;
  box-sizing: border-box;
}

html,
body,
#root {
  min-height: 100%;
  scroll-behavior: smooth;
}

body {
  background-color: ${(props) => props.theme.backgroundColor};
  line-height: 1.6;
  overscroll-behavior: contain;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  -webkit-font-smoothing: antialiased;
  -webkit-overflow-scrolling: touch;
  -moz-osx-font-smoothing: grayscale;

  overflow-y: scroll;
}

body::-webkit-scrollbar {
  background: #f3f5f6;
  width: 10px;
}
body::-webkit-scrollbar-thumb {
  background: #d5d5d5;
}

body::-webkit-scrollbar-thumb:hover {
  background: #c5c5c5;
}

a {
  text-decoration: none;
}

input,
textarea {
  appearance: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

svg {
  display: inline-block;
  vertical-align: middle;
}

ul {
  padding: 0;
  margin: 0;
}

strong {
  font-weight: 600;
}
`;
