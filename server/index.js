const express = require("express");
const app = express();
const routes = require("./routes/userRouter");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use("/user", routes);


const CONNECTION_URL = `mongodb+srv://${ process.env.Name }:${ process.env.Password }@cluster0.nllnw.mongodb.net/${ process.env.Where }?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;

mongoose
    .connect(
        CONNECTION_URL,
        {
            useUnifiedTopology: true,
            useCreateIndex: true,
            useNewUrlParser: true,
        },
        console.log("conneceted to DB!")
    )
    .then(() => app.listen(PORT, () => console.log(`connected `)))
    .catch((err) => console.log(`${err} error`));
