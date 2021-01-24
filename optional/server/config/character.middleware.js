const characterMiddleware = (req, res, next) => {
  if (req.method === 'POST') {
    req.body = {
      ...req.body,
      thumbNailUrl: '/thumbnails/new-hotel.jpg',
    };
  }
  next();
};

module.exports = (req, res, next) => {
  if (req.path === '/character/1') {
    characterMiddleware(req, res, next);
    console.log("JSON SERVER IN")
  } else {
    next();
  }
};
