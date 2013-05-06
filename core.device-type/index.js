module.exports = function setup(options, imports, register) {

  function deviceType(req, res, next) {
    function check_request(req) {
      if (typeof req.device === 'undefined') {
        throw new Error('Missing app.use(device.capture())');
      }
      return true;
    };

    res.locals.is_desktop = function() {
      check_request(req);
      return req.device.type === 'desktop';
    };

    res.locals.is_mobile = function() {
      check_request(req);
      return req.device.type === 'phone' || req.device.type === 'tablet';
    };

    res.locals.is_phone = function() {
      check_request(req);
      return res.locals.is_phone = req.device.type === 'phone';
    };

    res.locals.is_tablet = function() {
      check_request(req);
      return req.device.type === 'tablet';
    };

    res.locals.is_tv = function() {
      check_request(req);
      return req.device.type === 'tv';
    };

    res.locals.is_bot = function() {
      check_request(req);
      return req.device.type === 'bot';
    };

    res.locals.device_type = function() {
      check_request(req);
      return req.device.type;
    };

    next();
  }

  register(null, {
    'device-type': deviceType
  });

};
