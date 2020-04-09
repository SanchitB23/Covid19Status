import React, {useState} from 'react';
import Table from "./table";

function Index(props) {
  const [searchValue, setSearchValue] = useState('')
  const [tableData, setTableData] = useState(props.data)

  function clearButtonHandler() {
    setTableData(props.data)
    setSearchValue('')
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
    const filtered = tableData.filter(entry => entry.Country.toLowerCase().includes(event.target.value.toLowerCase()))
    setTableData(filtered)

    if (event.target.value.length <= 0) {
      setTableData(props.data)
    }
  }
  return (
      <div>
        <div className="InputContainer">
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Search By Country"
                   aria-label="Search By Country"
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
        <Table data={tableData}/>
      </div>
  );
}

export default Index;
