import React from 'react'
import {Star} from '../components/star';
import {Header} from '../components/Header'

class FrontPage extends React.Component {
  render() {
    let stars = Array.apply(null, {length: 100}).map(Number.call, Number)
    return (
      <div className="frontPage">
        {stars.map(star => (<Star key={star}/>))}
        <div className='overlay'>
          <Header />
          <h1
            style={{
              textAlign: 'center',
              position: 'relative',
              top: '18%',
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