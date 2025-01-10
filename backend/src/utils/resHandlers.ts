import { Response } from "express";

function sendSuccessResponse(res:Response, statusCode:number,msg:string,data:object){
    res.status(statusCode).json({
        "success":true,
        "msg":msg,
        data
    });
}

function sendIssueResponse(res:Response, statusCode:number,msg:string,){
    res.status(statusCode).json({
        "success":false,
        "msg":msg,
    });
}

function sendBadReqResponse(res:Response, msg:string,){
    res.status(400).json({
        "success":false,
        "msg":"Bad Request : "+msg,
    });
}

function sendCatchResponse(res:Response, msg:string,){
    res.status(500).json({
        "success":false,
        "msg":"Server Error : "+msg,
    });
}

function sendNotFoundResponse(res:Response, msg:string,){
    res.status(404).json({
        "success":false,
        "msg":"Not Found : "+msg,
    });
}

export {
    sendBadReqResponse,
    sendCatchResponse,
    sendIssueResponse,
    sendSuccessResponse,
    sendNotFoundResponse
}