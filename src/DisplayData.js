// import { useState } from "react";

// const DisplayData = () => {

//     const record = [
//         {
//             SR: 1,
//             Name: 'lina',
//             Age: 25
//         },
//         {
//             SR: 4,
//             Name: 'pooja',
//             Age: 32
//         },
//         {
//             SR: 3,
//             Name: 'khushboo',
//             Age: 23
//         },
//         {
//             SR: 2,
//             Name: 'prakash',
//             Age: 42
//         },
//         {
//             SR: 9,
//             Name: 'Himanshu',
//             Age: 18
//         },
//     ];

//     const [data,setData]=useState(record)
//     const [order,setOrder]=useState("ASC")


//     const HandelSort=(item)=>{
//         if(order==="ASC"){
//             const sorted=[...data].sort((a,b)=>
//                 a[item].toLowerCase()>b[item].toLowerCase() ? 1 : -1
//             )
//             setData(sorted)
//             setOrder("DSC")

//         }
//         if(order==="DSC"){
//             const sorted=[...data].sort((a,b)=>
//                 a[item].toLowerCase()<b[item].toLowerCase() ? 1 : -1
//             )
//             setData(sorted)
//             setOrder("ASC")


//         }
//     }




//     return (
//         <>


//             <table className="audit table">
//                 <thead className="table-th">
//                     <tr>
//                         <th onClick={()=>HandelSort("Name")}>Name</th>

//                     </tr>
//                 </thead>
//                 <tbody className="table-body">
//                     {data((x) => (
//                         <tr>
//                             <td>{x.Name}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </>
//     )
// }

// export default DisplayData;




// import { useState } from "react";

// const DisplayData = () => {

//     const record = [
//         {
//             SR: 1,
//             Name: 'lina',
//             Age: 25
//         },
//         {
//             SR: 4,
//             Name: 'pooja',
//             Age: 32
//         },
//         {
//             SR: 3,
//             Name: 'khushboo',
//             Age: 23
//         },
//         {
//             SR: 2,
//             Name: 'prakash',
//             Age: 42
//         },
//         {
//             SR: 9,
//             Name: 'Himanshu',
//             Age: 18
//         },
//     ];

//     const [data, setData] = useState(record);
//     const [order, setOrder] = useState("ASC");

//     const handleSort = (item) => {
//         if (order === "ASC") {
//             const sorted = [...data].sort((a, b) =>
//                 a[item].toLowerCase() > b[item].toLowerCase() ? 1 : -1
//             );
//             setData(sorted);
//             setOrder("DSC");
//         }
//         if (order === "DSC") {
//             const sorted = [...data].sort((a, b) =>
//                 a[item].toLowerCase() < b[item].toLowerCase() ? 1 : -1
//             );
//             setData(sorted);
//             setOrder("ASC");
//         }
//     };

//     return (
//         <>
//             <table className="audit table">
//                 <thead className="table-th">
//                     <tr>
//                         <th onClick={() => handleSort("Name")}>Name</th>
//                     </tr>
//                 </thead>
//                 <tbody className="table-body">
//                     {data.map((x) => (
//                         <tr key={x.SR}>
//                             <td>{x.Name}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </>
//     );
// };

// export default DisplayData;




// import React, { useState, useEffect } from "react";

// import { Pagination, TableContainer, TableHead, TableRow, Paper, TableBody, Table, TableCell } from "@mui/material";

// const DisplayData = () => {
//     const record = [
//         {
//             SR: 1,
//             Name: 'lina',
//             Age: 25
//         },
//         {
//             SR: 4,
//             Name: 'pooja',
//             Age: 32
//         },
//         {
//             SR: 3,
//             Name: 'khushboo',
//             Age: 23
//         },
//         {
//             SR: 2,
//             Name: 'prakash',
//             Age: 42
//         },
//         {
//             SR: 9,
//             Name: 'Himanshu',
//             Age: 18
//         },

//         {
//             SR: 1,
//             Name: 'lina',
//             Age: 25
//         },
//         {
//             SR: 4,
//             Name: 'pooja',
//             Age: 32
//         },
//         {
//             SR: 3,
//             Name: 'khushboo',
//             Age: 23
//         },
//         {
//             SR: 2,
//             Name: 'prakash',
//             Age: 42
//         },
//         {
//             SR: 9,
//             Name: 'Himanshu',
//             Age: 18
//         },

//     ];




//     const itemsPerPage = 3;
//     const [completeData, setCompleteData] = useState(record);
//     const [data, setData] = useState([]);
//     const [order, setOrder] = useState("ASC");
//     const [currentPage, setCurrentPage] = useState(1);

//     useEffect(() => {
//         const startIndex = (currentPage - 1) * itemsPerPage;
//         const endIndex = startIndex + itemsPerPage;
//         const paginatedData = completeData.slice(startIndex, endIndex);
//         setData(paginatedData);
//     }, [completeData, currentPage, itemsPerPage]);
//     const handleSort = (item) => {
//         const sortedData = [...completeData].sort((a, b) =>
//             order === "ASC"
//                 ? a[item].toLowerCase() > b[item].toLowerCase()
//                     ? 1
//                     : -1
//                 : a[item].toLowerCase() < b[item].toLowerCase()
//                     ? 1
//                     : -1
//         );

//         setCompleteData(sortedData);
//         setOrder(order === "ASC" ? "DESC" : "ASC");
//         setCurrentPage(1);
//     };


//     const totalPages = Math.ceil(completeData.length / itemsPerPage);

//     const handleChangePage = (event, newPage) => {
//         setCurrentPage(newPage);
//     };

//     return (
//         <>
//             <TableContainer component={Paper}>
//                 <Table className="audit table" aria-label="simple table">
//                     <TableHead>
//                         <TableRow>
//                             <TableCell onClick={() => handleSort("Name")}>Name</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {data.map((x) => (
//                             <TableRow key={x.SR}>
//                                 <TableCell>{x.Name}</TableCell>
//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>
//             <Pagination
//                 count={totalPages}
//                 page={currentPage}
//                 onChange={handleChangePage}
//                 color="primary"
//             />
//         </>
//     );
// };

// export default DisplayData;
// import React, { useState } from 'react';

// const users = [
//   { id: 1, name: 'John', mobile_number: '123-456-7890' },
//   { id: 2, name: 'Amit', mobile_number: '987-654-3210' },
// ];

// const DisplayData = () => {
//   const [data, setData] = useState(users);

//   const HandleSort=()=>{
//     const item=[...data]
//     if (item.length>0){
//       let result=data.sort((a,b)=>a.name.localeCompare(b.name))
//       setData(result)
//     }
//   }

//   return (
//     <>

//      {data && data.length>0  && data!=undefined ? data.map((ele,index)=>{
//       return(
//         <p>{ele.name}</p>
//       )

//      }): "no data"
//     }
//      <button onClick={HandleSort}>sort</button>
//     </>
//   );
// };

// export default DisplayData;


// import { useState, useEffect } from "react";

// function DisplayData() {

//   const [data, setData] = useState([])

//   const HandleSort = () => {
//     const item = [...data]
//     if (item.length > 0) {
//       let result = data.sort((a, b) => a.name.localeCompare(b.name))
//       setData(result)
//     }
//   }


//   const fetchData = () => {

//     fetch("https://jsonplaceholder.typicode.com/todos")
//       .then(response => response.json())
//       .then(movieData => {
//         setData(movieData)
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error)
//       });

//   };

//   useEffect(() => {
//     fetchData();
//   }, []);
//   console.log(data, "dattat")

//   return (


//     <>

//       {data && data.length > 0 && data != undefined ? data.map((ele, index) => {
//         return (<p>{ele.name}</p>)

//       }) : "no data"
//       }
//       <button onClick={HandleSort}>sort</button>

//     </>
//   )
// }
// export default DisplayData;


import React, { useState, useEffect } from "react";

function DisplayData() {
  const [data, setData] = useState([]);

  const handleSort = () => {
    if (data.length > 0) {
      const result = [...data].sort((a, b) => a.title.localeCompare(b.title));
      setData(result);
    }
  };

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((todosData) => {
        setData(todosData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {data && data.length > 0 ? (
        data.map((todo, index) => (
          <p key={index}>{todo.title}</p>
        ))
      ) : (
        <p>No data</p>
      )}
      <button onClick={handleSort}>Sort</button>
    </>
  );
}

export default DisplayData;
