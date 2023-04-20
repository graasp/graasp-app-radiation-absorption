import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Tooltip, useTheme } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { DEFAULT_THEME_DIRECTION } from '../../../config/constants';
import { toggleSideMenu } from '../../../actions';

const CloseSideMenu = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <Tooltip title={t('Close side menu')} placement="right">
      <IconButton onClick={() => dispatch(toggleSideMenu(false))}>
        {theme.direction === DEFAULT_THEME_DIRECTION ? (
          <ChevronLeftIcon />
        ) : (
          <ChevronRightIcon />
        )}
      </IconButton>
    </Tooltip>
  );
};

export default CloseSideMenu;
