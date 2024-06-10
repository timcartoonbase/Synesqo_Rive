
const r = new rive.Rive({
    src: "./assets/synesqo_v3.riv",
    canvas: document.getElementById("canvas"),
    autoplay: true,
    stateMachines: "State Machine 1",
    automaticallyHandleEvents: true, // Automatically handle RiveHTTPEvents
    onLoad: () => {
      // r.resizeDrawingSurfaceToCanvas();
      // Get the inputs via the name of the state machine
      const inputs = r.stateMachineInputs('State Machine 1');
      icon1 = inputs.find(i => i.name === 'icon1');
      column1 = inputs.find(i => i.name === 'column1');
      icon2 = inputs.find(i => i.name === 'icon2');
      column2 = inputs.find(i => i.name === 'column2');
      icon3 = inputs.find(i => i.name === 'icon3');
      column3 = inputs.find(i => i.name === 'column3');
      icon4 = inputs.find(i => i.name === 'icon4');
      column4 = inputs.find(i => i.name === 'column4');

      columnText1 = r.getTextRunValue("columnText1");
      r.setTextRunValue("columnText1", "0%");
      columnText2 = r.getTextRunValue("columnText2");
      r.setTextRunValue("columnText2", "0%");
      columnText3 = r.getTextRunValue("columnText3");
      r.setTextRunValue("columnText3", "0%");
      columnText4 = r.getTextRunValue("columnText4");
      r.setTextRunValue("columnText4", "0%");
    },
});

const col1 = new rive.Rive({
  src: "./assets/column_1.riv",
  canvas: document.getElementById("col1"),
  autoplay: true,
  stateMachines: "State Machine 1",
  automaticallyHandleEvents: true, 
  onLoad: () => {
    const inputs = col1.stateMachineInputs('State Machine 1');
    icon1Mobile = inputs.find(i => i.name === 'icon');
    column1Mobile = inputs.find(i => i.name === 'column');
    columnText1Mobile = col1.getTextRunValue("columnText");
    col1.setTextRunValue("columnText", "0%");
  },
});

const col2 = new rive.Rive({
  src: "./assets/column_2.riv",
  canvas: document.getElementById("col2"),
  autoplay: true,
  stateMachines: "State Machine 1",
  automaticallyHandleEvents: true, 
  onLoad: () => {
    const inputs = col2.stateMachineInputs('State Machine 1');
    icon2Mobile = inputs.find(i => i.name === 'icon');
    column2Mobile = inputs.find(i => i.name === 'column');

    columnText2Mobile = col2.getTextRunValue("columnText");
    col2.setTextRunValue("columnText", "0%");
  },
});

const col3 = new rive.Rive({
  src: "./assets/column_3.riv",
  canvas: document.getElementById("col3"),
  autoplay: true,
  stateMachines: "State Machine 1",
  automaticallyHandleEvents: true, 
  onLoad: () => {
    const inputs = col3.stateMachineInputs('State Machine 1');
    icon3Mobile = inputs.find(i => i.name === 'icon');
    column3Mobile = inputs.find(i => i.name === 'column');
    columnText3Mobile = col3.getTextRunValue("columnText");
    col3.setTextRunValue("columnText", "0%");
  },
});

const col4 = new rive.Rive({
  src: "./assets/column_4.riv",
  canvas: document.getElementById("col4"),
  autoplay: true,
  stateMachines: "State Machine 1",
  automaticallyHandleEvents: true, 
  onLoad: () => {
    const inputs = col4.stateMachineInputs('State Machine 1');
    icon4Mobile = inputs.find(i => i.name === 'icon');
    column4Mobile = inputs.find(i => i.name === 'column');
    columnText4Mobile = col4.getTextRunValue("columnText");
    col4.setTextRunValue("columnText", "0%");
  },
});

const setIcon1 = (n) => {
  icon1.value = n;
  icon1Mobile.value = n;
}
const setColumn1 = (n) => {
  column1.value = n;
  columnText1.value = r.setTextRunValue("columnText1", `${n}%`);
  column1Mobile.value = n;
  columnText1Mobile.value = col1.setTextRunValue("columnText", `${n}%`);
}

const setIcon2 = (n) => {
  icon2.value = n;
  icon2Mobile.value = n;
}
const setColumn2 = (n) => {
  column2.value = n;
  columnText2.value = r.setTextRunValue("columnText2", `${n}%`);
  column2Mobile.value = n;
  columnText2Mobile.value = col2.setTextRunValue("columnText", `${n}%`);
}

const setIcon3 = (n) => {
  icon3.value = n;
  icon3Mobile.value = n;
}
const setColumn3 = (n) => {
  column3.value = n;
  columnText3.value = r.setTextRunValue("columnText3", `${n}%`);
  column3Mobile.value = n;
  columnText3Mobile.value = col3.setTextRunValue("columnText", `${n}%`);
}

const setIcon4 = (n) => {
  icon4.value = n;
  icon4Mobile.value = n;
}
const setColumn4 = (n) => {
  column4.value = n;
  columnText4.value = r.setTextRunValue("columnText4", `${n}%`);
  column4Mobile.value = n;
  columnText4Mobile.value = col4.setTextRunValue("columnText", `${n}%`);
}

// Get Events
const eventFire = (riveEvent) => {
  const eventData = riveEvent.data;
	const eventName = eventData.name;

  switch (riveEvent.data.name) {
    case "icon1In":
      console.log("icon 1 in");
      break;
    case "icon1Out":
      console.log("icon 1 out");
      break;
    case "icon2In":
      console.log("icon 2 in");
      break;
    case "icon2Out":
      console.log("icon 2 out");
      break;
    case "icon3In":
      console.log("icon 3 in");
      break;
    case "icon3Out":
      console.log("icon 3 out");
      break;
    case "icon4In":
      console.log("icon 4 in");
      break;
    case "icon4Out":
      console.log("icon 4 out");
      break;
    case "col1In":
      console.log("col 1 in");
      break;
    case "col1Out":
      console.log("col 1 out");
      break;
    case "col2In":
      console.log("col 2 in");
      break;
    case "col2Out":
      console.log("col 2 out");
      break;
    case "col3In":
      console.log("col 3 in");
      break;
    case "col3Out":
      console.log("col 3 out");
      break;
    case "col4In":
      console.log("col 4 in");
      break;
    case "col4Out":
      console.log("col 4 out");
      break;

    default :
      console.log(eventName);
    } 
};

r.on(rive.EventType.RiveEvent, eventFire);

// Resize the drawing surface if the window resizes
window.addEventListener(
	"resize",
	() => { r.resizeDrawingSurfaceToCanvas(); }, false
);
