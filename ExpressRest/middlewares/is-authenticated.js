/**
 * Middleware qui check l'authentification
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {Function} next
 */
function isAuthenticated(req, res, next) {
  // Connecté en Basic Auth avec toto / titi
  if (req.headers.authorization === 'Basic dG90bzp0aXRp') {
    return next();
  }

  res.statusCode = 401;
  res.json({
    msg: 'You must log first',
  });
}

module.exports = isAuthenticated;
