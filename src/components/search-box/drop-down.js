import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';



const DropDown = props => {
    const {showList,items,onItemClick} = props;

    const renderChildItem = (ele,key) => {
        return(
        <StyledItem className="dropdown-item" key={key} onClick={()=>onItemClick(ele)} >
            {ele}
        </StyledItem>
        );
    }

    const noMatchingElement = () => (
        <div className="dropdown-item bg-secondary text-white" >
            No Matching Element found
        </div>
    )

    return (
      <div className={`dropdown ${showList ? "show" : ""}`}>
        <div className={`dropdown-menu ${showList ? "show" : ""}`}>
          {/* <ul> */}
              {
                 items.length === 0 ? noMatchingElement() : items.map((ele,index)=>renderChildItem(ele,index))
              }
              {/* </ul> */}
        </div>
      </div>
    );
}

DropDown.propTypes = {
    showList:PropTypes.bool,
    items:PropTypes.array,
    onItemClick:PropTypes.func.isRequired
}

DropDown.defaultProps = {
    showList:false,
    items:[]
}
  
const StyledItem = styled.li`
    border-bottom:.1px solid 	#DCDCDC;
    width:400px;
    padding:8px;
    padding-left:20px;
`;
//   return (
//       <div className='show dropdown' >
//           <div className='dropdown-menu show'> 
//             <li className='dropdown-item'>FIrst is the biggest and smalles</li>
//             <li className='dropdown-item'>Second</li>
//             <li className='dropdown-item'>Third</li>

//           </div>
//       </div>
    
//   );


export default DropDown;