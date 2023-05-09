import { Configuration, EventsApi } from '';
import fs from 'fs';

const config = new Configuration({
  basePath:
    'https://api.swaggerhub.com/apis/YOUR_USERNAME/YOUR_API_NAME/YOUR_API_VERSION',
});
const eventsApi = new EventsApi(config);

eventsApi
  .getEvents()
  .then((response) => {
    const events = response.body;
    fs.writeFileSync('mock-data.json', JSON.stringify(events));
  })
  .catch((error) => {
    console.error(error);
  });
