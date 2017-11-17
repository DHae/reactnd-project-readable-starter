import * as React from "react";
import Typography from 'material-ui/Typography';

interface NotFoundProps {
}

const Notfound = (props: NotFoundProps) => (
  <div>
    <Typography type="display4" gutterBottom align="center">
      404
    </Typography>
    <Typography type="subheading" gutterBottom align="center">
      Oops, this does not seem like the page you are looking for.
    </Typography>
  </div>
);

export default Notfound;