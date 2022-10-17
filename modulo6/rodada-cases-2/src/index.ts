import app from "./app"
import { compRouter } from "./router/compRouter"
import { resultRouter } from "./router/resultRouter"

app.use("/competitions", compRouter)
app.use("/results", resultRouter)