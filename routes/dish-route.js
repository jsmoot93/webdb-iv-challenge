const router = require("express").Router();
const Dishes = require("../data/helpers/dishes");

router
  .route("/")
  .get(async (req, res) => {
    try {
      const dishes = await Dishes.getDishes();
      res.status(200).json(dishes);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Something went wrong fetching the dishes." });
    }
  })
  .post(async (req, res) => {
    if (!req.body.dishName) {
      res
        .status(400)
        .json({ message: "Please provide a dish name to create." });
    }
    try {
      const dish = await Dishes.addDish(req.body);
      res.status(201).json(dish);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Something went wrong creating a new dish." });
    }
  });

router.route("/:id").get(async (req, res) => {
  try {
    const dish = await Dishes.getDish(req.params.id);
    if (dish) {
      res.status(200).json(dish);
    } else {
      res.status(404).json({ message: "The dish could not be located." });
    }
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong while trying to locate the dish."
    });
  }
});

module.exports = router;