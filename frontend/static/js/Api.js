window.addEventListener('DOMContentLoaded', () => {
    const createDetails = document.querySelector('#createDetails')
    const updateDetails = document.querySelector('#updateDetails')
    const deleteDetails = document.querySelector('#deleteDetails')

    console.log('hello')

    // deleteDetails.addEventListener('click', async () =>{
        
    //     const {data:deleteDetails} = await axios({
    //         method: 'delete',
    //         url:'/details',
    //          params:{
    //             id
    //          }
    //     })

    //     if(deleteDetails){
    //         alert(deleteDetails.message)
    //     }
    // })

    createDetails.addEventListener('click', async() => {
        const cName = document.querySelector('#cName')
        const cAge = document.querySelector('#cAge')
        const cGender= document.querySelector('#cGender')

        const {data:createDetails} = await axios({
            method: 'POST',
            url:'/details',
            data:{
                name: cName.value,
                age: cAge.value,
                gender: cGender.value
            }
        })

        if(createDetails){
            cName.value =""
            cAge.value=""
            cGender.value=""
            alert(createDetails.message)
            window.location.href = " http://localhost:3001/table";  
        }
    })

    updateDetails.addEventListener('click', async() => {
        const uId = document.querySelector('#uid')
        const uName = document.querySelector('#uName')
        const uAge = document.querySelector('#uAge')
        const uGender= document.querySelector('#uGender')

        const {data:updateDetails} = await axios({
            method: 'Put',
            url:'/details',
            data:{
                id: uId.value,
                name: uName.value,
                age: uAge.value,
                gender: uGender.value
            }
        })

        if(updateDetails){
            uId.value =""
            uName.value =""
            uAge.value=""
            uGender.value=""
            alert(updateDetails.message)
            window.location.href = " http://localhost:3001/table";
        }
    })

    // deleteDetails.addEventListener('click', () => {
        // const dId = document.querySelector('#Did')

        // const {data:deleteDetails} = await axios({
        //     method: 'delete',
        //     url:'/delete/:id/',
        //     // params:{
        //     //     id: uId
                
        //     // }
        // })

        // if(deleteDetails){
        //     dId.value =""
        //     alert(deleteDetails.message)
        // }
    //     alert('hello')
    // })


    




})