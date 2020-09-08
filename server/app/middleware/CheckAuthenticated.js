function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }
    return false;
}