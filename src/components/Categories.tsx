import React from 'react';
import  useWhyDidYouUpdate  from 'ahooks/lib/useWhyDidYouUpdate';


type CategoriesProps  = {
  value: number;
  onClickCategory: (idx: number) => void;
};
 
export const Categories: React.FC<CategoriesProps> = React.memo(
  ({value, onClickCategory}) => {
  
  //const [activeIndex, setActiveIndex] = React.useState(0); 
  
  const catigories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые',];

  // const onClickActice = (index) => {
  //  setActiveIndex(index);
  // };
  
  //useWhyDidYouUpdate('Categories', {value, onClickCategory});


  return (
    <div className="categories">
      <ul>
        {catigories.map((categoryName, i) => (
          <li key={i} onClick={() => onClickCategory(i)} className={value === i  ? "active" : ''}>{categoryName}</li>
        ))}
      </ul>
    </div>
  );
}
); 