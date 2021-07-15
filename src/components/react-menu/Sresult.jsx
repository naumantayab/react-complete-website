import React from 'react';

const Sresult = (props) => {
    const img = `https://source.unsplash.com/700x500/?${props.name}`;
    return (
      <>
        <div className="s_img">
          <img src={img} alt="search" />
        </div>
      </>
    );
}

export default Sresult;
