import React, {useContext} from "react";
import { CiSearch } from "react-icons/ci";
import { FilterCardContext } from "../../context/index";

function InputFilter() {
  let context = useContext(FilterCardContext);

  function handleChange(e) {
    const searchValue = e.target.value.toLowerCase();
    const regex = new RegExp(`(${searchValue})`, "gi");

    const filteredSearch = context.originalData.filter((item)=>{
      return item.title.toLowerCase().includes(searchValue) || item.description.toLowerCase().includes(searchValue) || item.nameFilter.toLowerCase().includes(searchValue)
    })

    context.setFilteredData(filteredSearch);
    console.log(filteredSearch)
  } 
  return (
    <div className='bg-white w-full flex items-center pr-5 border rounded-md relative'>
       <CiSearch className='ml-4 absolute text-2xl' />
    <input className='h-12 w-full  rounded-md pl-12 outline-none' type="text" placeholder='Search...' onChange={handleChange} />
   
    </div>
  )
}

export default InputFilter;