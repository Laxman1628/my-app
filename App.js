// In App.js in a new project

import * as React from 'react';
import Navigator from "./src/router/Index"
import ErrorBoundary from './src/Components/errorboundary/ErrorBoundary';

function App() {
  return   <ErrorBoundary><Navigator /></ErrorBoundary>;
}

export default App;
