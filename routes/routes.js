const express = require('express');
const pinfo = require('../model/personalInfo');
const jinfo = require('../model/jobexp')
const recom = require('../model/recommendations')

const router = express.Router()
//Post Method
router.post('/post', async (req, res) => {
    const data = new pinfo({
        Name: req.body.Name,
        Email: req.body.Email,
        Contact_No:req.body.Contact_No,
        About:req.body.About
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Post jinfo Method
router.post('/postjinfo', async (req, res) => {
    const data = new jinfo({
        Company_name: req.body.Company_name,
        Job_title: req.body.Job_title,
        Job_duration:req.body.Job_duration,
        Projects_done:req.body.Projects_done
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})


//Post jinfo Method
router.post('/postrecom', async (req, res) => {
    const data = new recom({
        Name: req.body.Name,
        Company: req.body.Company,
        Job_Title:req.body.Job_Title,
        Referral_Date:req.body.Referral_Date
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get all Method
router.get('/getAll', async (req, res) => {
    try{
        
        const data = await recom.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/getOne/:id', (req, res) => {
    res.send('Get by ID API')
})

//Update by ID Method
router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
})

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})

module.exports = router;