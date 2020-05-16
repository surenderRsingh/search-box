import React,{useState} from 'react';
import SearchInputBox from './SearchInputBox'

import DropDown from './drop-down';
const SearchBox = props => {
    const [showList,setShowList] = useState(false);
    const[value,changeValue] = useState('');
    const filteredData = props.data.filter(ele=>ele.indexOf(value) >=0);

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
        console.log(`selected item is ${item}`)
    }   

    return (
        <>
            <SearchInputBox onValueChange={onTextValueChange} value={value} />
            <DropDown showList={showList} items={filteredData} onItemClick={onSelectItem} />

        </>
    )
}

export default SearchBox;
