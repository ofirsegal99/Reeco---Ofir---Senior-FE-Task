import ReecoLogo from '@/assets/ReecoLogo.svg?react';
import Select from '@/components/Select/Select';
import Slider from '@/components/Slider/Slider';
import { useState } from 'react';
import { productCards, categoryChips } from './mockData';
import { MovementByOption, Option } from '@/types/allTypes';

function App() {
  let numberOfItemsToShowOptions: Option<number>[] = [{text: 'Three', value: 3}, {text: 'Six' ,value: 6}, {text: 'Ten' ,value: 10}];
  let orientationOptions: Option<'horizontal' | 'vertical'>[] = [{text: 'Horizontal', value: 'horizontal'}, {text: 'Vertical' ,value:'vertical'}]
  let sizeOptions: Option<number>[] = [{text: 'Large', value: 1.5}, {text: 'Medium' ,value: 1}, {text: 'Small' ,value: 0.65}];
  let movementByOptions: Option<string>[]  = [{text: 'By 50 Pixels', value: '50px'}, {text: 'By 200 Pixels', value: '200px'}, {text: 'By One Item', value: '1'}, {text: 'By Three Items', value: '3'}];

  let [numberOfItemsToShow, setNumberOfItemsToShow] = useState(numberOfItemsToShowOptions[1].value);
  let [orientation, setOrientation] = useState(orientationOptions[0].value);
  let [movementBy, setMovementBy] = useState(movementByOptions[2].value);

  return (
    <div className='App'>
      <div>
        <ReecoLogo height='3rem'/>
      </div>
      <div className='Options'>
        <Select label='Number Of Items To Show' defaultValue={numberOfItemsToShow} options={numberOfItemsToShowOptions} onValueChange={setNumberOfItemsToShow}/>
        <Select label='Orientation' defaultValue={orientation} options={orientationOptions} onValueChange={setOrientation}/>
        <Select label='Movement By' defaultValue={movementBy} options={movementByOptions} onValueChange={setMovementBy}/>
      </div>
      <div className='SliderContainer'>
      <Slider 
        numberOfItemsToShow={numberOfItemsToShow}
        orientation={orientation}
        movementBy={movementBy}
        items={productCards}
        renderItem={(item) => {
          return (
            <div key={item.id} className='productCard'>
              <img className='productCardImage' src={item.image} alt={item.name} />
              <div className='productCardDetails'>
                  <div className='productCardName'>{item.name}</div>
                  <div className='productCardDescription'>{item.description}</div>
              </div>
           </div>
          );
        }} 
        />
        <Slider 
        numberOfItemsToShow={numberOfItemsToShow}
        orientation={orientation}
        movementBy={movementBy}
        items={categoryChips}
        renderItem={(item) => {
          return (
            <div key={item.id} className='CategoryChip'>
              <div style={{ "--circleColor": `${item.color}` } as React.CSSProperties}  className='CategoryChipIcon'>{item.icon}</div>
              <div className='CategoryChipName'>
                {item.name}
              </div>
              <div className='CategoryChipDescription'>
                {item.description}
              </div>
            </div>
          );
        }} 
        />
      </div>

    </div>
  )
}

export default App
