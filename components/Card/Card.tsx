import { FC } from 'react';
import { Colors } from '../../enums/colors';
import CardStyled from './Card.styles';

export interface ICard {
  label: string;
  content: any;
}

const Card: FC<ICard> = ({ content, label }) => {
  const backgroundColor = Colors[label.replace(/ +/g, '')];
  const {
    hoursSpent: { lastWeek, thisWeek },
  } = content;

  return (
    <CardStyled backgroundColor={backgroundColor}>
      <div className="__spacer"></div>
      <div className="__content">
        <div className="__header">
          <div className="__label">{label}</div>
          <div className="__more">...</div>
        </div>
        <div className="__body">{thisWeek}hrs</div>
        <div className="footer">Last Week - {lastWeek}hrs</div>
      </div>
    </CardStyled>
  );
};

export default Card;
