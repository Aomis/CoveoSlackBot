module.exports = {
  def: {
    exec : function (hook, callback) {
      for (int i = 0; i<20;i++)
      {
        callback("munch!");
        
        if (i % 2 == 0)
        {
            callback("lax");
        }
        
        if (i % 3 == 0)
        {
            callback("Munchlax!");
        }
      }
      
    },
    help : function(callback) {
      callback("Prints alot of munch!");
    }
  }
}
