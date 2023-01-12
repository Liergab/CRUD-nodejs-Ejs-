const connection = require('../connection/dbconnection')

const detailsCrud = () =>{


    const createDetails = async (objDetails) => {
        const { age, name, gender} = objDetails

        try {
            const query =`INSERT INTO details VALUES (null,${age},'${name}','${gender}'); `
            await connection(query)

            return true
        } catch (error) {
            console.log('createDetails error: ', error )
            return false
            
        }

    }

    const retrieveDetails = async () => {

        try {
            const query =` SELECT * FROM details; `
           const results = await connection(query)

            return results
        } catch (error) {
            console.log('retrieveDetails error: ', error )
            return []
            
        }

        
    }
    
    const filterDetails = async () => {
        try {
            const query =` SELECT * FROM details WHERE name = 'Bryan' ; `
           const results = await connection(query)

            return results
        } catch (error) {
            console.log('retrieveDetails error: ', error )
            return []
            
        }

        
    }

    const updateDetails = async (objDetails) => {
        const{id, age,  name, gender} = objDetails

        try {
            const query =` UPDATE details SET  age=${age}, name='${name}', gender='${gender}' WHERE id = ${id}; `
            await connection(query)

            return true
        } catch (error) {
            console.log('updateDetails error: ', error )
            return false
            
        }

        
        
    }

    const deleteDetails = async (objDetails) => {
        const id =objDetails

        try {
            const query =` DELETE FROM details WHERE id = ${id} `
            await connection(query)

            return true
        } catch (error) {
            console.log('deleteDetails error: ', error )
            return false
            
        }
        
    }

    return {
        create: createDetails,
        retrieve: retrieveDetails,
        update: updateDetails,
        delete: deleteDetails,
        filter: filterDetails
    } 





}

module.exports = detailsCrud