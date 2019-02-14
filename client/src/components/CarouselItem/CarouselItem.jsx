import React, { Component } from 'react';
import styles from './CarouselItem.css';
import Modal from '../Modal/ModalContainer';
import Image from '../Image';
import Stars from '../Stars';
import Love from '../Love';

class Entry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loved: false,
      show: false
    }
    this.handleLove = this.handleLove.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  handleLove(e) {
    this.setState({ loved: !this.state.loved });
  }

  showModal(e) {
    this.setState({ show: !this.state.show });
  }

  render() {
    let { loved } = this.state;
    let loveStatus = styles.love;
    if (loved) {
      loveStatus = styles.loved;
    }

    return (
      <div className={ styles.entry }>
        <div className={ styles.itemContainer1 }>
          <div className={ styles.itemContainer2 }>
            <div className={ styles.itemContainer3 }>
              <Image image={ this.props.image } />

              <button
              type='button'
              className={ styles.moreInfo }
              onClick={ this.showModal }>
                Quick Look
              </button>
              <Modal
              onClose={ this.showModal }
              loved={ this.state.loved }
              handleLove={ this.handleLove }

              show={ this.state.show }
              props={ this.props }
              name={ this.props.name }
              category={ this.props.category }
              size={ this.props.size }
              description={ this.props.description }
              sku={ this.props.sku }
              stars={ this.props.stars }
              reviews={ this.props.reviews }
              badge={ this.props.badge }
              loves={ this.props.loves }
              exclusive={ this.props.exclusive }
              online={ this.props.online }
              limited={ this.props.limited }
              free={ this.props.free }
              price={ this.props.price }
              image={ this.props.image }
              />

              <div className={ styles.loveContainer }>
                <button
                className={ styles.loveButton }
                onClick={ this.handleLove }>
                  <Love loved={ this.state.loved } />
                </button>
              </div>
            </div>

            <div
            className={ styles.badgeContainer }
            style={ this.props.badge ? { opacity: 1 } : { opacity: 0 } }>
              <div className={ styles.badge }>New</div>
            </div>

            <div className={ styles.name }>
              <span className={ styles.category }>
                {this.props.category}
              </span>
              <br />
              <span>
                {this.props.name}
              </span>
              <div className={ styles.price }>
                {this.props.price}
              </div>
            </div>

            <div className={ styles.starContainer }>
              <Stars stars={ this.props.stars }/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Entry;