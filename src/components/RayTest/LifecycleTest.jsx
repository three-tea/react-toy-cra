import React, { Component } from 'react';
import LifecycleTestChild from './LifecycleTestChild';

class LifecycleTest extends Component {
  constructor(props) {
    super(props);
    console.log('constructor()');
    this.state = {
      value: '',
      color: 'red',
    };
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('shouldComponentUpdate() - nextProps:', nextProps);
    console.log('shouldComponentUpdate() - nextState:', nextState);
    console.log('shouldComponentUpdate() - nextContext', nextContext);
    return nextState.value !== '2';
  }

  onChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { value, color } = this.state;
    return (
      <div>
        <div>LifecycleTest</div>
        <input
          type="text"
          value={value}
          onChange={this.onChange}
        />
        <LifecycleTestChild color={color} />
      </div>
    );
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate() - prevProps:', prevProps);
    console.log('getSnapshotBeforeUpdate() - prevState:', prevState);
    if (prevState.value !== this.state.value) {
      return 'blue';
    }
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount()');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate() - prevProps:', prevProps);
    console.log('componentDidUpdate() - prevState:', prevState);
    console.log('componentDidUpdate() - snapshot:', snapshot);
    if (snapshot) {
      this.setState({ color: snapshot });
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount()');
  }
}

export default LifecycleTest;