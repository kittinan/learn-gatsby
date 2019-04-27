import React from "react"
import axios from "axios"
import QRCode from 'qrcode'

class Tun extends React.Component {

  state = {
    loading: false,
    error: false,
    loaded: false,
    lyric: "",
    qrcode: "",
  }

  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.onTunClicked = this.onTunClicked.bind(this);
  }

  onTunClicked() {
    console.log('click');
    this.setState({ loading: true })

    QRCode.toDataURL('I am a pony!')
      .then(url => {
        console.log(url)
        this.setState({qrcode: url});
      })
      .catch(err => {
        console.error(err)
      })

    
    axios
      .get(`https://api.thailyric.fun/?num_word=100&start_word=`)
      .then(pupper => {
        console.log('xxxx');
        console.log(pupper);

        const {
          data: {lyric}
        } = pupper;

        //console.log(message);
        console.log(lyric);
        this.setState({ loading: false, lyric: lyric, loaded: true });

      })
      .catch(error => {
        this.setState({ loading: false, error })
      })
  }


  render() {
    if (this.state.loading == true) {
      return <div>Loading...</div>;
    } else if (this.state.loaded == false) {
      return <h1 onClick={this.onTunClicked}>Tun, {this.props.name}</h1>; 
    } else {
      return <div>{this.state.lyric}<div><img src={this.state.qrcode} /></div></div>;
    }
    
  }
}
export default Tun;