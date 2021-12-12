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
  const [allAuthors, setAllAuthors] = useState<any>([]);
  // receive database table here

  useEffect(() => {
    axios.request({
      url: url + '/author/getall',
      method: 'GET',
    }).then((response) => {
      console.log(response.data);
      setAllAuthors(response.data);
    });
  }, []);

  const columnDefs: any[] = [
    { title: 'ID', field: 'AUTHOR_ID', editable: 'never' },
    {
      title: 'First Name', field: 'FIRST_NAME', editable: 'never'
    },
    {
      title: 'Last Name', field: 'LAST_NAME', editable: 'never'
    },
    { title: 'Email', field: 'EMAIL', editable: 'never' },
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
        title={'Authors'}
        data={allAuthors}
        columns={columnDefs}
        singleSelect={true}
      />

    </React.Fragment>
  );
};

export default FilterMultiValDataComponent;
