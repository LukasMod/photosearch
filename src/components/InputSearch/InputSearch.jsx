import React, { useState, useRef, useEffect, useMemo, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AutoCompleteItem } from '../AutoCompleteItem';
import { StoreContext } from '../../store/StoreProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import commonWordsData from './commonWords.json';

import './style.scss';

const InputSearch = () => {
  const { handleSearch, search, handleValidate } = useContext(StoreContext);

  const history = useHistory();
  const [isVisible, setIsVisible] = useState(false);
  const [cursor, setCursor] = useState(-1);
  const [notEnoughLetters, setNotEnoughLetters] = useState(false);

  const searchContainer = useRef(null);
  const searchResultRef = useRef(null);
  const searchInput = useRef('');

  const commonWords = commonWordsData.commonWords;

  const scrollIntoView = (position) => {
    if (searchResultRef.current !== null) {
      searchResultRef.current.parentNode.scrollTo({
        top: position,
        behavior: 'smooth',
      });
    }
  };

  const suggestions = useMemo(() => {
    if (searchInput.current.value === '') {
      return commonWords;
    } else {
      setCursor(-1);
      scrollIntoView(0);
      return commonWords.filter((item) =>
        item.toLowerCase().includes(search.toLowerCase())
      );
    }
  }, [commonWords, search]);

  useEffect(() => {
    if (cursor < 0 || cursor > suggestions.length || !searchResultRef) {
      return () => {};
    }
    let listItems = Array.from(searchResultRef.current.children);
    listItems[cursor] && scrollIntoView(listItems[cursor].offsetTop);
  }, [cursor, suggestions.length]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchContainer.current &&
        !searchContainer.current.contains(event.target)
      ) {
        hideSuggestion();
      }
    };
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const showSuggestion = () => {
    if (searchInput.current.value.length > 2) {
      setCursor(-1);
      setIsVisible(true);
    }
  };
  const hideSuggestion = () => {
    setCursor(-1);
    setIsVisible(false);
  };

  const handleChange = (e) => {
    handleSearch(e.target.value);
    if (e.target.value.length > 2) {
      showSuggestion();
    } else {
      hideSuggestion();
    }
  };

  const handleSelectItem = (item) => {
    hideSuggestion();
    handleSearch(item);
    handleValidate(true);
    searchInput.current.value = '';
    history.push('/results');
  };

  const handleHoverItem = (item) => {
    setCursor(item);
  };

  const performSearch = (text) => {
    history.push('/results');
    setNotEnoughLetters(false);
    handleSearch(text);
    handleValidate(true);
    hideSuggestion();
    searchInput.current.value = '';
  };

  const keyboardNavigation = (e) => {
    switch (e.key) {
      case 'ArrowDown': {
        isVisible
          ? setCursor((c) => (c < suggestions.length - 1 ? c + 1 : c))
          : showSuggestion();
        break;
      }
      case 'ArrowUp': {
        setCursor((c) => (c > 0 ? c - 1 : 0));
        break;
      }
      case 'Escape':
        if (search.length > 2) {
          hideSuggestion();
        }
        break;
      case 'Enter': {
        if (cursor > -1) {
          performSearch(suggestions[cursor]);
        } else if (searchInput.current.value.length > 2) {
          performSearch(searchInput.current.value);
        } else {
          setNotEnoughLetters(true);
          searchInput.current.value = '';
          return null;
        }
        break;
      }
      default:
        return null;
    }
  };

  return (
    <div className="InputSearch" ref={searchContainer}>
      <div className="InputSearch__input-wrapper">
        <input
          className={`InputSearch__input ${
            notEnoughLetters ? 'InputSearch__input--error' : ''
          }`}
          type="text"
          placeholder={
            notEnoughLetters ? `Use minimum 3 letters` : `Type and press Enter`
          }
          ref={searchInput}
          onChange={handleChange}
          onKeyDown={(e) => keyboardNavigation(e)}
        />

        {isVisible && (
          <div className="InputSearch__results">
            <ul className="InputSearch__list-group" ref={searchResultRef}>
              {suggestions.length > 0 ? (
                suggestions.map((item, index) => (
                  <AutoCompleteItem
                    key={item}
                    item={item}
                    handleSelectItem={() => handleSelectItem(item)}
                    isHighLighted={cursor === index ? true : false}
                    handleHoverItem={() => handleHoverItem(index)}
                  />
                ))
              ) : (
                <AutoCompleteItem />
              )}
            </ul>
          </div>
        )}
      </div>
      <FontAwesomeIcon
        icon={faSearch}
        className={'InputSearch__search-button'}
        onClick={() => performSearch(searchInput.current.value)}
      />
    </div>
  );
};

export default InputSearch;
