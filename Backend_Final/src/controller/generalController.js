const { softRemove, softRemoveVendor } = require("../services/generalServies");

const deleteSoftFood = async (req, res) => {
  try {
    const data = await softRemove(req.params.id);

    if (data && +data.EC == 1) {
      return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
      });
    }
    if (data && +data.EC != 1) {
      return res.status(500).json({
        EM: data.EM,
        EC: data.EC,
      });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      message: "Error at controller: " + error.message,
    });
  }
};

const deleteVendor = async (req, res) => {
  try {
    const data = await softRemoveVendor(req.params.id);

    if (data && +data.EC == 1) {
      return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
      });
    }
    if (data && +data.EC != 1) {
      return res.status(500).json({
        EM: data.EM,
        EC: data.EC,
      });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      message: "Error at controller: " + error.message,
    });
  }
};

module.exports = { deleteSoftFood, deleteVendor };
