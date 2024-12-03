import React from 'react';
import Locations from '../../locations';

interface AreaProps {
  params: {
    id: string;
  };
}

const Area = ({ params }: AreaProps) => {
  const area = Locations.find(location => location.id === Number(params.id));
  const maxlen = area?.location.length;
  
  return (
    <div>
      <ul className='max-h-[70vh] overflow-y-scroll py-2'>
        {area?.location.map((loc, index) => (
          <li key={index} className={`py-5 border-t ${maxlen === index + 1 &&  'border-b'}`}>
            {loc.name} - {loc.count}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Area;
