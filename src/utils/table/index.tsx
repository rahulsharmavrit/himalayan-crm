import React from "react"
import { tableProps } from "../../interface/interface.index"
import { DataGrid } from "@mui/x-data-grid"
import Showing from "./component/showing"
import Pagination from "./component/pagination"


const CustomTable:React.FC<tableProps> = ({rows,columns}) => {
  return (<>
  
  <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        style={{border : 'none'}}
        hideFooter={true}
      />
  <div className="mt-2 d-flex justify-content-between align-items-center">
    <Showing />
    <Pagination />
  </div>
  </>)
}

export default CustomTable