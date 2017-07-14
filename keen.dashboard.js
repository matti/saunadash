var client = new Keen({
  projectId: "596788dfc9e77c00015d95c6",
  readKey: "C42534A03EF6C4EFE49240D1DB4AFDA1852861B12AB95138CF393812A7ECB059FAB8A917AD89730E1B4E2CC4BB31F42C770780B2365D2FD13646ECE3669001E1C11F5FA13598860D08D79534281B3856273981D634603157FF078DCD10DD037B"
});

Keen.ready(function(){

  var saunatemp6h = new Keen.Query("average", {
    event_collection: "temps",
    interval: "minutely",
    target_property: "secondTemp",
    timeframe: "this_6_hours",
    timezone: "Asia/Istanbul"
  });

  client.draw(saunatemp6h, document.getElementById("chart-01"), {
    // Custom configuration here
  });

  var watertemp6h = new Keen.Query("average", {
    event_collection: "temps",
    interval: "minutely",
    target_property: "firstTemp",
    timeframe: "this_6_hours",
    timezone: "Asia/Istanbul"
  });

  client.draw(watertemp6h, document.getElementById("chart-02"), {
  });

  var airtemp6h = new Keen.Query("average", {
    event_collection: "temps",
    interval: "minutely",
    target_property: "beanTemp",
    timeframe: "this_6_hours",
    timezone: "Asia/Istanbul"
  });

  client.draw(airtemp6h, document.getElementById("chart-03"), {
  });

  var battery6h = new Keen.Query("average", {
    event_collection: "temps",
    interval: "minutely",
    target_property: "batteryLevel",
    timeframe: "this_6_hours",
    timezone: "Asia/Istanbul"
  });

  client.draw(battery6h, document.getElementById("chart-04"), {
  });

});
