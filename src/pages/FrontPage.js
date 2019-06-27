import React from 'react'

class FrontPage extends React.Component {
  
  render() {
    return (
      <div className="frontPage">
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