class Dimension{
    a:number;

    me(abc:number){
        this.a = abc;
        console.log(this.a);
        return this.a;
    }
}

const hi = new Dimension();
hi.me(12);
