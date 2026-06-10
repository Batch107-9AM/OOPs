let text1 = "JavaScript";
let text2 = "JavaScript";
let text3 = "JavaScript";
let text4 = "India is my country";
let mycar : string = "My Car regNo : 67889, and Engine No : &&%%^&5222;";
let A : string[] = text4.split(' ');


console.log("Number of chars : " +text1.length);  //1
console.log("Upper --> " +text1.toUpperCase())   //2
console.log("Lower --> " +text1.toLowerCase())   //3
console.log("Index --> " +text1.indexOf("a"));   //4
console.log("Last Index --> " +text1.lastIndexOf("a"));  //5
console.log("Includes --> " +text1.includes("Sc")); //6
console.log("Starts --> " +text1.startsWith("Sc")); //7
console.log("Ends --> " +text1.startsWith("ipt"));  //8
console.log("Slice --> " +text1.slice(3, 7));  //9
console.log("Substring --> " +text1.substring(3, 7));  //10
console.log("Subst --> " +text1.substr(2, 7));  //11
console.log("Charat --> " +text1.charAt(7));   //12
console.log("Replace --> " +text2.replace("Script" , "Program")); //13
console.log("Remove space start and end : " +text3.trim()); 14
console.log("To Know number of words : " +A.length);
let removeAlpha : string = mycar.replace(/[a-zAZ]/g, ""); //remove alphabets
console.log(removeAlpha);
let removeNums : string = mycar.replace(/[0-9]/g,""); //remove numbers
console.log(removeNums);
let haveSpec : string = mycar.replace(/[0-9a-zAZ]/g, ""); //only specical
console.log(haveSpec);
let removeSpec : string = mycar.replace(/[^0-9a-zAZ]/g, ""); //remove special
console.log(removeSpec);

