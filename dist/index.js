import Event from "nylas/lib/models/event.js";
// // The non-import way. Which still throws the same error
// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);
// const Event = require("nylas/lib/models/event");
const event = new Event({}, {
    calendarId: "abc-123",
    when: {
        startTime: new Date().getMilliseconds(),
        endTime: new Date().getMilliseconds(),
    },
});
console.log(event);
//# sourceMappingURL=index.js.map