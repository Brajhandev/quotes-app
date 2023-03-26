import {TbReload} from 'react-icons/tb'

const Buton = ({handleChange}) => {
  return <button className=' bg-white w-12 h-12 text-4xl flex justify-center items-center rounded-full m-auto mt-4 cursor-pointer' onClick={handleChange}> <TbReload/> </button>;
};

export default Buton;
