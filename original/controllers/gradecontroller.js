const db = require('../models')

// model
const Grade = db.grades

// functions

//1. Add Review

const addGrade = async (req, res) => {

    const id = req.params.id

    let data = {
        student_Id: id,
        class_Id: req.body.class_Id,
        class_name:req.body.class_name,
        
    }
    const grade = await Grade.create(data)
    res.status(200).send(grade)


}

// 2. Get All Reviews

const getAllGrades = async (req, res) => {

    const grades = await Grade.findAll({})
    res.status(200).send(grades)

}


module.exports = {
    addGrade,
    getAllGrades,
}