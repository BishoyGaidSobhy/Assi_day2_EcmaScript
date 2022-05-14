///////1///dynamic object 

// let obj = {
//     userName: "bishoy",
//     address: "cairo",
//     age: 22,
// }
// let handler = {
//     set (obj,prop,value){
//         if(!isNaN(value)){
//             throw('please put name string only');
//         }
//         let max = 7 ;
//         if(value<max){
//             throw('please name must be no more 7 ');
//         }
//         obj[prop]=value;
//     }
// }


// if(prop=== "adrress"){
//     if(!lisNaN(value)){
//         throw('address only string value');
//     }
//     obj[prop]=value;

// }

// if(prop=== "age"){
//     if(!isFinite(value)){
//         throw('age not int');
//     }
//     if(value > 25 && value > 60){
//         throw('the age invalid');
//     }
    
//     obj[prop]=value;
// };








// ////2
// class shape
// {
//     static count =0;
//     constructor(x,y)
//     {
//         shape.stfun();
//         this.x=x;
//         this.y=y;
//     }
//     static stfun(){
//         this.count++;
//     }
//     dispaly()
//     {
//         console.log(this.area,this.parameter)
//     }
// }

// class rectangle extends shape
// {
//     constructor(long,widith)
//     {
//         super(x,y,long,widith)
//         this.long=long;
//         this.widith=widith;
//     }
//     calcEaria(long,widith){
//         return long*this.widith;
//     }
//     calcPrameter(long,widith){
//         return long+widith*2
//     }
// }

// class square extends shape
// {
//     constructor(area,parameter,long,widith)
//     {
//         super(area,parameter,long,widith)
//         this.long=long;
//         this.widith=widith;
//     }
//     calcEaria(long,widith){
//         return this.long*this.widith;
//     }
//     calcPrameter(long){
//         return 2*this.long
//     }
// }

// class circle extends shape
// {
//     constructor(x,y,w)
//     {
//         super(x,y,w)
//         this.w=w;
//     }
//     calcEaria(r){
//         return 2*3.14*w;
//     }
// }
// let shape1=new shape(10,20);
// console.log(shape1);

// let rectangle1=new rectangle();
// console.log(rectangle1.calcEaria(5,6));






// ///3//fibonacci generator
//1
// function* fib(i){
//     let n1 = 0 , n2 = 1 , next
//     for(let j = 1 ; j<=i ; j++)
//     {
//         next = n1 + n2
//         n1 =n2
//         n2 = next
//         yield next
//         i++
//     }
// }
// let f = fib(x)
// for(let val of f)
// {
//     console.log(val)
// }


// //2

// function* fib(oo7){
//     var l=0;
//     var m= 1;
//     var h;
//     while(true){
//         h=l+m;
//         l=m;
//         m=l;
//         yield l;
//         if(l==oo7){
//             console.log(oo7)
//             return;
//         }
//     }
// }

// fib =oo7(7);
// for(let i = 0;){
//     console.log(i+fib.next().value);
// }


//   ///4
// let arr=[10,20,30,40,50];

//  for(let val of arr)
//  {
//    console.log(val)
//  }
//  let it=arr[Symbol.iterator]()
//  let obj={
//      user:"Bishoy",
//      age:22
//  }
//  for(let val of obj)
//  {
//      console.log(val)
//  }

// let obj={
//   user:"bishoy",
//   age:22,
//   address:"caior",
//   jop:"eng",
//   phone:"01215168565"
// }
// for(let val of obj)
// {
//   console.log(val)
// }








