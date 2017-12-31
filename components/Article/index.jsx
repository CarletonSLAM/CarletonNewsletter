import React from 'react'
import PropTypes from 'prop-types'
import globals from '../../models/globals'
import theme from '../../models/theme'

const Article = (props) => {
  return (
    <div style={styles.root}>
      <div style={styles.title} >{props.title}</div>
      <div style={styles.logistics}>
        <div>Date: {props.date}</div>
        <div>Time: {props.time.start + ((' - ' + props.time.end) || '' )}</div>
        <div>Location: {props.date}</div>
      </div>
    </div>
  )
}

const styles = {
  root: {
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)', //retreived from https://codepen.io/sdthornton/pen/wBZdXq
    backgroundColor: "#fff",
    color: '#00629B',
    margin: '2vh',
    textAlign:'center',
    margin: '2vw',
  },
  title: {
    padding:'2vh 0 2vh 0',
    fontSize:'3rem',
    backgroundColor: theme.primary,
    color: '#FFF',
    fontWeight: 'bold'
  },
  logistics: {
    paddingTop:'3vh',
    fontSize:'1.3rem',
    fontWeight: 'bold'

  }
}

module.exports = Article


// <div style="background-color:#D1F0FF;text-align: center;color:rgb(0,98,155);padding-left:10%;padding-right:10%;padding-top:5vw;padding-bottom:5vw;margin:auto;border-radius:10px;">
//                     <h1>2017 IEEE Day</h1>
//                     <strong style="font-size:1.3em">
//                         <div>Date: October 2rd</div>
//                         <div>Time: 6:30 PM - 9:30 PM</div>
//                         <div>Location: ME 4359, Carleton University</div>
//                         <div><a href="https://www.facebook.com/events/1452982491465757" target="_blank">Event Link</a></div>
//                     </strong>
//                     <div style="font-size:1.0em">
//                         <p>IEEE Day: Celebrating the first time in history when engineers worldwide and IEEE members gathered
//                             to share their technical ideas in 1884.
//                         </p>
//                         <p>
//                             Worldwide celebrations demonstrate the ways thousands of IEEE members in local communities join together to collaborate on
//                             ideas that leverage technology for a better tomorrow. We celebrate IEEE members!
//                         </p>
//                         <p> Come join us on this FREE event Tuesday night to find out the details and benefits of being part
//                             of the school, city-wide, and global IEEE communities! Plus there will be industry members talking
//                             about their take on IEEE!
//                         </p>
//                         <p>Industry swag and snacks will be provided along with a competition, and a raffle!

//                         </p>
//                     </div>
//                 </div>