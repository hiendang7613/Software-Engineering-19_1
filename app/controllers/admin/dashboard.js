class DashboardController {
    index(req, res) {
      res.render("admin/dashboard", {
        layout: "admin/layout1",
        path: '/dashboard',
        where:'home'
      });
    }
  }
  
  module.exports = new DashboardController();
  