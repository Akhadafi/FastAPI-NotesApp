from secrets import HARPERBD_PASSWORD, HARPERBD_URL, HARPERBD_USERNAME

import harperdb

db=harperdb.HarperDB(
  url=HARPERBD_URL,
  username=HARPERBD_USERNAME,
  password=HARPERBD_PASSWORD,
)
