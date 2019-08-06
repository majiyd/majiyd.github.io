import React from 'react'
import {Star} from '../components/star';
import {Header} from '../components/Header'

class FrontPage extends React.Component {
  render() {
    let stars = Array.apply(null, {length: 150}).map(Number.call, Number)
    return (
      <div className="frontPage">
        {stars.map(star => (<Star key={star}/>))}
        <div className='overlay'>
          <Header />
          <div className="about-text-parent">
            <p>Hi! My name is Majiyd and i'm a freelance front-end web developer currently at <a href='https://strategynook.com' target='_blank' rel="noopener noreferrer">StrategyNook LLC</a>. I specialize in building fast, SEO compliant webpages, tramsforming wireframes to webpages, designing and handling complex frontend logic, using HTML, CSS, Javascript, and ReactJS.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default FrontPage;