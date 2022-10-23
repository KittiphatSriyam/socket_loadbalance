module.exports = {
    apps : [{
      name   : "api 3001",
      script : "index.js",
      env_production: {
        NODE_ENV: "production",
      
     },
     env : {
        PORT: 3001
     },
     exec_mode : 'cluster',
     watch: true
    },
    {
        name   : "api 3002",
        script : "index.js",
        env_production: {
          NODE_ENV: "production",
        
       },
       env : {
          PORT: 3002
       },
       exec_mode : 'cluster',
       watch: true
      }]
  }