import React, { Component } from 'react';
import apiCurrent from '../../utils/apiCurrent';
import Banner from '../../components/Banner';

class BannerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HN: '',
      HP: '',
      DN: '',
      HCM: '',
      CT: ''
    }
  }

  componentDidMount() {
    apiCurrent(21.02, 105.84).then(res1 => {
      this.setState({
        HN: res1.data
      });
    });
    apiCurrent(20.85, 106.69).then(res2 => {
      this.setState({
        HP: res2.data
      });
    });
    apiCurrent(16, 108).then(res3 => {
      this.setState({
        DN: res3.data
      });
    });
    apiCurrent(10.75, 106.66).then(res4 => {
      this.setState({
        HCM: res4.data
      });
    });
    apiCurrent(10.03, 105.78).then(res5 => {
      this.setState({
        CT: res5.data
      });
    });
  }
  
  render() {
    let { HN, HP, DN, HCM, CT } = this.state;
    
    if (HN !== '' && HP !== '' && DN !== '' && HCM !== '' && CT !== '') {
      return (
        <div>
          <Banner HN={HN} HP={HP} HCM={HCM} DN={DN} CT={CT}/>
        </div>
      );
    }
    else {
      return (<div></div>)
    }
  }
}

export default BannerContainer;