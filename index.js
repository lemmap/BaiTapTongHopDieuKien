// tat ca deu chua ktra input = rong~
function check2Number() {
    let numA= document.getElementById("btnA");
    let numB= document.getElementById("btnB");
    let check = null;
    if (!(isNaN(numA.value) || isNaN(numB.value))) {
        check = numA.value % numB.value;
    } else {
        alert("Nhap lai 2 so A B");
    }
    if(check==0){
        document.getElementById("result1").innerHTML="A chia het cho B"
    }else {
        document.getElementById("result1").innerHTML="A khong chia het cho B"
    }

}
function checkAge(){
    let age=document.getElementById("age");
    if (!(isNaN(age.value)) || age.value > 0) {
        if (age.value <= 14) {
            document.getElementById("result2").innerHTML="hoc sinh khong du tuoi vao lop 10"
        } else {
            document.getElementById("result2").innerHTML="hoc sinh du tuoi vao lop 10"
        }
    } else {
        document.getElementById("result2").innerHTML="nhap lai tuoi hoc sinh"
    }
}
function checkNum(){
    let num =document.getElementById("number3");
    if(!isNaN(num.value)){
        if(num.value>0){
            document.getElementById("result3").innerHTML="so vua nhap lon hon 0"
        }else {
            document.getElementById("result3").innerHTML="so vua nhap nho hon 0"
        }
    }else{
        document.getElementById("result3").innerHTML="nhap lai so can kiem tra"
    }
}
function checkBig() {
    let num1=document.getElementById("number41");
    let num2=document.getElementById("number42");
    let num3=document.getElementById("number43");
    if (isNaN(num1.value) || isNaN(num2.value) || isNaN(num3.value)) {
        document.getElementById("result4").innerHTML = "nhap lai 3 so can kiem tra"
    } else {
        if (num1.value > num2.value) {
            if (num2.value > num3.value) {
                document.getElementById("result4").innerHTML = "so lon nhat la " + num1.value
            } else{
                document.getElementById("result4").innerHTML = "so lon nhat la " + num3.value
            }
        } else if (num2.value > num3.value) {
            document.getElementById("result4").innerHTML = "so lon nhat la " + num2.value
        }
    }

}
function checkRank() {
    let mark1=document.getElementById("mark1");
    let mark2=document.getElementById("mark2");
    let mark3=document.getElementById("mark3");
    console.log(mark1.value,mark2.value,mark3.value);
    let rank = null;
    if (!(isNaN(mark1.value) || isNaN(mark2.value) || isNaN(mark3.value))) {
        if (!(mark1.value <= 10 || mark2.value <= 10 ||  mark3.value <= 10 )){
            console.log("check done");
            document.getElementById("result5").innerHTML = "nhap lai 3 so can kiem tra"
        }else if(mark1.value>0 || mark2.value>0 || mark2.value>0) {
            rank = (mark1.value * 0.2 + mark2.value * 0.2 + mark3.value * 0.6) / 10;
            console.log(rank);
            if (rank < 0.4) {
                document.getElementById("result5").innerHTML = "hoc sinh yeu"
            } else if (rank < 0.7) {
                document.getElementById("result5").innerHTML = "hoc sinh kha"
            } else if (rank < 0.9) {
                document.getElementById("result5").innerHTML = "hoc sinh gioi"
            } else {
                document.getElementById("result5").innerHTML = "hoc sinh xuat sac"
            }
        } else {
            document.getElementById("result5").innerHTML = "nhap lai 3 so can kiem tra"
        }
    } else {
        document.getElementById("result5").innerHTML = "nhap lai 3 so can kiem tra"
    }

}