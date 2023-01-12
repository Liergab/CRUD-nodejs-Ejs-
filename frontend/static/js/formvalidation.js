 const createDetails = document.querySelector('#createDetails')
 const updateDetails = document.querySelector('#updateDetails')

 const cName = document.querySelector('#cName')
 const cAge = document.querySelector('#cAge')
 const cGender= document.querySelector('#cGender')
 const error = document.querySelector('#error')

 createDetails.addEventListener('submit', (e) =>{
    message =[]

    if (cName.value === '' || cName.value === null){
     message.push('name is required')
    }
    if (cAge.value === '' || cAge.value === null){
     message.push('Age is required')
    }
    if (cGender.value === '' || cGender.value === null){
     message.push('Gender is required')
    }
   
    if(message.length > 0){
     e.preventDefault()
     error.innerHTML = message.join(', ')

    }
 })