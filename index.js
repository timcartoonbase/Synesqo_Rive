
const r = new rive.Rive({
    src: "./assets/synesqo_240603.riv",
    canvas: document.getElementById("canvas"),
    autoplay: true,
    stateMachines: "State Machine 1",
    onLoad: () => {
      r.resizeDrawingSurfaceToCanvas();
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
      columnText1 = r.getTextRunValue("columnText2");
      r.setTextRunValue("columnText2", "0%");
      columnText1 = r.getTextRunValue("columnText3");
      r.setTextRunValue("columnText3", "0%");
      columnText1 = r.getTextRunValue("columnText4");
      r.setTextRunValue("columnText4", "0%");
    },
});

const setIcon1 = (n) => {
  icon1.value = n;
}
const setColumn1 = (n) => {
    column1.value = n;
    columnText1.value = r.setTextRunValue("columnText1", `${n}%`);
}

const setIcon2 = (n) => {
  icon2.value = n;
}
const setColumn2 = (n) => {
    column2.value = n;
    columnText1.value = r.setTextRunValue("columnText2", `${n}%`);
}

const setIcon3 = (n) => {
  icon3.value = n;
}
const setColumn3 = (n) => {
    column3.value = n;
    columnText1.value = r.setTextRunValue("columnText3", `${n}%`);
}

const setIcon4 = (n) => {
  icon4.value = n;
}
const setColumn4 = (n) => {
    column4.value = n;
    columnText1.value = r.setTextRunValue("columnText4", `${n}%`);
}