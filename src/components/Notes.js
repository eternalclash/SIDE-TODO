import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import Check from '../check.png'
import UnCheck from '../uncheck.png'
import { useDispatch,useSelector } from 'react-redux'
import { actionCreators as dateActions } from '../redux/module/date'
import { AiFillDelete } from "react-icons/ai";
const Notes = (props) => {
    const dispatch = useDispatch();
    const Notes =props.notes
 
    const [checked,setChecked] = useState("")

    console.log(Notes)
    return (
     
             <CheckList>
                   {
                       Notes.map((list,index)=>{
                           return(
                        <CheckBox onClick={()=>dispatch(dateActions.editDayCheckMD("Notes",list.id,!list.check))}>
                        <Box>
                        {list.check?
                            <img src={Check} width="20px" margin="20px" alt=""/>
                            :
                            <img src={UnCheck} width="20px" margin="20px" alt=""/>
                        }
                        </Box>
                   
                        {list.title}
                        <div onClick={()=>{dispatch(dateActions.deleteDayMD("Notes",list.id))}}>
                        <AiFillDelete/>
                             </div>
                    </CheckBox>
                       )
                      
                       })
                   } 
                  
                
             
                    
                </CheckList>
        
    )
}

export default Notes

const Box = styled.div
`
src: Check;
width:20px;
height:20px;
margin-right:10px;
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
cursor:pointer;
height:20px;
`
