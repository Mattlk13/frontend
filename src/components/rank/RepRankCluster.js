import React from 'react';
import Relay from 'react-relay';
import TallyModal from '../modal/TallyModal';
import ReportCard from '../reps/ReportCard';

class RepRankCluster extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cardActive: false,
      animate: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ animate: true })
    }, 300);
  }

  getPhotoSource = () => {
    let { photo_url } = this.props;
    if (!!photo_url && photo_url.toLowerCase() !== 'none') {
      return `https://www.${photo_url}`;
    } else {
      return './img/bio_images/placeholder.png';
    }
  }

  getBarFill = (category) => {
    let { animate } = this.state;
    if (!animate) {
      return 0;
    }
    let { percent_at_work, percent_votes, sponsor_percent } = this.props;
    if (category === 'attendance') return percent_at_work * 100;
    if (category === 'participation') return percent_votes * 100;
    if (category === 'efficacy') return sponsor_percent * 100;
    return false;
  }

  getShortParty = (party, state) => {
    if (party === 'Democratic') return <span className="democrat-blue">{state} Democrat</span>;
    if (party === 'Independent') return <span className="independent-purple">{state} Independent</span>;
    if (party === 'Republican') return <span className="republican-red">{state} Republican</span>;
    return false;
  }

  render() {
    let { bioguide_id, name, party, state, category, days_at_work, total_work_days, percent_at_work, rep_sponsor, sponsor_percent, max_sponsor, percent_votes, rep_votes, total_votes, rank, chamber } = this.props;
    let fullName = name ? name.split(',').reverse().join().replace(/\,/g,' ') : 'John Doe';
    return (
      <div className="rep-rank-cluster-wrap clickable" onClick={() => this.setState({ cardActive: true })}>
        <div className="rep-rank-headshot" style={{background: `url(${this.getPhotoSource()}) no-repeat center 10% / cover`}} />
        <div className="rep-rank-stack">
          <div className="rep-rank-stats">
            <p className="rep-rank-name">{fullName} &middot; {this.getShortParty(party, state)}</p>
          </div>
          <div className="rep-rank-stats-bar">
            <div className="rep-rank-stats-fill" style={{ width: `${this.getBarFill(category)}%`}} />
          </div>
        </div>
        <TallyModal key={`rank_reportcard_${bioguide_id}`} contentLabel={`${fullName} modal`} className={`rep-card-wrap`} isOpen={this.state.cardActive}>
          <ReportCard {...this.props} close={() => this.setState({ cardActive: false })} chamber={chamber} />
        </TallyModal>
      </div>
    );
  }
}

export default Relay.createContainer(RepRankCluster, {
  fragments: {
    data: () => Relay.QL`
      fragment on Data {
        id
        ${ReportCard.getFragment('data')}
      }
    `
  }
});
