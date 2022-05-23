import express from "express";
import { menuItems } from "./constants";

const Router = express.Router();

Router.get("/api", (req, res) => {
    res.json({
        error: "404",
        message: "Item not found"
    })
});

Router.get("/api/list", (req, res) => {
    res.json({
        menuItems
    })
});

Router.get("/api/:item/:topping", (req, res) => {
    
})

Router.get("/api/:item", (req, res) => {
    let item = req.params.item;

    let index = 0;
    res.send("testing")
    for(let i = 0; i < menuItems.length; i++) {
        if (item.toLowerCase() == menuItems[i]) {
            item = menuItems[i];
            index = i;
            break;
        }
    }

    if (index > 6 && index < 17) {
        console.log("Chicken Item")
    } else if(index > 16 && index < 20) {
        console.log("Salad")
    }
})

export default Router;