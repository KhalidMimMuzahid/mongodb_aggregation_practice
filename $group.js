// db.test.aggregate([
//     // stage 1
//     {
//         $group: {
//             _id: "$address.country",  // for grouping, _id is mandatoryo
//             count: { $sum: 1 },
//             // studentsName: {$push: "$name"}}}, // for only name field info
//             fullDocs: { $push: "$$ROOT" } //for all info
//         }
//     },
//     // stage 2
//     {
//         $project: {
//             count: 1,
//             "fullDocs.name": 1,
//             "fullDocs.email": 1
//         }
//     }
// ])

db.test.aggregate([
  {
    $group: {
      _id: null,
      totalSalary: { $sum: "$salary" },
      maxSalary: { $max: "$salary" },
      minSalary: { $min: "$salary" },
      averageSalary: { $avg: "$salary" },
    },
  },
  {
    $project: {
      totalSalary: 1,
      maximumSalary: "$maxSalary",
      minmumSalary: "$minSalary",
      averageSalary: 1,
      rangeBetweenMaxAndMin: { $subtract: ["$maxSalary", "$minSalary"] },
    },
  },
]);
