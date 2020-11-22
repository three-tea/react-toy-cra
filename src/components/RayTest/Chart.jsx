import React, { Component } from 'react';

class Chart extends Component {
  state = {
    data: null,
    dimensions: null,
    xScale: null,
    yScale: null,
  };

  componentDidMount() {
    const newData = getDateWithinRange(this.props.dateRange);
    this.setState({ data: newData });
    this.setState({ dimensions: getDimensions() });
    this.setState({ xScale: getXScale() });
    this.setState({ yScale: getYScale() });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.dateRange !== this.props.dateRange) {
      const newData = getDateWithinRange(this.props.dateRange);
      this.setState({ data: newData });
    }
    if (prevProps.margins !== this.props.margins) {
      this.setState({ dimensions: getDimensions() });
    }
    if (prevState.data !== this.state.data
      || prevState.dimensions !== this.state.dimensions) {
      this.setState({ xScale: getXScale() });
      this.setState({ yScale: getYScale() });
    }
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <svg className="Chart" />
    );
  }
}

export default Chart;