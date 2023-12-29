import React, {useState} from 'react';


function CustomPagination({page, setPage, max}) {
    const [input, setInput] = useState (1);

    const nextPage = () => {
        setInput (parseInt(input) + 1);
        setPage (parseInt(page) + 1);
      };
    
      const previousPage = () => {
        setInput (parseInt(input) - 1);
        setPage (parseInt(page) - 1);
      };

      const onKeyDown = e => {
        if (e.keyCode == 13) {
          setPage (parseInt (e.target.value));
          if (
            parseInt (e.target.value < 1) ||
            parseInt (e.target.value) > Math.ceil (max) ||
            isNaN (parseInt (e.target.value))
          ) {
            setPage (1);
            setInput (1);
          } else {
            setPage (parseInt (e.target.value));
          }
        }
      };
    
      const onChange = e => {
        setInput (e.target.value);
      };
    
  return (
    <div className="d-flex align-items-center justify-content-center gap-12">
        <button className='btnBack pt-2' disabled={page === 1 || page < 1} onClick={previousPage}><i style={{ color: "#354259"}} className="material-icons">chevron_left</i></button>
        <input
        className='inputPage mt-2 col-sm-1 input-sm text-center rounded-3 border border-light'
        onChange={e => onChange (e)}
        onKeyDown={e => onKeyDown (e)}
        name="page"
        autoComplete="off"
        value={input}
        pattern="[0-9]"
      />
      <p className='px-2 pt-3'> de <strong>{max}</strong> </p>
      <button
        className='btnNext pt-2'
        disabled={page === Math.ceil (max) || page > Math.ceil (max)}
        onClick={nextPage}
      ><i style={{ color: "#354259"}} className="material-icons">chevron_right</i>
        </button>

    </div>
)
  
}

export default CustomPagination;