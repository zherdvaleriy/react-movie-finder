import { useState } from "react"



export default function Search(props) {
 
  const [searchValue, setSearchValue] = useState('')

  const handleSearchInputChanges = (e) =>{
    setSearchValue(e.target.value)
  }

  const resetInputField = () =>{
    setSearchValue('')
  }

 const callSearchFunction = (e) =>{
    e.preventDefault()
  
    if(searchValue.trim() === ''){
        alert('Fill the input!')

    } else{
        // eslint-disable-next-line react/prop-types
        props.search(searchValue)
        resetInputField()

    }
 }


  return (
    <form className="search">
        <input type="text"
                value={searchValue}
                onChange={handleSearchInputChanges}
        />
        <input onClick={callSearchFunction} type='submit' value='SEARCH' />
      
    </form>
  )
}
