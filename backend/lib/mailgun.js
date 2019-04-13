const fetch = require("isomorphic-unfetch");
const { API, KEY, DOMAIN, STORAGE } = require("../config");

const AUTH = `api:${KEY}`;
const DOMAINS = "/domains";
const EVENTS = `/${DOMAIN}/events`;
const MESSAGES = `${DOMAINS}/${DOMAIN}/messages`;
const VERSION = "/v3";

const endpoint = domain => `https://${AUTH}@${domain}${VERSION}`;

const byRecipient = inbox => ({ recipient }) => recipient === inbox;

const toKeyFields = ({
  timestamp,
  storage: { key: id },
  message: {
    headers: { from, subject }
  }
}) => ({ id, from, subject, timestamp });

const toMessage = ({
  from,
  subject,
  Date: date,
  "body-html": html,
  "body-plain": plain
}) => ({
  from,
  subject,
  date,
  html,
  plain
});

const getEventsByInbox = inbox => ({ items = [] }) =>
  items.filter(byRecipient(inbox)).map(toKeyFields);

const message = key =>
  fetch(`${endpoint(STORAGE)}${MESSAGES}/${key}`)
    .then(r => r.json())
    .then(toMessage)
    .catch();

const messages = inbox =>
  fetch(`${endpoint(API)}${EVENTS}`)
    .then(r => r.json())
    .then(getEventsByInbox(`${inbox}@${DOMAIN}`))
    .catch();

module.exports = { message, messages };
