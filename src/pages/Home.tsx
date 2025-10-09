import React from 'react';
import { Categories } from '../components/Categories';
import { Sort } from '../components/Sort';
import { PizzaBlock } from '../components/PizzaBlock';
import { ErrHome } from '../components/ErrHome';

import {sorti} from '../components/Sort';

import { Skeleton } from '../components/PizzaBlock/Skeleton';
import { Pagination } from '../components/Pagination';
//import { AppContecst } from '../App';

//import axios from 'axios';
import qs from 'qs';

import { Link, useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import {selectFilter, setCategoryId, setCurrentPage, setFilters} from '../redux/slices/filterSlice';
import {fetchPizzas, selectPizzaData} from '../redux/slices/pizzaSlice';




export const Home: React.FC = () => {

  const navigate = useNavigate();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);//1-ыый рендер

  


  const dispatch = useDispatch();
  const {categoryId, sort, currentPage, searchValue} = useSelector(selectFilter)
  const sortValue = sort.sortProperty;

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page))
  };
 

  

  


  //const {searchValue, setSearchValue} = React.useContext(AppContecst);
  
  //пиццы(их хранилище )
  //const [items, setItems] = React.useState([]);
  const {items, status} = useSelector(selectPizzaData);

  //состояние загрузки
  //const [isLoading, setIsLoading] = React.useState(true);//теперь в редаксе

  ////для категорий идёт в компонент Category
  //const [categoryId, setCategoryId] = React.useState(0);
  //для сортировки идёт в компонент Sort
  // const [sortValue, setSortValue] = React.useState({
  //   name: 'популярности', sortProperty: 'rating'
  // });


  //стейт для пагинации
  //const [currentPage, setCurrentPage] = React.useState(1);

  // const fetchPizzas = () => {
  //     setIsLoading(true);
  //     const sortBy = sortValue.replace('-','');
  //     const order = sortValue.includes('-') ? 'asc' : 'desc';
  //     const category = categoryId > 0 ? `category=${categoryId}` : '';
  //     const search = searchValue ? `&search=${searchValue}` : '';
  //     //const link = new URL('https://68b0530d3b8db1ae9c03958f.mockapi.io/item');


  //     axios.get(`https://68b0530d3b8db1ae9c03958f.mockapi.io/item?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search} `)
  //     .then((obj) => {
  //       setItems(obj.data);
  //       setIsLoading(false);
  //     });
  // }



  const getPizzas = async () => {
      
      const sortBy = sortValue.replace('-','');
      const order = sortValue.includes('-') ? 'asc' : 'desc';
      const category = categoryId > 0 ? `category=${categoryId}` : '';
      const search = searchValue ? `&search=${searchValue}` : '';


    dispatch(
      //@ts-ignore
        fetchPizzas({
          sortBy,
          order,
          category,
          search,
          currentPage,
        })
      );
      
      
  };


//Если изменили параметры и был первый рендер
  React.useEffect(()=> {
    if (isMounted.current) {
      const queryString = qs.stringify({
        categoryId,
        sortProperty: sortValue,
        currentPage,
      });

    navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sortValue, currentPage]);

//Если был первый рендер то проверяем url параметры и сохраняем их в redux
  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.slice(1));

      const sort = sorti.find(obj => obj.sortProperty === params.sortProperty);

      dispatch(
        setFilters({
          ...params,
          sort,
        })
      ); 
      isSearch.current = true;

    }
  }, [])

 

  

  //получение данных с сервера
  //Вариант с axios
  //////////////////////////////////////////////////////***** */
  //Если был первый рендер, то запрашиваем пиццы 
  React.useEffect(() => {
    window.scrollTo(0, 0);

    if (!isSearch.current) {
      getPizzas();
    }

    isSearch.current = false;


  }, [categoryId, sortValue, searchValue, currentPage])


  //Вариант с fetch
  //////////////////////////////////////////////////////***** */
  // React.useEffect(() => {
  //   setIsLoading(true);
  //     const sortBy = sortValue.replace('-','');
  //     const order = sortValue.includes('-') ? 'asc' : 'desc';
  //     const category = categoryId > 0 ? `category = ${categoryId}` : '';
  //     const search = searchValue ? `&search = ${searchValue}`: '';


  //   fetch(`https://68b0530d3b8db1ae9c03958f.mockapi.io/item?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search} `)
  //   .then((obj) =>  obj.json())
  //   .then((arr) => {
  //     setItems(arr);
  //     setIsLoading(false);
  //   });
    
  //   window.scrollTo(0, 0);
  
  // }, [categoryId, sortValue, searchValue, currentPage]);




  


  const pizzas = items.map((obj: any) => <Link key = {obj.id} to={`/pizza/${obj.id}`}><PizzaBlock  {...obj} /></Link>);

 
  const skeleton = [...new Array(4)].map((_, index) => <Skeleton key={index}/>);

    return (
    <div className="container">
    <div className="content__top">
            <Categories value = {categoryId} onClickCategory = {(idx: number)=>dispatch(setCategoryId(idx))}/>
            <Sort/>
          </div>
          {status === 'error' ? 
          <ErrHome/>
          :

          <>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
                status === 'loading' ? skeleton
                : pizzas
            } 
          </div>
          </>
          
          }
          
      <Pagination currentPage = {currentPage} onChangePage = {onChangePage}/>

    </div>
  )
}





// async function fetchData() {
    //   try {
    //     setIsLoading(true);

    //     const order = sortValue.sortProperty.includes('-') ? 'asc' : 'desc';
    //     const sortBy = sortValue.sortProperty.replace('-','');
    //     const category = categoryId > 0 ? `category = ${categoryId}`: '';

    //     await axios.get(`https://68b0530d3b8db1ae9c03958f.mockapi.io/item?${category}&sortBy=${sortBy}&order=${order}`)
    //     .then(obj => setItems(obj.data));

    //     setIsLoading(false);
    //   } catch (error) {
    //     alert('Ошибка при запросе данных!');
    //     console.error(error);
    //   }
    // }

  // fetchData();