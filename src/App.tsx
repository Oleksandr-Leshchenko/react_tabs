import React from 'react';
import './App.scss';

import { Tabs } from './Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

interface State {
  myTabs: Tab[],
  selectedTabId: string,
}

class App extends React.Component<{}, State> {
  state: State = {
    myTabs: tabs.map(tab => ({ ...tab })),
    selectedTabId: 'tab-1',
  };

  onTabSelected = (id: string) => {
    this.setState({ selectedTabId: id });
  };

  render() {
    const { myTabs, selectedTabId } = this.state;

    // eslint-disable-next-line
    console.log(selectedTabId);

    return (
      <>
        <div className="App">
          <h1>
            Selected tab is
            &nbsp;
            {selectedTabId}
          </h1>
          <Tabs
            tabs={myTabs}
            selectedTabId={selectedTabId}
            onTabSelected={this.onTabSelected}
          />
        </div>
      </>
    );
  }
}

export default App;
