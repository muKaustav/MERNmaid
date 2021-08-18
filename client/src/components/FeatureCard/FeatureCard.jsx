import React, { useState, useEffect } from 'react'
import './FeatureCard.scss'
import feature_bg from '../../assets/feature_bg.jpg'
import meet from '../../assets/meet.png'
import calendar from '../../assets/calendar.png'
import todo from '../../assets/todo.png'
import whiteboard from '../../assets/whiteboard.png'

function FeatureCard(props) {

  const [featureImgLink, setFeatureImgLink] = useState(null)

  useEffect(
    () => {
      if (props.FeatureName === 'Meet') {
        setFeatureImgLink(meet)
      }
      else if (props.FeatureName === 'Calendar') {
        setFeatureImgLink(calendar)
      }
      else if (props.FeatureName === 'Todo') {
        setFeatureImgLink(todo)
      }
      else {
        setFeatureImgLink(whiteboard)
      }
    }, [props.FeatureName]
  )

  return (
    <>
      <div className='FeatureCard'>
        <div
          style={{
            width: '337px',
            height: '80px',
            backgroundImage: `url(${feature_bg})`,
            backgroundSize: 'cover'
          }}
				/>
        <div className='FeatureCardHeader'>
          <img src={featureImgLink} alt={props.FeatureName} />
          <h1>{props.FeatureName}</h1>
        </div>
      </div>
    </>
  )
}

export default FeatureCard
