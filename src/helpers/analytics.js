function sendEvent(eventCategory, eventAction, eventLabel, additionalFields) {
  if (window.ga) {
    window.ga("send", "event", {
      eventCategory,
      eventAction,
      eventLabel,
      ...additionalFields,
    });
  }
}

export default sendEvent;
