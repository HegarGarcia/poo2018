export default class Matrix {
    constructor(rows = 1, cols = 1) {
        if (typeof rows !== "number" && typeof cols !== "number")
            throw new Error("Error en los argumentos");
        this.rows = rows;
        this.cols = cols;
        this.matrix = Array.from({ length: rows }).fill(
            Array.from({ length: cols }).fill(null)
        );
    }

    setNewValues(m) {
        if (!(m instanceof Array)) throw new Error("No es matriz");
        const len = m[0].length;
        const valid = m.every(
            vec => vec instanceof Array && vec.length === len
        );
        if (!valid) throw new Error("Matriz no válida");

        this.rows = m.length;
        this.cols = len;
        this.matrix = m;
        return this;
    }

    hasValidValues() {
        this.matrix.every(vec => vec.every(val => !isNaN(val)));
    }

    fillZeros() {
        this.fillWith(0);
    }

    fillOnes() {
        this.fillWith(1);
    }

    fillRnd(max = 10) {
        this.matrix = this.matrix.map(arr =>
            arr.map(val => Math.random() * max)
        );
    }

    fillRange(max = 10) {
        this.matrix = this.matrix.map(arr =>
            arr.map(() => Math.floor(Math.random() * max))
        );
    }

    fillWith(n = 0) {
        this.matrix = this.matrix.map(arr => arr.fill(n));
    }

    getRow(r) {
        return this.matrix[r];
    }

    getCol(c) {
        return this.matrix.map(arr => arr[c]);
    }

    suma() {
        return this.matrix.reduce((prev, arr) => {
            return prev + arr.reduce((prev, val) => prev + val, 0);
        }, 0);
    }

    sumM(m) {
        if (!(m instanceof Matriz)) throw new Error("Argumento no es Matriz");
        else if (
            !this.isValidForOperation("suma", m) ||
            this.hasValidValues(this) ||
            this.hasValidValues(m)
        )
            throw new Error("Matriz no compatible");

        let matrix = this.matrix.map((arr, y) =>
            arr.map((e, x) => e + m.matrix[y][x])
        );
        return new Matriz().setNewValues(matrix);
    }

    sumE(e) {
        if (isNaN(e)) throw new Error("Valor no escalar");
        let matrix = this.matrix.map(row => row.map(val => val + e));
        return new Matriz().setNewValues(matrix);
    }

    subsM(m) {
        if (!(m instanceof Matriz)) throw new Error("Argumento no es Matriz");
        else if (
            !this.isValidForOperation("resta", m) ||
            this.hasValidValues(this) ||
            this.hasValidValues(m)
        )
            throw new Error("Matriz no compatible");

        let matrix = this.matrix.map((arr, y) =>
            arr.map((e, x) => e - m.matrix[y][x])
        );
        return new Matriz().setNewValues(matrix);
    }

    subsE(e) {
        if (isNaN(e)) throw new Error("Valor no escalar");
        let matrix = this.matrix.map(row => row.map(val => val - e));
        return new Matriz().setNewValues(matrix);
    }

    multM(m) {
        if (!(m instanceof Matriz)) throw new Error("Argumento no es Matriz");
        else if (
            !this.isValidForOperation("mult", m) ||
            this.hasValidValues(this) ||
            this.hasValidValues(m)
        )
            throw new Error("Matriz no compatible");

        let matrix = this.matrix.map((row, y) => {
            let newRow = [];
            for (let x = 0; x < m.rows; x++) {
                let col = m.getCol(x);
                let r = row.reduce((acc, curr, i) => {
                    acc += curr * col[i];
                    return acc;
                }, 0);
                newRow.push(r);
            }
            return newRow;
        });

        return new Matriz().setNewValues(matrix);
    }

    multE(e) {
        if (isNaN(e)) throw new Error("Valor no escalar");
        let matrix = this.matrix.map(row => row.map(val => val * e));
        return new Matriz().setNewValues(matrix);
    }

    promedio() {
        let len = this.matrix.reduce((prev, arr) => prev + arr.length, 0);
        return this.suma() / len;
    }

    max() {
        return this.matrix.reduce((prev, arr) => {
            console.log(arr);
            let max = Math.max(...arr);
            return max > prev ? max : prev;
        }, 0);
    }

    min() {
        return this.matrix.reduce((prev, arr) => {
            console.log(arr);
            let max = Math.min(...arr);
            return max < prev ? max : prev;
        }, 0);
    }

    transpose() {
        let base = Array.from({ length: this.cols }).map(() => Array.from(1));

        let matrix = this.matrix.reduce((m, row) => {
            row.forEach((val, i) => m[i].push(val));
            return m;
        }, base);

        return new Matriz().setNewValues(matrix);
    }

    static matrizIdentidad(n = 2) {
        let x = 0;
        let matrix = Array.from({ length: n }).fill(
            Array.from({ length: n }).fill(null)
        );
        matrix = matrix.map((row, i) => {
            row = row.map((val, j) => {
                return j === x ? 1 : 0;
            });
            x++;
            return row;
        });
        return new Matriz().setNewValues(matrix);
    }

    isIdentidad() {
        let x = 0;
        return this.matrix.every(row => {
            let r = row[x] === 1;
            x++;
            return r;
        });
    }

    isCuadrada() {
        return this.rows === this.cols;
    }

    isSimetrica() {
        if (!this.isCuadrada()) {
            return false;
        }

        let trans = this.transpose();
        return this.matrix.every((row, y) =>
            row.every((val, x) => val === trans.matrix[y][x])
        );
    }

    isValidForOperation(operation, matrix) {
        let result = false;
        switch (operation) {
            case "suma":
            case "resta":
                result = matrix.rows === this.rows && matrix.cols === this.cols;
                break;
            case "mult":
                result = this.cols === matrix.rows;
                break;
            default:
                result = false;
                break;
        }

        return result;
    }
}
