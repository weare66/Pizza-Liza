import React from 'react'
 
export const Categories = ({value, onClickCategory}) => {
  
  //const [activeIndex, setActiveIndex] = React.useState(0); 
  
  const catigories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые',];

  // const onClickActice = (index) => {
  //  setActiveIndex(index);
  // };
  
  return (
    <div className="categories">
      <ul>
        {catigories.map((categoryName, i) => (
          <li key={i} onClick={() => onClickCategory(i)} className={value === i  ? "active" : ''}>{categoryName}</li>
        ))}
      </ul>
    </div>
  );
};

