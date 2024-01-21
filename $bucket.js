db.test.aggregate([
    // stage 1 a
    {
        $bucket: {
            groupBy: "$age",
            boundaries: [20, 40, 60, 80],
            default: "80 er uporer bura",
            output: {
                count: { "$sum": 1 },
                karaKaraAse: { "$push": "$$ROOT" }
            }
        }
    },


    // stage 2 
    {
        $sort: { count: 1 }
    },


    // stage 3 
    {
        $project: {
            count: 1
        }
    },

    // stage 3 
    {
        $limit: 2
    }
])