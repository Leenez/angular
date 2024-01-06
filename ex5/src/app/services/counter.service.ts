export class Counter {
    inactiveCount: number = 0;
    activeCount: number = 0;

    addActive() {
        this.activeCount++;
        console.log("activated " + this.activeCount);
    }

    addInactive() {
        this.inactiveCount++;
        console.log("inactivated " + this.inactiveCount);
    }
}