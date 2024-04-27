const tickets = document.querySelectorAll(".ticket");
const dropzone = document.querySelectorAll(".drop_zone");

tickets.forEach((ticket) => {
  ticket.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text", event.target.id);
    event.dataTransfer.effectAllowed = "move";
  });
});

dropzone.forEach((zone) => {
  zone.addEventListener("drop", (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    if (zone === event.target) {
      event.target.appendChild(document.getElementById(data));
    }
  });
});

dropzone.forEach((zone) => {
  zone.addEventListener("dragover", (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  });
});
