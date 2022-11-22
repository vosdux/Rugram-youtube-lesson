const obj = {
    a: function() {
        console.log(this)
    },
    b: () => {
        console.log(this)
    }
};

obj.a();
obj.b();