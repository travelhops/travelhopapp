import react from 'react';

const FloatingMessage = (props)=>{


  return (
        <div className={"floatingMessage "+props.color}>
          <div>{props.message}</div>
          <div className="timer"></div>
        </div>
  );
}


export default FloatingMessage;
