
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
    },
});

const setIcon1 = (n) => {
  icon1.value = n;
}
const setColumn1 = (n) => {
    column1.value = n;
}