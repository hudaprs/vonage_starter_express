/**
 * @desc   This is just a mock of SUCCESS response from VONAGE response API
 * @note    I'm using this for reference to mocking in the Front-End / Mobile
 */

const register = {
  request_id: "#",
  status: "0",
}

const cancel = {
  status: "0",
  command: "cancel",
}

const verifyCode = {
  request_id: "#",
  status: "0",
  event_id: "#",
  price: "0.05000000",
  currency: "EUR",
  estimated_price_messages_sent: "0.09500000",
}

const verifyUser = {
  request_id: "#",
  account_id: "#",
  number: "#",
  sender_id: "verify",
  date_submitted: "#",
  date_finalized: "#",
  checks: [
    {
      date_received: "#",
      code: "#",
      status: "VALID",
      ip_address: "",
    },
  ],
  first_event_date: "#",
  last_event_date: "#",
  price: "0.05000000",
  currency: "EUR",
  status: "SUCCESS",
  estimated_price_messages_sent: "0.09500000",
  events: [
    {
      id: "#",
      type: "sms",
    },
  ],
}
