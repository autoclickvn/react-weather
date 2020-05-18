import React, { Component } from 'react';
import Detail from '../../components/Detail';
import apiCurrent from '../../utils/apiCurrent';
import api7Day from '../../utils/api7Day';

class DetailContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weathers: '',
      weathers7day: ''
    }
  }
  componentDidMount() {
    let { match } = this.props;
    
    if (match) {
      let { lon, lat } = match.params;
      apiCurrent(lat, lon).then(res => {
        this.setState({
          weathers: res.data
        })
      });
      api7Day(lat, lon).then(res7day => {
        this.setState({
          weathers7day: res7day.data
        })
      });
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    let { match } = nextProps;
    
    if (match) {
      let { lon, lat } = match.params;
      apiCurrent(lat, lon).then(res => {
        this.setState({
          weathers: res.data
        })
      });
      api7Day(lat, lon).then(res7day => {
        this.setState({
          weathers7day: res7day.data
        })
      });
    }
  }

  render() {
    let { weathers, weathers7day } = this.state;
    
    if (weathers !== '' && weathers7day !== '') {
      return (
        <Detail weathers={weathers} weathers7day={weathers7day}/>
      );
    }
    else {
      return (<div></div>);
    }
  }
}

export default DetailContainer;