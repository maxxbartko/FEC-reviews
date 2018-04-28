import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Reviews from './Reviews';

export default class App extends Component {
  constructor(props) {
    super(props);
    // actual starting state
    // this.state = {
    //   reviews: this.props.reviews,
    //   listings: this.props.listings,
    //   people: this.props.people,
    //   shop: this.props.shop,
    // };
    // fake data starting state
    this.state = {
      reviews: [
        {
          id: 380,
          person: 68,
          shop: 3,
          listing: 666666666,
          body: 'Eum vel molestiae est praesentium. Aut nemo nesciunt provident soluta doloremque nesciunt qui. Consequuntur quia quisquam. Laborum et aut itaque commodi. Qui recusandae cum veritatis doloribus suscipit consequatur enim perspiciatis esse. Occaecati velit omnis qui.\n \rItaque distinctio suscipit. Sunt eligendi et sit sapiente. Aut sapiente tenetur deserunt consectetur provident quae laborum.\n \rDolorum qui cumque expedita. Quia architecto culpa odio repellat porro. Facilis amet praesentium culpa non voluptatibus maiores dolor rerum. Eveniet omnis consequatur.',
          date: '2017-04-01T01:50:17.000Z',
          stars: 2,
        },
        {
          id: 271,
          person: 53,
          shop: 3,
          listing: 666666689,
          body: 'Error ducimus nihil et quia numquam maxime velit rerum veritatis. Rerum odit vitae sed. Quis optio et quaerat repellat ipsa soluta aperiam. Molestiae temporibus adipisci accusamus doloremque ex qui quo dolor. Molestiae illo fugit iste.\n \rPraesentium quia et atque esse aut ad. Qui vel sit dolor tempora deleniti. Minima minus sequi placeat. Cupiditate laboriosam laboriosam quo quia ut doloribus.\n \rNesciunt reprehenderit velit mollitia. In repellat recusandae libero in ipsum facere dolorem at. Itaque atque qui voluptatem sit vero corrupti ipsum voluptatibus eaque. Aspernatur voluptatem qui qui sit non. Voluptas aliquid et eveniet maxime corrupti ut et.',
          date: '2018-03-31T14:17:58.000Z',
          stars: 1,
        },
      ],
      listings: [
        {
          id: 666666666,
          name: 'Managed Unbranded Soft Car',
          photo: 'http://lorempixel.com/640/480',
          shop: 3,
        },
        {
          id: 666666689,
          name: 'Programmable Rustic Frozen Pizza',
          photo: 'http://lorempixel.com/640/480',
          shop: 3,
        },
      ],
      people: [
        {
          id: 68,
          name: 'Janice Reilly',
          photo: 'https://s3.amazonaws.com/uifaces/faces/twitter/justinrhee/128.jpg',
        },
        {
          id: 53,
          name: 'Verner Kozey',
          photo: 'https://s3.amazonaws.com/uifaces/faces/twitter/dcalonaci/128.jpg',
        },
      ],
      shop: {
        id: 3,
        name: 'Krajcik - Jenkins',
        reviews_count: 34,
        avg_stars_out_of_100: 56,
      },
    };
  }

  // componentDidMount() {
  //   fetch(`${window.location.href}listings/666666666/reviews/`)
  //   // 404 error is likely about 6299/6300 ports situation between servers
  //     .then(response => response.json())
  //     .then((data) => {
  //       const [reviews, listings, people, [shop]] = data;
  //       this.setState({
  //         reviews,
  //         listings,
  //         people,
  //         shop,
  //       }).catch(err => console.error`⚠️ ${err}`);
  //     });
  // }

  // stretch goal: post function
  // probably would require a ReviewsForm component

  render() {
    return (
      <div>
        <br /><br />
        <span role="img" aria-label="Skull and Crossbones">
          ☠️　ＥＴＳＹＣＵＴＩＯＮＥＲ　☠️
          <Reviews reviews={this.state.reviews} />
        </span>
      </div>
    );
  }
}

// App.propTypes = {
//   reviews: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     person: PropTypes.number.isRequired,
//     shop: PropTypes.number.isRequired,
//     listing: PropTypes.number.isRequired,
//     body: PropTypes.string.isRequired,
//     date: PropTypes.string.isRequired,
//     stars: PropTypes.number.isRequired,
//   })).isRequired,

//   listings: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
//     photo: PropTypes.string.isRequired,
//     shop: PropTypes.number.isRequired,
//   })).isRequired,

//   people: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
//     photo: PropTypes.string.isRequired,
//   })).isRequired,

//   shop: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
//     reviews_count: PropTypes.number.isRequired,
//     avg_stars_out_of_100: PropTypes.number.isRequired,
//   }).isRequired,
// };
