import React from 'react';

type CategoriesProps  = {
  value: number;
  onClickCategory: (idx: number) => void;
};
 
export const Categories: React.FC<CategoriesProps> = ({value, onClickCategory}) => {
  
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

