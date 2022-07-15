import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import servicio from '../Servicio';
import { DataGrid} from '@mui/x-data-grid';


export default function Grid() {
    const columns = [
      { field: "id", headerName: "ID", flex: 1 },
      {
        field: "title",
        headerName: "TITLE",
        flex: 1,
      },
      {
        field: "description",
        headerName: "DESCRIPTION",
        flex: 1,
      },
      {
        field: "price",
        headerName: "PRICE",
        flex: 1,
      },
    ];

    const [data, setData] = useState<any[]>([]);





  return (
    <div style={{ display: "flex", justifyContent: "center",flexDirection:"column",alignItems:"center" }}>
      <Button
        style={{ marginTop: "2em", width: "20%" }}
        variant="contained"
        onClick={() => {
          servicio.getData().then((data) => {
            console.log(data.products);
            setData(data.products);
          });
        }}
      >
        Fetch
      </Button>

      <Box style={{ marginTop: "2em"}} sx={{ height: "400px", width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          
        />
      </Box>
    </div>
  );
}
