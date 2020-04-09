import React, {useState} from 'react';
import './table.css'

function Table(props) {
  const [sortState, setSortState] = useState({
    col: 'c', order: true
  }) //true == desc

  return (
      <table className="table table-hover table-striped table-responsive-md">
        <thead>
        <tr>
          <th scope="col" onClick={() => setSortState(state => ({col: 'n', order: !state.order}))}>
            Country Name {sortState.col === 'n' ? sortState.order ? <span><i className="fas fa-sort-down"/></span> :
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
                    return b.TotalConfirmed > a.TotalConfirmed ? 1 : -1
                  } else
                    return b.TotalConfirmed < a.TotalConfirmed ? 1 : -1
                case 'r':
                  if (sortState.order) {
                    return b.TotalRecovered < a.TotalRecovered ? 1 : -1
                  } else
                    return b.TotalRecovered > a.TotalRecovered ? 1 : -1
                case 'n':
                  if (sortState.order) {
                    return b.Country < a.Country ? 1 : -1
                  } else
                    return b.Country > a.Country ? 1 : -1
                case 'd':
                  if (sortState.order) {
                    return b.TotalDeaths < a.TotalDeaths ? 1 : -1
                  } else
                    return b.TotalDeaths > a.TotalDeaths ? 1 : -1
              }
            })
            .map((data, i) => {
              return (
                  <tr key={i}>
                    <td>{data.Country}</td>
                    <td className="table-danger">{addCommas(data.TotalConfirmed.toString())}</td>
                    {/*<td>{data.TotalConfirmed}</td>*/}
                    <td className="table-success">{addCommas(data.TotalRecovered.toString())}</td>
                    <td className="table-secondary">{addCommas(data.TotalDeaths.toString())}</td>
                  </tr>
              )
            })}
        </tbody>
      </table>
  );
}


function addCommas(nStr) {
  nStr += '';
  let x = nStr.split('.');
  let x1 = x[0];
  let x2 = x.length > 1 ? '.' + x[1] : '';
  let rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1 + x2;
}

export default Table;
