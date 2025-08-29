module.exports = {
  apps: [
    {
      name: 'elite-finance-hub',
      script: 'npx',
      args: 'wrangler pages dev dist --local --ip 0.0.0.0 --port 3000',
      cwd: '/home/user/elite-finance-hub',
      env: {
        NODE_ENV: 'development',
        PORT: 3000,
        ENVIRONMENT: 'development'
      },
      watch: false,
      instances: 1,
      exec_mode: 'fork',
      max_memory_restart: '500M',
      error_file: './logs/app-error.log',
      out_file: './logs/app-out.log',
      log_file: './logs/app.log',
      time: true
    }
  ]
}