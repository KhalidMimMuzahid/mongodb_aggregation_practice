db.test.aggregate([
        {$match: {gender: "Male", age:{$lt: 50}}},
        {$addFields: {course: "Next level web development", eduTech: "Programming Hero"}},
        {$project: {course:1, eduTech: 1, name:1}},
        {$merge: "test"}
        // {$out: "selected collection"}
    ])