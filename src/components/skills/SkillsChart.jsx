import React from 'react';
import { useInView } from 'react-intersection-observer';

const ProgressBar = (props) => {
    const { completed, skill } = props;
    const { ref: progressBarSingle, inView: progressBarSingleIsVisible } = useInView();
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      textAlign: 'right'
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold'
    }
  


    return (
      <div className='chart__item'>
         <div className='container--flex-space-between container--flex-row'><p>{skill}</p><p>{completed}%</p></div>
         
         <div ref={progressBarSingle} className='chart-bar'>
            <div  className={`${progressBarSingleIsVisible ? 'chart-bar-progress-animation' : ''}`} style={fillerStyles}></div>  
        </div>
      </div>

    );
  };
  
  export default ProgressBar;