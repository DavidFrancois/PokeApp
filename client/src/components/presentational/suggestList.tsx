import * as React from 'react';
​
type SuggestListProps = {
  suggestions?: any,
  setFound?: any
}

export default class SuggestList extends React.Component<SuggestListProps> {

  public suggestions = () => {
    return (
      this.props.suggestions.map((match: string) =>
        <li key={match} onClick={() => this.props.setFound(match)}> {match} </li>
      )
    );
  }

  public render() {
    return (
      <div className="offset-md-2 col-md-8">
        <ul>{this.suggestions()}</ul>
      </div>
    );
  }

}
