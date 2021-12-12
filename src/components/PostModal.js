import React, { useState } from "react";
import styled from "styled-components";
import Submit from "../submit.png"
import Cancel from "../cancel.png"
import { actionCreators as dateActions } from '../redux/module/date'
import { useDispatch } from "react-redux";

const PostModal = (props) => {
  const dispatch = useDispatch();
  const [date,setDate] = useState();
  const [title,setTitle] = useState();
  const submitDate = () => {
    props.setModal(false)
    dispatch(dateActions.postDayMD(date,title))
}
  const  titleHandler = (e) => {
    setTitle(e.target.value);
  }

  const checkHandler = (e) => {

    if (e.target.value == "Monday") {
      setDate("Monday")
    }
    if (e.target.value == "Tuesday") {
      setDate("Tuesday")
    }
    if (e.target.value == "Wednesday") {
      setDate("Wednesday")
    }
    if (e.target.value == "Thursday") {
      setDate("Thursday")
    }
    if (e.target.value == "Friday") {
      setDate("Friday")
    }
    if (e.target.value == "Saturday") {
      setDate("Saturday")
    }
    if (e.target.value == "Sunday") {
      setDate("Sunday")
    }   if (e.target.value == "Notes") {
      setDate("Notes")
    }
    console.log(e.target.value)
  };
  console.log(date)
  return (
   <div>
   
    <Component onClick={props.close} />
      <ModalComponent>
  
    
        <ModalHeader> SCHEDULE
        <DateLine/>
        </ModalHeader>
      
        <ModalInput>
        <DayArea>
       
            <Options>
              <MapDrop onChange={checkHandler} >
                <option value="">SELECT DAY</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
                <option value="Notes">Notes</option>
              </MapDrop>
            </Options>
        </DayArea>
        <TextArea>
            TODO <input onChange={titleHandler} style={{height:"100px", fontSize:"20px"}}/>
        </TextArea>
        </ModalInput>
        <ModalButtonContainer>
          <div onClick={submitDate} style={{cursor:"pointer"}}>
          <img src={Submit} width="40"/>
          </div>
          <div style={{cursor:"pointer"}}onClick={()=>props.setModal(false)}>
          <img src={Cancel} width="40"/>
          </div>

        </ModalButtonContainer>
      </ModalComponent>
      </div>
  );
};
const Component = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.4;
  height: 100vh;
  width: 100%;
  background-color: black;
  z-index: 10;
`;
const DayArea = styled.div
`
display:flex;
justify-content:center;
align-items:center;
width:100%;
font-size:25px;
height:20%
`
const TextArea =styled.div
`
display:flex;
flex-direction:column;
width:100%;
font-size:35px;
justify-content:flex-start;

`
const DateLine = styled.div
`
margin-top:5px;
content: "";
flex-grow: 2;
background: black;
height:3px;
font-size:0px;
line-height:0px;
`
const ModalComponent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 35%;
  height: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: #F4D799;
  border: 4px solid #33322E;
  box-sizing: border-box;
  box-shadow: 12px 12px 0px #33322E;
  border-radius: 24px;
`;
const ModalHeader = styled.div`
  margin-top: 10px;
  font-weight: 600;
  font-size: 35px;
  width:100%;
`;
const ModalInput = styled.div`
  box-sizing: border-box;
  width: 100%;
  height:100%;
 
  justify-content:center;
  display:flex;

  flex-wrap:wrap;
`;
const ModalButtonContainer = styled.div`
  box-sizing: border-box;
  width: 50%;
  margin-bottom: 30px;
  display:flex;
  justify-content:space-between;
`;
const MapDrop = styled.select`
  width: 100%;
  height: 48px;
  padding-left: 10px;
  border: 1px solid lightGray;
  background-color: transparent;
  -webkit-appearance: none;
  background-color: white;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
const Options = styled.div`
  width: 100%;
  text-align: center;
  border: none;
`;


export default PostModal;