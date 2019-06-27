import React from 'react'
import {Star} from '../components/star';

class FrontPage extends React.Component {
  
  render() {
    return (
      <div className="frontPage">
        <Star />
        <div className='overlay'>  
          <h1
            style={{
              color: "white",
              textAlign: 'center',
              position: 'relative',
              top: '35%',
              fontSize: 40,
              fontWeight: '400'
            }}
          >
            Hi! My name is Majiyd and i'm a developer
          </h1>
        </div>
      </div>
    );
  }
}

export default FrontPage;