require("dotenv").config()
const express = require("express")
const app = express()

// Handle CORS
const cors = require("cors")

// PORT
const PORT = process.env.PORT || 5000

// NEXMO
const Nexmo = require("nexmo")
// Make a instance of nexmo default settings
const nexmo = new Nexmo({
  apiKey: process.env.API_KEY,
  apiSecret: process.env.API_SECRET,
})

app.use(cors())
app.use(express.json())

/**
 * @desc    Send OTP
 * @method  POST
 * @access  Public
 */
app.post("/api/register", (req, res) => {
  if (!req.body.phone) {
    return res.json({ status: "ERROR", message: "Phone is required" })
  }

  nexmo.verify.request(
    {
      number: req.body.phone,
      brand: "Vonage",
      code_length: "4",
    },
    (_, result) => {
      if (result.status != 0) {
        res.json({ status: "ERROR", error: result })
      } else {
        res.json({ status: "OK", result })
      }
    }
  )
})

/**
 * @desc    Cancel The Request
 * @method  POST
 * @access  Public
 *
 * @body    {string} requestID
 */
app.post("/api/cancel", (req, res) => {
  if (!req.body.requestID) {
    return res.json({ status: "ERROR", message: "Request ID is required" })
  }

  nexmo.verify.control(
    {
      request_id: req.body.requestID,
      cmd: "cancel",
    },
    (err, result) => {
      if (err) {
        res.json({ status: "ERROR", error: err })
      } else {
        res.json({ status: "OK", result })
      }
    }
  )
})

/**
 * @desc    Verify the code
 * @method  POST
 * @access  Public
 * @body    requesID (string), code (string)
 */
app.post("/api/verify-code", (req, res) => {
  if (!req.body.requestID || !req.body.code) {
    return res.json({
      status: "ERROR",
      message: "Request ID & Code is required",
    })
  }

  nexmo.verify.check(
    {
      request_id: req.body.requestID,
      code: req.body.code,
    },
    (err, result) => {
      if (err) {
        res.json({ status: "ERROR", error: err })
      } else {
        res.json({ status: "OK", result })
      }
    }
  )
})

/**
 * @desc    Search Verification Request
 * @method  GET
 * @access  Public
 */
app.get("/api/verify/:request_id", (req, res) => {
  if (!req.params.request_id) {
    return res.json({
      status: "ERROR",
      message: "Request ID's required",
    })
  }

  nexmo.verify.search(req.params.request_id, (err, result) => {
    if (err) {
      res.json({ status: "ERROR", error: err })
    } else {
      res.json({ status: "OK", result })
    }
  })
})

app.listen(PORT, () => console.log(`Server started at ${PORT}...`))
