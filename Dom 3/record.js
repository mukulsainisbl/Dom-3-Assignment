// fill in javascript code here
let form = document.querySelector('form')
let name = document.getElementById('name')
let empid= document.getElementById('employeeID')
let dep = document.getElementById('department')
let exp = document.getElementById('exp')
let email = document.getElementById('email')
let mobile = document.getElementById('mbl')
let tbody=document.querySelector('tbody')
alldata=[];


form.addEventListener('submit',function(e){
    e.preventDefault();
    let data = {}
    data.name=name.value
    data.employeid=empid.value
    data.department=dep.value
    data.experiene=exp.value
    data.email=email.value
    data.mobile=mobile.value
    alldata.push(data)
    tbody.innerText=null


    alldata.map((ele)=>{
     let row =document.createElement('tr')
     let td1 =document.createElement('td')
     let td2 =document.createElement('td')
     let td3 =document.createElement('td')
     let td4 =document.createElement('td')
     let td5 =document.createElement('td')
     let td6 =document.createElement('td')
  
  td1.innerText=ele.name
  td2.innerText=ele.employeid
  td3.innerText=ele.department
  td4.innerText=ele.experiene
  td5.innerText=ele.email
  td6.innerText=ele.mobile
  row.append(td1,td2,td3,td4,td5,td6)
  tbody.append(row)

    })


})