import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';

import DiaryList from './views/Diary/List';

const DiaryAppNavigator = StackNavigator({
  List: {screen: DiaryList}
});

export default () => <DiaryAppNavigator />;
