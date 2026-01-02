import student from "../model/StudentModels.js"

const addStudents = async(req, res) => {
    try{
        const data = req.body;
        console.log(data);
        const addeddata = await student.create(data);
        // const addeddata = await student.insertMany(data);
        console.log(addeddata);
        res.status(201).json("data added");
    }
    catch(error){
        res.status(500).json({error: error.message})
    }
};

const getStudents = async(req,res)=>{
    //data which is getting from database
    // let data = {name:"hema",roll:"530"};
    try{
       const data = await student.find();
    //sending the response with status code
    res.status(201).json(data);
    }
    catch{
        res.status(500).json({error: error.message});
    }
}

const getStudentById= async (req,res)=>{
    try{
        const id = req.params.userid;
        const data = await student.findById(id);
        res.status(200).json(data);
    }
    catch(error)
    {
        res.status(500).json({error:error.message});
    }
}

const updateStudents = async(req, res) => {
    try {
        const {id} = req.params;
        const {stdRoll} = req.params;
        const {stdName} = req.params;
        const data = req.body;

        // const updatedData = await student.findByIdAndUpdate({_id:id}, data, {new: true})
        // const updatedData = await student.findOneAndUpdate({stdRoll:stdRoll}, data, {new: true})
        const updatedData = await student.findOneAndUpdate({stdName:stdName}, data, {new: true})
        if(!updatedData) {
            return res.status(404).json({message: "user not existed"});
        }
        res.status(200).json({student: updatedData, message: "student data updated"})
    } catch(error) {
        res.status(500).json({error: error.message});
    }
}

// const updateStudentsStatus = async(req, res) => {
//     try {
//         await student.updateMany(
//             {status: false},
//             {$set: {status:true}}
//         );
//         res.status(200).json({message:"status updated"})
//     }
//     catch(error) {
//         res.status(500).json({error: error.message});
//     }
// }

export{getStudents,addStudents,getStudentById, updateStudents};