import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const FullPizza: React.FC = () => {

    const {id} = useParams();

    const navigate = useNavigate()

    const [isPizza, setPizza] = React.useState<{
      imageUrl: string;
      title: string;
      price: number;
    }>();

    React.useEffect(() => {
      async function fetchPizza() {
        try {
         const {data} = await axios.get(`https://68b0530d3b8db1ae9c03958f.mockapi.io/item/` + id);
         setPizza(data);
        } catch (err) {
            navigate('/');
            alert('Ошибка получения пиццы!');
            console.error(err);
        }
      }
      fetchPizza();
    }, []);

    if (!isPizza) {
        return <>'Loading...'</>;
    }

    
  return (
    <div className='container'>
      <img src={isPizza.imageUrl} alt="Pizza" />
      <h2>{isPizza.title}</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ut dolor, hic assumenda similique magni totam libero laboriosam eos sunt, ipsum consequuntur reprehenderit dolores voluptatibus inventore, quod dicta ratione nam.</p>
      <h4>{isPizza.price} ₽</h4>
    </div>
  );
};
