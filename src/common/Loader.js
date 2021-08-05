import { Component } from 'react';
import './Loader.css';

export default class Loader extends Component {
  
  render() {
    const { loading } = this.props;
    if (!loading) return null;

    return (
      <div className="Loader">
        <img src="/cat-loader.gif" alt="loader cat"/>
      </div>
    );
  }

}