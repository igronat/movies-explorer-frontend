import React from "react";

function More({handleClickMore}) {

  // const handleClickMore = (e) => {
  //   e.preventDefault();
  //    moreMovies()
    
    
  // }

  return (
    <section className="more">
      <button className="more__button" onClick={handleClickMore}>Ещё</button>
    </section>
  );
}

export default More;
