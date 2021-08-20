import { Link, Redirect } from 'react-router-dom';
import React, { Component } from 'react';

import ThemeContext from './ThemeContext';

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };
  static getDerivedStateFromError(e) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // I log this to Sentry, Azure monitor
    console.error('ErrorBoundary caught an error', error, info);
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }
  //   componentDidUpdate() {
  //   }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    } else if (this.state.hasError) {
      return (
        <h2>
          This listing has an error. <Link to="/">Click here </Link> to go back to the home page or wait for five
          seconds.
          <ThemeContext.Consumer>
            {([theme]) => <button style={{ backgroundColor: theme }}> test </button>}
          </ThemeContext.Consumer>
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
