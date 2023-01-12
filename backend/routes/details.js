const express = require('express');
const router = express.Router();
const detailsCrud = require('../services/DetailsCrud')

const {create, 
      retrieve,
      update,
      delete:deleteDetails,
      filter:filterDetails} = detailsCrud()

      // Display the data
      router.get('/table', async (req, res, next) => {
        try {
            const detailedList = await retrieve ();
            res.render('table.ejs', {
            details : detailedList 
            })
            
        } catch (error) {
            console.log('REtrieve Route error: ', error)
            res.status(500).json({status:" retrieve error"})
        }
    })

    router.get('/filter', async (req, res, next) => {
        try {
            const detailedfilter = await filterDetails ();
            res.render('filter.ejs', {
            details : detailedfilter
            })
            
        } catch (error) {
            console.log('REtrieve Route error: ', error)
            res.status(500).json({status:" retrieve error"})
        }
    })
    

router.get('/crud', async (req, res, next) => {
    try {
        const detailedList = await retrieve ();
        res.render('index.ejs', {
        details : detailedList 
        })
        
    } catch (error) {
        console.log('REtrieve Route error: ', error)
        res.status(500).json({status:" retrieve error"})
    }

})

router.post('/details', async (req, res, next) => {
    const { age, name, gender} = req.body

    try {
        const isCreated = await create({age, name, gender})
            if(isCreated){
                res.status(200).json({message:"Successfully Created", data:isCreated})
            }else{
                res.status(500).json({message:"Not Created"})
            }
        
    } catch (error) {
        console.log('POST/create: ', error)
        res.status(500).json({status:" Create error"})
    }

    
    
})

router.put('/details',async (req, res, next) => {

    const {id, age, name , gender} = req.body

    try {
        const isUpdated = await update({id, age, name, gender})
            if(isUpdated){
                res.status(200).json({message:"Successfully Updated", data:isUpdated})
            }else{
                res.status(500).json({message:"Not Updated"})
            }
        
    } catch (error) {
        console.log('PUT/update: ', error)
        res.status(500).json({status:" Update error"})
    }
    
})

router.get('/delete/:id', async(req, res, next) => {
    const id = req.params.id

    try {
        const isDeleted = await deleteDetails(id)
            if(isDeleted){
                // res.status(200).send('Delete successfully');
                res.redirect('back')
            }else{
                res.status(500).json({message:"Not Delete"})
            }
        
    } catch (error) {
        console.log('DELETE/delete: ', error)
        res.status(500).json({status:" Delete error"})
    }
    
})


module.exports = router