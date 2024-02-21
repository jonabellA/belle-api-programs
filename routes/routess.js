

const express = require('express');
const Course = require('../models/schemaa'); 

const router = express.Router();

//1requirement
router.get('/course/code/:prefix', async (req, res) => {
    try {
        const { prefix } = req.params;
        
        const regex = new RegExp(`^${prefix}`, 'i'); 

        const course = await Course.findOne({ code: { $regex: regex } })
            .select('description program tags -_id');
        
        if (!course) {
            return res.status(404).send({ message: "Course not found with the specified code prefix" });
        }
        
        res.json({
            Name: course.description,
            Specialization: course.program,
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

//2requirement
router.get('/backend', async (req, res) => {
    try {
        const backendCourses = await Course.find({ tags: "Backend" })
            .sort('description') // Sort alphabetically 
            .select('description'); 

       
        const coursesOutput = backendCourses.map(course => ({
            Name: `${course.description}`
        }));

        res.json(coursesOutput);
    } catch (error) {
        res.status(500).send(error);
    }
});

//3&4requirement
router.get('/all/bsis', async (req, res) => {
    try {
        
        const bsisCourses = await Course.find({ program: 'BSIS' })
            .sort({ year: 1, code: 1 })
            .select('year code description -_id');

        
        const formattedResponse = {
            program: 'BSIS',
            courses: bsisCourses.map(course => ({
               
                course: `${course.description} / ${course.year} / ${course.code}`,
                
            }))
        };

        res.json(formattedResponse);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/all/bsit', async (req, res) => {
    try {
      
        const bsitCourses = await Course.find({ program: 'BSIT' })
            .sort({ year: 1, code: 1 })
            .select('year code description -_id');

        
        const formattedResponse = {
            program: 'BSIT',
            courses: bsitCourses.map(course => ({
               
                course: `${course.description} / ${course.year} / ${course.code}`,
                
            }))
        };

        res.json(formattedResponse);
    } catch (error) {
        res.status(500).send(error);
    }
});


module.exports = router;
