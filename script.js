

//Task 1 // arrow functiondan isdifade ederek ele bir function itifade edinki parametr olaraq array ve silinecek datani
// gonderdiyinizde o function hemen datani silsin ve consolede silindiyi barede melumat cixsin eger data yoxdursa
// oda ekranda cap olunsunki  data movcud deyil. meselen deleteFunc(arrayy,"Ali")
///////////////////////////////////////////////////////////////////////////////////////////////////



// const array = ["Eli", "Veli", "Sabir", "Mirze", "Nubar", "Aygul", "Mezahir"];

// let userData = 0;

// const deleteFunc = (item, delUser) => {
//     for (let index in item){
//         if(item[index] == delUser){
//             console.log(item.splice(index, 1));
//             userData = 1;
//             break;
//         }       
//     }

//     if(userData == 0){
//         alert("data movcud deyil");
//     }

//     console.log(item);
// }

// deleteFunc(array," ");







//Task2 //  bunun eynisini elave etmek ucunde isdifade edin yani arrow functiondan isdifade ederek array ve yeni deyeri
// parametr olaraq vererek arraya elave olunsun ve  elave olunanda logda elave oldugu barede melumat cixsin
// arraya data elave edende eyni elementin tekrar elave olundugunda logda bu datanin artiq var oldugunu  bildirsin
// meselen addedFunc(arrayy,10)
///////////////////////////////////////////////////////////////////////////////////////////////////




 const array = ["Eli", "Veli", "Sabir", "Mirze", "Nubar", "Aygul", "Mezahir"];

 let userName = 0;


 const userAdd = (item, addData) =>{
    if(addData == " " || addData == "null"){
     console.log("Data bosdur");                  
    } 
     else{
        for(let index in item){
            if (item[index] == addData) {
                userName = 1;           
             }                
        
        } 

         if(userName == 0){
            
            array.push(addData)
            console.log(`${addData} ugurla elave olundu`);
                    
                    
        } 
        else{
            console.log(`${addData} artiq movcuddur`);
        }
                       
        
    
    }
    console.log(item);
}

userAdd(array,"Sara");










