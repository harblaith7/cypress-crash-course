const express = require("express")
const cors = require("cors")

const app = express();

app.use(express.json())
app.use(cors())

app.post("/", (req, res) => {

    const { title, accomplishment } = req.body;

    if(title.includes("giraffe") || accomplishment.includes("giraffe")){
        return res.status(406).json({
            msg: "Your content is not appropriate"
        })
    }

    return res.json({
        msg: "Accomplisment sent"
    })

});

app.get("/rewards", (req, res) => {
    res.json([{
        id: 1,
        reward: "500 points for drinking 8 cups of water for 7 straight days",
        month: "January"
    },
    {
        id: 2,
        reward: "850 points for fasting for 5 days straight",
        month: "January"
    },
    {
        id: 3,
        reward: "250 points for exercising for 3 straight days",
        month: "January"
    },
    {
        id: 4,
        reward: "5000 points for getting a new job",
        month: "Feburary"
    },
    {
        id: 5,
        reward: "100 points for waking up early",
        month: "Feburary"
    },
    {
        id: 6,
        reward: "1250 points for making a new project",
        month: "March"
    },
    {
        id: 7,
        reward: "500 points for practicing basketball",
        month: "March"
    },
    {
        id: 8,
        reward: "5 points for staring into a wall for 30 seconds",
        month: "March"
    },
    {
        id: 9,
        reward: "1000 points for taking a cold shower for 10 straight days",
        month: "March"
    }])
})

app.listen(4000, () => {
    console.log("Now Listening on Port 4000")
})




