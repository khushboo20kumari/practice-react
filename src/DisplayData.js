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




import { useState } from "react";

const DisplayData = () => {

    const record = [
        {
            SR: 1,
            Name: 'lina',
            Age: 25
        },
        {
            SR: 4,
            Name: 'pooja',
            Age: 32
        },
        {
            SR: 3,
            Name: 'khushboo',
            Age: 23
        },
        {
            SR: 2,
            Name: 'prakash',
            Age: 42
        },
        {
            SR: 9,
            Name: 'Himanshu',
            Age: 18
        },
    ];

    const [data, setData] = useState(record);
    const [order, setOrder] = useState("ASC");

    const handleSort = (item) => {
        if (order === "ASC") {
            const sorted = [...data].sort((a, b) =>
                a[item].toLowerCase() > b[item].toLowerCase() ? 1 : -1
            );
            setData(sorted);
            setOrder("DSC");
        }
        if (order === "DSC") {
            const sorted = [...data].sort((a, b) =>
                a[item].toLowerCase() < b[item].toLowerCase() ? 1 : -1
            );
            setData(sorted);
            setOrder("ASC");
        }
    };

    return (
        <>
            <table className="audit table">
                <thead className="table-th">
                    <tr>
                        <th onClick={() => handleSort("Name")}>Name</th>
                    </tr>
                </thead>
                <tbody className="table-body">
                    {data.map((x) => (
                        <tr key={x.SR}>
                            <td>{x.Name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default DisplayData;
