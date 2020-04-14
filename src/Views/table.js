import React, {useState} from 'react';
import './table.css'
import addCommas from "../functions/addCommas";
import * as colors from "../constants/colors";

function Table(props) {
  const [sortState, setSortState] = useState({
    col: 'c', order: true
  }) //true == desc

  return (
      <table className="table table-hover table-striped table-responsive-md">
        <thead style={{color: '#212121'}}>
        <tr>
          <th scope="col" onClick={() => setSortState(state => ({col: 'n', order: !state.order}))}>
            {props.world ? 'Country' : 'State / UT'} Name {sortState.col === 'n' ? sortState.order ?
              <span><i className="fas fa-sort-down"/></span> :
              <span><i className="fas fa-sort-up"/></span> : ''}
          </th>
          <th scope="col" className="table-danger"
              style={{backgroundColor: colors.confirmed[1], color: 'white', letterSpacing: '1px'}}
              onClick={() => setSortState(state => ({col: 'c', order: !state.order}))}>
            Confirmed {sortState.col === 'c' ? sortState.order ? <span><i className="fas fa-sort-down"/></span> :
              <span><i className="fas fa-sort-up"/></span> : ''}
          </th>

          {!props.world &&
          <th scope="col" className="table-danger"
              style={{backgroundColor: colors.active[1], color: 'white', letterSpacing: '1px'}}
              onClick={() => setSortState(state => ({col: 'a', order: !state.order}))}>
            Active {sortState.col === 'a' ? sortState.order ? <span><i className="fas fa-sort-down"/></span> :
              <span><i className="fas fa-sort-up"/></span> : ''}
          </th>}
          {/*<th scope="col" className="table-primary">Active</th>*/}

          <th scope="col" className="table-success"
              style={{backgroundColor: colors.recovered[1], color: 'white', letterSpacing: '1px'}}
              onClick={() => setSortState(state => ({col: 'r', order: !state.order}))}>
            Recovered {sortState.col === 'r' ? sortState.order ? <span><i className="fas fa-sort-down"/></span> :
              <span><i className="fas fa-sort-up"/></span> : ''}
          </th>

          <th scope="col" className="table-secondary"
              style={{backgroundColor: colors.death[1], color: 'white', letterSpacing: '1px'}}
              onClick={() => setSortState(state => ({col: 'd', order: !state.order}))}>
            Deceased {sortState.col === 'd' ? sortState.order ? <span><i className="fas fa-sort-down"/></span> :
              <span><i className="fas fa-sort-up"/></span> : ''}
          </th>
        </tr>
        </thead>
        <tbody>
        {props.data
            // eslint-disable-next-line array-callback-return
            .sort((a, b) => {
              // eslint-disable-next-line default-case
              switch (sortState.col) {
                case "c":
                  if (sortState.order) {
                    return b.totalConfirmed - a.totalConfirmed
                  } else
                    return a.totalConfirmed - b.totalConfirmed
                case 'r':
                  if (sortState.order) {
                    return b.totalRecovered - a.totalRecovered
                  } else
                    return a.totalRecovered - b.totalRecovered
                case 'n':
                  if (sortState.order) {
                    return b.name < a.name ? 1 : -1
                  } else
                    return b.name > a.name ? 1 : -1
                case 'd':
                  if (sortState.order) {
                    return b.totalDeath - a.totalDeath
                  } else
                    return a.totalDeath - b.totalDeath
                case "a":
                  if (sortState.order) {
                    return b.active - a.active
                  } else return a.active - b.active
                default:
                  if (sortState.order) {
                    return b.totalConfirmed - a.totalConfirmed
                  } else
                    return a.totalConfirmed - b.totalConfirmed
              }
            })
            .map((data, i) => {
              if (!props.world && data.name === 'Total') return <tr key={i}/>
              return (
                  <tr key={i} onClick={() => props.onRowClick(props.world ? data.slug : data.name, data.slug)}>
                    <td>{data.name}</td>
                    <td className="table-danger" style={{backgroundColor: colors.confirmed[1], color: 'white'}}>
                      {data.newConfirmed > 0 &&
                      <span className="LatestCount">
                        <i className="fas fa-long-arrow-alt-up"/> {addCommas(data.newConfirmed.toString())}
                      </span>
                      } {addCommas(data.totalConfirmed.toString())}
                    </td>
                    {!props.world &&
                    <td className="table-primary" style={{backgroundColor: colors.active[1], color: 'white'}}>
                      {addCommas(data.active.toString())}
                    </td>
                    }
                    <td className="table-success" style={{backgroundColor: colors.recovered[1], color: 'white'}}>{
                      data.newRecovered > 0 &&
                      <span className="LatestCount">
                        <i className="fas fa-long-arrow-alt-up"/> {addCommas(data.newRecovered.toString())}
                      </span>
                    } {addCommas(data.totalRecovered.toString())}</td>
                    <td className="table-secondary" style={{backgroundColor: colors.death[1], color: 'white'}}>{
                      data.newDeath > 0 && <span className="LatestCount">
                        <i className="fas fa-long-arrow-alt-up"/> {addCommas(data.newDeath.toString())}
                      </span>
                    } {addCommas(data.totalDeath.toString())}</td>
                  </tr>
              )
            })}
        </tbody>
      </table>
  );
}

export default Table;
