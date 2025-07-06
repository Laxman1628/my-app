// In App.js in a new project
import * as React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import ErrorBoundary from './src/Components/errorboundary/ErrorBoundary';
import {hp} from './src/common/Functions/Dimensions';
import {ThemeContext, ThemeProvider} from './src/data/context/ThemeProvider';
import BottomTabs from './src/router/BottomTabs';
import { NavigationContainer } from '@react-navigation/native';

const CrashComponent = () => {
  return <Text>Hello </Text>;
};

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({theme}) => (
            <>
              <StatusBar
                barStyle={
                  theme.mode === 'dark' ? 'light-content' : 'dark-content'
                }
                backgroundColor={theme.background}
              />

              <NavigationContainer>
                <BottomTabs />
              </NavigationContainer>
            </>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
