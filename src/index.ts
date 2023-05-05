import { CanvasSpace, Line, Pt } from "pts";

export const space = new CanvasSpace("#main");
space.setup({ bgcolor: "#111", resize: true });
export const form = space.getForm();
export let canvasRadius: number;
export let canvasHalfMin: number;

space.add({
  animate: () => {
    canvasRadius = space.center.magnitude();
    canvasHalfMin = Math.min(space.center.x, space.center.y);
  },
  action: (type, px, py, evt) => {},
});

console.log(Line.fromAngle(new Pt(), 0.0, 10.0));
