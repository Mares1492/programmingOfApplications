
function sum(a,b){
    return console.log(a+b)
}

const sum2 = (a,b)=>{
    return console.log(a+b)
}

const sum3 = (a,b) => console.log(a+b)

const sum4 = a => b => console.log(a+b)

function sumA(a) {
    return b => c => console.log(`${a} + ${b} = ${a+b} != ${c}`)
}

const array = [1,3,"a",8,"b","c",32]

const fun = () => {
    console.log(array.map(e=>`new-${e}`))
    console.log(array.filter(e=>parseInt(e)))
    console.log(array.reduce((a,b)=>a+b))

}
//sum()
//sum2()
//sum3()
//sum4()
//sumA()
//fun()

let tree = {
    value:254,
    left:{
        value:0,
        right:{
            value:3,
            right:{
                value:1,
            }
        },
        left:{
            value:87,
        }
    },
    right:{
        value: 31,
        left: {
            value:93,
            left:{
                value:8,
                right: {
                    value:11,
                    left:{
                        value:33,
                        right:{
                            value:15,
                            right:{
                                value:2,
                                right:{
                                    value:1,
                                }
                            }
                        }
                    },
                    right:{
                        value:1024,
                        right:{
                            value:51,
                            left:{
                                value:-3,
                            }
                        }
                    }
                },
                left:{
                    value:5
                }
            }
        },
        right:{
            value: 7
        }
    }
}

const getValue = (tree) => {
    if (tree.right&&tree.left){
        return getValue(tree.right) + getValue(tree.left) + tree.value
    }
    if (tree.right){
        return getValue(tree.right) + tree.value
    }
    if (tree.left){
        return getValue(tree.left) + tree.value
    }
    return tree.value
}

console.log(getValue(tree))