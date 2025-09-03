import React from 'react';
import { Categories } from '../components/Categories';
import { Sort } from '../components/Sort';
import { PizzaBlock } from '../components/PizzaBlock';
import { Skeleton } from '../components/PizzaBlock/Skeleton';
import axios from 'axios';


export const Home = ({searchValue}) => {
  
  //пиццы(их хранилище )
  const [items, setItems] = React.useState([]);

  //состояние загрузки
  const [isLoading, setIsLoading] = React.useState(true);

  ////для категорий идёт в компонент Category
  const [categoryId, setCategoryId] = React.useState(0);
  //для сортировки идёт в компонент Sort
  const [sortValue, setSortValue] = React.useState({
    name: 'популярности', sortProperty: 'rating'
  });

  //получение данных с сервера
  React.useEffect(() => {
    setIsLoading(true);
      const sortBy = sortValue.sortProperty.replace('-','');
      const order = sortValue.sortProperty.includes('-') ? 'asc' : 'desc';
      const category = categoryId > 0 ? `category = ${categoryId}`: '';
      const search = searchValue  ? `&search = ${searchValue}`: '';


    fetch(`https://68b0530d3b8db1ae9c03958f.mockapi.io/item?${category}&sortBy=${sortBy}&order=${order}${search} `)
    .then((obj) =>  obj.json())
    .then((arr) => {
      setItems(arr);
      setIsLoading(false);
    });




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

    window.scrollTo(0, 0);
  
  }, [categoryId, sortValue, searchValue]);
  
  const pizzas = items.map((obj) =><PizzaBlock key = {obj.id} {...obj} />);

  const skeleton = [...new Array(10)].map((_, index) => <Skeleton key={index}/>);

    return (
    <div className="container">
    <div className="content__top">
            <Categories value = {categoryId} onClickCategory = {(i) => setCategoryId(i)}/>
            <Sort value = {sortValue} onClickSort2 = {(i) => setSortValue(i)}/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
                isLoading ? skeleton
                : pizzas
            }

            
          </div>

    </div>
  )
}



