module.exports = (sequelize, DataTypes) => {

    const Grade = sequelize.define("grade", {
        class_Id: {
            type : DataTypes.INTEGER
        },
        Class_name: {
            type: DataTypes.STRING
        },
        student_Id:{
            type:DataTypes.INTEGER
        }
    
    
    })

    return Grade

}