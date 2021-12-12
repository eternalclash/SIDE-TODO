
import axios from "axios";
import { produce } from "immer";
import { createAction, handleActions } from "redux-actions";
const GET_MONDAY = "GET_MONDAY";
const GET_TUESDAY = "GET_TUESDAY";
const GET_WEDNESDAY = "GET_WEDNESDAY";
const GET_THURSDAY = "GET_THURSDAY";
const GET_FRIDAY = "GET_FRIDAY";
const GET_SATURDAY = "GET_SATURDAY";
const GET_SUNDAY = "GET_SUNDAY";
const GET_NOTES = "GET_NOTES";
const EDIT_MONDAYCHECK="EDIT_MONDAYCHECK"
const EDIT_TUESDAYCHECK="EDIT_TUESDAYCHECK"
const EDIT_WEDNESDAYCHECK="EDIT_WEDNESDAYCHECK"
const EDIT_THURSDAYCHECK="EDIT_THURSDAYCHECK"
const EDIT_FRIDAYCHECK="EDIT_FRIDAYCHECK"
const EDIT_SATURDAYCHECK="EDIT_SATURDAYCHECK"
const EDIT_SUNDAYCHECK="EDIT_SUNDAYCHECK"
const EDIT_NOTESCHECK="EDIT_NOTESCHECK"
const POST_MONDAY = "POST_MONDAY"
const POST_TUESDAY = "POST_TUESDAY"
const POST_WEDNESDAY = "POST_WEDNESDAY"
const POST_THURSDAY = "POST_THURSDAY"
const POST_FRIDAY = "POST_FRIDAY"
const POST_SATURDAY = "POST_SATURDAY"
const POST_SUNDAY = "POST_SUNDAY"
const POST_NOTES = "POST_NOTES"
const DELETE_MONDAY = "DELETE_MONDAY";
const DELETE_TUESDAY = "DELETE_TUESDAY";
const DELETE_WEDNESDAY = "DELETE_WEDNESDAY";
const DELETE_THURSDAY = "DELETE_THURSDAY";
const DELETE_FRIDAY = "DELETE_FRIDAY";
const DELETE_SATURDAY = "DELETE_SATURDAY";
const DELETE_SUNDAY = "DELETE_SUNDAY";
const DELETE_NOTES = "DELETE_NOTES";
const GET_MODAL = "GET_MODAL"
const getMonday = createAction(GET_MONDAY, (monday)=>({monday}))
const getTuesday = createAction(GET_TUESDAY, (tuesday)=>({tuesday}))
const getWednesday = createAction(GET_WEDNESDAY, (wednesday)=>({wednesday}))
const getThursday = createAction(GET_THURSDAY, (thursday)=>({thursday}))
const getFriday = createAction(GET_FRIDAY, (friday)=>({friday}))
const getSaturday = createAction(GET_SATURDAY, (saturday)=>({saturday}))
const getSunday = createAction(GET_SUNDAY, (sunday)=>({sunday}))
const getNotes = createAction(GET_NOTES, (notes)=>({notes}))
const editMondayCheck = createAction(EDIT_MONDAYCHECK,(monday,postId)=>({monday,postId}))
const editTuesdayCheck = createAction(EDIT_TUESDAYCHECK,(tuesday,postId)=>({tuesday,postId}))
const editWednesdayCheck = createAction(EDIT_WEDNESDAYCHECK,(wednesday,postId)=>({wednesday,postId}))
const editThursdayCheck = createAction(EDIT_THURSDAYCHECK,(thursday,postId)=>({thursday,postId}))
const editFridayCheck = createAction(EDIT_FRIDAYCHECK,(friday,postId)=>({friday,postId}))
const editSaturdayCheck = createAction(EDIT_SATURDAYCHECK,(saturday,postId)=>({saturday,postId}))
const editSundayCheck = createAction(EDIT_SUNDAYCHECK,(sunday,postId)=>({sunday,postId}))
const editNotesCheck = createAction(EDIT_NOTESCHECK,(notes,postId)=>({notes,postId}))
const postMonday = createAction(POST_MONDAY, (monday)=>({monday}))
const getModal = createAction(GET_MODAL,(modal)=>({modal}))
const deleteMonday = createAction(DELETE_MONDAY, (postId)=>({postId}))
const deleteTuesday = createAction(DELETE_TUESDAY, (postId)=>({postId}))
const deleteWednesday = createAction(DELETE_WEDNESDAY, (postId)=>({postId}))
const deleteThursday = createAction(DELETE_THURSDAY, (postId)=>({postId}))
const deleteFriday = createAction(DELETE_FRIDAY, (postId)=>({postId}))
const deleteSaturday = createAction(DELETE_SATURDAY, (postId)=>({postId}))
const deleteSunday = createAction(DELETE_SUNDAY, (postId)=>({postId}))
const deleteNotes = createAction(DELETE_NOTES, (postId)=>({postId}))
const initialState = {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
    notes: [],
     day: [],
     modal:"",
}


const postDayMD = (day,title) =>{
    return (function (dispatch,getState, {history})
    {
        axios({
            method:'POST',
            url:`http://localhost:4000/${day}`,
            data:{
                title,
                check:0,
            }
        })
        .then((res)=>{
            console.log(day,title)
            
          dispatch(getDayMD(day))
          getModal(false)
        })
        .catch((err)=>{

        })
    }
    )
}

const getDayMD = (day) => {
    return (function (dispatch, getState, {history})
    { console.log(day)
        axios({
            method:'GET',
            url: `http://localhost:4000/${day}`,
            data: {},
           
        })
        .then((res)=>{
            const dateList = res.data
            console.log(dateList)
            if(day=="Monday")
            {   
                dispatch(getMonday(dateList))
            }
            if(day=="Tuesday")
            {   
                dispatch(getTuesday(dateList))
            }
            if(day=="Wednesday")
            {   
                dispatch(getWednesday(dateList))
            }
            if(day=="Thursday")
            {   
                dispatch(getThursday(dateList))
            }
            if(day=="Friday")
            {   
                dispatch(getFriday(dateList))
            }
            if(day=="Saturday")
            {   
                dispatch(getSaturday(dateList))
            }
            if(day=="Sunday")
            {   
                dispatch(getSunday(dateList))
            }
            if(day=="Notes")
            {   
                dispatch(getNotes(dateList))
            }
           
        })
        .catch((err) => {
            console.log(err);
        })
    }
    )
}
const editDayCheckMD = (day,postId,check) => {
    return (function (dispatch, getState, {history})
    {
        axios({
            method:'PATCH',
            url: `http://localhost:4000/${day}/${postId}`,
            data: {
                check:check,
            },
           
        })
        .then((res)=>{
        if(day=="Monday")
        dispatch(editMondayCheck(check,postId))
        if(day=="Tuesday")
        dispatch(editTuesdayCheck(check,postId))
        if(day=="Wednesday")
        dispatch(editWednesdayCheck(check,postId))
        if(day=="Thursday")
        dispatch(editThursdayCheck(check,postId))
        if(day=="Friday")
        dispatch(editFridayCheck(check,postId))
        if(day=="Saturday")
        dispatch(editSaturdayCheck(check,postId))
        if(day=="Sunday")
        dispatch(editSundayCheck(check,postId))
        if(day=="Notes")
        dispatch(editNotesCheck(check,postId))
        })
        .catch((err) => {
            console.log(err);
        })
    }
    )
}
const deleteDayMD = (day,postId) => {
    return (function (dispatch, getState, {history})
    {
        axios({
            method:'DELETE',
            url: `http://localhost:4000/${day}/${postId}`,
            data: {
                
            },
           
        })
        .then((res)=>{
        if(day=="Monday")
        dispatch(deleteMonday(postId))
        if(day=="Tuesday")
        dispatch(deleteTuesday(postId))
        if(day=="Wednesday")
        dispatch(deleteWednesday(postId))
        if(day=="Thursday")
        dispatch(deleteThursday(postId))
        if(day=="Friday")
        dispatch(deleteFriday(postId))
        if(day=="Saturday")
        dispatch(deleteSaturday(postId))
        if(day=="Sunday")
        dispatch(deleteSunday(postId))
        if(day=="Notes")
        dispatch(deleteNotes(postId))
        })
        .catch((err) => {
            console.log(err);
        })
    }
    )
}

export default handleActions (
    {
        [GET_MONDAY] : (state,action) => 
            produce(state,(draft)=> {
                draft.monday =action.payload.monday;
            }),
        [EDIT_MONDAYCHECK] : (state,action) => 
            produce(state,(draft)=> {
                let postIdx = draft.monday.findIndex(
                    (list) => list.id == action.payload.postId
                  );
                  // console.log(commentIdx)
                  draft.monday[postIdx].check=action.payload.monday
         }),
         [POST_TUESDAY] : (state,action) =>
         produce(state,(draft)=> {
             draft.monday.push(action.payload.tuesday)
         }),
         [GET_TUESDAY] : (state,action) => 
            produce(state,(draft)=> {
                draft.tuesday =action.payload.tuesday;
            }),
        [EDIT_TUESDAYCHECK] : (state,action) => 
            produce(state,(draft)=> {
                let postIdx = draft.tuesday.findIndex(
                    (list) => list.id == action.payload.postId
                  );
                  // console.log(commentIdx)
                  draft.tuesday[postIdx].check=action.payload.tuesday
         }),
         [POST_WEDNESDAY] : (state,action) =>
         produce(state,(draft)=> {
             draft.monday.push(action.payload.wednesday)
         }),
         [GET_WEDNESDAY] : (state,action) => 
            produce(state,(draft)=> {
                draft.wednesday =action.payload.wednesday;
            }),
         [EDIT_WEDNESDAYCHECK] : (state,action) => 
            produce(state,(draft)=> {
                let postIdx = draft.wednesday.findIndex(
                    (list) => list.id == action.payload.postId
                  );
                  // console.log(commentIdx)
                  draft.wednesday[postIdx].check=action.payload.wednesday
         }),
         [POST_THURSDAY] : (state,action) =>
           produce(state,(draft)=> {
             draft.monday.push(action.payload.thursday)
           }),
          [GET_THURSDAY] : (state,action) => 
            produce(state,(draft)=> {
            draft.thursday =action.payload.thursday;
            }),
          [EDIT_THURSDAYCHECK] : (state,action) => 
            produce(state,(draft)=> {
              let postIdx = draft.thursday.findIndex(
           (list) => list.id == action.payload.postId
         );
         // console.log(commentIdx)
         draft.thursday[postIdx].check=action.payload.thursday
          }),
          [POST_FRIDAY] : (state,action) =>
produce(state,(draft)=> {
    draft.monday.push(action.payload.friday)
}),
[GET_FRIDAY] : (state,action) => 
   produce(state,(draft)=> {
       draft.friday =action.payload.friday;
   }),
[EDIT_FRIDAYCHECK] : (state,action) => 
   produce(state,(draft)=> {
       let postIdx = draft.friday.findIndex(
           (list) => list.id == action.payload.postId
         );
         // console.log(commentIdx)
         draft.friday[postIdx].check=action.payload.friday
}),
[POST_SATURDAY] : (state,action) =>
produce(state,(draft)=> {
    draft.monday.push(action.payload.saturday)
}),
[GET_SATURDAY] : (state,action) => 
   produce(state,(draft)=> {
       draft.saturday =action.payload.saturday;
   }),
[EDIT_SATURDAYCHECK] : (state,action) => 
   produce(state,(draft)=> {
       let postIdx = draft.saturday.findIndex(
           (list) => list.id == action.payload.postId
         );
         // console.log(commentIdx)
         draft.saturday[postIdx].check=action.payload.saturday
}),
[POST_SUNDAY] : (state,action) =>
produce(state,(draft)=> {
    draft.monday.push(action.payload.sunday)
}),
[GET_SUNDAY] : (state,action) => 
   produce(state,(draft)=> {
       draft.sunday =action.payload.sunday;
   }),
[EDIT_SUNDAYCHECK] : (state,action) => 
   produce(state,(draft)=> {
       let postIdx = draft.sunday.findIndex(
           (list) => list.id == action.payload.postId
         );
         // console.log(commentIdx)
         draft.sunday[postIdx].check=action.payload.sunday
}),
[POST_NOTES] : (state,action) =>
produce(state,(draft)=> {
    draft.notes.push(action.payload.notes)
}),
[GET_NOTES] : (state,action) => 
   produce(state,(draft)=> {
       draft.notes =action.payload.notes;
   }),
[EDIT_NOTESCHECK] : (state,action) => 
   produce(state,(draft)=> {
       let postIdx = draft.notes.findIndex(
           (list) => list.id == action.payload.postId
         );
         // console.log(commentIdx)
         draft.notes[postIdx].check=action.payload.notes
}),
[DELETE_MONDAY] : (state,action) => 
  produce(state,(draft)=> {
     draft.monday= draft.monday.filter((day,index)=>{
          return(
            day.id!==action.payload.postId
          )
     
      })
  }),
  [DELETE_TUESDAY] : (state,action) => 
  produce(state,(draft)=> {
     draft.tuesday= draft.tuesday.filter((day,index)=>{
          return(
            day.id!==action.payload.postId
          )
     
      })
  }),
  [DELETE_WEDNESDAY] : (state,action) => 
  produce(state,(draft)=> {
     draft.wednesday= draft.wednesday.filter((day,index)=>{
          return(
            day.id!==action.payload.postId
          )
     
      })
  }),
  [DELETE_THURSDAY] : (state,action) => 
  produce(state,(draft)=> {
     draft.thursday= draft.thursday.filter((day,index)=>{
          return(
            day.id!==action.payload.postId
          )
     
      })
  }),
  [DELETE_FRIDAY] : (state,action) => 
  produce(state,(draft)=> {
     draft.friday= draft.friday.filter((day,index)=>{
          return(
            day.id!==action.payload.postId
          )
     
      })
  }),
  [DELETE_SATURDAY] : (state,action) => 
  produce(state,(draft)=> {
     draft.saturday= draft.saturday.filter((day,index)=>{
          return(
            day.id!==action.payload.postId
          )
     
      })
  }),
  [DELETE_SUNDAY] : (state,action) => 
  produce(state,(draft)=> {
     draft.sunday= draft.sunday.filter((day,index)=>{
          return(
            day.id!==action.payload.postId
          )
     
      })
  }),
  [DELETE_NOTES] : (state,action) => 
  produce(state,(draft)=> {
     draft.notes= draft.notes.filter((day,index)=>{
          return(
            day.id!==action.payload.postId
          )
     
      })
  }),

        
        }, initialState);

export const actionCreators = {
    getDayMD,
    editDayCheckMD,
    postDayMD,
    deleteDayMD,
    getModal,
}