module.exports = (req, res, next) => {
  if (!req.user.admin) {
    return res
      .status(401)
      .json({ message: 'Вы не авторизованы на выполнение этой операции' });
  }
  next();
};
