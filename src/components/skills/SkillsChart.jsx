import React from 'react';


const ProgressBar = (props) => {
    const { bgcolor, completed, skill } = props;

    const containerStyles = {
     
    }
  
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
         <div className='chart-bar'>
            <div style={fillerStyles}>
            </div>
        </div>
      </div>

    );
  };
  
  export default ProgressBar;