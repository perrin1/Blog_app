
/**
 * dashboard
 * GET /
 */

exports.dashboard = async (req, res) => {
    const locals = {
      title: "Dashboard",
      description: "Bloc note libre",
    };
    res.render("dashboard/index", {
      locals,
      layout: "../views/layouts/dashboard",
    });
  };

 