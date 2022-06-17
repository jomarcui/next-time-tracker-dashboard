import { FC } from 'react';
import { Colors, Icons } from '../../enums/colors';
import CardStyled from './Card.styles';

export interface ICard {
  label: string;
  content: any;
}

const Card: FC<ICard> = ({ content, label }) => {
  const category = label.replace(/ +/g, '');

  const backgroundColor = Colors[category];
  const backgroundSize =
    category.toLowerCase() === 'exercise' ? 'auto' : '70px';
  const icon = Icons[category];

  const {
    hoursSpent: { lastWeek, thisWeek },
  } = content;

  return (
    <CardStyled
      backgroundColor={backgroundColor}
      backgroundSize={backgroundSize}
      icon={icon}
    >
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
