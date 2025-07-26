export const controllerWrapper = (controller) => async (req, res, next) => {
    try {
      await controller(req, res, next);
    } catch(err){
      console.error(err);
  
      if(err.name === 'ZodError'){
        return res.status(400).json({error: `${err.errors[0].path[0]} : ${err.errors[0].message}`});
      }
  
      res.status(500).json({error: 'Internal Server Error, plz retry again later'});
    }
  };