const ngo = require("../models/NGO");

const router = require("express").Router();

router.get("/getAll", async (req, res) => {
  const options = {
    // sort returned documents in ascending order
    sort: { createdAt: 1 },
    // Include only the following
    // projection : {}
  };

  const cursor = await ngo.find(options);
  if (cursor) {
    res.status(200).send({ success: true, data: cursor });
  } else {
    res.status(200).send({ success: true, msg: "No Data Found" });
  }
});

router.get("/getOne/:getOne", async (req, res) => {
  const filter = { _id: req.params.getOne };

  const cursor = await ngo.findOne(filter);
  console.log(cursor);
  if (cursor) {
    res.status(200).send({ success: true, data: cursor });
  } else {
    res.status(200).send({ success: true, msg: "No Data Found" });
  }
});

router.post("/save", async (req, res) => {
  const newngo = ngo({
    name: req.body.name,
    area:req.body.area,
    contact:req.body.contact,
    imageURL: req.body.imageURL,
  });
  try {
    const savedngo = await newngo.save();
    res.status(200).send({ ngo: savedngo });
  } catch (error) {
    res.status(400).send({ success: false, msg: error });
  }
});

router.put("/update/:updateId", async (req, res) => {
  const filter = { _id: req.params.updateId };
  const options = {
    upsert: true,
    new: true,
  };
  try {
    const result = await ngo.findOneAndUpdate(
      filter,
      {
        name: req.body.name,
        contact:req.body.contact,
        imageURL: req.body.imageURL,
      },
      options
    );
    res.status(200).send({ ngo: result });
  } catch (error) {
    res.status(400).send({ success: false, msg: error });
  }
});

router.delete("/delete/:deleteId", async (req, res) => {
  const filter = { _id: req.params.deleteId };

  const result = await ngo.deleteOne(filter);
  if (result.deletedCount === 1) {
    res.status(200).send({ success: true, msg: "Data Deleted" });
  } else {
    res.status(200).send({ success: false, msg: "Data Not Found" });
  }
});

module.exports = router;
