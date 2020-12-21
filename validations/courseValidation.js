const Joi=require("joi")
const {slotNumberNotValid}=require('../constants/constants')
const validateCourse=(req,res,next)=>{
    const courseSchema=Joi.object({
        name:Joi.string().required(),
        slotsPerWeek:Joi.number().required(),
        departmentId:Joi.string().length(24).required(),
    })
    if(req.body.slotsPerWeek<=0)return res.status(400).json({
        code: slotNumberNotValid,
        message: "invalid slotsPerWeek",
      })
    const checkSchema=courseSchema.validate(req.body)
    if(checkSchema.error) return res.status(400).json({
        code: checkSchema,
        message: checkSchema.error.details[0],
      })
      next()
}
const validateCourseU=(req,res,next)=>{
    const courseSchema=Joi.object({
        courseId:Joi.string().length(24).required(),
        name:Joi.string(),
        slotsPerWeek:Joi.number(),
        departmentIdRemoved:Joi.string().length(24),
        departmentIdAdded:Joi.string().length(24),

    })
    if(req.body.slotsPerWeek<=0)return res.status(400).json({
        code: slotNumberNotValid,
        message: "invalid slotsPerWeek",
      })
    const checkSchema=courseSchema.validate(req.body)
    if(checkSchema.error) return res.status(400).json({
        code: checkSchema,
        message: checkSchema.error.details[0],
      })
      next()
}
const validateCourseInstructor=(req,res,next)=>{
    const courseSchema=Joi.object({
        courseId:Joi.string().length(24).required(),
        instructorId:Joi.string().length(24).required(),
    })
    const checkSchema=courseSchema.validate(req.body)
    if(checkSchema.error) return res.status(400).json({
        code: checkSchema,
        message: checkSchema.error.details[0],
      })
      next()
}
const validateCourseInstructorU=(req,res,next)=>{
    const courseSchema=Joi.object({
        courseId:Joi.string().length(24).required(),
        instructorIdAdded:Joi.string().length(24).required(),
        instructorIdDeleted:Joi.string().length(24).required(),

    })
    const checkSchema=courseSchema.validate(req.body)
    if(checkSchema.error) return res.status(400).json({
        code: checkSchema,
        message: checkSchema.error.details[0],
      })
      next()
}
const validateMemberPerCourse=(req,res,next)=>{
    const courseSchema=Joi.object({
        courseId:Joi.string().length(24).required(),
    })
    const checkSchema=courseSchema.validate(req.body)
    if(checkSchema.error) return res.status(400).json({
        code: checkSchema,
        message: checkSchema.error.details[0],
      })
      next()
}
module.exports={validateMemberPerCourse,validateCourse,validateCourseU,validateCourseInstructor,validateCourseInstructorU}