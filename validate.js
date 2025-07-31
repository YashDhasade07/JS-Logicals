export default function validate(req,res,next){
    console.log(req.body)
    console.log('------')
    let { date } = req.body
    if(!date){
        res.status(400).json({error: 'date is required'})
    }

    let dob = new Date(date)

    if(isNaN(dob.getTime())){
        res.status(400).json({error: 'date is required in the format YYYY-MM-DD'})
    }

    let today = new Date();

    if(dob> today){
         res.status(400).json({error: 'date cannot be in the future'})
    }

    req.parsedDob = dob
    next()
} 