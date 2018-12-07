import Robot from "../../Libs/hjgrx/Robot/Robot.module.js";

describe("Robot Module", function() {
    let robot;

    before(() => (robot = new Robot("R2D2")));

    it("Should say his name", function() {
        chai.expect(robot.sayName());
    });

    it("Should walk", function() {
        chai.expect(robot.walk());
    });

    it("Should move", function() {
        chai.expect(robot.move());
    });
});
