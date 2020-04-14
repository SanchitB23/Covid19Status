import React, {useCallback, useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import Table from "../../Views/table";
import './index.css'
import {useDispatch} from "react-redux";
import {fetchIndianStates} from "../../store/actions/indiaActions";

function TableComponent(props) {
  const [searchValue, setSearchValue] = useState('')
  const [tableData, setTableData] = useState(props.data)
  const history = useHistory();
  const dispatch = useDispatch();

  const clearButtonHandler = useCallback(() => {
    setTableData(props.data)
    setSearchValue('')
  }, [props.data])

  useEffect(() => () => clearButtonHandler(), [clearButtonHandler]) //cleanup for unmount


  const onRowClickHandler = (name, slug) => {
    if (props.world) console.log("Country Data")//dispatch(fetchIndianStates)
    else dispatch(fetchIndianStates(name, slug))
    props.world ? history.push('/country/' + slug)
        : history.push('/india/state/' + name)
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
    const filtered = tableData.filter(entry => entry.name.toLowerCase().includes(event.target.value.toLowerCase()))
    setTableData(filtered)

    if (event.target.value.length <= 0) {
      setTableData(props.data)
    }
  }

  return (
      <div style={{padding: '20px'}}>
        <div className="InputContainer">
          <div className="input-group mb-3">
            <input type="text" className="form-control"
                   placeholder={props.world ? "Search By Country" : "Search By State / UT"}
                   aria-label={props.world ? "Search By Country" : "Search By State / UT"}
                   aria-describedby="button-addon2"
                   value={searchValue}
                   onChange={onChangeSearchInput}
            />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button" id="button-addon2"
                      onClick={clearButtonHandler}>
                <i className="far fa-trash-alt"/>
              </button>
            </div>
          </div>
        </div>
        <Table data={tableData} world={props.world} onRowClick={onRowClickHandler}/>
      </div>
  );
}

export default TableComponent;
