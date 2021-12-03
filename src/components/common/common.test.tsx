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
import React from 'react';
import { mount, shallow } from 'enzyme';
import { UIModal, UISearchBar, UISnackbar, UIdropdown, UITable, UIupload, UISelectbox } from './index';
import { Avatar, Select } from '@material-ui/core';
import { UITabContainer } from './UITabContainer';
import { Database, SignPlus } from '@jda/lui-common-icon-library';
import { LuiSearchBar } from '@jda/lui-common-component-library';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Test Common components', () => {
  let wrapper: any;

  test('Should render UIModal', () => {
    wrapper = mount(
      <UIModal open={true} title="Create Application" handleClose={() => {return;}} modalActionButtons={() => {return;}} />
    );
    expect(wrapper.exists()).toBe(true);
    wrapper.unmount();
  });

  test('Should render UISearchBar', () => {
    wrapper = shallow(<UISearchBar placeholder={'Search'} setInputText={(arg: any) => {return;}} />);
    wrapper.find(LuiSearchBar).simulate('change', {
      currentTarget: {
        value: 'hgjgjg',
      },
    });
    wrapper.find(LuiSearchBar).simulate('clear');
    expect(wrapper.exists()).toBe(true);
    wrapper.unmount();
  });

  test('Should render UISnackbar', () => {
    wrapper = mount(<UISnackbar open={true} status={'error'} content={'hello World'} handleClose={() => {return;}} />);

    expect(wrapper.exists()).toBe(true);
    wrapper.unmount();
  });

  test('Should render UIdropdown', () => {
    let { getByTestId } = render(
      <UIdropdown
        list={['Logout']}
        dataTestId="targetDropDown"
        handleClickOpen={() => {return;}}
        targetComponent={<Avatar alt={'PM'}>PM</Avatar>}
      />
    );
    const targetDropDown = getByTestId('targetDropDown');
    fireEvent.click(targetDropDown);
    const menuItem = getByTestId('Logout');
    fireEvent.click(menuItem);
    const dropdownMenu = getByTestId('dropdownMenu');
    fireEvent(
      dropdownMenu,
      new MouseEvent('close', {
        bubbles: true,
        cancelable: true,
      })
    );
  });

  test('Should render UITable', () => {
    wrapper = mount(
      <UITable
        data={[]}
        generateColumns={() => [
          {
            title: 'Name',
            field: 'name',
            render: (rowData: any) => <></>,
          },
        ]}
        title={''}
        headerClass={''}
        cardClass={''}
        actionComponent={() => {
          return <></>;
        }}
        isActiveFilter={false}
        paging={true}
      />
    );
    expect(wrapper.exists()).toBe(true);
    wrapper.unmount();
  });

  test('Should render UIupload', () => {
    wrapper = mount(<UIupload setUploadStatus={false} />);
    expect(wrapper.exists()).toBe(true);
    wrapper.unmount();
  });

  test('Should render UITabContainer', () => {
    wrapper = mount(
      <UITabContainer
        title={`Data Models`}
        data={<></>}
        actionIconFront={<Database />}
        variant="h3"
        actionComponent={<SignPlus />}
        id="1a"
        invokeAction={(title: string) => title}
        badge={1}
      />
    );
    expect(wrapper.exists()).toBe(true);
    wrapper.unmount();
  });

  test('Should render UISelectbox', () => {
    wrapper = shallow(
      <UISelectbox list={[{ value: '1', label: 'Chris' }]} default={''} handleChange={(arg: any) => {return;}} />
    );
    wrapper.find(Select).simulate('change', {
      target: {
        value: '1',
      },
    });
    wrapper.unmount();
  });
});
