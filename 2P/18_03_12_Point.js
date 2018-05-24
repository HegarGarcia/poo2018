class point {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    getDistance(p2) {
        if (!(p2 instanceof point || (p2.x && p2.y))) throw 'Not a point'; 

        let xdiff = p2.x - this.x,
            ydiff = p2.y - this.y;
        
        return Math.sqrt(Math.pow(xdiff, 2) + Math.pow(ydiff, 2));
    }
}


let p1 = new point(3, 4);
let p2 = new point(1, 1);

console.log(p1.getDistance({x: 1, y:1 }));