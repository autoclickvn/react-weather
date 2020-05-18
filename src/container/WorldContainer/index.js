import React, { Component } from 'react';
import apiCurrent from '../../utils/apiCurrent';
import World from '../../components/World';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BK: '',
      MCV: '',
      TKO: '',
      LD: '',
      WST: '',
      BRA: ''
    }
  }
  
  componentDidMount() {
    apiCurrent(39.917, 116.397).then(res1 => {
      this.setState({
        BK: res1.data
      });
    });
    apiCurrent(35.69, 139.69).then(res2 => {
      this.setState({
        TKO: res2.data
      });
    });
    apiCurrent(37.66, 69.627).then(res3 => {
      this.setState({
        MCV: res3.data
      });
    });
    apiCurrent(51.508, -0.125).then(res4 => {
      this.setState({
        LD: res4.data
      });
    });
    apiCurrent(38.895, -77.036).then(res5 => {
      this.setState({
        WST: res5.data
      });
    });
    apiCurrent(-11.016, -68.748).then(res6 => {
      this.setState({
        BRA: res6.data
      });
    });
  }
  render() {
    let { BK,BRA,TKO,MCV,WST,LD } = this.state;
    
    if (BK !== '' && BRA !== '' && TKO !== '' && MCV !== '' && WST !== '' && LD !== '') {
      return (
        <div>
          <World BK={BK} BRA={BRA} TKO={TKO} MCV={MCV} WST={WST} LD={LD}/>
        </div>
      );
    }
    else {
      return (<div></div>)
    }
  }
}

export default index;