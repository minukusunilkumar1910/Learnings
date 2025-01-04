//----------------------------------------------------------------------------Functions-------------------------------------------------------------------------


// a();
// f();


//------------------------------------------------------------1 Function Statement

  function a()
  {
   console.log("a called");
  }


//----------------------------------------------------------2 Function Expression

const f = function()
{
   console.log("f called");
}
// f();


//---------------------------------------------------------3 Anonymous Functions
//without any name 
// function ()
// {
//    console.log("object");
// }


//----------------------------------------------------4 Named Function Expressions

const fun =function xyz()
{
  console.log(xyz);   // u can acess xyz inside the function
}

// xyz();    // u can't acess it outside it is not in the call stack 
// fun();

//-------------------------------------------------5.Differ b/w  paras and args

const x =function (param1,param2)// parameters
{
  console.log(param1+param2);
}

// x(1,3)--arguments

//-------------------------------------------------6.First class Functions 

 function xy(para)
 {
    console.log(para);
 }

// 1 method
// xy(function ()
// {
//   console.log("inside");
// })
//  2 method
  xy(inside)
 function inside()
 {
  console.log("new inside");
 }
// U can Also Return the Functions 
// -----------------------------------------------------7.First class Functions/First class Citizens Are SAME 

// -----------------------------------------------------ARROW FUNCTIONS