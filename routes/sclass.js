/* GET users Teachers Listing. */
exports.assignclass = function(req, res){
  //res.send('Welcome to Teachers View');
  res.render('sclass', { title: 'School Management - Assign Teachers' });
  res.redirect('/sclass');
};
