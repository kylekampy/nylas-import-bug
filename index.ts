import Event from "nylas/lib/models/event.js";
// // The non-import way. Which still throws the same error
// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);
// const Event = require("nylas/lib/models/event");

// // The "default" way, which still results in the same odd behavior. Should be functionally identical to the initial import.
// import { default as Event } from "nylas/lib/models/event.js";

import NylasConnection from "nylas/lib/nylas-connection.js";

console.log("Event = ", Event);
// Logs out
/**
Event =  {
  ICSMethod: {
    Request: 'request',
    Publish: 'publish',
    Reply: 'reply',
    Add: 'add',
    Cancel: 'cancel',
    Refresh: 'refresh'
  },
  default: [Function: Event] {
    collectionName: 'events',
    attributes: {
      id: [AttributeString],
      object: [AttributeString],
      accountId: [AttributeString],
      calendarId: [AttributeString],
      iCalUID: [AttributeString],
      messageId: [AttributeString],
      eventCollectionId: [AttributeString],
      title: [AttributeString],
      description: [AttributeString],
      owner: [AttributeString],
      participants: [AttributeCollection],
      readOnly: [AttributeBoolean],
      location: [AttributeString],
      when: [AttributeObject],
      busy: [AttributeBoolean],
      status: [AttributeString],
      recurrence: [AttributeObject],
      masterEventId: [AttributeString],
      originalStartTime: [AttributeDateTime],
      capacity: [AttributeNumber],
      conferencing: [AttributeObject],
      notifications: [AttributeCollection],
      roundRobinOrder: [AttributeStringList],
      metadata: [AttributeObject],
      jobStatusId: [AttributeString]
    }
  }
}
 */

const event = new Event({} as NylasConnection, { // <- Throws "Event is not a constructor"
  calendarId: "abc-123",
  when: {
    startTime: new Date().getMilliseconds(),
    endTime: new Date().getMilliseconds(),
  },
});

// Using new Event.default(..., ...) actually _does_ work, though the typing is confused then and requires casting to/from `any`

console.log(event); // Never hits
