
   db.ordersData.aggregate([
  {
    $lookup: {
      from: "test",
      localField: "userId",
      foreignField: "_id",
      as: "userData",
    },
  },
])