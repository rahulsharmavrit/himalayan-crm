import { Pagination as TablePagination } from '@mui/material'
import React from 'react'

const Pagination:React.FC = () => {
  return (<>
  <TablePagination count={10} shape="rounded" />
  </>)
}

export default Pagination