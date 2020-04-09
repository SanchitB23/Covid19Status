import React, {useState} from 'react';
import './table.css'
import addCommas from "../../functions/addCommas";

function Table(props) {
  const [sortState, setSortState] = useState({
    col: 'c', order: true
  }) //true == desc

  const onClickRow = (slug) => {
    console.log(slug)
  }

  return (
      <table className="table table-hover table-striped table-responsive-md">
        <thead style={{color: '#212121'}}>
        <tr>
          <th scope="col" onClick={() => setSortState(state => ({col: 'n', order: !state.order}))}>
            {props.world ? 'Country' : 'State / UT'} Name {sortState.col === 'n' ? sortState.order ?
              <span><i className="fas fa-sort-down"/></span> :
              <span><i className="fas fa-sort-up"/></span> : ''}
          </th>
          {/*
          onClick={() => setSortState(state =>
              state.col === 'c' && state.type === 'down' ?
                  {col: 'c', type: 'up'} : {col: 'c', type: 'down'}
          )}
*/}
          <th scope="col" className="table-danger"
              onClick={() => setSortState(state => ({col: 'c', order: !state.order}))}>
            Confirmed {sortState.col === 'c' ? sortState.order ? <span><i className="fas fa-sort-down"/></span> :
              <span><i className="fas fa-sort-up"/></span> : ''}
          </th>

          {/*<th scope="col" className="table-primary">Active</th>*/}

          <th scope="col" className="table-success"
              onClick={() => setSortState(state => ({col: 'r', order: !state.order}))}>
            Recovered {sortState.col === 'r' ? sortState.order ? <span><i className="fas fa-sort-down"/></span> :
              <span><i className="fas fa-sort-up"/></span> : ''}
          </th>

          <th scope="col" className="table-secondary"
              onClick={() => setSortState(state => ({col: 'd', order: !state.order}))}>
            Deceased {sortState.col === 'd' ? sortState.order ? <span><i className="fas fa-sort-down"/></span> :
              <span><i className="fas fa-sort-up"/></span> : ''}
          </th>

        </tr>
        </thead>
        <tbody className="TableBody">
        {props.data
            .sort((a, b) => {
              switch (sortState.col) {
                case "c":
                  if (sortState.order) {
                    return b.totalConfirmed > a.totalConfirmed ? 1 : -1
                  } else
                    return b.totalConfirmed < a.totalConfirmed ? 1 : -1
                case 'r':
                  if (sortState.order) {
                    return b.totalRecovered < a.totalRecovered ? 1 : -1
                  } else
                    return b.totalRecovered > a.totalRecovered ? 1 : -1
                case 'n':
                  if (sortState.order) {
                    return b.name < a.name ? 1 : -1
                  } else
                    return b.name > a.name ? 1 : -1
                case 'd':
                  if (sortState.order) {
                    return b.totalDeaths < a.totalDeaths ? 1 : -1
                  } else
                    return b.totalDeaths > a.totalDeaths ? 1 : -1
              }
            })
            .map((data, i) => {
              return (
                  <tr key={i} onClick={onClickRow.bind(this, data.slug)}>
                    <td>{data.name}</td>
                    <td className="table-danger">
                      <span className="LatestCount">
                        <i className="fas fa-long-arrow-alt-up"/> {addCommas(data.newConfirmed.toString())}
                      </span> {addCommas(data.totalConfirmed.toString())}
                    </td>
                    {/*<td>{data.totalConfirmed}</td>*/}
                    <td className="table-success"><span className="LatestCount">
                        <i className="fas fa-long-arrow-alt-up"/> {addCommas(data.newRecovered.toString())}
                      </span> {addCommas(data.totalRecovered.toString())}</td>
                    <td className="table-secondary"><span className="LatestCount">
                        <i className="fas fa-long-arrow-alt-up"/> {addCommas(data.newDeaths.toString())}
                      </span> {addCommas(data.totalDeaths.toString())}</td>
                  </tr>
              )
            })}
        </tbody>
      </table>
  );
}

export default Table;
