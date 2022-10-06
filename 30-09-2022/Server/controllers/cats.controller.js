let cats = [{name:"Mishka",hungry:true},{name:"Trinity",hungry:true},{name:"Vilzecuts",hungry:true},{name:"Trendy",hungry:true}]


exports.cats_list = (req, res) => {
    res.send(cats);
};

exports.add_cat = (req,res)=>{
    const cat = req.params
    cat.hungry=true
    cats.push(cat)
    res.send(cat)
}

exports.feed_cat = (req,res)=>{
    const {name} =req.params
    cats = cats.map(cat=>{
        if(cat.name === name) {
            cat.hungry = false
            return cat
        }
        return cat
    })
    res.send(cats)
}
exports.feed_all_cats = (req,res)=>{
    cats = cats.map(cat=>{
        cat.hungry = false
        console.log(cat)
        return cat
    })
    res.send(cats)
}
exports.delete_cat_from_list = (req,res)=>{
    const {name} = req.params
    cats = cats.filter(cat=>{
        return cat.name !== name
    })
    res.send(cats)
}