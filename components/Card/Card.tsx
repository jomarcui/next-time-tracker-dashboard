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
      <div className="__spacer">&nbsp;</div>
      <div className="__content">
        <div className="__header">
          <div className="__label">{label}</div>
          <div className="__more">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="" src="/images/icon-ellipsis.svg" />
          </div>
        </div>
        <div className="responsive-container">
          <div className="__body">{thisWeek}hrs</div>
          <div className="footer">Last Week - {lastWeek}hrs</div>
        </div>
      </div>
    </CardStyled>
  );
};

export default Card;
