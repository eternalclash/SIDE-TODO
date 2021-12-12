import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import Check from '../check.png'
import { useDispatch,useSelector } from 'react-redux'
import { actionCreators as dateActions } from '../redux/module/date'
import Monday from './Monday'
import PostModal from './PostModal'
import Tuesday from './Tuesday'
import Wednesday from './Wednesday'
import Thursday from './Thursday'
import Friday from './Friday'
import Saturday from './Saturday'
import Sunday from './Sunday'
import Notes from './Notes'
const Main = () => {
    const dispatch =useDispatch();
    const [modal,setModal] = useState("");
    const getModal = useSelector((state)=>state.date.modal)
    const monday = useSelector((state)=>state.date.monday)
    const tuesday = useSelector((state)=>state.date.tuesday)
    const wednesday = useSelector((state)=>state.date.wednesday)
    const thursday = useSelector((state)=>state.date.thursday)
    const friday = useSelector((state)=>state.date.friday)
    const saturday = useSelector((state)=>state.date.saturday)
    const sunday = useSelector((state)=>state.date.sunday)
    const notes = useSelector((state)=>state.date.notes)
    console.log(monday)
    useEffect(()=>{
     dispatch(dateActions.getDayMD("Monday"))
     dispatch(dateActions.getDayMD("Tuesday"))
     dispatch(dateActions.getDayMD("Wednesday"))
     dispatch(dateActions.getDayMD("Thursday"))
     dispatch(dateActions.getDayMD("Friday"))
     dispatch(dateActions.getDayMD("Saturday"))
     dispatch(dateActions.getDayMD("Sunday"))
     dispatch(dateActions.getDayMD("Notes"))
    },[monday.length,tuesday.length,wednesday.length,thursday.length,friday.length,saturday.length,sunday.length,notes.length])
    return (
       
      <Wrap>
           {
            modal? <PostModal setModal={setModal}/> : ""
        }
      <Header>
      <Line/> Weekly Schedule <Line/>
      </Header>
      
          <TextArea>
              <TextField>
                <Date>
                  Monday
                </Date>
                <DateLine/>
               <Monday monday={monday}/>
              </TextField>
              <TextField>
                <Date>
                TuesDay
                </Date>
                <DateLine/>
                <Tuesday tuesday={tuesday}/>
              </TextField>
              <TextField>
                <Date>
                  Wednesday
                </Date>
                <DateLine/>
               <Wednesday wednesday={wednesday}/>
              </TextField>
              <TextField>
                <Date>
                Thursday
                </Date>
                <DateLine/>
               <Thursday thursday ={thursday} />
              </TextField>
              <TextField>
                <Date>
                 Friday
                </Date>
                <DateLine/>
              <Friday friday={friday}/>
              </TextField>
              <TextField>
                <Date>
                  Saturday
                </Date>
                <DateLine/>
              <Saturday saturday = {saturday}/>
              </TextField>
              <TextField>
                <Date>
                  Sunday
                </Date>
                <DateLine/>
              <Sunday sunday = {sunday} />
              </TextField>
              <TextField2>
              <Date>
                  Notes
                </Date>
                <DateLine/>
               <Notes notes={notes}/>
              </TextField2>
          </TextArea>

     <AddButton onClick={()=>setModal(true)}>+</AddButton>
      </Wrap>
    )
}
const AddButton = styled.div
`
cursor:pointer;
position:absolute;
bottom:10px;
right:10px;
border-radius:50%;
width:50px;
height:50px;
font-size:40px;
background: #F6A89E;
display:flex;
justify-content:center;
align-items:center;

`

const Wrap = styled.div
`
z-index:99;

background: #F4D799;

width:100%;
height:100vh;

`
const Header = styled.div
`
display:flex;
justify-content:center;
align-items:center;


width:100%;
height:80px;

font-size:30px;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);


`
const Box = styled.div
`
src: Check;
width:20px;
height:20px;
margin-right:10px;
`
const Line = styled.div
`
content: "";
flex-grow: 2;
margin: 0px 16px;
background: black;
height:3px;
font-size:0px;
line-height:0px;
`
const DateLine = styled.div
`
content: "";
flex-grow: 2;
background: black;
height:3px;
font-size:0px;
line-height:0px;
`
const TextArea = styled.div
`
margin: 0 auto;

display: flex;
width: 100%;
height: 60%;

display:flex;

flex-wrap:wrap;
`
const TextField = styled.div
`

margin: 0 auto;
margin-top:20px;
width: 23%;
background: #F9F3E5;
border: 4px solid #33322E;
box-sizing: border-box;

box-shadow: 12px 12px 0px #33322E;
border-radius: 24px;
height: 60%;
`
const TextField2 = styled.div
`

margin: 0 auto;
margin-top:20px;
width: 23%;
background: #B0E0E6;
border: 4px solid #33322E;
box-sizing: border-box;

box-shadow: 12px 12px 0px #33322E;
border-radius: 24px;
height: 60%;
`
const Date = styled.div
`
display:flex;
justify-content:flex-start;
margin-top:10px;
padding-left:20px;
font-size: 30px;
line-height: 120%;
`

const CheckList = styled.div
`
display:flex;
width:100%;
height:70%;

flex-direction:column;
`

const CheckBox = styled.div
`
display:flex;
margin-left:20px;
margin-top:15px;
width:100%;

height:20px;
`


export default Main