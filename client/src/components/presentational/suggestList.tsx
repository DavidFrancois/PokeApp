import * as React from 'react';

import './css/suggestList.css';
​
interface ISuggestListProps {
  suggestions?: any,
  setFound?: any
}

interface ISuggestListState {
  match: string;
}

export default class SuggestList extends React.Component<ISuggestListProps, ISuggestListState> {

  public suggestions = () => {
    return (
      this.props.suggestions.map((match: string) =>
        <li key={match}  className="list-group-item list-group-item-action text-center" onClick={() => this.props.setFound(match)}> {match} </li>
      )
    );
  }

  public render() {
    return (
      <ul className="offset-md-2 col-md-8 list-group">
        {this.suggestions()}
      </ul>
    );
  }

}
