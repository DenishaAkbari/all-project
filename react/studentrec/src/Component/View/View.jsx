// // import React, { useEffect } from 'react'
// // import { useState } from 'react'
// // import { useNavigate } from 'react-router';
// // import { Container } from 'react-bootstrap';
// // import getRec from '../../helper'
// // import './View.css'
// // // import * as React from 'react';
// // import Table from '@mui/material/Table';
// // import TableBody from '@mui/material/TableBody';
// // import TableCell from '@mui/material/TableCell';
// // import TableContainer from '@mui/material/TableContainer';
// // import TableHead from '@mui/material/TableHead';
// // import TableRow from '@mui/material/TableRow';
// // import Paper from '@mui/material/Paper';


// // function View({storage, handleEdit, handleDelete}) {

// //     const navigate = useNavigate();
// //     const handleEditData = (id) => {
// //         const updatedRec = storage.find((rec) => rec.id === id);
// //         handleEdit(updatedRec); 
// //       };
    
// //       const handleDeleteData = (id) => {
// //         handleDelete(id); 
// //       };
    

// //      const BackButton = () => {
// //         navigate('/');
// //      }
                      
     
// //      function createData( name, fname , lname, email, address, age, course) {
// //        return { name, fname , lname, email, address, age, course };
// //   }
  
// //   const rows = [
// //     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
// //     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
// //     createData('Eclair', 262, 16.0, 24, 6.0),
// //     createData('Cupcake', 305, 3.7, 67, 4.3),
// //     createData('Gingerbread', 356, 16.0, 49, 3.9),
// //   ];


  
// //   return (
// //         <TableContainer component={Paper}>
// //           <Table sx={{ minWidth: 650 }} aria-label="simple table">
// //             <TableHead>
// //               <TableRow>
// //                 <TableCell>fname</TableCell>
// //                 <TableCell align="right">lname</TableCell>
// //                 <TableCell align="right">Email</TableCell>
// //                 <TableCell align="right">Address</TableCell>
// //                 <TableCell align="right">Age</TableCell>
// //                 <TableCell align="right">Course</TableCell>
// //                 <TableCell align="right">Action</TableCell>
// //               </TableRow>
// //             </TableHead>
// //             <TableBody>
// //               {rows.map((row) => (
// //                 <TableRow
// //                   key={row.lname + row.fname}
// //                   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
// //                   >
// //                   <TableCell component="th" scope="row">
// //                     {row.name}
// //                   </TableCell>
// //                   <TableCell align="right">{row.fname}</TableCell>
// //                   <TableCell align="right">{row.lname}</TableCell>
// //                   <TableCell align="right">{row.email}</TableCell>
// //                   <TableCell align="right">{row.address}</TableCell>
// //                 </TableRow>
// //               ))}
// //             </TableBody>
// //           </Table>
// //         </TableContainer>
// //       );
// //     }
    
// //     export default View
    
  



// // import * as React from 'react';
// // import PropTypes from 'prop-types';
// // import { alpha } from '@mui/material/styles';
// // import Box from '@mui/material/Box';
// // import Table from '@mui/material/Table';
// // import TableBody from '@mui/material/TableBody';
// // import TableCell from '@mui/material/TableCell';
// // import TableContainer from '@mui/material/TableContainer';
// // import TableHead from '@mui/material/TableHead';
// // import TablePagination from '@mui/material/TablePagination';
// // import TableRow from '@mui/material/TableRow';
// // import TableSortLabel from '@mui/material/TableSortLabel';
// // import Toolbar from '@mui/material/Toolbar';
// // import Typography from '@mui/material/Typography';
// // import Paper from '@mui/material/Paper'; // Keep this one
// // import Checkbox from '@mui/material/Checkbox';
// // import IconButton from '@mui/material/IconButton';
// // import Tooltip from '@mui/material/Tooltip';
// // import FormControlLabel from '@mui/material/FormControlLabel';
// // import Switch from '@mui/material/Switch';
// // import DeleteIcon from '@mui/icons-material/Delete';
// // import FilterListIcon from '@mui/icons-material/FilterList';
// // import { visuallyHidden } from '@mui/utils';

// // function createData(id, name, calories, fat, carbs, protein) {
// //   return {
// //     id,
// //     name,
// //     calories,
// //     fat,
// //     carbs,
// //     protein,
// //   };
// // }

// // const rows = [
// //   createData(1, 'Cupcake', 305, 3.7, 67, 4.3),
// //   createData(2, 'Donut', 452, 25.0, 51, 4.9),
// //   createData(3, 'Eclair', 262, 16.0, 24, 6.0),
// //   createData(4, 'Frozen yoghurt', 159, 6.0, 24, 4.0),
// //   createData(5, 'Gingerbread', 356, 16.0, 49, 3.9),
// //   createData(6, 'Honeycomb', 408, 3.2, 87, 6.5),
// //   createData(7, 'Ice cream sandwich', 237, 9.0, 37, 4.3),
// //   createData(8, 'Jelly Bean', 375, 0.0, 94, 0.0),
// //   createData(9, 'KitKat', 518, 26.0, 65, 7.0),
// //   createData(10, 'Lollipop', 392, 0.2, 98, 0.0),
// //   createData(11, 'Marshmallow', 318, 0, 81, 2.0),
// //   createData(12, 'Nougat', 360, 19.0, 9, 37.0),
// //   createData(13, 'Oreo', 437, 18.0, 63, 4.0),
// // ];

// // function descendingComparator(a, b, orderBy) {
// //   if (b[orderBy] < a[orderBy]) {
// //     return -1;
// //   }
// //   if (b[orderBy] > a[orderBy]) {
// //     return 1;
// //   }
// //   return 0;
// // }

// // function getComparator(order, orderBy) {
// //   return order === 'desc'
// //     ? (a, b) => descendingComparator(a, b, orderBy)
// //     : (a, b) => -descendingComparator(a, b, orderBy);
// // }

// // const headCells = [
// //   {
// //     id: 'name',
// //     numeric: false,
// //     disablePadding: true,
// //     label: 'Dessert (100g serving)',
// //   },
// //   {
// //     id: 'calories',
// //     numeric: true,
// //     disablePadding: false,
// //     label: 'Calories',
// //   },
// //   {
// //     id: 'fat',
// //     numeric: true,
// //     disablePadding: false,
// //     label: 'Fat (g)',
// //   },
// //   {
// //     id: 'carbs',
// //     numeric: true,
// //     disablePadding: false,
// //     label: 'Carbs (g)',
// //   },
// //   {
// //     id: 'protein',
// //     numeric: true,
// //     disablePadding: false,
// //     label: 'Protein (g)',
// //   },
// // ];

// // function EnhancedTableHead(props) {
// //   const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
// //     props;
// //   const createSortHandler = (property) => (event) => {
// //     onRequestSort(event, property);
// //   };

// //   return (
// //     <TableHead>
// //       <TableRow>
// //         <TableCell padding="checkbox">
// //           <Checkbox
// //             color="primary"
// //             indeterminate={numSelected > 0 && numSelected < rowCount}
// //             checked={rowCount > 0 && numSelected === rowCount}
// //             onChange={onSelectAllClick}
// //             inputProps={{
// //               'aria-label': 'select all desserts',
// //             }}
// //           />
// //         </TableCell>
// //         {headCells.map((headCell) => (
// //           <TableCell
// //             key={headCell.id}
// //             align={headCell.numeric ? 'right' : 'left'}
// //             padding={headCell.disablePadding ? 'none' : 'normal'}
// //             sortDirection={orderBy === headCell.id ? order : false}
// //           >
// //             <TableSortLabel
// //               active={orderBy === headCell.id}
// //               direction={orderBy === headCell.id ? order : 'asc'}
// //               onClick={createSortHandler(headCell.id)}
// //             >
// //               {headCell.label}
// //               {orderBy === headCell.id ? (
// //                 <Box component="span" sx={visuallyHidden}>
// //                   {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
// //                 </Box>
// //               ) : null}
// //             </TableSortLabel>
// //           </TableCell>
// //         ))}
// //       </TableRow>
// //     </TableHead>
// //   );
// // }

// // EnhancedTableHead.propTypes = {
// //   numSelected: PropTypes.number.isRequired,
// //   onRequestSort: PropTypes.func.isRequired,
// //   onSelectAllClick: PropTypes.func.isRequired,
// //   order: PropTypes.oneOf(['asc', 'desc']).isRequired,
// //   orderBy: PropTypes.string.isRequired,
// //   rowCount: PropTypes.number.isRequired,
// // };

// // function EnhancedTableToolbar(props) {
// //   const { numSelected } = props;
// //   return (
// //     <Toolbar
// //       sx={[
// //         {
// //           pl: { sm: 2 },
// //           pr: { xs: 1, sm: 1 },
// //         },
// //         numSelected > 0 && {
// //           bgcolor: (theme) =>
// //             alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
// //         },
// //       ]}
// //     >
// //       {numSelected > 0 ? (
// //         <Typography
// //           sx={{ flex: '1 1 100%' }}
// //           color="inherit"
// //           variant="subtitle1"
// //           component="div"
// //         >
// //           {numSelected} selected
// //         </Typography>
// //       ) : (
// //         <Typography
// //           sx={{ flex: '1 1 100%' }}
// //           variant="h6"
// //           id="tableTitle"
// //           component="div"
// //         >
// //           Nutrition
// //         </Typography>
// //       )}
// //       {numSelected > 0 ? (
// //         <Tooltip title="Delete">
// //           <IconButton>
// //             <DeleteIcon />
// //           </IconButton>
// //         </Tooltip>
// //       ) : (
// //         <Tooltip title="Filter list">
// //           <IconButton>
// //             <FilterListIcon />
// //           </IconButton>
// //         </Tooltip>
// //       )}
// //     </Toolbar>
// //   );
// // }

// // EnhancedTableToolbar.propTypes = {
// //   numSelected: PropTypes.number.isRequired,
// // };

// // export default function EnhancedTable() {
// //   const [order, setOrder] = React.useState('asc');
// //   const [orderBy, setOrderBy] = React.useState('calories');
// //   const [selected, setSelected] = React.useState([]);
// //   const [page, setPage] = React.useState(0);
// //   const [dense, setDense] = React.useState(false);
// //   const [rowsPerPage, setRowsPerPage] = React.useState(5);

// //   const handleRequestSort = (event, property) => {
// //     const isAsc = orderBy === property && order === 'asc';
// //     setOrder(isAsc ? 'desc' : 'asc');
// //     setOrderBy(property);
// //   };

// //   const handleSelectAllClick = (event) => {
// //     if (event.target.checked) {
// //       const newSelected = rows.map((n) => n.id);
// //       setSelected(newSelected);
// //       return;
// //     }
// //     setSelected([]);
// //   };

// //   const handleClick = (event, id) => {
// //     const selectedIndex = selected.indexOf(id);
// //     let newSelected = [];

// //     if (selectedIndex === -1) {
// //       newSelected = newSelected.concat(selected, id);
// //     } else if (selectedIndex === 0) {
// //       newSelected = newSelected.concat(selected.slice(1));
// //     } else if (selectedIndex === selected.length - 1) {
// //       newSelected = newSelected.concat(selected.slice(0, -1));
// //     } else if (selectedIndex > 0) {
// //       newSelected = newSelected.concat(
// //         selected.slice(0, selectedIndex),
// //         selected.slice(selectedIndex + 1),
// //       );
// //     }
// //     setSelected(newSelected);
// //   };

// //   const handleChangePage = (event, newPage) => {
// //     setPage(newPage);
// //   };

// //   const handleChangeRowsPerPage = (event) => {
// //     setRowsPerPage(parseInt(event.target.value, 10));
// //     setPage(0);
// //   };

// //   const handleChangeDense = (event) => {
// //     setDense(event.target.checked);
// //   };

// //   // Avoid a layout jump when reaching the last page with empty rows.
// //   const emptyRows =
// //     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

// //   const visibleRows = React.useMemo(
// //     () =>
// //       [...rows]
// //         .sort(getComparator(order, orderBy))
// //         .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
// //     [order, orderBy, page, rowsPerPage],
// //   );

// //   return (
// //     <Box sx={{ width: '100%' }}>
// //       <Paper sx={{ width: '100%', mb: 2 }}>
// //         <EnhancedTableToolbar numSelected={selected.length} />
// //         <TableContainer>
// //           <Table
// //             sx={{ minWidth: 750 }}
// //             aria-labelledby="tableTitle"
// //             size={dense ? 'small' : 'medium'}
// //           >
// //             <EnhancedTableHead
// //               numSelected={selected.length}
// //               order={order}
// //               orderBy={orderBy}
// //               onSelectAllClick={handleSelectAllClick}
// //               onRequestSort={handleRequestSort}
// //               rowCount={rows.length}
// //             />
// //             <TableBody>
// //               {visibleRows.map((row, index) => {
// //                 const isItemSelected = selected.includes(row.id);
// //                 const labelId = `enhanced-table-checkbox-${index}`;

// //                 return (
// //                   <TableRow
// //                     hover
// //                     onClick={(event) => handleClick(event, row.id)}
// //                     role="checkbox"
// //                     aria-checked={isItemSelected}
// //                     tabIndex={-1}
// //                     key={row.id}
// //                     selected={isItemSelected}
// //                     sx={{ cursor: 'pointer' }}
// //                   >
// //                     <TableCell padding="checkbox">
// //                       <Checkbox
// //                         color="primary"
// //                         checked={isItemSelected}
// //                         inputProps={{
// //                           'aria-labelledby': labelId,
// //                         }}
// //                       />
// //                     </TableCell>
// //                     <TableCell
// //                       component="th"
// //                       id={labelId}
// //                       scope="row"
// //                       padding="none"
// //                     >
// //                       {row.name}
// //                     </TableCell>
// //                     <TableCell align="right">{row.calories}</TableCell>
// //                     <TableCell align="right">{row.fat}</TableCell>
// //                     <TableCell align="right">{row.carbs}</TableCell>
// //                     <TableCell align="right">{row.protein}</TableCell>
// //                   </TableRow>
// //                 );
// //               })}
// //               {emptyRows > 0 && (
// //                 <TableRow
// //                   style={{
// //                     height: (dense ? 33 : 53) * emptyRows,
// //                   }}
// //                 >
// //                   <TableCell colSpan={6} />
// //                 </TableRow>
// //               )}
// //             </TableBody>
// //           </Table>
// //         </TableContainer>
// //         <TablePagination
// //           rowsPerPageOptions={[5, 10, 25]}
// //           component="div"
// //           count={rows.length}
// //           rowsPerPage={rowsPerPage}
// //           page={page}
// //           onPageChange={handleChangePage}
// //           onRowsPerPageChange={handleChangeRowsPerPage}
// //         />
// //       </Paper>
// //       <FormControlLabel
// //         control={<Switch checked={dense} onChange={handleChangeDense} />}
// //         label="Dense padding"
// //       />
// //     </Box>
// //   );
// // }














    
// // import React from 'react';
// // import { useNavigate } from 'react-router';
// // import { Container, Button } from 'react-bootstrap';
// // import './View.css';
// // import Table from '@mui/material/Table';
// // import TableBody from '@mui/material/TableBody';
// // import TableCell from '@mui/material/TableCell';
// // import TableContainer from '@mui/material/TableContainer';
// // import TableHead from '@mui/material/TableHead';
// // import TableRow from '@mui/material/TableRow';
// // import Paper from '@mui/material/Paper';

// function View({ storage, handleEdit, handleDelete }) {

//   const navigate = useNavigate();

//   const handleEditData = (id) => {
//     const updatedRec = storage.find((rec) => rec.id === id);
//     handleEdit(updatedRec);
//   };

//   const handleDeleteData = (id) => {
//     handleDelete(id);
//   };

//   const BackButton = () => {
//     navigate('/');
//   };

//   return (
//     <Container>
//       <Button  onClick={BackButton}>Back</Button>
//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 1000 }} aria-label="simple table">
//           <TableHead>
//             <TableRow>
//               <TableCell>First Name</TableCell>
//               <TableCell align="right">Last Name</TableCell>
//               <TableCell align="right">Email</TableCell>
//               <TableCell align="right">Address</TableCell>
//               <TableCell align="right">Age</TableCell>
//               <TableCell align="right">Course</TableCell>
//               <TableCell align="right">Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {storage.map((row) => (
//               <TableRow key={row.id}>
//                 <TableCell component="th" scope="row">{row.fname}</TableCell>
//                 <TableCell align="right">{row.lname}</TableCell>
//                 <TableCell align="right">{row.email}</TableCell>
//                 <TableCell align="right">{row.address}</TableCell>
//                 <TableCell align="right">{row.age}</TableCell>
//                 <TableCell align="right">{row.course}</TableCell>
//                 <TableCell align="right">
//                   <Button variant="warning" onClick={() => handleEditData(row.id)}>Edit</Button>
//                   <Button variant="danger" onClick={() => handleDeleteData(row.id)}>Delete</Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Container>
//   );
// }

// export default View;

    
    
//     // export default function BasicTable() {
//       //   return (
//         //     <TableContainer component={Paper}>
//         //       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         //         <TableHead>
//         //           <TableRow>
//         //             <TableCell>Dessert (100g serving)</TableCell>
//         //             <TableCell align="right">Calories</TableCell>
//         //             <TableCell align="right">Fat&nbsp;(g)</TableCell>
//         //             <TableCell align="right">Carbs&nbsp;(g)</TableCell>
// //             <TableCell align="right">Protein&nbsp;(g)</TableCell>
// //           </TableRow>
// //         </TableHead>
// //         <TableBody>
// //           {rows.map((row) => (
//   //             <TableRow
//   //               key={row.name}
//   //               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//   //             >
//   //               <TableCell component="th" scope="row">
//   //                 {row.name}
//   //               </TableCell>
//   //               <TableCell align="right">{row.calories}</TableCell>
//   //               <TableCell align="right">{row.fat}</TableCell>
//   //               <TableCell align="right">{row.carbs}</TableCell>
//   //               <TableCell align="right">{row.protein}</TableCell>
//   //             </TableRow>
//   //           ))}
//   //         </TableBody>
//   //       </Table>
//   //     </TableContainer>
//   //   );
//   // }
  
  
  
//   // return (
//   //  <>
//   //   <Container>
//   //  <h1 className='text-center fw-bold mb-5'>View Data</h1>
  
//   //      <div className="mt-5">
//   //      {
//   //           storage.length === 0 ? (
//   //               <div className='no-data'>
//   //                   <p className="text-center text-danger fw-bold mt-5 " style={{fontSize: '80px'}} >
//   //                       No Data Found
//   //                   </p>
//   //               </div>
//   //           ) : (
//   //            <table className="table">
//   //            <thead>
//   //                <tr>
//   //                    <th scope="col">#</th>
//   //                    <th scope="col">First</th>
//   //                    <th scope="col">Last</th>
//   //                    <th scope="col">Email</th>
//   //                    <th scope="col">Address</th>
//   //                    <th scope="col">Age</th>
//   //                    <th scope="col">Course</th>
//   //                    <th scope="col">Action</th>
//   //                </tr>
//   //            </thead>
//   //            <tbody>
//   //                {
//   //                    storage.map((data, index) => (
//   //                        <tr key={data.id}>
//   //                            <th scope="row">{index + 1}</th>
//   //                            <td>{data.fname}</td>
//   //                            <td>{data.lname}</td>
//   //                            <td>{data.email}</td>
//   //                            <td>{data.address}</td>
//   //                            <td>{data.age}</td>
//   //                            <td>{data.course}</td>
//   //                            <td>
//   //                                <button className='btn btn-primary' onClick={() => handleEditData(data.id)}>Edit</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//   //                                <button className='btn btn-primary' onClick={() => handleDeleteData(data.id)}>Delete</button>
//   //                            </td>
//   //                        </tr>
//   //                    ))
//   //                }
//   //            </tbody>
//   //        </table>
//   //      )}
//   //      <div className='text-center'>
//   //      <button className='btn btn-primary px-3 mt-5' onClick={() => navigate('/')}>back to register</button>
//   //      </div>
//   //      </div>
//   //   </Container>
  
//   //  </>
//   // )










import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';

// Replace this function to handle your custom data (students)
function createData(id, fname, lname, email, address, age, course) {
  return {
    id,
    fname,
    lname,
    email,
    address,
    age,
    course,
  };
}

// Sample student data (replace with your actual data)
const rows = [
  createData(1, 'John', 'Doe', 'john.doe@example.com', '123 Main St', 20, 'Math'),
  createData(2, 'Jane', 'Smith', 'jane.smith@example.com', '456 Oak St', 22, 'Science'),
  createData(3, 'Emily', 'Johnson', 'emily.j@example.com', '789 Pine St', 21, 'History'),
  // Add more student records as needed
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Updated columns for your student data
const headCells = [
  { id: 'fname', numeric: false, disablePadding: true, label: 'First Name' },
  { id: 'lname', numeric: false, disablePadding: false, label: 'Last Name' },
  { id: 'email', numeric: false, disablePadding: false, label: 'Email' },
  { id: 'address', numeric: false, disablePadding: false, label: 'Address' },
  { id: 'age', numeric: true, disablePadding: false, label: 'Age' },
  { id: 'course', numeric: false, disablePadding: false, label: 'Course' },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all students',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;
  return (
    <Toolbar
      sx={[
        {
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
        },
        numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        },
      ]}
    >
      {numSelected > 0 ? (
        <Typography sx={{ flex: '1 1 100%' }} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography sx={{ flex: '1 1 100%' }} variant="h6" id="tableTitle" component="div">
          Students
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('fname');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      [...rows]
        .sort(getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage],
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size={dense ? 'small' : 'medium'}>
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row) => {
                const isItemSelected = selected.indexOf(row.id) !== -1;
                const labelId = `enhanced-table-checkbox-${row.id}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell component="th" id={labelId} scope="row" padding="none">
                      {row.fname}
                    </TableCell>
                    <TableCell align="left">{row.lname}</TableCell>
                    <TableCell align="left">{row.email}</TableCell>
                    <TableCell align="left">{row.address}</TableCell>
                    <TableCell align="right">{row.age}</TableCell>
                    <TableCell align="left">{row.course}</TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}

