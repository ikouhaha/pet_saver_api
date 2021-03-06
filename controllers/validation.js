const {Validator,ValidationError} = require('jsonschema')
//const ValidationError  = require('sequelize/types')

const post= require('../schemas/post.schema.js')
const user = require('../schemas/user.schema.js')
const userProfile = require('../schemas/userProfile.schema.js')
const userGoogle = require('../schemas/userGoogle.schema.js')
const userPwd = require('../schemas/userPwd.schema.js')

const v = new Validator()



exports.validatepost = async(ctx,next) => {
    const validationOptions = {
        throwError:true,
        allowUnknownAttributes:false
    }
    const body = ctx.request.body
    try{
        v.validate(body,post,validationOptions)
        await next()
    }catch(error){
        if(error instanceof ValidationError){
            ctx.body = error
            ctx.status = 400
        }else{
            throw error
        }
    }
}

exports.validateUser = async(ctx,next) => {
    const validationOptions = {
        throwError:true,
        allowUnknownAttributes:false
    }
    const body = ctx.request.body
    try{
        v.validate(body,user,validationOptions)
        await next()
    }catch(error){
        if(error instanceof ValidationError){
            ctx.body = error
            ctx.status = 400
        }else{
            throw error
        }
    }
}

exports.validateUserProfile = async(ctx,next) => {
    const validationOptions = {
        throwError:true,
        allowUnknownAttributes:false
    }
    const body = ctx.request.body
    try{
        v.validate(body,userProfile,validationOptions)
        await next()
    }catch(error){
        if(error instanceof ValidationError){
            ctx.body = error
            ctx.status = 400
        }else{
            throw error
        }
    }
}

exports.validateUserGoogle = async(ctx,next) => {
    const validationOptions = {
        throwError:true,
        allowUnknownAttributes:false
    }
    const body = ctx.request.body
    try{
        v.validate(body,userGoogle,validationOptions)
        await next()
    }catch(error){
        if(error instanceof ValidationError){
            ctx.body = error
            ctx.status = 400
        }else{
            throw error
        }
    }
}

exports.validateUserPwd = async(ctx,next) => {
    const validationOptions = {
        throwError:true,
        allowUnknownAttributes:false
    }
    const body = ctx.request.body
    try{
        v.validate(body,userPwd,validationOptions)
        await next()
    }catch(error){
        if(error instanceof ValidationError){
            ctx.body = error
            ctx.status = 400
        }else{
            throw error
        }
    }
}

exports.validateCompany = async(ctx,next) => {
    const validationOptions = {
        throwError:true,
        allowUnknownAttributes:false
    }
    const body = ctx.request.body
    try{
        v.validate(body,company,validationOptions)
        await next()
    }catch(error){
        if(error instanceof ValidationError){
            ctx.body = error
            ctx.status = 400
        }else{
            throw error
        }
    }
}

exports.validateComment = async(ctx,next) => {
    const validationOptions = {
        throwError:true,
        allowUnknownAttributes:false
    }
    const body = ctx.request.body
    try{
        v.validate(body,comment,validationOptions)
        await next()
    }catch(error){
        if(error instanceof ValidationError){
            ctx.body = error
            ctx.status = 400
        }else{
            throw error
        }
    }
}


