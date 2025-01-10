function sendSuccessResponse(res, statusCode, msg, data) {
    res.status(statusCode).json({
        "success": true,
        "msg": msg,
        data
    });
}
function sendIssueResponse(res, statusCode, msg) {
    res.status(statusCode).json({
        "success": false,
        "msg": msg,
    });
}
function sendBadReqResponse(res, msg) {
    res.status(400).json({
        "success": false,
        "msg": "Bad Request : " + msg,
    });
}
function sendCatchResponse(res, msg) {
    res.status(500).json({
        "success": false,
        "msg": "Server Error : " + msg,
    });
}
function sendNotFoundResponse(res, msg) {
    res.status(404).json({
        "success": false,
        "msg": "Not Found : " + msg,
    });
}
export { sendBadReqResponse, sendCatchResponse, sendIssueResponse, sendSuccessResponse, sendNotFoundResponse };
//# sourceMappingURL=resHandlers.js.map