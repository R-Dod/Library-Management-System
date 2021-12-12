//User side
import 'react';
import { Box, Checkbox, Grid, IconButton, Tooltip } from '@material-ui/core';
import MaterialDataTable from '../../shared-components/data-table';
import React, { useCallback, useEffect, useState } from 'react';
import { NextPage } from 'next';
import axios from 'axios';
import moment from 'moment'; //https://momentjscom.readthedocs.io/en/latest/moment/00-use-it/01-node-js/

const url = 'http://localhost:4000';

const FilterMultiValDataComponent = (props: any) => {
  const [allPublishers, setAllPublishers] = useState<any>([]);
  // receive database table here

  useEffect(() => {
    axios.request({
      url: url + '/publisher/getall',
      method: 'GET',
    }).then((response) => {
      console.log(response.data);
      setAllPublishers(response.data);
    });
  }, []);

  const columnDefs: any[] = [
    { title: 'ID', field: 'PUBLISHER_ID', editable: 'never' },
    {
      title: 'Name', field: 'NAME', editable: 'never'
    },
    {
      title: 'Address', field: 'ADDRESS', editable: 'never'
    },
    {
      title: 'Email', field: 'EMAIL', editable: 'never'
    },
    {
      title: 'Phone Number', field: 'PHONE_NO', editable: 'never'
    },
  ];

  return (
    <React.Fragment>
      <MaterialDataTable
        options={{
          exportButton: true,
          draggable: false,
          actionsColumnIndex: -1,
          padding: 'dense',
          search: true,
        }}
        title={'Publishers'}
        data={allPublishers}
        columns={columnDefs}
        singleSelect={true}
      />

    </React.Fragment>
  );
};

export default FilterMultiValDataComponent;
