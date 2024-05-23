import { useState } from 'react';
import './App.css'
import { Modal } from './components/Modal/Modal';
import { Card } from './components/card/Card';
import { useFoodData } from './hooks/useFoodData';

function App() {
  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev);
  }

  return (
    <div className='container'>
      <h1>Menu</h1>
      <div className="card-grid">
          {data?.map(foodData => 
            <Card 
              title={foodData.title} 
              image={foodData.image} 
              price={foodData.price}
              />
            )}
      </div>
      {isModalOpen && <Modal closeModal={handleOpenModal}/>}
      <button onClick={handleOpenModal}>NEW</button>
    </div>
  )
}

export default App
