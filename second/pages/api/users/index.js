export default function handler (req,res){
    res.status(200).json({message:'hi'});
}
/*
export default function handler ({query:{id}},res){
    const filtered = users.filter(user=>user.id===id);

    res.status(200).json(filtered);
}*/