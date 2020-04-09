import React, {useEffect} from 'react';
import Table from "../../components/Table";
import './index.css'
import {useDispatch, useSelector} from "react-redux";
import {fetchWorldData} from "../../store/actions/World/worldActions";

function HomeScreen(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWorldData())
  }, [dispatch])

  const worldData = useSelector(state => state.worldData)

  return (
      <div className="HomeScreenContainer">
        {worldData.countries.length > 0 && (
            <div>
              <Table data={worldData.countries}/>
            </div>
        )}
      </div>
  );
}

export default HomeScreen;
