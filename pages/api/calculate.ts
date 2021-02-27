// api route to calculate potential savings
export default (req,res) => {
    // check req params are correct
    if(req.body.currentCost && req.body.employeeCount){
        // instantiate values
        const baseEmberCost = 39
        const currentClientCost = req.body.currentCost
        const employeeCount = req.body.employeeCount
        // calculate new cost
        const newEmberCost = baseEmberCost + (employeeCount * 4)
        const savings = currentClientCost - newEmberCost
        // return results
        if(newEmberCost > currentClientCost){
            res.status(200).json({savings: 0})
        } else{
            res.status(200).json({savings})
        }
    } else {
        // return error message
        res.status(404).json({message: "Invalid request."})
    }
}