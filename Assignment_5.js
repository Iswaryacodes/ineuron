//  Assignment No 5
// Description: volume of Cylinder,sphere and cone using classes for each geometric shapes.



// ---------------------------------------Class for Cylinder-------------------------------------------------------------
class Cylinder
{
    constructor(rad,hei)
    {
        this.rad = rad;   //radius of a cylinder
        this.hei = hei;   //height of a cylinder
    }
    getvolume_Cylinder()
    {
        let pi_val=Math.PI.toFixed(4);    //PI value with 4 decimals
        let vol =pi_val*this.rad*this.rad*this.hei;     //formula for volume of a cylinder

        console.log(`The volume of the Cylinder with Radius ${this.rad} and Height ${this.hei} is ${vol} `);
    }
}

// ---------------------------------------Class for Sphere-------------------------------------------------------------
class Sphere
{
    constructor(rad)
    {
        this.rad = rad;   //radius of a sphere        
    }
    getvolume_Sphere()
    {
        let pi_val=Math.PI.toFixed(4);    //PI value with 4 decimals
        let vol =4/3*pi_val*this.rad*this.rad*this.rad;     //formula for volume of a Sphere

        console.log(`The volume of the Sphere with Radius ${this.rad} is ${vol} `);
    }

}

// ---------------------------------------Class for cone-------------------------------------------------------------
class Cone
{
    constructor(rad,hei)
    {
        this.rad = rad;   //radius of a cone
        this.hei = hei;   //height of a cone
    }
    getvolume_Cone()
    {
        let pi_val=Math.PI.toFixed(4);    //PI value with 4 decimals
        let vol =pi_val*this.rad*this.rad*this.hei/3;     //formula for volume of a Cone

        console.log(`The volume of the Cone with Radius ${this.rad} and Height ${this.hei} is ${vol} `);
    }
}
let obj1 = new Cylinder(2,3);
obj1.getvolume_Cylinder();
let obj2 = new Sphere(5);
obj2.getvolume_Sphere();
let obj3 = new Cone(2,3);
obj3.getvolume_Cone();