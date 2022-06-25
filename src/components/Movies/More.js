import React from "react";

function More({handleClickMore, searchResults, isLodingMovies}) {

  return (
    <section className="more">
      <button className={(searchResults.length === isLodingMovies.length) ? `more__button more__button_type_disabled` : `more__button`} onClick={handleClickMore}>Ещё</button>
    </section>
  );
}

export default More;
