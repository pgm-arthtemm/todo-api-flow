/**
 * Creating Todo Filter middleware
 */ 

export default (req, resp, next) => {
  if (!req.body.todo) {
    next();
    return false;
  }

  const { description } = req.body.todo;
  let isInclude = (process.env.BADWORDS_FILEPATH).some(word => description.includes(word));
  if (!isInclude) {
    resp.status(406).json({ error: 'This language is not acceptable!' });
  } else {
    next();
  }
};
