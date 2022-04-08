import React,{useState} from 'react'
import Container from './Container';
import './form.css'

export const Form = () => {

const [empInfo,setInfo] = useState({
  name:"",
  dep:"",
  rating:""
});
const [record,setRecord] = useState([]);
const [toggle,setToggle] = useState(true);

const getDetails = (e) =>{
    e.preventDefault();
    const newInfo = {...empInfo,id:new Date().getTime().toString()}
    console.log(newInfo)
    setRecord([...record,newInfo])
    record.push(newInfo)
    console.log(record)
    setInfo({name:"",dep:"",rating:""})
    setToggle(false)
}

const goBack = () =>{
 setToggle(true);
}

  return (
    <div>
      
      <div id="form1"> 
      { toggle &&
        <><h1>Employee Feedback Form</h1><br /><form>
            <label htmlFor="name">Name &nbsp;</label>
            <input type="text" autoComplete='off' className='text-field' id="name" value={empInfo.name} onChange={e => setInfo({ ...empInfo, name: e.target.value })}
              name="NAME" /><br /><br />
            <label htmlFor="dep">Department &nbsp;</label>
            <input type="text" autoComplete='off' className='text-field' id="dep" value={empInfo.dep} onChange={e => setInfo({ ...empInfo, dep: e.target.value })} name="DEP" /><br /><br />
            <label htmlFor="rating">Rating &nbsp;</label>
            <input type="number" autoComplete='off' className='text-field' id="rating" value={empInfo.rating} onChange={e => setInfo({ ...empInfo, rating: e.target.value })} name="RATING" /><br /><br />
          </form><button className='btn btn-success' onClick={getDetails}>Submit</button></>
        }
        </div>
        
        <br/>   <br/>   <br/>
        { !toggle &&
        <div>
           <Container Record={record}/>
           <br/>
           <button className='btn btn-danger' onClick={goBack}>Go Back</button>
        </div>
          
        }

    </div>
  )
}
