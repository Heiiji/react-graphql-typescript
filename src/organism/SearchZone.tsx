import React, { useState } from 'react';
import { setSearch } from '../store/search/actions';
import { useSelector } from 'react-redux';
import { getSearch } from '../store/selectors';

function SearchZone() {
  const storeSearch = useSelector(getSearch);
  const [text, setText] = useState(storeSearch.text);

  const _onChangeText = (ev: any) => {
    setText(ev.target.value);
    setSearch({
      text: ev.target.value,
    });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center">
          <img width="400" alt="home" className="m-4" src="/media/images/appartment.svg" />
          <input
            type="text"
            placeholder="search"
            value={text}
            onChange={_onChangeText}
            className="form-control p-2 my-2"
          />
        </div>
      </div>
    </div>
  );
}

export default SearchZone;
