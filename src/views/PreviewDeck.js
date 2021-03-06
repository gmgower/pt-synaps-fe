import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import theming from 'styled-theming';
import {deleteCard, getAllCardsForDeck} from '../actions/cardActions.js';
import {
  PreviewDeckCards, SearchBar, SynapsButton, TitleText,
} from '../components';
import {
  APP_PATHS, APP_VIEW_DESKTOP, APP_VIEW_MOBILE, THEME
} from '../utilities/constants.js';
import {Icon} from 'antd';
import {
  THEMING_VALUES, THEMING_VARIABLES,
} from '../customHooks/themingRules.js';
import Fuse from 'fuse.js';

const options = {
  // isCaseSensitive: false,
  // includeScore: false,
  // shouldSort: true,
  // includeMatches: false,
  // findAllMatches: false,
  // minMatchCharLength: 1,
  // location: 0,
  // threshold: 0.6,
  // distance: 100,
  // useExtendedSearch: false,
  keys: [
    'question',
    'answer'
  ]
};

/**
 * Preview Deck
 * @category Views
 * @component
 * @example return (<PreviewDeck />);
 */
export const PreviewDeck = ({getHooks}) => {
  // @type CardState

  const [searchTerm, setSearchTerm] = useState('');

  const {
    cardsState,
    pathPushedState,
    dispatch,
    usersState,
    changePath,
    height,
    appView,
    setSelectingCards, deleteClicked, setDeleteClicked
  } = getHooks('PreviewDeck');
  const deck = pathPushedState;

  const [cardsSelected, setCardsSelected] = useState({});
  const [selectMode, setSelectMode] = useState(false);

  useEffect(() => {

    if (!selectMode) {
      setDeleteClicked(false);
      return;

    }
    if (Object.values(cardsSelected).length > 0) {
      Object.values(cardsSelected).forEach(card => {
        dispatch(deleteCard(card, usersState.user.uid));
      });
    }
    setDeleteClicked(false);
  }, [deleteClicked]);

  useEffect(() => {
    if (pathPushedState === undefined) {
    } else {
      dispatch(
        getAllCardsForDeck(pathPushedState.deck_id, usersState.user.uid)
      );
    }
  }, [pathPushedState]);

  const cardClicked = card => {
    if (!selectMode) {
      return;
    }
    if (!!cardsSelected[card.card_id]) {
      delete cardsSelected[card.card_id];
      setCardsSelected({...cardsSelected});
    } else {
      setCardsSelected({...cardsSelected, [card.card_id]: card});
    }
  };

  const unSelected = () => {
    if (selectMode) {
      setCardsSelected([]);
    }
    setSelectMode(!selectMode);
    setSelectingCards(!selectMode);

  };

  const search = e => {
    setSearchTerm(e.target.value);
  };

  const getCards = () => {
    if (cardsState && cardsState.cards) {
      const cards = cardsState.cards.filter(
        card => card.deck_id === deck.deck_id);

      if (searchTerm !== '') {
        const fuse = new Fuse(
          cards,
          options
        );
        const decks = fuse.search(searchTerm);
        console.log(cards);
        return decks;

      } else {
        return cards;
      }
    }
    return [];
  };

  return (
    <StyledPreviewDeck data-testid={'preview-deck-container'} heigth={height}>

      <DeckDisplayContainer>
        <Container className={'container'}>
          <TopContainer className={'top-container'}>
            <BackArrow>
              <StyledIconLeft type="left"/>
              <p onClick={() => changePath(APP_PATHS.DASHBOARD_PATH)}>Back</p>
            </BackArrow>

            <SearchContainer className={'search-container'}>
              <SearchBar
                height={'23px'}
                borderRadius={'14px'}
                onChange={search}
              />
            </SearchContainer>
            <Selected selected={selectMode} onClick={unSelected}>
              {selectMode === false ? 'Select' : 'Cancel'}
            </Selected>
          </TopContainer>
          <LeftContainer>
            <TitleText
              text={(pathPushedState && pathPushedState.deck_name) || 'Preview'}
            />
            {appView === APP_VIEW_DESKTOP && <StudyButton
              onClick={() => changePath(APP_PATHS.QUIZ_MODE, pathPushedState)}
              height={'54px'}
              width={'264px'} text={'Study Deck'}
              type={'secondary'}/>}
          </LeftContainer>

        </Container>
        <StyledPreviewDeckHolder class={'deck-holder'}>
          <PreviewDeckCards cardType={'card'} key={0}
                            getHooks={getHooks}
          />
          {getCards().map(
            card => {
              if (card['item']) {
                card = card['item'];
              }
              return <PreviewDeckCards onClick={() => cardClicked(card)}
                                       getHooks={getHooks} cardType={'card'}
                                       key={card.card_id}
                                       selected={!!cardsSelected[card.card_id]}
                                       card={card}/>;
            })}
        </StyledPreviewDeckHolder>
      </DeckDisplayContainer>
      {appView === APP_VIEW_MOBILE && <StudyButton
        onClick={() => changePath(APP_PATHS.QUIZ_MODE, pathPushedState)}
        height={'73px'} width={'90%'} text={'Study Deck'}
        type={'secondary'}/>}
    </StyledPreviewDeck>
  );
};

const DeckDisplayContainer = styled.div`
overflow-y: scroll;

  /* width */
::-webkit-scrollbar {
display: none;
}
`;

const BackArrow = styled.div`
display: flex;
`;

const LeftContainer = styled.div`
display: flex;
flex-direction: column;
width: ${props => props.theme.appView === APP_VIEW_DESKTOP ? '50%' : '100%'};
order: ${props => props.theme.appView === APP_VIEW_DESKTOP ? '1' : '2'};
`;

const Container = styled.div`
display: flex;
flex-direction: ${props => props.theme.appView === APP_VIEW_DESKTOP ? 'row' :
  'column'
};

  /* width */
::-webkit-scrollbar {
display: none;
}
`;

const Selected = styled.p`
  color: ${props => (props.selected === true ? '#14E59E' : '#000')};
  margin-right: 9%;
`;

const Blur = styled.div`
  position: absolute;
  top: -80px;
  min-width: 100vw;
  height: 80px;
  background-image: linear-gradient(transparent, #ffffff8c);
`;

const StudyButton = styled(SynapsButton)`
box-sizing: border-box;
align-self: ${props => props.theme.appView === APP_VIEW_DESKTOP ? 'flex-start' :
  'center'};
border-radius: ${props => props.theme.appView === APP_VIEW_DESKTOP ? '33px' :
  '5px'};
margin-top: 20px;
margin-bottom: 20px;
margin-left: ${props => props.theme.appView === APP_VIEW_DESKTOP ? '9%;' :
  '0'};
  > span {
  margin-bottom: 20px;
  margin-top:15px;
  font-weight: bold;
  color: white;
  font-size:${props => props.theme.appView === APP_VIEW_DESKTOP ? '24px' :
  '32px'};
  }

`;

const TopContainer = styled.div`
display: flex;
flex-direction: ${props => props.theme.appView === APP_VIEW_DESKTOP ? 'row' :
  'row'};
font-size: 12px;
width: ${props => props.theme.appView === APP_VIEW_DESKTOP ? '50%' : '100%'};
justify-content: center;
align-items: center;
margin-top: 15px;
order: ${props => props.theme.appView === APP_VIEW_DESKTOP ? '2' : '1'};
`;

const StyledIconLeft = styled(Icon)`
  margin-right: 9%;
`;

const SearchContainer = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.appView === APP_VIEW_DESKTOP ? '50%' :
  '100%'};
`;

const previewDeckHeight = theming(THEMING_VARIABLES.FOOTER, {
  [THEMING_VALUES.VISIBLE]: window.innerHeight - THEME.navBarTopHeight + 'px',
  [THEMING_VALUES.HIDDEN]:
  window.innerHeight - THEME.navBarTopHeight - 95 + 'px',
  [THEMING_VALUES.HIDDEN]:
  (window.innerHeight - THEME.navBarTopHeight - 50) + 'px',
});

const marginBottom = theming(THEMING_VARIABLES.FOOTER, {
  [THEMING_VALUES.VISIBLE]: THEME.footerHeight + 20 + 'px',
  [THEMING_VALUES.HIDDEN]: '10px',
});

const StyledPreviewDeck = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  max-width: 1140px;
  height: ${previewDeckHeight};
  width: 100%;
  border-radius: ${props => props.theme.appView === APP_VIEW_DESKTOP ? '10px' :
  '0px'};
  padding-bottom: ${marginBottom};
  background: ${props => props.theme.themeState.navBarLight};
  margin:  ${props => props.theme.appView === APP_VIEW_DESKTOP ?
  '50px auto 0 auto' :
  '0 auto'};
  
    /* width */
::-webkit-scrollbar {
display: none;
}
`;

const StyledPreviewDeckHolder = styled.div`
  overflow-y: scroll;
  max-height: 100%;
  min-height: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-bottom: 150px;
  
    /* width */
::-webkit-scrollbar {
display: none;
}

`;

