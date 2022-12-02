import { Payload } from "./Payload";

export class Rocket{
 name: string;
 totalCapacityKg: number;
 cargoItems: [];
 astronauts: [];
 constructor(name: string, totalCapacityKg: number){
    this.name = name;
    this.totalCapacityKg = totalCapacityKg;
    this.cargoItems = [];
    this.astronauts = [];
 }

    sumMass(items: Payload[]): number{
        let cargoMass: number = 0;
        let astronautMass:  
    } 

    currentMassKg(): number{
        this.sumMass
    }
    canAdd(item: Payload): boolean{
        if(this.currentMassKg() + item.massKg <= this.totalCapacityKg){
            return true;
        }
        else{
            return false;
        }   
    }
    addCargo(cargo: Cargo): boolean{
        this.canAdd()
        if(){

        }
    }

}