const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  router.get("/",async (req,res)=>{
    try {
        const catagoryData = await Category.findAll({include:[Product]});
        return res.json(catagoryData)
    } catch(err){
        console.log(err);
        res.status(500).json({
            msg:"an error occurred",
            err:err
        })
    }
})
  // be sure to include its associated Products
});

router.get('/:id', async(req, res) => {
  // find one category by its `id` value
  try{
    const oneCategory = await Category.findByPk(req.params.id,{
        include:[Product]
    });
    if(oneCategory) {
       return res.json(oneCategory)
    } else {
        return res.status(404).json({msg:"no such record"})
    }
}catch(err){
    console.log(err);
    res.status(500).json({
        msg:"an error occurred",
        err:err
    })
}
})
  // be sure to include its associated Products

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
