let Dog = {
    name: 'Benji',
    getName: function () {
        return this.name
    },
    talk: () => {
        console.log('Woof, woof!');
    }
};

console.log(`${Dog.getName()} says!`);
Dog.talk();