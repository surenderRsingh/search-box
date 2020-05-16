import React,{useState} from 'react';
import SearchInputBox from './SearchInputBox'
import PropTypes from 'prop-types'
import DropDown from './drop-down';

const SearchBox = props => {
    const{data,onItemSelected} = props;
    const [showList,setShowList] = useState(false);
    const[value,changeValue] = useState('');
    const filteredData = data.filter(ele=>ele.indexOf(value) >=0);

    const onTextValueChange = (val) =>{
        changeValue(val);

        if(val.length >= 3 ){
            setShowList(true);
        }
        else {
            setShowList(false);
        }
    }
    const onSelectItem = (item) => {
        changeValue('');
        setShowList(false);
        onItemSelected(item);
    }   

    return (
        <>
            <SearchInputBox onValueChange={onTextValueChange} value={value} />
            <DropDown showList={showList} items={filteredData} onItemClick={onSelectItem} />

        </>
    )
}

SearchBox.propTypes = {
    data:PropTypes.array.isRequired,
    onItemSelected:PropTypes.func
}

SearchBox.defaultProps = {
    data:[]
}

export default SearchBox;
