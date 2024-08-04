import './css/Header.css';

import React from 'react';

interface Props {
}

interface State {
  selectedIndex: number;
}

class Header extends React.Component< Props , State> {
  constructor(props: Props){
    super(props)
    this.state = {
      selectedIndex: 1,
    }

    this.onclick = this.onclick.bind(this);
  }

  onclick(selectedIndex: number): void {
    this.setState({
      selectedIndex: selectedIndex, 
    })
  }

  render() {
    return (
      <div className='Header'>
        <div className={`Header_Button ${this.state.selectedIndex === 1 ? 'Header_Button-selected': ''}`} onClick={() => this.onclick(1)}>ClashRoyale Leader Helper</div>
        <div className={`Header_Button ${this.state.selectedIndex === 2 ? 'Header_Button-selected': ''}`} onClick={() => this.onclick(2)}>Premier League Predictions</div>
      </div>
    );
  }
}

export default Header;
