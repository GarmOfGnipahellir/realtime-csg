import { CanvasSpace, Line, Pt } from "pts";
import {} from "./model";
import { NDArray } from "vectorious";

export const space = new CanvasSpace("#main");
space.setup({ bgcolor: "#111", resize: true });
export const form = space.getForm();
export let canvasRadius: number;
export let canvasHalfMin: number;

space.add({
  animate: () => {
    canvasRadius = space.center.magnitude();
    canvasHalfMin = Math.min(space.center.x, space.center.y);

    let pt1 = space.center;
    let pt2 = pt1.$add(new Pt(100.0, -200.0));
    
    let d1 = pt2.$subtract(pt1);

    new NDArray([space.center.x, space.center.y])

    let pt3 = new Pt().$add(pt1);

    form.fillOnly("#fff").point(pt1);
    form.fillOnly("#fff").point(pt2);
    form.strokeOnly("#fff").line([pt1, pt2]);
    form.strokeOnly("#fff").line([pt1, pt3]);
  },
  action: (type, px, py, evt) => {},
});

space.bindMouse().play();
