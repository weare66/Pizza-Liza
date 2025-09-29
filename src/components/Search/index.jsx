
import React from 'react';
import styles from './Search.module.scss';
//import { AppContecst } from '../../App';
import debounce from 'lodash.debounce' ;
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/slices/filterSlice';




export const Search = () => {

  const [value, setValue] = React.useState('');
  const dispatch = useDispatch();

  //const {searchValue, setSearchValue} = React.useContext(AppContecst);
  
  const inputRef = React.useRef();


  const updateSearchValue = React.useCallback( 
    debounce((str) => {
      dispatch(setSearchValue(str));
  }, 1000),
  [],
);
const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
};

  
  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setValue('');
    // document.querySelector('input').focus();
    inputRef.current.focus();
  }

  
    
  
  
  

  return (
    <div className={styles.root}>
        <svg 
        className={styles.icon}
        height="24" 
        version="1.1" 
        width="24"
        xmlns="http://www.w3.org/2000/svg" 
        >
            <g transform="translate(0 -1028.4)">
                <path d="m14.938 12.281-2.844 2.813 6.906 6.906 2.844-2.844-6.906-6.875z" 
                fill="#95a5a6" transform="translate(0 1028.4)"/>
                <path d="m15.562 1041.2c-0.473 1.3-1.472 2.4-2.75 2.9l2.188 2.3c1.16-0.7 2.137-1.7 2.812-2.9l-2.25-2.3z" fill="#7f8c8d"/><path d="m18 10a8 8 0 1 1 -16 0 8 8 0 1 1 16 0z" fill="#bdc3c7" transform="translate(0 1028.4)"/><path d="m15 10a5 5 0 1 1 -10 0 5 5 0 1 1 10 0z" fill="#ecf0f1" transform="translate(0 1028.4)"/></g></svg>
        
        <input 
          ref={inputRef}
          value={value}
          onChange={onChangeInput} 
          className={styles.input} 
          placeholder='Поиск...'/>
        {
            value && 
            <svg
                onClick={onClickClear}
                className={styles.close}


        height="30px" 
        id="Layer_1" 
        
        version="1.1"
        viewBox="0 0 512 512"
        width="30px" 
        xmlns="http://www.w3.org/2000/svg" 
        >
        <path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z"/></svg>
        }
    </div>
  )
}
