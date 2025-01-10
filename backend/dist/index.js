import express from "express";
const app = express();
import envObj from "./Config/envObj.js";
app.get("/", (req, res) => {
    res.status(200).json("hello");
});
app.listen(4444, () => {
    console.log("Server Running on Port = " + envObj.port);
});
//# sourceMappingURL=index.js.map