/**
 * homePAge
 * GET /
 */

exports.homePage = async (req, res) => {
  const locals = {
    title: "BLoc Notes",
    description: "Bloc note libre",
  };
  res.render("index", {
    locals,
    layout: "../views/layouts/front-page",
  });
};

/**
 * about
 * GET /
 */

exports.about = async (req, res) => {
  const locals = {
    title: "About BLoc Notes",
    description: "Bloc note libre",
  };
  res.render("about", locals);
};
