import express from 'express'
import mongoose from 'mongoose'
import cards from './dbcards.js'
import cors from 'cors'
import users from './users.js'
import validateRegisterInput from "./validation/register.js"
import validateLoginInput from "./validation/login.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import passport from 'passport'
import './passport.js'
import bodyparser from 'body-parser'

const app = express();
const port = process.env.PORT || 8001;

app.use(
    bodyparser.urlencoded({
      extended: false
    })
  );
  app.use(bodyparser.json());

const connection_url = `mongodb+srv://admin:asusfx504gd@cluster0.ev6co.mongodb.net/tinderdb?retryWrites=true&w=majority`

mongoose.connect(connection_url,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    });

app.use(passport.initialize());
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => res.status(200).send("hello"))
app.get("/register", (req, res) => res.status(200).send("Register"))

app.post("/register", (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
    console.log(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    users.findOne({ username: req.body.username }).then(user => {
        if (user) {
            return res.status(400).json({ username: "username already exists" })
        } else {
            const newuser = new users({
                username: req.body.username,
                password: req.body.password
            })
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newuser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newuser.password = hash;
                    newuser.save().then(user => res.json(user))
                        .catch(err => console.log(err));
                });
            });
        }
    })
})

app.post("/login", (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const username = req.body.username;
    const password = req.body.password;

    users.findOne({ username }).then(user => {
        if (!user) {
            return res.status(400).json({ usernamenotfound: "username does not exists" })
        }
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                // User matched
                // Create JWT Payload
                const payload = {
                    id: user.id,
                    username: user.username
                };
                jwt.sign(
                    payload,
                    'secret',
                    {
                        expiresIn: 31556926 // 1 year in seconds
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        });
                    }
                );
            } else {
                return res
                    .status(400)
                    .json({ passwordincorrect: "Password incorrect" });
            }
        });
    })
})

app.post("/tinder/cards", (req, res) => {
    const dbcard = req.body;
    cards.create(dbcard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

app.get("/tinder/cards", (req, res) => {
    cards.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});