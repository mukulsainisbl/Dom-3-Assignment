 let form =document.querySelector('form')
 let task =document.getElementById('task')
 let priority= document.getElementById('priority')
 let tbody = document.querySelector('tbody')
 let alldata=[];
 form.addEventListener('submit',function(e)
 { 
    e.preventDefault();
    let data ={}
    data.input1=task.value
    data.input2=priority.value
    alldata.push(data)
    tbody.innerHTML=null

// console.log(alldata)
alldata.map((ele)=>
{
   let row = document.createElement('tr');
   let td1 = document.createElement('td')
   let td2 = document.createElement('td')
   td1.innerText=ele.input1
   td2.innerText=ele.input2
   row.append(td1,td2)
   tbody.append(row)

})



 })
