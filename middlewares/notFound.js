const notFound=(req,res)=>{
    res.status(404).json({error:"Router Not Found"})
}
export default notFound;