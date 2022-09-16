class Field {
    constructor(size) {
        this.size = size
    }
}


let mtx=[]
for (let i = 0; i < 8; i++) {
    mtx[i] = []
    for (let j = 0; j < 5; j++) {
        mtx[i][j] = " "
    }
}
for (const arr of mtx){
    console.log(arr)
}
