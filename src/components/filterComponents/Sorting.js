import React,{useContext} from 'react'
import {SortingContext} from '../Home'


function Sorting(props) {
    const [sorting,setSorting,applyFilter]=useContext(SortingContext)
  
    return (
        <div className="filterModalContainer">
        <h6>Sorting By</h6>
        <div className="filterBody">
        <div>
          <input
            type="radio"
            id="high"
            name="high"
            value="high"
            checked={sorting === "high"}
            onClick={() => setSorting("high")}
          />
          <label htmlFor="high">Price -- High To Low</label>
        </div>
        <div>
          <input
            type="radio"
            id="low"
            name="low"
            value="low"
            checked={sorting === "low"}
            onClick={() => setSorting("low")}
          />
          <label htmlFor="low">Price -- Low To High</label>
        </div>
        <div>
          <input
            type="radio"
            id="discount"
            name="discount"
            value="discount"
            checked={sorting === "discount"}
            onClick={() => setSorting("discount")}
          />
          <label htmlFor="discount">Discount</label>
        </div>
        <div>
          <input
            type="radio"
            id="discount"
            name="reset"
            value="reset"
            checked={sorting === "reset"}
            onClick={() => setSorting("reset")}
          />
          <label htmlFor="discount">Reset</label>
        </div>
        <div className='text-center'>
            <button className='applyBtn' onClick={()=>applyFilter()}>Apply</button>
        </div>
        
      </div>
      <div className="filterCancelApply hide4Web">
           {props.handleClose &&  <div className="filterCancel" onClick={props.handleClose}>
              Cancel
            </div>}
            {props.handleClose && <div className="filterApply" onClick={()=>{applyFilter(),props.handleClose()}}>
              Apply
            </div>}
          </div>
        </div>
    )
}

export default Sorting
