
import { useContext, useState } from 'react';
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";
import { createUserWithEmailAndPassword, faceBookLogin, gitHubHandler, googleSignIn,googleSignOut, initializLoginFrameWork, signInWithEmailAndPassword } from './LoginManager';

initializLoginFrameWork()

/* if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}else{
  firebase.app();
} */

function Login() {

const [newUser, setNewUser] = useState(false)

  const [user,setUser] =useState({
    isSignIn :false,
    name:"",
    email:"",
    photo:"",
    password:"",
    error:"",
    success:false
  })

  const [userLoggedIn,setUserLoggedIn] = useContext(UserContext)
//for setting redirection after login
const history= useHistory()
const location =useLocation()
let { from } = location.state || { from: { pathname: "/" } };

const setGoogleSignIn=()=>{
   googleSignIn()
   .then(res =>{
     setUser(res)
     setUserLoggedIn(res)
     history.replace(from)
   })
}
const setGoogleSignOut=()=>{
    googleSignOut()
    .then(res =>{
      setUser(res)
      setUserLoggedIn(res)
    })
}
const setFaceBookLogin=()=> {
  faceBookLogin()
     .then(res =>{
      console.log(res)
      setUser(res)
      setUserLoggedIn(res)
      history.replace(from)
     })
}
const gitHubSignIn=() =>{
    gitHubHandler()
    .then(res =>{
     // console.log(res)
      setUser(res)
      setUserLoggedIn(res)
      history.replace(from)
     })

}
 



  const handleChange =(e)=>{
    let isFieldValid = true;
    if(e.target.name === 'email'){
         isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)
        //console.log(isEmailValid)
    }


    if(e.target.name==='password'){
      isFieldValid= e.target.value.length > 6;
       //console.log(isPassValid)
    }

    if(isFieldValid){
      const newUserInfo ={...user};
      newUserInfo[e.target.name] = e.target.value
      setUser(newUserInfo)
    }
  }

  /* --------- creating with email and password--------------- */
  const handleSubmit =(e)=>{
    if(newUser&& user.name && user.password){
     createUserWithEmailAndPassword(user.name,user.email,user.password)
     .then(res =>{
      setUser(res)
      setUserLoggedIn(res)
      history.replace(from)
    })
    }
    if(!newUser && user.email && user.password){
       signInWithEmailAndPassword(user.email,user.password)
       .then(res =>{
        setUser(res)
        setUserLoggedIn(res)
        history.replace(from)
      })

    }

         e.preventDefault()
  }

 
  return (
    <div style={{textAlign:'center'}}>
     <h1>welcome for login</h1>
     <hr/>
     {user.isSignIn?<button onClick={setGoogleSignOut}>SignOut from Google</button> :<button onClick={setGoogleSignIn}>Login with Google</button>}
      <button onClick={setFaceBookLogin} >Facebook Login</button> 
    <button onClick={gitHubSignIn}>Github signIn</button> 
     <button>Twitter signIn</button>

     {
       
       user.isSignIn && <div>
       <h3>name: {user.name}</h3>
           <h3>email: {user.email}</h3>
           <img style={{width:"200px",height:'200px'}} src={user.photo}></img>
           </div>
     }

     <hr></hr>
     <h1>login from form</h1>
     <form onSubmit={handleSubmit}>
       new user ? <input type="checkbox" onChange={()=>setNewUser(!newUser)}/><br></br>
      { newUser &&<input type="text" name="name" placeholder="your name" onBlur={handleChange} autoComplete='off' required></input>} <br></br>
       <input type="email" name="email" placeholder="email address" onBlur={handleChange} autoComplete='off' required></input><br></br>
       <input type="password" name="password" placeholder="email address" onBlur={handleChange} autoComplete='off' required></input><br></br>
       <input type='submit' value={newUser? 'signUp':'login' }name='submit' />
     </form>
     <p style={{color:'red'}}>{user.error}</p>
     {user.success && <p style={{color:'green'}}>user {newUser ? "created" :"logged in"} successfully</p>}

    {/*        <h3>name: {user.name}</h3>
           <h3>email: {user.email}</h3>
            */}

    </div>
  );
}

export default Login;

// import firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from './firebase.config'
// import { useContext, useState } from 'react';
// import { UserContext } from "../../App";
// import { useHistory, useLocation } from "react-router";



// if(!firebase.apps.length){
//     firebase.initializeApp(firebaseConfig);
// }else{
//   firebase.app();
// }

// function Login() {

// const [newUser, setNewUser] = useState(false)

// //for setting redirection after login
// const history= useHistory()
// const location =useLocation()
// let { from } = location.state || { from: { pathname: "/" } };


//   const [user,setUser] =useState({
//     isSignIn :false,
//     name:"",
//     email:"",
//     photo:"",
//     password:"",
//     error:"",
//     success:false
//   })

//   const [userLoggedIn,setUserLoggedIn] = useContext(UserContext)

//   const handleChange =(e)=>{
//     let isFieldValid = true;
//     if(e.target.name === 'email'){
//          isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)
//         //console.log(isEmailValid)
//     }
//     if(e.target.name==='password'){
//       isFieldValid= e.target.value.length > 6;
//        //console.log(isPassValid)
//     }

//     if(isFieldValid){
//       const newUserInfo ={...user};
//       newUserInfo[e.target.name] = e.target.value
//       setUser(newUserInfo)
//     }
//   }

//   /* --------- creating with email and password--------------- */
//   const handleSubmit =(e)=>{
//     if(newUser&& user.name && user.password){
//       firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
//       .then(res => {
//          const newUserInfo ={...user}
//          newUserInfo.error='' 
//           newUserInfo.success=true
//          setUser(newUserInfo)
//          upDateUserName(user.name)
//         })
//       .catch(error=> {
//         const newUserInfo ={...user};
//         newUserInfo.error =error.message
//         newUserInfo.success=false
//         setUser(newUserInfo)
   
//       });
//      // console.log('got it')
//     }

//     if(!newUser && user.email && user.password){
//       firebase.auth().signInWithEmailAndPassword(user.email, user.password)
//       .then(res => {
//         const newUserInfo ={...user}
//         newUserInfo.error='' 
//          newUserInfo.success=true
//         setUser(newUserInfo)
//         setUserLoggedIn(newUserInfo)
//         history.replace(from)
//         console.log('user name up', res.user)
//        })
//        .catch(error=> {
//           const newUserInfo ={...user};
//           newUserInfo.error =error.message
//           newUserInfo.success=false
//           setUser(newUserInfo)
      
//         });
//     }

//          e.preventDefault()
//   }

//   const upDateUserName=name=>{
//     const user = firebase.auth().currentUser;

//     user.updateProfile({
//       displayName: name,
//     }).then(function() {
//       console.log('name updated')
//     }).catch(function(error) {
//       console.log(error)
//     });
//   }

//   /* ------------------Facebook login------------------ */

//   const fbProvider = new firebase.auth.FacebookAuthProvider();
//   const faceBookLogin =()=>{
//     firebase.auth()
//     .signInWithPopup(fbProvider)
//     .then((res) => {
//       console.log(res.user)
//       const {displayName,email,photoURL}= res.user
//       const singnInUser={
//         isSignIn:true,
//         name:displayName,
//         email:email,
//         photo:photoURL
//       }
//      setUser(singnInUser)
//       console.log(displayName,email,photoURL)
//     })
//     .catch((error) => {
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       var email = error.email;
//       var credential = error.credential;
//     });
//   }


// /* ---------google singIn------------------ */
//   const googleProvider = new firebase.auth.GoogleAuthProvider();
//   const googleSignIn=()=>{
//     firebase.auth()
//       .signInWithPopup(googleProvider)
//       .then((res) => {
//         const {displayName,email,photoURL}= res.user
//         const singnInUser={
//           isSignIn:true,
//           name:displayName,
//           email:email,
//           photo:photoURL
//         }
//        setUser(singnInUser)
//         console.log(displayName,email,photoURL)

//   }).catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     var email = error.email;
//     var credential = error.credential;
      
//   });
//   }


//   const googleSignOut=()=>{
//     firebase.auth().signOut().then(res => {
//       const signOutUser={
//           isSignIn:false,
//           name:'',
//           email:'',
//           photo:''
//       }
//        setUser(signOutUser)
//     }) 
  
//   }

//   /* --------------------------git hub ------------------------------------- */


//   const GhProvider = new firebase.auth.GithubAuthProvider();
//   const gitHubHandler=()=>{
//     firebase
//     .auth()
//     .signInWithPopup(GhProvider)
//     .then((res) => {
//       const {displayName,email,photoURL}= res.user
//       const singnInUser={
//         isSignIn:true,
//         name:displayName,
//         email:email,
//         photo:photoURL
//       }
//      setUser(singnInUser)
//       console.log(displayName,email,photoURL)
//     }).catch((error) => {
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       var email = error.email;
//       var credential = error.credential;
//     });
//   }

//   return (
//     <div style={{textAlign:'center'}}>
//      <h1>welcome for login</h1>
//      <hr/>
//      {user.isSignIn?<button onClick={googleSignOut}>SignOut from Google</button> :<button onClick={googleSignIn}>Login with Google</button>}
//      <button onClick={faceBookLogin} >Facebook Login</button>
//      <button onClick={gitHubHandler}>Github signIn</button>
//      <button>Twitter signIn</button>
//      {
       
//        user.isSignIn && <div>
//        <h3>name: {user.name}</h3>
//            <h3>email: {user.email}</h3>
//            <img style={{width:"200px",height:'200px'}} src={user.photo}></img>
//            </div>
//      }
//      <hr></hr>
//      <h1>login from form</h1>
//      <form onSubmit={handleSubmit}>
//        new user ? <input type="checkbox" onChange={()=>setNewUser(!newUser)}/><br></br>
//       { newUser &&<input type="text" name="name" placeholder="your name" onBlur={handleChange} autoComplete='off' required></input>} <br></br>
//        <input type="email" name="email" placeholder="email address" onBlur={handleChange} autoComplete='off' required></input><br></br>
//        <input type="password" name="password" placeholder="email address" onBlur={handleChange} autoComplete='off' required></input><br></br>
//        <input type='submit' value={newUser? 'signUp':'login' }name='submit' />
//      </form>
//      <p style={{color:'red'}}>{user.error}</p>
//      {user.success && <p style={{color:'green'}}>user {newUser ? "created" :"logged in"} successfully</p>}

//     {/*        <h3>name: {user.name}</h3>
//            <h3>email: {user.email}</h3>
//             */}

//     </div>
//   );
// }

// export default Login;
