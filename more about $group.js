// db.test.aggregate([
//     { $unwind: "$friends" },

//     // stage 2
//     {
//         $group: {
//             _id: "$friends",
//             total: { $sum: 1 }
//         }
//     }
// ])



db.test.aggregate([
        //stage 1
        {
            $unwind: "$interests"
        },
        {
            $group: { _id: "$age", total: {$sum:1}, interestsPerAge: {$push: "$interests"}}
        }
    ])