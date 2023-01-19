import React from 'react';
// import {useState} from 'react';
import { useInView } from 'react-intersection-observer';

const ProgressBar = (props) => {
    const { bgcolor, completed, skill } = props;

    const containerStyles = {
     
    }

    const { ref: myRef, inView: myElementIsVisible } = useInView();
    const { ref: magicSectionRef, inView: magicSectionIsVisible } = useInView();
    // const [progressBarIsVisible, setVisibility] = useState(); 
    
    // console.log('progressBarIsVisible', progressBarIsVisible);
    //  useEffect(() => {
    //    const observer = new IntersectionObserver((entries) => {
    //      const entry = entries[0];
    //      setVisibility(entry.isIntersecting);
    //    })
    //    observer.observe(myRef.current);
    //  }, [])
  
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
         <div ref={myRef} className='chart-bar'>
            <div  className={`${myElementIsVisible ? 'chart-bar-progress-animation' : ''}`} style={fillerStyles}></div>
           
        </div>
      </div>

    );
  };
  
  export default ProgressBar;