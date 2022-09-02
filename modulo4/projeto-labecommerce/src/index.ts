import app from "./app"
import createUser from "./endpoints/createUser"
import getAllUsers from "./endpoints/getAllUsers"
import addProduct from "./endpoints/addProduct"
import getAllProducts from "./endpoints/getAllProducts"
import createPurchase from "./endpoints/createPurchase"

app.post("/users", createUser)
app.get("/users", getAllUsers)
app.post("/products", addProduct)
app.get("/products", getAllProducts)
app.post("/purchases", createPurchase)