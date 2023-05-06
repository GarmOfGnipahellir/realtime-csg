import { Vec, ArraySized } from "./types";

// line equation:
// ax+by-d=0
// y=(-ax+d)/b
// x=(-by+d)/a

// plane equation:
// ax+by+cz-d=0
// dot(n,p)-d=0

export class Face<D extends number> {
  constructor(public points: ArraySized<Vec<D>, D>) {}

  getNormal(): Vec<D> {
    return this.points[1];
  }

  getOrigin(): Vec<D> {
    return this.points[0];
  }
}

export class Brush<D extends number> {
  constructor(public faces: Face<D>[]) {}
}

// 2d
// ax+by-c=0
// dx+ey-f=0
//
// y=(c-ax)/b
// y=(f-dx)/e
//
// (c-ax)/b=(f-dx)/e
// c/b-ax/b=f/e-dx/e
// c-ax=fb/e-dbx/e
// ce-aex=fb-dbx
// ce-aex-fb=-dbx
// ce-fb=aex-dbx
// ce-fb=x(ae-db)
// x=(ce-fb)/(ae-db)
//
// y=(c-a((ce-fb)/(ae-db)))/b
