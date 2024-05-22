
const r = new rive.Rive({
    src: "./assets/240522.riv",
    canvas: document.getElementById("canvas"),
    autoplay: true,
    stateMachines: "State Machine 1",
    onLoad: () => {
      r.resizeDrawingSurfaceToCanvas();
      // Get the inputs via the name of the state machine
      const inputs = r.stateMachineInputs('State Machine 1');
      headReveal = inputs.find(i => i.name === 'HeadReveal');
    },
});

const setHeadReveal = (n) => {
    headReveal.value = n;
}