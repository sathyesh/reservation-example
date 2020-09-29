import React, { useState, useRef } from 'react';
import { Popover, List, ListItem, ListItemText } from '@material-ui/core';
import { German, English } from './Flags';

const LANGUAGES = [
  { id: 'en', title: 'English' },
  { id: 'de', title: 'Deutsch' }
];

const ANCHOR_ORIGIN = {
  vertical: 'bottom',
  horizontal: 'right'
};

const TRANSFORM_ORIGIN = {
  vertical: 'top',
  horizontal: 'right'
};

const LanguageToggle = ({ language, setlanguage }) => {
  const [open, setopen] = useState(false);
  const anchorEl = useRef();
  const popoverRef = useRef();

  const openPopover = () => setopen(true);

  const closePopover = () => setopen(false);

  const handleClick = id => () => {
    setlanguage(id);
    closePopover();
  };

  return (
    <>
      <div onClick={openPopover} ref={anchorEl}>
        {language === 'de' && <German />}
        {language === 'en' && <English />}
      </div>

      <Popover
        id="language"
        open={open}
        anchorEl={anchorEl.current}
        onClose={closePopover}
        anchorOrigin={ANCHOR_ORIGIN}
        transformOrigin={TRANSFORM_ORIGIN}
        ref={popoverRef}
      >
        <List>
          {LANGUAGES.map(({ id, title }) => (
            <ListItem
              key={id}
              button
              selected={language === id}
              onClick={handleClick(id)}
            >
              <ListItemText primary={title} />
            </ListItem>
          ))}
        </List>
      </Popover>
    </>
  );
};

export default LanguageToggle;
