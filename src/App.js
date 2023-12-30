import React,{useState} from "react";
import Form from "./components/Form";
import TableList from "./components/TableList";

function App() {
  const [table1obj ,setTable1obj] = useState([])
  const [table2obj ,setTable2obj] = useState([])
  const [table3obj ,setTable3obj] = useState([])
  const onSave =(obj)=>{
    // console.log(obj)
      if(obj.Table === '1'){
        setTable1obj(prev=>{
          return [...prev,obj];
        })
      }
      if(obj.Table === '2'){
        setTable2obj(prev=>{
          return [...prev,obj];
        })
      }
      if(obj.Table === '3'){
        setTable3obj(prev=>{
          return [...prev,obj];
        })
      }
  }
  const deleteT1Handler = (id)=>{
    localStorage.removeItem(JSON.stringify(id))
     setTable1obj(prev=>{
      let newa = prev.filter((x)=>x.Id!==id)
      return [...newa]
     })
  }
  const deleteT2Handler = (id)=>{
    localStorage.removeItem(JSON.stringify(id))
    setTable2obj(prev=>{
     let newa = prev.filter((x)=>x.Id!==id)
     return [...newa]
    })
 }
 const deleteT3Handler = (id)=>{
  localStorage.removeItem(JSON.stringify(id))
  setTable3obj(prev=>{
   let newa = prev.filter((x)=>x.Id!==id)
   return [...newa]
  })
}
  return (
      <React.Fragment>
          <Form onDetails={onSave}/>
          <h2>Orders</h2>
          <h4>Table1</h4>
          <TableList items={table1obj} onDelete={deleteT1Handler}/>
          <h4>Table2</h4>
          <TableList items={table2obj} onDelete={deleteT2Handler}/>
          <h4>Table3</h4>
          <TableList items={table3obj} onDelete={deleteT3Handler}/>
      </React.Fragment>
  );
}

export default App;
