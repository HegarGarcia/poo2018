class Vector {
    constructor(props = 0) {
        if (typeof props !== 'number' && !(props instanceof Array)) throw new Error('Argumento no es válido');

        if (props instanceof Array) {
            this.arr = props;
            this.length = props.length;
        } else {
            this.arr = Array.from({length: props});
            this.length = props;
        }
    }

    fillZeros() {
        this.arr.fill(0);
    }

    fillOnes() {
        this.arr.fill(1);
    }

    fillRnd(max = 10) {
        this.arr = this.arr.fill(null).map(() => Math.random() * max);
    }

    fillRange(max = 10) {
        this.arr = this.arr.fill(null).map(() => Math.floor(Math.random() * max));
    }

    fillWith(n = 0) {
        this.arr.fill(n);
    }

    sum() {
        return this.arr.reduce((prev, val) => {
            if (typeof val !== 'number') {
                console.error(`Valor ${val} no es un número!`);
                return prev;
            }
            return prev + val
        }, 0);
    }

    sumV(vector) {
        this.isSimilarVector(vector);
        let arr = this.arr.map((val, i) => val + vector.arr[i]);
        return new Vector(arr);
    }

    sumE(e) {
        if (isNan(e)) throw new Error('Valor no es un número');
        let arr = this.arr.map(val => val + e);
        return new Vector(arr);
    }

    subsV(vector) {
        this.isSimilarVector(vector);
        let arr = this.arr.map((val, i) => val - vector.arr[i]);
        return new Vector(arr);
    }

    subsE(e) {
        if (isNan(e)) throw new Error('Valor no es un número');
        let arr = this.arr.map(val => val - e);
        return new Vector(arr);
    }

    multV(vector) {
        this.isSimilarVector(vector);
        let arr = this.arr.map((val, i) => val * vector.arr[i]);
        return new Vector(arr);
    }

    multE(e) {
        if (isNan(e)) throw new Error('Valor no es un número');
        let arr = this.arr.map(val => val * e);
        return new Vector(arr);
    }

    divV(vector) {
        this.isSimilarVector(vector);
        let arr = this.arr.map((val, i) => val / vector.arr[i]);
        return new Vector(arr);
    }

    divE(e) {
        if (isNan(e)) throw new Error('Valor no es un número');
        let arr = this.arr.map(val => val / e);
        return new Vector(arr);
    }

    avg() {
        return this.sum() / this.arr.length;
    }

    max() {
        return Math.max(...this.arr);
    }

    min() {
        return Math.min(...this.arr);
    }

    dot(vector) {
        this.isSimilarVector(vector);
        return this.arr.map((val, i) => val * vector.arr[i]).reduce((acc, val) => acc + val, 0);
    }
    
    norm() {
        return Math.sqrt(this.dot(this));
    }

    angle(vector) {
        this.isSimilarVector(vector);
        let dot = this.dot(vector);
        let normA = this.norm(this);
        let normB = this.norm(vector);
        return Math.acos(dot / (normA * normB));
    }

    distance(vector) {
        this.isSimilarVector(vector);
        
        let result = this.arr.reduce((acc, curr, i) => {
            acc += Math.pow((curr - vector.arr[i]), 2);
            return acc;
        }, 0);

        return Math.sqrt(result);
    }

    isOrthogonal(vector) {
        this.isSimilarVector(vector);
        return this.dot(vector) === 0;
    }

    isSimilarVector(vector) {
        if (!(vector instanceof Vector)) throw new Error('Argumento no es un vector');
        else if (vector.length !== this.arr.length) throw new Error(`La longitud no es ${this.arr.length}`);
    }
}