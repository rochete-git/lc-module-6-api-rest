import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import * as classes from './character-collection.styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

interface Props {
  characterCollection: CharacterEntityVm[];
  onDetails: (id: string) => void;
}

export const CharacterCollectionListComponent: React.FunctionComponent<Props> = (props) => {
  const { characterCollection: characterCollection, onDetails } = props;

  const handleClick = (id: string) => {
    onDetails(id);
  };

  return (
    <div className={classes.root}>
      <h1>List of characters</h1>
    <List component="nav">
      {characterCollection.map((character) => (
        <div key={character.id}>
        <Divider />
        <ListItem
          button
          onClick={() => handleClick(character.id)}
        >
          <ListItemAvatar>
            <Avatar src={character.picture} />
          </ListItemAvatar>
          <ListItemText
            primary={character.name}
            secondary={character.species} />
        </ListItem>
        </div>
      ))}
    </List>
    </div>
  );
};
