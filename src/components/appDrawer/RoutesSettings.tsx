/*
 * ===============================================================================================================
 *                                Copyright 2021, Blue Yonder Group, Inc.
 *                                           All Rights Reserved
 *
 *                               THIS IS UNPUBLISHED PROPRIETARY SOURCE CODE OF
 *                                          BLUE YONDER GROUP, INC.
 *
 *
 *                         The copyright notice above does not evidence any actual
 *                                 or intended publication of such source code.
 *
 * ===============================================================================================================
 */
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useStore } from '../../context/store';

const RouteSettings = (props: Array<any>) => {
  const [activePage, setActivePage] = useState(0);
  const { actions }: any = useStore();
  const history = useHistory();

  const redirect = (index: any, path: string, mfeData: any) => {
    path = path !== 'Home' ? path : '';
    setActivePage(index);
    actions.setactiveTabs(mfeData);
    history.push({
      pathname: '/' + path,
    });
  };

  return props.map((item: any, index: any) => {
    return {
      name: item.mfeDetails.description,
      icon: item.icon,
      active: activePage === index,
      onClick: () => redirect(index, item.routeName, item.mfeDetails),
    };
  });
};

export default RouteSettings;
