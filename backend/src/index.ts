import app from './app';
import config from './lib/config';

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
