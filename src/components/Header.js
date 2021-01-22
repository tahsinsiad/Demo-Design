import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];

const useStyles = makeStyles((theme) => ({
  toolbar: {
    color: '#fff',
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    color: '#fff',
    flex: 1,
  },
  toolbarSecondary: {
    color: '#fff',
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    color: '#fff',
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { title } = props;

  return (
    <div style={{ width: '100%' }}>
      <div style={{ width: '100%', background: '#000' }}>
        <div style={{ width: '70%', margin: '0 auto' }}>
          <Toolbar
            component="nav"
            variant="dense"
            className={classes.toolbarSecondary}
          >
            {sections.map((section) => (
              <Link
                color="inherit"
                noWrap
                key={section.title}
                variant="body2"
                href={section.url}
                className={classes.toolbarLink}
              >
                {section.title}
              </Link>
            ))}
          </Toolbar>
        </div>
      </div>
      <div style={{ width: '100%', background: '#242424' }}>
        <div style={{ width: '70%', margin: '0 auto' }}>
          <Toolbar className={classes.toolbar}>
            <Typography
              component="h2"
              variant="h5"
              color="inherit"
              align="left"
              noWrap
              className={classes.toolbarTitle}
            >
              {`Walton`}
            </Typography>
            <Button style={{ color: '#fff' }} variant="text" size="small">
              Sign up
            </Button>
            <Button style={{ color: '#fff' }} variant="text" size="small">
              Sign up
            </Button>
            <Button style={{ color: '#fff' }} variant="text" size="small">
              Sign up
            </Button>
            <Button
              style={{ color: '#fff', background: 'blue' }}
              variant="outlined"
              size="small"
            >
              Sign up
            </Button>
          </Toolbar>
        </div>
      </div>
    </div>
  );
}
