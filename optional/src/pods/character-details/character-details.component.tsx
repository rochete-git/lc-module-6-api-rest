import * as React from 'react';
import { CharacterDetails } from './character-details.vm';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar/Avatar';
import IconButton from '@material-ui/core/IconButton/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import * as classes from './character-details.styles';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import SaveAltIcon from '@material-ui/icons/SaveAlt';

interface Props {
  characterDetails: CharacterDetails;
  onSaveComment: (id: number, comment: string) => void;
}

export const CharacterDetailsComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterDetails: characterDetails, onSaveComment } = props;
  const [expanded, setExpanded] = React.useState(false);
  const [comment, setComment] = React.useState(characterDetails.comment);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleSaveCommentClick = () => {
    onSaveComment(characterDetails.id, comment)
  };

  return (
    <div className={classes.root}>
      <Card>
        <CardHeader
          avatar={
            <Avatar aria-label="Character">{characterDetails.name[0]}</Avatar>
          }
          title={characterDetails.name}
          subheader={`Created: ${characterDetails.created.substring(0, 10)}`}
        />
        <CardContent>
          <div className={classes.content}>
            {characterDetails.image ? (
              <CardMedia
                image={characterDetails.image}
                title={characterDetails.name}
                style={{ height: 0, paddingTop: '56.25%' }}
              />
            ) : (
              <CircularProgress />
            )}
            <Typography variant="subtitle1" gutterBottom>
              {characterDetails.description}
              {
                <a href={characterDetails.origin.url}>
                  {characterDetails.origin.name}
                </a>
              }
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Current location:
              {
                <a href={characterDetails.location.url}>
                  {characterDetails.location.name}
                </a>
              }
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Comment:
              <TextField
                multiline
                fullWidth
                defaultValue={characterDetails.comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </Typography>
          </div>
        </CardContent>
        <CardActions>
          Episodes:
          <IconButton
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="Show episodes"
          >
            <ExpandMoreIcon />
          </IconButton>
          Save:
          <IconButton onClick={handleSaveCommentClick}>
          <SaveAltIcon />
        </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <List component="nav">
              {characterDetails.episode.map((episode) => (
                <ListItemText
                  key={episode}
                  primary={<a href={episode}>{episode}</a>}
                />
              ))}
            </List>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};
