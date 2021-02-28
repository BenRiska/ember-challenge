// api route to calculate potential savings
export default (req,res) => {
    console.log(req.body)
    // check req params are correct
    if(req.body.currentCost && req.body.employeeCount){
        // instantiate values
        const baseEmberCost = 39
        const currentClientCost = req.body.currentCost
        const employeeCount = req.body.employeeCount
        // calculate new cost
        const newEmberCost = baseEmberCost + (employeeCount * 4)
        let savings: number|string = (currentClientCost - newEmberCost) * 12
        // return results
        if(newEmberCost > currentClientCost){
            res.status(200).json({savings: 0})
        } else{
            savings = savings.toFixed(2)
            res.status(200).json({savings})
        }
    } else {
        // return error message
        res.status(404).json({message: "Invalid request."})
    }
}