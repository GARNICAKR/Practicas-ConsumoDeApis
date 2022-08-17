const {Router}=require('express');
const router=Router();
router.get('/', (req,res)=>{
    res.json({"titulo":"Rest"});
});
module.exports=router;